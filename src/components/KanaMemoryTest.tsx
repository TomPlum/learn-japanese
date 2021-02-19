import React, {Component} from "react";
import {Kana} from "../types/Kana";
import {Button, Col, Container, Form, ProgressBar, Row} from "react-bootstrap";
import KanaDisplay from "./KanaDisplay";
import styles from "../styles/sass/components/KanaMemoryTest.module.scss";
import {RandomNumberGenerator} from "../utility/RandomNumberGenerator";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Timer from "./Timer";
import {faRedoAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import TipButton from "./TipButton";

interface KanaMemoryTestProps {
    kana: Kana[];
    onClose: () => void;
}

interface KanaMemoryTestState {
    currentKana: Kana;
    answer: string | undefined;
    remainingKana: Kana[];
    answered: Kana[];
    hasAnsweredIncorrectly: boolean;
    hasExhaustedKana: boolean;
}

class KanaMemoryTest extends Component<KanaMemoryTestProps, KanaMemoryTestState> {
    private readonly  rng = new RandomNumberGenerator();

    private readonly timer: React.RefObject<Timer>;
    private readonly kanaDisplay: React.RefObject<KanaDisplay>;

    constructor(props: KanaMemoryTestProps | Readonly<KanaMemoryTestProps>) {
        super(props);
        this.timer = React.createRef();
        this.kanaDisplay = React.createRef();

        const [ firstKana, remainingKana ] = this.getRandomKana(this.props.kana);

        this.state = {
            currentKana: firstKana,
            remainingKana: remainingKana,
            answer: undefined,
            answered: [],
            hasAnsweredIncorrectly: false,
            hasExhaustedKana: false,
        }
    }

    render() {
        const { currentKana, answer, answered, hasExhaustedKana } = this.state;
        const { kana } = this.props;

        return (
            <Container className={styles.wrapper}>
                <Row noGutters>
                    <Col xs={12}>
                        <ProgressBar
                            className={styles.progress}
                            now={(answered.length / kana.length) * 100}
                            variant={hasExhaustedKana ? "success" : undefined}
                        />
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faTimes} className={styles.close} onClick={this.close.bind(this)}/>
                    </Col>
                    <Col>
                        <Timer className={styles.timer} ref={this.timer}/>
                    </Col>
                </Row>

                <KanaDisplay kana={currentKana} key={currentKana.code} ref={this.kanaDisplay}/>

                <Form>
                    <Form.Group controlId="answer">
                        <Row>
                            <Col xs={true} className={styles.inputCol}>
                                <Form.Control
                                    className={styles.input}
                                    plaintext
                                    disabled={hasExhaustedKana}
                                    value={answer}
                                    placeholder={!hasExhaustedKana ? "enter the romanji for the above kana" : ""}
                                    onChange={(e) => this.setState({answer: e.target.value})}
                                    onKeyPress={this.handleEnterKeySubmit.bind(this)}
                                />
                            </Col>
                            <Col xs="auto" className={styles.tipCol}>
                                <TipButton kana={currentKana} key={currentKana.code} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Button
                        className={styles.submit}
                        variant={!hasExhaustedKana ? "success" : "info"}
                        type="button"
                        disabled={!answer && !hasExhaustedKana}
                        onClick={!hasExhaustedKana ? this.answerQuestion.bind(this) : this.reset.bind(this)}
                    >
                        {!hasExhaustedKana ? "Check" : <><FontAwesomeIcon icon={faRedoAlt}/> Restart</>}
                    </Button>
                </Form>
            </Container>
        );
    }

    answerQuestion = () => {
        const { currentKana, answered, answer, remainingKana } = this.state;

        if (answer === currentKana.romanji) {
            //Add the current kana to the answered array.
            const updatedAnswered = answered.concat(currentKana);
            this.setState({answered: updatedAnswered});

            if (remainingKana.length === 0) {
                //If we're out of kana, stop the timer and let the component know the pool has been exhausted.
                if (this.timer.current != null) this.timer.current.stop();
                this.setState({hasExhaustedKana: true});
            } else {
                //Pick a random remaining kana and remove it from the pool.
                const [ nextKana, nextRemainingKana ] = this.getRandomKana(remainingKana);

                //Update the next kana to be displayed and the remaining kana with one less.
                this.setState({
                    currentKana: nextKana,
                    remainingKana: nextRemainingKana,
                    hasAnsweredIncorrectly: false
                });
            }
        } else {
            if (this.kanaDisplay.current != null) this.kanaDisplay.current.notifyIncorrect();
            this.setState({hasAnsweredIncorrectly: true});
        }

        this.setState({answer: ""});
    }

    reset = () => {
        const [ nextKana, remainingKana ] = this.getRandomKana(this.props.kana);

        this.setState({
            currentKana: nextKana,
            remainingKana: remainingKana,
            answer: "",
            answered: [],
            hasAnsweredIncorrectly: false,
            hasExhaustedKana: false,
        });
        if (this.timer.current != null) this.timer.current.restart();
    }

    handleEnterKeySubmit = (event: any) => {
        const {answer} = this.state;
        if (event.charCode === 13) {
            event.preventDefault();
            if (answer) {
                this.answerQuestion();
            }
        }
        return false;
    }

    close = () => this.props.onClose();

    /**
     * Picks a random Kana from the given pool and removes it.
     * @param pool The array of Kana to choose from.
     * @returns A two-element tuple containing the randomly chosen kana and the trimmed pool.
     */
    private getRandomKana(pool: Kana[]): [Kana, Kana[]] {
        const kana = [...pool];
        const randomKanaIndex = this.rng.getRandomArrayIndex(kana);
        const firstKana = kana[randomKanaIndex];
        kana.splice(randomKanaIndex, 1);
        return [firstKana, kana];
    }
}

export default KanaMemoryTest;