import React, { Component } from "react";
import { Kana } from "../types/Kana";
import { Button, Col, Container, Form, ProgressBar, Row } from "react-bootstrap";
import KanaDisplay from "./KanaDisplay";
import styles from "../styles/sass/components/KanaMemoryTest.module.scss";
import { RandomNumberGenerator } from "../utility/RandomNumberGenerator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Timer from "./Timer";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import TipButton from "./TipButton";
import RomanjiInput from "./RomanjiInput";
import { GameSettings } from "../types/GameSettings";
import LifeDisplay from "./LifeDisplay";
import { LifeQuantity } from "../types/LifeQuantity";
import QuitButton from "./QuitButton";

interface KanaMemoryTestProps {
    kana: Kana[];
    settings: GameSettings;
    onClose: () => void;
}

interface KanaMemoryTestState {
    currentKana: Kana;
    answer: string | undefined;
    remainingKana: Kana[];
    answered: Kana[];
    hasAnsweredIncorrectly: boolean;
    hasExhaustedKana: boolean;
    paused: boolean;
    lives: number;
}

class KanaMemoryTest extends Component<KanaMemoryTestProps, KanaMemoryTestState> {
    private readonly timer: React.RefObject<Timer>;
    private readonly kanaDisplay: React.RefObject<KanaDisplay>;

    constructor(props: KanaMemoryTestProps | Readonly<KanaMemoryTestProps>) {
        super(props);
        this.timer = React.createRef();
        this.kanaDisplay = React.createRef();

        const [firstKana, remainingKana] = this.getRandomKana(this.props.kana);

        this.state = {
            currentKana: firstKana,
            remainingKana: remainingKana,
            answer: undefined,
            answered: [],
            hasAnsweredIncorrectly: false,
            hasExhaustedKana: false,
            paused: false,
            lives: this.props.settings.lives.valueOf()
        }
    }

    render() {
        const { currentKana, answer, answered, hasExhaustedKana, paused, lives } = this.state;
        const { kana, settings } = this.props;

        return (
            <Container className={styles.wrapper}>
                <Row noGutters>
                    <Col xs={12}>
                        <ProgressBar
                            animated={!hasExhaustedKana}
                            className={styles.progress}
                            now={(answered.length / kana.length) * 100}
                            variant={hasExhaustedKana ? "success" : undefined}
                        />
                    </Col>
                    <Col>
                        <QuitButton onClick={this.close} />
                    </Col>
                    <Col className={styles.lifeDisplayContainer}>
                        {settings.lives !== LifeQuantity.UNLIMITED && <LifeDisplay hearts={lives} />}
                    </Col>
                    <Col>
                        {settings.showTime &&
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
                                <TipButton kana={currentKana} key={currentKana.code} title="Help" disabled={paused}/>
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
        const { currentKana, answered, answer, remainingKana, lives } = this.state;

        if (answer === currentKana.romanji) {
            //Add the current kana to the answered array.
            const updatedAnswered = answered.concat(currentKana);
            this.setState({ answered: updatedAnswered });

            if (remainingKana.length === 0) {
                //If we're out of kana, stop the timer and let the component know the pool has been exhausted.
                if (this.timer.current != null) this.timer.current.stop();
                this.setState({ hasExhaustedKana: true, paused: false });
            } else {
                //Pick a random remaining kana and remove it from the pool.
                const [nextKana, nextRemainingKana] = this.getRandomKana(remainingKana);

                //Update the next kana to be displayed and the remaining kana with one less.
                this.setState({
                    currentKana: nextKana,
                    remainingKana: nextRemainingKana,
                    hasAnsweredIncorrectly: false
                });
            }
        } else {
            const livesRemaining = lives - 1;
            if (this.kanaDisplay.current != null) this.kanaDisplay.current.notifyIncorrect();

            if (livesRemaining === 0) {

            }
            this.setState({ hasAnsweredIncorrectly: true, lives: livesRemaining });
        }

        this.setState({ answer: "" });
    }

    reset = () => {
        const [nextKana, remainingKana] = this.getRandomKana(this.props.kana);

        this.setState({
            currentKana: nextKana,
            remainingKana: remainingKana,
            answer: "",
            answered: [],
            paused: false,
            hasAnsweredIncorrectly: false,
            hasExhaustedKana: false,
        });
        if (this.timer.current != null) this.timer.current.restart();
    }

    close = () => this.props.onClose();

    onPaused = () => {
        const paused = this.state.paused;
        this.setState({ paused: !paused })
    }

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