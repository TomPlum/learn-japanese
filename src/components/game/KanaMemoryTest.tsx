import React, { Component } from "react";
import { Kana } from "../../types/Kana";
import { Button, Col, Container, Form, ProgressBar, Row } from "react-bootstrap";
import KanaDisplay from "./KanaDisplay";
import styles from "../../styles/sass/components/game/KanaMemoryTest.module.scss";
import { RandomNumberGenerator } from "../../utility/RandomNumberGenerator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Timer from "./Timer";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import HintButton from "./HintButton";
import RomanjiInput from "./RomanjiInput";
import { GameSettings } from "../../types/GameSettings";
import LifeDisplay from "./LifeDisplay";
import { LifeQuantity } from "../../types/LifeQuantity";
import QuitButton from "../ui/QuitButton";
import GameResult from "../../types/GameResult";
import { FailureReason } from "../../types/FailureReason";
import CountDown from "./CountDown";

export interface KanaMemoryTestProps {
    kana: Kana[];
    settings: GameSettings;
    onClose: () => void;
    onFinish: (result: GameResult) => void;
}

interface KanaMemoryTestState {
    currentKana: Kana;
    answer: string | undefined;
    remainingKana: Kana[];
    correctAnswers: Set<Kana>;
    wrongAnswers: Kana[];
    hasExhaustedKana: boolean;
    paused: boolean;
    lives: number;
    hints: number;
    hasUsedHintThisKana: boolean;
    failedToAnswer: number;
}

class KanaMemoryTest extends Component<KanaMemoryTestProps, KanaMemoryTestState> {
    private readonly timer: React.RefObject<Timer>;
    private readonly countdown: React.RefObject<CountDown>;
    private readonly kanaDisplay: React.RefObject<KanaDisplay>;

    constructor(props: KanaMemoryTestProps | Readonly<KanaMemoryTestProps>) {
        super(props);

        this.timer = React.createRef();
        this.countdown = React.createRef();
        this.kanaDisplay = React.createRef();

        const { settings } = this.props;

        const [firstKana, remainingKana] = RandomNumberGenerator.getRandomObject(this.props.kana);

        this.state = {
            currentKana: firstKana,
            remainingKana: remainingKana,
            correctAnswers: new Set<Kana>(),
            wrongAnswers: [],
            answer: undefined,
            hasExhaustedKana: false,
            paused: false,
            lives: settings.lives.quantity?.valueOf() ?? LifeQuantity.ZERO,
            hints: settings.hints.quantity?.valueOf() ?? 0,
            hasUsedHintThisKana: false,
            failedToAnswer: 0
        }
    }

    componentDidUpdate() {
        const { lives, correctAnswers, wrongAnswers} = this.state
        if (this.props.settings.lives.enabled && lives === 0) {
            this.props.onFinish({
                reason: FailureReason.NO_LIVES_REMAINING,
                success: false,
                livesRemaining: 0,
                totalKanaOffered: this.props.kana.length,
                correctAnswers: correctAnswers,
                wrongAnswers: wrongAnswers,
                duration: this.timer.current?.getCurrentTime() ?? undefined
            });
        }
    }

    render() {
        const { currentKana, answer, correctAnswers, failedToAnswer, hasExhaustedKana, paused, lives, hints } = this.state;
        const { kana, settings } = this.props;

        return (
            <Container className={styles.wrapper}>
                <Row noGutters>
                    <Col xs={12}>
                        <ProgressBar
                            animated={!hasExhaustedKana}
                            className={styles.progress}
                            now={((correctAnswers.size + failedToAnswer) / kana.length) * 100}
                            variant={hasExhaustedKana ? "success" : undefined}
                        />
                    </Col>
                    <Col>
                        <QuitButton onClick={this.close} />
                    </Col>
                    <Col className={styles.lifeDisplayContainer}>
                        {settings.lives.enabled && <LifeDisplay hearts={lives} />}
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

                <KanaDisplay kana={currentKana} key={currentKana.code} ref={this.kanaDisplay} blur={paused}/>

                <Form>
                    <Form.Group controlId="answer">
                        <Row>
                            <Col xs={true} className={styles.inputCol}>
                                <RomanjiInput
                                    value={answer}
                                    disabled={hasExhaustedKana || paused}
                                    onChange={(e) => this.setState({ answer: e.target.value })}
                                    placeholder={paused ? "Paused" : !hasExhaustedKana ? "Enter the romanji" : ""}
                                    onEnterKey={this.answerQuestion}
                                />
                            </Col>
                            <Col xs="auto" className={styles.tipCol}>
                                <HintButton
                                    kana={currentKana}
                                    quantity={hints}
                                    totalQuantity={settings.hints?.quantity?.valueOf() ?? 0}
                                    key={currentKana.code}
                                    title="Get a Hint"
                                    disabled={paused || !settings.hints.enabled}
                                    onUse={() => this.setState({ hasUsedHintThisKana: true })}
                                />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Button
                        className={styles.submit}
                        variant={!hasExhaustedKana ? "success" : "primary"}
                        type="button"
                        disabled={!answer && !hasExhaustedKana || paused}
                        onClick={!hasExhaustedKana ? this.answerQuestion : this.reset}
                    >
                        {!hasExhaustedKana ? "Check" : <><FontAwesomeIcon icon={faRedoAlt}/> Restart</>}
                    </Button>
                </Form>
            </Container>
        );
    }

    answerQuestion = () => {
        const { currentKana, correctAnswers, wrongAnswers, answer, remainingKana, lives, hints, hasUsedHintThisKana } = this.state;
        const { settings } = this.props;

        if (answer === currentKana.romanji) {
            //Add the current kana to the correct answers set.
            this.setState({ correctAnswers: correctAnswers.add(currentKana)});

            if (remainingKana.length === 0) {
                //If we're out of kana, stop the timer and let the component know the pool has been exhausted.
                this.timer.current?.stop();
                this.setState({ hasExhaustedKana: true, paused: false });
            } else {
                //If we're being timed per kana, reset the timer.
                this.countdown.current?.reset();

                //Pick a random remaining kana and remove it from the pool.
                const [nextKana, nextRemainingKana] = RandomNumberGenerator.getRandomObject(remainingKana);

                //Update the next kana to be displayed and the remaining kana with one less.
                this.setState({
                    currentKana: nextKana,
                    remainingKana: nextRemainingKana,
                    hasUsedHintThisKana: false,
                    hints: hasUsedHintThisKana ? hints - 1 : hints
                });
            }
        } else {
            this.kanaDisplay.current?.notifyIncorrect();
            this.setState({
                lives: settings.lives.enabled && !settings.time.countdown ? lives - 1 : lives,
                wrongAnswers: wrongAnswers.concat(currentKana)
            });
        }

        this.setState({ answer: "" });
    }

    reset = () => {
        const [nextKana, remainingKana] = RandomNumberGenerator.getRandomObject(this.props.kana);

        this.setState({
            currentKana: nextKana,
            remainingKana: remainingKana,
            answer: "",
            correctAnswers: new Set<Kana>(),
            wrongAnswers: [],
            paused: false,
            hasExhaustedKana: false,
        });

        this.timer.current?.restart();
        this.countdown.current?.reset();
    }

    private countDownTimeElapsed = () => {
        const { lives, wrongAnswers, currentKana, remainingKana, hasUsedHintThisKana, hints, failedToAnswer } = this.state;
        this.kanaDisplay.current?.notifyIncorrect();
        this.countdown.current?.reset();

        //Pick a random remaining kana and remove it from the pool.
        const [nextKana, nextRemainingKana] = RandomNumberGenerator.getRandomObject(remainingKana);

        this.setState({
            currentKana: nextKana,
            remainingKana: nextRemainingKana,
            hasUsedHintThisKana: false,
            hints: hasUsedHintThisKana ? hints - 1 : hints,
            lives: this.props.settings.lives.enabled ? lives - 1 : lives,
            wrongAnswers: wrongAnswers.concat(currentKana),
            answer: "",
            failedToAnswer: failedToAnswer + 1
        });
    }

    private close = () => {
        this.reset();
        this.props.onClose();
    }

    private onPaused = () => this.setState({ paused: !this.state.paused })
}

export default KanaMemoryTest;