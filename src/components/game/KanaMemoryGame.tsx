import React, { Component } from "react";
import { Kana } from "../../types/Kana";
import { ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { RandomNumberGenerator } from "../../utility/RandomNumberGenerator";
import Timer from "./Timer";
import { GameSettings } from "../../types/GameSettings";
import LifeDisplay from "./LifeDisplay";
import { LifeQuantity } from "../../types/LifeQuantity";
import QuitButton from "../ui/QuitButton";
import GameResult from "../../types/GameResult";
import { FailureReason } from "../../types/FailureReason";
import CountDown from "./CountDown";
import RomajiQuestion from "./RomajiQuestion";
import { DisplayType } from "../../types/DisplayType";
import KanaChoiceQuestion from "./KanaChoiceQuestion";
import Arrays from "../../utility/Arrays";
import SessionProgressBar from "../ui/SessionProgressBar";
import FilterChain from "../../filters/FilterChain";
import DiagraphFilter from "../../filters/kana/DiagraphFilter";
import ExclusionFilter from "../../filters/kana/ExclusionFilter";
import KanaTypeFilter from "../../filters/kana/KanaTypeFilter";
import SubmitButton from "../ui/SubmitButton";
import HintButton from "./HintButton";
import SkipButton from "../ui/SkipButton";
import ConfirmModal from "../ui/ConfirmModal";
import styles from "../../styles/sass/components/game/KanaMemoryGame.module.scss";

export interface KanaQuestionProps {
    isValid: (valid: boolean) => void;
}

export interface KanaMemoryGameProps {
    kana: Kana[];
    settings: GameSettings;
    onClose: () => void;
    onFinish: (result: GameResult) => void;
}

interface KanaMemoryGameState {
    currentKana: Kana;
    remainingKana: Kana[];
    correctAnswers: Set<Kana>;
    wrongAnswers: Kana[];
    hasExhaustedKana: boolean;
    paused: boolean;
    lives: number;
    failedToAnswer: number;
    hasValidAnswer: boolean;
    hints: number;
    hasUsedHintThisQuestion: boolean;
    isQuitting: boolean;
}

class KanaMemoryGame extends Component<KanaMemoryGameProps, KanaMemoryGameState> {
    private readonly timer: React.RefObject<Timer>;
    private readonly countdown: React.RefObject<CountDown>;
    private readonly question: React.RefObject<any>; //TODO: Can we type as KanaQuestion here?

    constructor(props: KanaMemoryGameProps | Readonly<KanaMemoryGameProps>) {
        super(props);

        this.timer = React.createRef();
        this.countdown = React.createRef();
        this.question = React.createRef();

        const { settings, kana } = this.props;

        const [firstKana, remainingKana] = RandomNumberGenerator.getRandomObject(kana);

        this.state = {
            currentKana: firstKana,
            remainingKana: remainingKana,
            correctAnswers: new Set<Kana>(),
            wrongAnswers: [],
            hasExhaustedKana: false,
            paused: false,
            lives: settings.lives.quantity?.valueOf() ?? LifeQuantity.ZERO,
            failedToAnswer: 0,
            hasValidAnswer: false,
            hints: settings.hints.quantity?.valueOf() ?? 0,
            hasUsedHintThisQuestion: false,
            isQuitting: false
        }
    }

    componentDidUpdate() {
        const { lives, correctAnswers, wrongAnswers} = this.state
        const { kana, settings, onFinish } = this.props;

        if (settings.lives.enabled && lives === 0) {
            onFinish({
                reason: FailureReason.NO_LIVES_REMAINING,
                success: false,
                livesRemaining: 0,
                totalKanaOffered: kana.length,
                correctAnswers: correctAnswers,
                wrongAnswers: wrongAnswers,
                duration: this.timer.current?.getCurrentTime() ?? undefined
            });
        }
    }

    componentWillUnmount() {
        this.reset();
    }

    render() {
        const {
            correctAnswers, failedToAnswer, hasExhaustedKana, lives, remainingKana, hasValidAnswer, paused, hints,
            currentKana, isQuitting
        } = this.state;
        const { kana, settings } = this.props;

        return (
            <Container className={styles.wrapper}>
                {isQuitting && <ConfirmModal
                    title={"Are you sure you want to quit?"}
                    body={"You'll lose your current progress, but you'll see the results of your game thus far."}
                    onConfirm={this.onQuit}
                    onDismiss={this.onDismissQuitModal}
                />}

                <Row noGutters className={styles.header}>
                    <Col xs={12}>
                        <SessionProgressBar
                            inProgress={!hasExhaustedKana}
                            value={((correctAnswers.size + failedToAnswer) / kana.length) * 100}
                            title={(kana.length - remainingKana.length)  + "/" + kana.length}
                            className={styles.progress}
                        />
                    </Col>

                    <Col>
                        <QuitButton onClick={this.onClickQuit} className={styles.quit} />
                    </Col>

                    <Col className={styles.lifeDisplayContainer}>
                        {settings.lives.enabled && <LifeDisplay hearts={lives} className={styles.lives} />}
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
                               kana={currentKana}
                               remaining={hints}
                               totalQuantity={settings.hints.quantity?.valueOf() ?? 0}
                               key={currentKana.code}
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
        const { settings, kana } = this.props;
        const { currentKana, paused } = this.state;

        switch (settings.display.type) {
            case DisplayType.ROMAJI: {
                return (
                    <RomajiQuestion
                        key={currentKana.code}
                        kana={currentKana}
                        hidden={paused}
                        className={styles.question}
                        displayStyle={{ character: { className: styles.romajiDisplay } }}
                        isValid={this.handleAnswerValidity}
                        ref={this.question}
                    />
                );
            }
            case DisplayType.KANA: {
                const chain = new FilterChain<Kana>();

                chain.addFilter(new DiagraphFilter(currentKana.isDiagraph()));
                chain.addFilter(new KanaTypeFilter(currentKana.type, true));
                chain.addFilter(new ExclusionFilter(currentKana));

                const wrong = Arrays.getRandomElements(chain.execute(kana), settings.display.cards - 1);

                return (
                    <KanaChoiceQuestion
                        key={currentKana.code}
                        expected={currentKana}
                        wrong={wrong}
                        hidden={paused}
                        isValid={this.handleAnswerValidity}
                        ref={this.question}
                    />
                );
            }
        }
    }

    answerQuestion = () => {
        const { currentKana, correctAnswers, wrongAnswers, remainingKana, lives } = this.state;
        const { settings, kana } = this.props;

        if (this.question.current?.isCorrect()) {
            //Add the current kana to the correct answers set.
            this.setState({ correctAnswers: correctAnswers.add(currentKana)});

            if (remainingKana.length === 0) {
                //If we're out of kana, stop the timer and let the component know the pool has been exhausted.
                this.timer.current?.stop();
                this.setState({ hasExhaustedKana: true, paused: false });
                this.props.onFinish({
                    reason: undefined,
                    success: true,
                    livesRemaining: lives,
                    totalKanaOffered: kana.length,
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
                wrongAnswers: wrongAnswers.concat(currentKana),
            });
        }

        this.setState({ hasValidAnswer: false });
    }

    reset = () => {
        const [nextKana, remainingKana] = RandomNumberGenerator.getRandomObject(this.props.kana);

        this.setState({
            currentKana: nextKana,
            remainingKana: remainingKana,
            correctAnswers: new Set<Kana>(),
            wrongAnswers: [],
            paused: false,
            hasExhaustedKana: false,
            hasValidAnswer: false,
            hints: this.props.settings.hints.quantity?.valueOf() ?? 0,
            hasUsedHintThisQuestion: false,
            isQuitting: false
        });

        this.timer.current?.restart();
        this.countdown.current?.reset();
    }

    private advanceNextQuestion() {
        const { remainingKana, hasUsedHintThisQuestion, hints } = this.state;

        //If we're being timed per kana, reset the timer.
        this.countdown.current?.reset();

        //Pick a random remaining kana and remove it from the pool.
        const [nextKana, nextRemainingKana] = RandomNumberGenerator.getRandomObject(remainingKana);

        //Update the next kana to be displayed and the remaining kana with one less.
        this.setState({
            currentKana: nextKana,
            remainingKana: nextRemainingKana,
            hasUsedHintThisQuestion: false,
            hints: hasUsedHintThisQuestion ? hints - 1 : hints,
        });
    }

    private handleAnswerValidity = (valid: boolean) => {
        this.setState({ hasValidAnswer: valid });
    }

    private handleSkip = () => {
        const { settings } = this.props;
        const { wrongAnswers, lives, currentKana, failedToAnswer } = this.state;
        this.setState({
            lives: settings.lives.enabled && !settings.time.countdown ? lives - 1 : lives,
            wrongAnswers: wrongAnswers.concat(currentKana),
            failedToAnswer: failedToAnswer + 1
        });
        this.advanceNextQuestion();
    }

    private countDownTimeElapsed = () => {
        const { lives, wrongAnswers, currentKana, remainingKana, failedToAnswer, hasUsedHintThisQuestion, hints } = this.state;
        //this.kanaDisplay.current?.notifyIncorrect(); TODO: Can we notify the question components of incorrectness when timer runs out?
        this.countdown.current?.reset();

        //Pick a random remaining kana and remove it from the pool.
        const [nextKana, nextRemainingKana] = RandomNumberGenerator.getRandomObject(remainingKana);

        this.setState({
            currentKana: nextKana,
            remainingKana: nextRemainingKana,
            lives: this.props.settings.lives.enabled ? lives - 1 : lives,
            wrongAnswers: wrongAnswers.concat(currentKana),
            failedToAnswer: failedToAnswer + 1,
            hasUsedHintThisQuestion: false,
            hints: hasUsedHintThisQuestion ? hints - 1 : hints
        });
    }

    private onQuit = () => {
        this.reset();
        this.props.onClose();
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
}

export default KanaMemoryGame;