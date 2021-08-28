import React, { Component } from "react";
import { ButtonGroup, Col, Container, Row } from "react-bootstrap";
import Timer from "./Timer";
import LifeDisplay from "./LifeDisplay";
import QuitButton from "../ui/buttons/QuitButton";
import GameResult from "../../domain/game/GameResult";
import { GameFinishReason } from "../../domain/game/GameFinishReason";
import CountDown from "./CountDown";
import { QuestionType } from "../../domain/game/QuestionType";
import SessionProgressBar from "../ui/SessionProgressBar";
import SubmitButton from "../ui/buttons/SubmitButton";
import HintButton from "./HintButton";
import SkipButton from "../ui/buttons/SkipButton";
import ConfirmModal from "../ui/ConfirmModal";
import { Environment } from "../../utility/Environment";
import ScoreDisplay from "../ui/display/ScoreDisplay";
import { Learnable } from "../../domain/learn/Learnable";
import GameSettings from "../../domain/session/settings/game/GameSettings";
import ExclusionFilter from "../../filters/learnable/ExclusionFilter";
import Arrays from "../../utility/Arrays";
import TextQuestion from "./questions/TextQuestion";
import ChoiceQuestion from "./questions/ChoiceQuestion";
import MatchQuestion from "./questions/MatchQuestion";
import finish from "../../sound/finish.wav";
import success from "../../sound/correct.wav";
import wrong from "../../sound/wrong.wav";
import VolumeController from "../ui/VolumeController";
import styles from "../../styles/sass/components/game/MemoryGame.module.scss";

export interface GameQuestionProps {
    hidden: boolean;
    isValid: (valid: boolean) => void;
}

export interface MemoryGameProps {
    data: Learnable[];
    settings: GameSettings;
    onFinish: (result: GameResult) => void;
    sessionKey?: string;
}

interface MemoryGameState {
    currentQuestion: Learnable[];
    remainingQuestions: Learnable[];
    correctAnswers: Set<Learnable>;
    wrongAnswers: Learnable[];
    hasExhaustedQuestions: boolean;
    paused: boolean;
    lives: number;
    failedToAnswer: number;
    hasValidAnswer: boolean;
    hints: number;
    hasUsedHintThisQuestion: boolean;
    isQuitting: boolean;
    score: number;
    streak: number;
}

/**
 * The core component for driving game logic.
 * Encapsulates logic for game answers, timers, lives, hints and score.
 * The questions are orchestrated in here, but their logic is encapsulated
 */
class MemoryGame extends Component<MemoryGameProps, MemoryGameState> {
    private readonly timer: React.RefObject<Timer>;
    private readonly countdown: React.RefObject<CountDown>;
    private readonly question: React.RefObject<any>; //TODO: Can we type as GameQuestion here?

    private volume: number = 0.7;

    constructor(props: MemoryGameProps | Readonly<MemoryGameProps>) {
        super(props);

        this.timer = React.createRef();
        this.countdown = React.createRef();
        this.question = React.createRef();

        const { settings, data } = this.props;

        const [firstQuestion, remainingQuestions] = this.getNextQuestion(data);

        this.state = {
            currentQuestion: firstQuestion,
            remainingQuestions: remainingQuestions,
            correctAnswers: new Set<Learnable>(),
            wrongAnswers: [],
            hasExhaustedQuestions: false,
            paused: false,
            lives: settings.lives.quantity,
            failedToAnswer: 0,
            hasValidAnswer: false,
            hints: settings.hints.quantity,
            hasUsedHintThisQuestion: false,
            isQuitting: false,
            score: 0,
            streak: 0,
        }
    }

    componentDidUpdate() {
        const { lives } = this.state
        const { settings, onFinish } = this.props;

        //Listens for a game failure. If we're out of lives, call onFinish().
        if (settings.lives.enabled && lives === 0) {
            onFinish(this.getGameResult(false, GameFinishReason.NO_LIVES_REMAINING));
        }
    }

    componentDidMount() {
        //console.log("Starting new game with ID: " + this.props.sessionKey);
    }

    componentWillUnmount() {
        this.reset();
    }

    render() {
        const {
            hasExhaustedQuestions, lives, remainingQuestions, hasValidAnswer, paused, currentQuestion,
            isQuitting, score, streak, hints
        } = this.state;

        const { data, settings } = this.props;

        return (
            <Container className={styles.wrapper} data-testid="memory-game">
                {isQuitting && (
                    <ConfirmModal
                        onConfirm={this.onQuit}
                        onDismiss={this.onDismissQuitModal}
                        body={Environment.variable("QUIT_BODY")}
                        title={Environment.variable("QUIT_TITLE")}
                    />
                )}

                <Row noGutters className={styles.header}>
                    <Col xs={12}>
                        <Row>
                            <Col className={styles.quitWrapper}>
                                <QuitButton onClick={this.onClickQuit} className={styles.quit} />
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
                        {settings.question.score &&
                            <ScoreDisplay
                                value={score}
                                streak={streak}
                                className={styles.score}
                            />
                        }
                    </Col>

                    <Col xs={4} className={styles.lifeDisplayContainer}>
                        <LifeDisplay
                            hearts={lives}
                            className={styles.lives}
                            enabled={settings.lives.enabled}
                        />
                    </Col>

                    <Col xs={4}>
                        {settings.time.timed &&
                            <Timer
                                pausable
                                ref={this.timer}
                                onPaused={this.onPaused}
                                className={styles.timer}
                            />
                        }
                        {settings.time.countdown &&
                            <CountDown
                                ref={this.countdown}
                                className={styles.timer}
                                onFinish={this.countDownTimeElapsed}
                                value={settings.time?.secondsPerQuestion}
                            />
                        }
                    </Col>
                </Row>

                <Row noGutters className={styles.questionWrapper}>
                    <Col xs={12} className={styles.questionWrapperColumn}>
                        {this.getQuestion()}
                    </Col>
                </Row>

                <Row noGutters className={styles.footer}>
                    <Col md={4} xs={5} className={styles.footerLeftCol}>
                        <SkipButton
                            disabled={paused}
                            className={styles.skip}
                            onClick={this.handleSkip}
                        />

                        <VolumeController
                            className={styles.volume}
                            onVolumeChange={(value: number) => this.volume = value}
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
                               key={currentQuestion.map(q => q.getUniqueID()).join("-")}
                               onUse={() => this.setState({ hasUsedHintThisQuestion: true })}
                           />

                           <SubmitButton
                               className={styles.submit}
                               onClick={this.answerQuestion}
                               disabled={!hasValidAnswer || paused}
                           />
                       </ButtonGroup>
                   </Col>
                </Row>
            </Container>
        );
    }

    private getQuestion = () => {
        const { settings, data } = this.props;
        const { currentQuestion, paused } = this.state;

        const questionField = settings.question.questionField;
        const answerField = settings.question.answerField;

        const currentQuestionID = currentQuestion.map(q => q.getUniqueID()).join("-");

        //TODO: Extract into a QuestionRegistry component (Maybe Strategy pattern?)
        switch (settings.question.type) {
            case QuestionType.TEXT: {
                const question = currentQuestion[0].getFieldValues(questionField)[0];
                const answers = currentQuestion[0].getFieldValues(answerField);

                return (
                    <TextQuestion
                        hidden={paused}
                        answers={answers}
                        ref={this.question}
                        question={question}
                        answerField={answerField}
                        key={currentQuestionID}
                        isValid={this.handleAnswerValidity}
                    />
                );
            }
            case QuestionType.CHOICE: {
                //What the user is going to be asked. Usually just a single string, but some kana have multiple romaji.
                //Also, what the expected answer is going to be. For a choice question, it's only ever going to be one.
                const questions = currentQuestion[0];

                //What wrong options will be presented? Takes the answer filter from the settings and excludes the question.
                //We then filter our Learnable data and retrieve n options. Then we map chosen answer fields for them.
                const chain = settings.question.answerFilter(currentQuestion).withFilter(new ExclusionFilter(currentQuestion[0]));
                const wrong = Arrays.getRandomElements(chain.execute(data), settings.question.cards - 1);
                const wrongAnswerOptions = wrong.map((answer: Learnable) => answer.getFieldValues(answerField)[0]);

                return (
                    <ChoiceQuestion
                        hidden={paused}
                        ref={this.question}
                        question={questions}
                        answerField={answerField}
                        questionField={questionField}
                        key={currentQuestionID}
                        isValid={this.handleAnswerValidity}
                        wrong={wrongAnswerOptions}
                    />
                );
            }
            case QuestionType.MATCH: {
                const questionData = new Map(currentQuestion.map(data => {
                    const question = data.getFieldValues(questionField)[0];
                    const answer = data.getFieldValues(answerField)[0];
                    return [question, answer]
                }));

                return (
                    <MatchQuestion
                        hidden={paused}
                        data={questionData}
                        ref={this.question}
                        key={currentQuestionID}
                        isValid={this.handleAnswerValidity}
                   />
                )
            }
        }
    }

    answerQuestion = () => {
        const { currentQuestion, correctAnswers, wrongAnswers, remainingQuestions, lives } = this.state;
        const { settings } = this.props;

        if (this.question.current?.isCorrect()) {
            //Play the success sound effect
            this.getAudio(success).play().catch(e => console.log(e));

            //Add the current question to the correct answers set.
            currentQuestion.forEach(question => correctAnswers.add(question));
            this.setState({ correctAnswers: correctAnswers });

            //If we're out of questions...
            if (remainingQuestions.length === 0) {
                //Play the finish sound
                this.getAudio(finish).play().catch(e => console.log(e));

                //Stop the timer / countdown.
                this.timer.current?.stop();

                //Set the questions as exhausted and ensure paused is false.
                this.setState({ hasExhaustedQuestions: true, paused: false });

                //Notify the consuming parent of the game ending and pass data for results screen.
                this.props.onFinish(this.getGameResult(true, GameFinishReason.EXHAUSTED_QUESTIONS));
            } else {
                this.advanceNextQuestion();
            }
        } else {
            //Play the wrong sound effect
            this.getAudio(wrong).play().catch(e => console.log(e));

            //If the question was answered incorrectly, update the lives and wrong answer pool.
            this.setState({
                streak: 0,
                wrongAnswers: wrongAnswers.concat(currentQuestion),
                lives: settings.lives.enabled && !settings.time.countdown ? lives - 1 : lives
            });
        }

        this.setState({ hasValidAnswer: false });
    }

    reset = () => {
        const [nextQuestion, remainingQuestions] = this.getNextQuestion(this.props.data);

        this.setState({
            paused: false,
            wrongAnswers: [],
            isQuitting: false,
            hasValidAnswer: false,
            hasExhaustedQuestions: false,
            currentQuestion: nextQuestion,
            hasUsedHintThisQuestion: false,
            correctAnswers: new Set<Learnable>(),
            remainingQuestions: remainingQuestions,
            hints: this.props.settings.hints.quantity,
        });

        this.timer.current?.restart();
        this.countdown.current?.reset();
    }

    private advanceNextQuestion(skip: boolean = false) {
        const { remainingQuestions, hasUsedHintThisQuestion, hints, streak } = this.state;

        //If we're being timed per question, reset the timer.
        this.countdown.current?.reset();

        //Pick a random remaining question and remove it from the pool.
        const [nextQuestions, nextRemainingQuestions] = this.getNextQuestion(remainingQuestions)

        //Update the next question to be displayed and the remaining questions with one less.
        this.setState({
            streak: skip ? 0 : streak + 1,
            score: this.getScore(skip),
            currentQuestion: nextQuestions,
            hasUsedHintThisQuestion: false,
            remainingQuestions: nextRemainingQuestions,
            hints: hasUsedHintThisQuestion ? hints - 1 : hints
        });
    }

    private handleAnswerValidity = (valid: boolean) => {
        this.setState({ hasValidAnswer: valid });
    }

    private handleSkip = () => {
        const { settings } = this.props;
        const { wrongAnswers, lives, currentQuestion, failedToAnswer } = this.state;

        this.setState({
            failedToAnswer: failedToAnswer + 1,
            wrongAnswers: wrongAnswers.concat(currentQuestion),
            lives: settings.lives.enabled && !settings.time.countdown ? lives - 1 : lives
        });

        this.advanceNextQuestion(true);
    }

    private countDownTimeElapsed = () => {
        const { lives, wrongAnswers, currentQuestion, remainingQuestions, failedToAnswer, hasUsedHintThisQuestion, hints } = this.state;
        //this.kanaDisplay.current?.notifyIncorrect(); TODO: Can we notify the question components of incorrectness when timer runs out?
        this.countdown.current?.reset();

        //Pick a random remaining question and remove it from the pool.
        const [nextQuestions, nextRemainingQuestions] = this.getNextQuestion(remainingQuestions);

        this.setState({
            currentQuestion: nextQuestions,
            hasUsedHintThisQuestion: false,
            failedToAnswer: failedToAnswer + 1,
            remainingQuestions: nextRemainingQuestions,
            wrongAnswers: wrongAnswers.concat(currentQuestion),
            hints: hasUsedHintThisQuestion ? hints - 1 : hints,
            lives: this.props.settings.lives.enabled ? lives - 1 : lives
        });
    }

    private onQuit = () => {
        const { wrongAnswers, currentQuestion } = this.state
        const { onFinish } = this.props;

        //End the game, make sure to add the current question to the wrong answers.
        const gameResult = this.getGameResult(false, GameFinishReason.QUIT);
        gameResult.wrongAnswers = wrongAnswers.concat(currentQuestion);
        onFinish(gameResult);

        //Reset before un-mounting
        this.reset();
    }

    private onClickQuit = () => {
        this.timer?.current?.pause();
        this.setState({ isQuitting: true, paused: true });
    }

    private onDismissQuitModal = () => {
        this.timer?.current?.start();
        this.setState({ isQuitting: false, paused: false });
    }

    private onPaused = () => this.setState({ paused: !this.state.paused });

    private getNextQuestion = (data: Learnable[]): [Learnable[], Learnable[]] => {
        const quantity = this.props.settings.question.quantity;
        return Arrays.getRandomObjects(data, quantity);
    }

    private getScore = (hasSkipped: boolean): number => {
        const { score, streak, currentQuestion } = this.state;

        const baseScore = currentQuestion[0].getBaseScore();

        if (hasSkipped) {
            return score - baseScore;
        }

        const multiplier = streak >= 50 ? 4 : streak >= 25 ? 3 : streak >= 10 ? 2 : streak >= 5 ? 1.5 : 1;
        return score + baseScore * multiplier;
    }

    private getAudio = (source: string): HTMLAudioElement => {
        const audio = new Audio(source);
        audio.autoplay = false;
        audio.style.display = "none";
        audio.volume = this.volume;
        return audio;
    }

    private getGameResult = (success: boolean, reason: GameFinishReason): GameResult => {
        const { settings } = this.props;
        const { lives, hints, correctAnswers, wrongAnswers, score } = this.state;

        return {
            settings: settings,
            reason: reason,
            success: success,
            score: score,
            livesRemaining: lives,
            hintsRemaining: hints,
            correctAnswers: correctAnswers,
            wrongAnswers: wrongAnswers,
            duration: this.timer.current?.getCurrentTime()
        }
    }
}


export default MemoryGame;
