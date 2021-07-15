import React, { Component } from "react";
import { ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { RandomNumberGenerator } from "../../utility/RandomNumberGenerator";
import Timer from "./Timer";
import LifeDisplay from "./LifeDisplay";
import { LifeQuantity } from "../../types/game/LifeQuantity";
import QuitButton from "../ui/buttons/QuitButton";
import GameResult from "../../types/game/GameResult";
import { FailureReason } from "../../types/game/FailureReason";
import CountDown from "./CountDown";
import { QuestionType } from "../../types/game/QuestionType";
import SessionProgressBar from "../ui/SessionProgressBar";
import SubmitButton from "../ui/buttons/SubmitButton";
import HintButton from "./HintButton";
import SkipButton from "../ui/buttons/SkipButton";
import ConfirmModal from "../ui/ConfirmModal";
import { Environment } from "../../utility/Environment";
import ScoreDisplay from "../ui/display/ScoreDisplay";
import { Learnable } from "../../types/learn/Learnable";
import styles from "../../styles/sass/components/game/MemoryGame.module.scss";
import GameSettings from "../../types/session/settings/game/GameSettings";
import ExclusionFilter from "../../filters/learnable/ExclusionFilter";
import Arrays from "../../utility/Arrays";
import TextQuestion from "./questions/TextQuestion";
import ChoiceQuestion from "./questions/ChoiceQuestion";

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
    currentQuestion: Learnable;
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

class MemoryGame extends Component<MemoryGameProps, MemoryGameState> {
    private readonly timer: React.RefObject<Timer>;
    private readonly countdown: React.RefObject<CountDown>;
    private readonly question: React.RefObject<any>; //TODO: Can we type as GameQuestion here?

    constructor(props: MemoryGameProps | Readonly<MemoryGameProps>) {
        super(props);

        this.timer = React.createRef();
        this.countdown = React.createRef();
        this.question = React.createRef();

        const { settings, data } = this.props;

        const [firstQuestion, remainingQuestions] = RandomNumberGenerator.getRandomObject(data);

        this.state = {
            currentQuestion: firstQuestion,
            remainingQuestions: remainingQuestions,
            correctAnswers: new Set<Learnable>(),
            wrongAnswers: [],
            hasExhaustedQuestions: false,
            paused: false,
            lives: settings.lives.quantity?.valueOf() ?? LifeQuantity.ZERO,
            failedToAnswer: 0,
            hasValidAnswer: false,
            hints: settings.hints.quantity?.valueOf() ?? 0,
            hasUsedHintThisQuestion: false,
            isQuitting: false,
            score: 0,
            streak: 0
        }
    }

    componentDidUpdate() {
        const { lives, correctAnswers, wrongAnswers} = this.state
        const { data, settings, onFinish } = this.props;

        if (settings.lives.enabled && lives === 0) {
            onFinish({
                reason: FailureReason.NO_LIVES_REMAINING,
                success: false,
                livesRemaining: 0,
                totalQuestionsOffered: data.length,
                correctAnswers: correctAnswers,
                wrongAnswers: wrongAnswers,
                duration: this.timer.current?.getCurrentTime() ?? undefined
            });
        }
    }

    componentDidMount() {
        //console.log("Starting new game with ID: " + this.props.sessionKey);
    }

    componentWillUnmount() {
        this.reset();
    }

    render() {
        const { hasExhaustedQuestions, lives, remainingQuestions, hasValidAnswer, paused, hints, currentQuestion, isQuitting, score, streak } = this.state;
        const { data, settings } = this.props;

        return (
            <Container className={styles.wrapper}>
                {isQuitting && (
                    <ConfirmModal
                        title={Environment.variable("QUIT_TITLE")}
                        body={Environment.variable("QUIT_BODY")}
                        onConfirm={this.onQuit}
                        onDismiss={this.onDismissQuitModal}
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
                                    inProgress={!hasExhaustedQuestions && !paused}
                                    quantity={data.length}
                                    remaining={remainingQuestions.length}
                                    className={styles.progress}
                                    streak={streak}
                                />
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        {settings.question.score &&
                            <ScoreDisplay
                                value={score}
                                streak={streak}
                                className={styles.score}
                            />
                        }
                    </Col>

                    <Col className={styles.lifeDisplayContainer}>
                        {settings.lives.enabled &&
                            <LifeDisplay
                                hearts={lives}
                                className={styles.lives}
                            />
                        }
                    </Col>

                    <Col>
                        {settings.time.timed &&
                            <Timer className={styles.timer} ref={this.timer} pausable onPaused={this.onPaused}/>
                        }
                        {settings.time.countdown &&
                            <CountDown
                                className={styles.timer}
                                ref={this.countdown}
                                value={settings.time?.secondsPerQuestion ?? 10}
                                onFinish={this.countDownTimeElapsed}
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
                    <Col md={5} xs={4} className={styles.footerLeftCol}>
                        <SkipButton onClick={this.handleSkip} className={styles.skip} disabled={paused} />
                    </Col>

                   <Col md={7} xs={8} className={styles.footerRightCol}>
                       <ButtonGroup className={styles.buttonGroup}>
                           <HintButton
                               data={currentQuestion}
                               remaining={hints}
                               totalQuantity={settings.hints.quantity?.valueOf() ?? 0}
                               key={currentQuestion.getKana().join("-")}
                               title="Get a Hint"
                               disabled={paused || !settings.hints.enabled}
                               className={styles.hint}
                               onUse={() => this.setState({ hasUsedHintThisQuestion: true })}
                           />

                           <SubmitButton
                               onClick={this.answerQuestion}
                               disabled={!hasValidAnswer || paused}
                               className={styles.submit}
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

        //TODO: Extract into a QuestionRegistry component (Maybe Strategy pattern?)
        switch (settings.question.type) {
            case QuestionType.TEXT: {
                const question = currentQuestion.getFieldValues(questionField)[0];
                const answers = currentQuestion.getFieldValues(answerField);

                if (!question) {
                    throw new Error(currentQuestion + " has no value in its " + questionField + " field");
                }

                return (
                    <TextQuestion
                        key={currentQuestion.getKana().join("-")}
                        question={question}
                        answers={answers}
                        answerField={answerField}
                        hidden={paused}
                        isValid={this.handleAnswerValidity}
                        ref={this.question}
                    />
                );
            }
            case QuestionType.CHOICE: {
                //What the user is going to be asked. Usually just a single string, but some kana have multiple romaji.
                const questions = currentQuestion; //.getFieldValues(questionField);

                //What the expected answer is going to be. For a choice question, it's only ever going to be one.
                const expectedAnswer = currentQuestion.getFieldValues(answerField)[0];

                //What wrong options will be presented? Takes the answer filter from the settings and excludes the question.
                //We then filter our Learnable data and retrieve n options. Then we map chosen answer fields for them.
                const chain = settings.question.answerFilter(currentQuestion).withFilter(new ExclusionFilter(currentQuestion));
                const wrong = Arrays.getRandomElements(chain.execute(data), settings.question.cards - 1);
                const wrongAnswerOptions = wrong.map((answer: Learnable) => answer.getFieldValues(answerField)[0]);

                if (!expectedAnswer) {
                    throw new Error(currentQuestion + " has no value for its " + questionField + " field.");
                }

                if (!wrongAnswerOptions) {
                    throw new Error("")
                }

                return (
                    <ChoiceQuestion
                        key={currentQuestion.getKana().join("-")} //TODO: Implement Learnable getID()?
                        question={questions}
                        questionField={questionField}
                        answerField={answerField}
                        wrong={wrongAnswerOptions.flatMap(answer => answer ? [answer] : [])}
                        hidden={paused}
                        isValid={this.handleAnswerValidity}
                        ref={this.question}
                    />
                );
            }
        }
    }

    answerQuestion = () => {
        const { currentQuestion, correctAnswers, wrongAnswers, remainingQuestions, lives } = this.state;
        const { settings, data } = this.props;

        if (this.question.current?.isCorrect()) {
            //Add the current question to the correct answers set.
            this.setState({ correctAnswers: correctAnswers.add(currentQuestion)});

            if (remainingQuestions.length === 0) {
                //If we're out of questions, stop the timer and let the component know the pool has been exhausted.
                this.timer.current?.stop();
                this.setState({ hasExhaustedQuestions: true, paused: false });
                this.props.onFinish({
                    reason: undefined,
                    success: true,
                    livesRemaining: lives,
                    totalQuestionsOffered: data.length,
                    correctAnswers: correctAnswers,
                    wrongAnswers: wrongAnswers,
                    duration: this.timer.current?.getCurrentTime() ?? undefined
                });
            } else {
                this.advanceNextQuestion();
            }
        } else {
            //If the question was answered incorrectly, update the lives and wrong answer pool.
            this.setState({
                lives: settings.lives.enabled && !settings.time.countdown ? lives - 1 : lives,
                wrongAnswers: wrongAnswers.concat(currentQuestion),
                streak: 0
            });
        }

        this.setState({ hasValidAnswer: false });
    }

    reset = () => {
        const [nextQuestion, remainingQuestions] = RandomNumberGenerator.getRandomObject(this.props.data);

        this.setState({
            currentQuestion: nextQuestion,
            remainingQuestions: remainingQuestions,
            correctAnswers: new Set<Learnable>(),
            wrongAnswers: [],
            paused: false,
            hasExhaustedQuestions: false,
            hasValidAnswer: false,
            hints: this.props.settings.hints.quantity?.valueOf() ?? 0,
            hasUsedHintThisQuestion: false,
            isQuitting: false
        });

        this.timer.current?.restart();
        this.countdown.current?.reset();
    }

    private advanceNextQuestion() {
        const { remainingQuestions, hasUsedHintThisQuestion, hints, streak } = this.state;

        //If we're being timed per question, reset the timer.
        this.countdown.current?.reset();

        //Pick a random remaining question and remove it from the pool.
        const [nextQuestion, nextRemainingQuestions] = RandomNumberGenerator.getRandomObject(remainingQuestions);

        //Update the next question to be displayed and the remaining questions with one less.
        this.setState({
            currentQuestion: nextQuestion,
            remainingQuestions: nextRemainingQuestions,
            hasUsedHintThisQuestion: false,
            hints: hasUsedHintThisQuestion ? hints - 1 : hints,
            score: this.getScore(),
            streak: streak + 1
        });
    }

    private handleAnswerValidity = (valid: boolean) => {
        this.setState({ hasValidAnswer: valid });
    }

    private handleSkip = () => {
        const { settings } = this.props;
        const { wrongAnswers, lives, currentQuestion, failedToAnswer } = this.state;
        this.setState({
            lives: settings.lives.enabled && !settings.time.countdown ? lives - 1 : lives,
            wrongAnswers: wrongAnswers.concat(currentQuestion),
            failedToAnswer: failedToAnswer + 1
        });
        this.advanceNextQuestion();
    }

    private countDownTimeElapsed = () => {
        const { lives, wrongAnswers, currentQuestion, remainingQuestions, failedToAnswer, hasUsedHintThisQuestion, hints } = this.state;
        //this.kanaDisplay.current?.notifyIncorrect(); TODO: Can we notify the question components of incorrectness when timer runs out?
        this.countdown.current?.reset();

        //Pick a random remaining question and remove it from the pool.
        const [nextQuestion, nextRemainingQuestions] = RandomNumberGenerator.getRandomObject(remainingQuestions);

        this.setState({
            currentQuestion: nextQuestion,
            remainingQuestions: nextRemainingQuestions,
            lives: this.props.settings.lives.enabled ? lives - 1 : lives,
            wrongAnswers: wrongAnswers.concat(currentQuestion),
            failedToAnswer: failedToAnswer + 1,
            hasUsedHintThisQuestion: false,
            hints: hasUsedHintThisQuestion ? hints - 1 : hints
        });
    }

    private onQuit = () => {
        const { lives, correctAnswers, wrongAnswers, currentQuestion } = this.state
        const { data, onFinish } = this.props;

        onFinish({
            reason: FailureReason.QUIT,
            success: false,
            livesRemaining: lives,
            totalQuestionsOffered: data.length,
            duration: this.timer?.current?.getCurrentTime(),
            correctAnswers: correctAnswers,
            wrongAnswers: wrongAnswers.concat(currentQuestion),
        });

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

    private getScore = (): number => {
        const { score, streak, currentQuestion } = this.state;
        const multiplier = streak >= 50 ? 4 : streak >= 25 ? 3 : streak >= 10 ? 2 : streak >= 5 ? 1.5 : 1;
        return score + currentQuestion.getBaseScore() * multiplier;
    }
}

export default MemoryGame;