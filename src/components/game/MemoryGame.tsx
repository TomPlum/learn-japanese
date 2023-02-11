import React, { useEffect, useRef, useState } from "react"
import { ButtonGroup, Col, Container, Row } from "react-bootstrap"
import Timer from "./Timer"
import LifeDisplay from "./LifeDisplay"
import QuitButton from "../ui/buttons/QuitButton"
import GameResult from "../../domain/game/GameResult"
import { GameFinishReason } from "../../domain/game/GameFinishReason"
import CountDown from "./CountDown"
import QuestionType from "../../domain/game/QuestionType"
import SessionProgressBar from "../ui/SessionProgressBar"
import SubmitButton from "../ui/buttons/SubmitButton"
import HintButton from "./HintButton"
import SkipButton from "../ui/buttons/SkipButton"
import ConfirmModal from "../ui/ConfirmModal"
import ScoreDisplay from "../ui/display/ScoreDisplay"
import { Learnable } from "../../domain/learn/Learnable"
import GameSettings from "../../domain/session/settings/game/GameSettings"
import ExclusionFilter from "../../filters/learnable/ExclusionFilter"
import Arrays from "../../utility/Arrays"
import TextQuestion from "./questions/TextQuestion"
import ChoiceQuestion from "./questions/ChoiceQuestion"
import MatchQuestion from "./questions/MatchQuestion"
import finish from "../../sound/finish.wav"
import success from "../../sound/correct.wav"
import wrong from "../../sound/wrong.wav"
import VolumeController from "../ui/VolumeController"
import AnswerFilterRegistry from "../../domain/session/AnswerFilterRegistry"
import styles from "../../styles/sass/components/game/MemoryGame.module.scss"
import { useTranslation } from "react-i18next"

export interface GameQuestionProps {
  hidden: boolean
  isValid: (valid: boolean) => void
}

export interface MemoryGameProps {
  data: Learnable[]
  settings: GameSettings
  onFinish: (result: GameResult) => void
  sessionKey?: string
}

export type MemoryGameQuestion = {
  isCorrect: () => boolean
}

/**
 * The core component for driving game logic.
 * Encapsulates logic for game answers, timers, lives, hints and score.
 * The questions are orchestrated in here, but their logic is encapsulated
 */
const MemoryGame = (props: MemoryGameProps) => {
  const { data, settings, onFinish } = props

  const timerRef = useRef<Timer>(null)
  const countdownRef = useRef<CountDown>(null)
  const questionRef = useRef<any>(null) // TODO: Can we type as GameQuestion here?

  /**
   * Retrieves the next question.
   *
   * The first element in the tuple is the next question. This is an array
   * type as there can be multiple data objects for a choice or match question.
   *
   * The second element in the tuple is an array of all the remaining
   * data objects for future questions.
   *
   * If the current type of question requires multiple correct question options
   * (I.e. a match question) - then multiple questions are returned as part of the
   * "current question" array. If no quantity is provided, then only 1 is returned.
   *
   * @param data The pool of questions.
   * @return tuple The first question(s) and then the remaining.
   */
  const getNextQuestion = (data: Learnable[]): [Learnable[], Learnable[]] => {
    const correctAnswerQuantity = settings.question.quantity
    const quantity = !correctAnswerQuantity || correctAnswerQuantity === 0 ? 1 : correctAnswerQuantity
    return Arrays.getRandomObjects(data, quantity)
  }

  const { t } = useTranslation("translation", { keyPrefix: "memory-game" })

  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [paused, setPaused] = useState(false)
  const [isQuitting, setIsQuitting] = useState(false)
  const [failedToAnswer, setFailedToAnswer] = useState(0)
  const [lives, setLives] = useState(settings.lives.quantity)
  const [hints, setHints] = useState(settings.hints.quantity)
  const [hasValidAnswer, setHasValidAnswer] = useState(false)
  const [wrongAnswers, setWrongAnswers] = useState<Learnable[]>([])
  const [firstQuestion, firstRemainingQuestions] = getNextQuestion(data)
  const [hasExhaustedQuestions, setHasExhaustedQuestions] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(new Set<Learnable>())
  const [hasUsedHintThisQuestion, setHasUsedHintThisQuestion] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState<Learnable[]>(firstQuestion)
  const [remainingQuestions, setRemainingQuestions] = useState<Learnable[]>(firstRemainingQuestions)

  useEffect(() => {
    return () => {
      reset()
    }
  }, [])

  useEffect(() => {
    if (settings.lives.enabled && lives === 0) {
      onFinish(getGameResult(false, GameFinishReason.NO_LIVES_REMAINING))
    }
  }, [lives])

  const getQuestion = () => {
    const questionField = settings.question.questionField
    const answerField = settings.question.answerField

    const currentQuestionID = currentQuestion.map((q) => q.getUniqueID()).join("-")

    // TODO: Extract into a QuestionRegistry component (Maybe Strategy pattern?)
    switch (settings.question.type) {
      case QuestionType.TEXT: {
        const question = currentQuestion[0].getFieldValues(questionField)[0]
        const answers = currentQuestion[0].getFieldValues(answerField)

        return (
          <TextQuestion
            hidden={paused}
            ref={questionRef}
            answers={answers}
            question={question}
            key={currentQuestionID}
            answerField={answerField}
            isValid={handleAnswerValidity}
          />
        )
      }
      case QuestionType.CHOICE: {
        // What the user is going to be asked. Usually just a single string, but some kana have multiple romaji.
        // Also, what the expected answer is going to be. For a choice question, it's only ever going to be one.
        const question = currentQuestion[0]

        // What wrong options will be presented? Takes the answer filter from the settings and excludes the question.
        // We then filter our Learnable data and retrieve n options. Then we map chosen answer fields for them.
        const answerFilter = AnswerFilterRegistry.getFilter(settings.question.answerFilterId)
        const chain = answerFilter(question).withFilter(new ExclusionFilter(question))
        const wrong = Arrays.getRandomElements(chain.execute(data), settings.question.cards - 1)
        const wrongAnswerOptions = wrong.map((answer: Learnable) => answer.getFieldValues(answerField)[0])

        return (
          <ChoiceQuestion
            hidden={paused}
            ref={questionRef}
            question={question}
            key={currentQuestionID}
            answerField={answerField}
            wrong={wrongAnswerOptions}
            questionField={questionField}
            isValid={handleAnswerValidity}
          />
        )
      }
      case QuestionType.MATCH: {
        const questionData = new Map(
          currentQuestion.map((data) => {
            const question = data.getFieldValues(questionField)[0]
            const answer = data.getFieldValues(answerField)[0]
            return [question, answer]
          })
        )

        return (
          <MatchQuestion
            hidden={paused}
            ref={questionRef}
            data={questionData}
            key={currentQuestionID}
            isValid={handleAnswerValidity}
          />
        )
      }
    }
  }

  const answerQuestion = () => {
    if (questionRef.current?.isCorrect()) {
      //Play the success sound effect
      getAudio(success)
        .play()
        .catch(e => {
          console.log("Failed to play \"success sound effect\"", e)
        })

      //Add the current question to the correct answers set.
      currentQuestion.forEach((question) => correctAnswers.add(question))
      setCorrectAnswers(correctAnswers)

      //If we're out of questions...
      if (remainingQuestions.length === 0) {
        //Play the finish sound
        getAudio(finish)
          .play()
          .catch(e => {
            console.log("Failed to play \"finished sound effect\"", e)
          })

        //Stop the timer / countdown.
        timerRef.current?.stop()

        //Set the questions as exhausted and ensure paused is false.
        setPaused(false)
        setHasExhaustedQuestions(true)

        //Notify the consuming parent of the game ending and pass data for results screen.
        onFinish(getGameResult(true, GameFinishReason.EXHAUSTED_QUESTIONS))
      } else {
        advanceNextQuestion()
      }
    } else {
      //Play the wrong sound effect
      getAudio(wrong)
        .play()
        .catch(e => {
          console.log("Failed to play \"wrong sound effect\"", e)
        })


      //If the question was answered incorrectly, update the lives and wrong answer pool.
      setStreak(0)
      setWrongAnswers(wrongAnswers.concat(currentQuestion))
      setLives(settings.lives.enabled && !settings.time.countdown ? lives - 1 : lives)
    }

    setHasValidAnswer(false)
  }

  const reset = () => {
    const [nextQuestion, remainingQuestions] = getNextQuestion(data)

    setPaused(false)
    setWrongAnswers([])
    setIsQuitting(false)
    setHasValidAnswer(false)
    setHasExhaustedQuestions(false)
    setCurrentQuestion(nextQuestion)
    setHasUsedHintThisQuestion(false)
    setHints(settings.hints.quantity)
    setCorrectAnswers(new Set<Learnable>())
    setRemainingQuestions(remainingQuestions)
    timerRef.current?.restart()
    countdownRef.current?.reset()
  }

  const advanceNextQuestion = (skip = false) => {
    // If we're being timed per question, reset the timer.
    countdownRef.current?.reset()

    // Pick a random remaining question and remove it from the pool.
    const [nextQuestions, nextRemainingQuestions] = getNextQuestion(remainingQuestions)

    // Update the next question to be displayed and the remaining questions with one less.
    setScore(getScore(skip))
    setStreak(skip ? 0 : streak + 1)
    setCurrentQuestion(nextQuestions)
    setHasUsedHintThisQuestion(false)
    setRemainingQuestions(nextRemainingQuestions)
    setHints(hasUsedHintThisQuestion ? hints - 1 : hints)
  }

  const handleAnswerValidity = (valid: boolean) => {
    setHasValidAnswer(valid)
  }

  const handleSkip = () => {
    setFailedToAnswer(failedToAnswer + 1)
    setWrongAnswers(wrongAnswers.concat(currentQuestion))
    setLives(settings.lives.enabled && !settings.time.countdown ? lives - 1 : lives)
    advanceNextQuestion(true)
  }

  const countDownTimeElapsed = () => {
    // this.kanaDisplay.current?.notifyIncorrect(); TODO: Can we notify the question components of incorrectness when timer runs out?
    countdownRef.current?.reset()

    // Pick a random remaining question and remove it from the pool.
    const [nextQuestions, nextRemainingQuestions] = getNextQuestion(remainingQuestions)

    setCurrentQuestion(nextQuestions)
    setHasUsedHintThisQuestion(false)
    setFailedToAnswer(failedToAnswer + 1)
    setRemainingQuestions(nextRemainingQuestions)
    setLives(settings.lives.enabled ? lives - 1 : lives)
    setHints(hasUsedHintThisQuestion ? hints - 1 : hints)
    setWrongAnswers(wrongAnswers.concat(currentQuestion))
  }

  const onQuit = () => {
    // End the game, make sure to add the current question to the wrong answers.
    const gameResult = getGameResult(false, GameFinishReason.QUIT)
    gameResult.wrongAnswers = wrongAnswers.concat(currentQuestion)
    onFinish(gameResult)

    // Reset before un-mounting
    reset()
  }

  const onClickQuit = () => {
    timerRef?.current?.pause()
    setIsQuitting(true)
    setPaused(true)
  }

  const onDismissQuitModal = () => {
    timerRef?.current?.start()
    setIsQuitting(false)
    setPaused(false)
  }

  const onPaused = () => setPaused(!paused)

  const getScore = (hasSkipped: boolean): number => {
    const baseScore = currentQuestion[0].getBaseScore()

    if (hasSkipped) {
      return score - baseScore
    }

    const multiplier = streak >= 50 ? 4 : streak >= 25 ? 3 : streak >= 10 ? 2 : streak >= 5 ? 1.5 : 1
    return score + baseScore * multiplier
  }

  const getAudio = (source: string): HTMLAudioElement => {
    const audio = new Audio(source)
    audio.autoplay = false
    audio.style.display = "none"
    audio.volume = volume
    return audio
  }

  const getGameResult = (success: boolean, reason: GameFinishReason): GameResult => {
    return {
      settings: settings,
      reason: reason,
      success: success,
      score: score,
      livesRemaining: lives,
      hintsRemaining: hints,
      correctAnswers: correctAnswers,
      wrongAnswers: wrongAnswers,
      duration: timerRef.current?.getCurrentTime()
    }
  }

  return (
    <Container className={styles.wrapper} data-testid="memory-game">
      {isQuitting && (
        <ConfirmModal onConfirm={onQuit} body={t("quit-body")} title={t("quit-title")} onDismiss={onDismissQuitModal} />
      )}

      <Row noGutters className={styles.header}>
        <Col xs={12}>
          <Row>
            <Col className={styles.quitWrapper}>
              <QuitButton onClick={onClickQuit} className={styles.quit} />
            </Col>

            <Col className={styles.progressWrapper}>
              <SessionProgressBar
                streak={streak}
                quantity={data.length}
                className={styles.progress}
                remaining={remainingQuestions.length}
                inProgress={!hasExhaustedQuestions && !paused}
              />
            </Col>
          </Row>
        </Col>

        <Col xs={4}>
          {settings.question.score && (
            <ScoreDisplay
              value={score}
              streak={streak}
              className={styles.score}
            />
          )}
        </Col>

        <Col xs={4} className={styles.lifeDisplayContainer}>
          <LifeDisplay
            hearts={lives}
            className={styles.lives}
            enabled={settings.lives.enabled}
          />
        </Col>

        <Col xs={4}>
          {settings.time.timed && (
            <Timer
              pausable
              ref={timerRef}
              onPaused={onPaused}
              className={styles.timer}
            />
          )}

          {settings.time.countdown && (
            <CountDown
              ref={countdownRef}
              className={styles.timer}
              onFinish={countDownTimeElapsed}
              value={settings.time?.secondsPerQuestion}
            />
          )}
        </Col>
      </Row>

      <Row noGutters className={styles.questionWrapper}>
        <Col xs={12} className={styles.questionWrapperColumn}>
          {getQuestion()}
        </Col>
      </Row>

      <Row noGutters className={styles.footer}>
        <Col md={4} xs={5} className={styles.footerLeftCol}>
          <SkipButton
            disabled={paused}
            onClick={handleSkip}
            className={styles.skip}
          />

          <VolumeController
            className={styles.volume}
            onVolumeChange={setVolume}
          />
        </Col>

        <Col md={8} xs={7} className={styles.footerRightCol}>
          <ButtonGroup className={styles.buttonGroup}>
            <HintButton
              remaining={hints}
              className={styles.hint}
              data={currentQuestion[0]}
              infinite={settings.hints.unlimited}
              quantity={settings.hints.quantity}
              disabled={paused || !settings.hints.enabled}
              onUse={() => setHasUsedHintThisQuestion(true)}
              key={currentQuestion.map((q) => q.getUniqueID()).join("-")}
            />

            <SubmitButton
              onClick={answerQuestion}
              className={styles.submit}
              disabled={!hasValidAnswer || paused}
            />
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default MemoryGame
