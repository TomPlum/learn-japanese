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
import { HintQuantity } from "../../types/HintQuantity";

interface KanaMemoryTestProps {
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
}

class KanaMemoryTest extends Component<KanaMemoryTestProps, KanaMemoryTestState> {
    private readonly timer: React.RefObject<Timer>;
    private readonly kanaDisplay: React.RefObject<KanaDisplay>;

    constructor(props: KanaMemoryTestProps | Readonly<KanaMemoryTestProps>) {
        super(props);

        this.timer = React.createRef();
        this.kanaDisplay = React.createRef();

        const { settings } = this.props;

        const [firstKana, remainingKana] = this.getRandomKana(this.props.kana);

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
            hasUsedHintThisKana: false
        }
    }

    render() {
        const { currentKana, answer, correctAnswers, hasExhaustedKana, paused, lives, hints } = this.state;
        const { kana, settings } = this.props;

        return (
            <Container className={styles.wrapper}>
                <Row noGutters>
                    <Col xs={12}>
                        <ProgressBar
                            animated={!hasExhaustedKana}
                            className={styles.progress}
                            now={(correctAnswers.size / kana.length) * 100}
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
        const { currentKana, correctAnswers, wrongAnswers, answer, remainingKana, lives, hints } = this.state;

        if (answer === currentKana.romanji) {
            //Add the current kana to the correct answers set.
            this.setState({ correctAnswers: correctAnswers.add(currentKana)});

            if (remainingKana.length === 0) {
                //If we're out of kana, stop the timer and let the component know the pool has been exhausted.
                this.timer.current?.stop();
                this.setState({ hasExhaustedKana: true, paused: false });
            } else {
                //Pick a random remaining kana and remove it from the pool.
                const [nextKana, nextRemainingKana] = this.getRandomKana(remainingKana);

                //Update the next kana to be displayed and the remaining kana with one less.
                this.setState({
                    currentKana: nextKana,
                    remainingKana: nextRemainingKana,
                    hasUsedHintThisKana: false,
                    hints: hints - 1
                });
            }
        } else {
            const livesRemaining = lives - 1;
            this.kanaDisplay.current?.notifyIncorrect();

            if (livesRemaining === 0) {
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
            this.setState({ lives: livesRemaining, wrongAnswers: wrongAnswers.concat(currentKana) });
        }

        this.setState({ answer: "" });
    }

    reset = () => {
        const [nextKana, remainingKana] = this.getRandomKana(this.props.kana);

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
    }

    private onUseHint = () => {
        const { hints, hasUsedHintThisKana } = this.state;
        if (!hasUsedHintThisKana) {
            this.setState({ hints: hints - 1, hasUsedHintThisKana: true });
        }
    }

    private close = () => this.props.onClose();

    private onPaused = () => this.setState({ paused: !this.state.paused })


    /**
     * Picks a random Kana from the given pool and removes it.
     * @param pool The array of Kana to choose from.
     * @returns A two-element tuple containing the randomly chosen kana and the trimmed pool.
     */
    private getRandomKana = (pool: Kana[]): [Kana, Kana[]] => {
        const kana = [...pool];
        const randomKanaIndex = RandomNumberGenerator.getRandomArrayIndex(kana);
        const firstKana = kana[randomKanaIndex];
        kana.splice(randomKanaIndex, 1);
        return [firstKana, kana];
    };
}

export default KanaMemoryTest;