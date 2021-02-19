import React, {Component} from "react";
import {Kana} from "../types/Kana";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import KanaTile from "./KanaTile";
import styles from "../styles/sass/components/KanaMemoryTest.module.scss";
import {Arrays} from "../utility/Arrays";
import {RandomNumberGenerator} from "../utility/RandomNumberGenerator";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Timer from "./Timer";
import {faRedoAlt, faTimes} from "@fortawesome/free-solid-svg-icons";

interface KanaMemoryTestProps {
    kana: Kana[];
    onClose: () => void;
}

interface KanaMemoryTestState {
    currentKana: Kana;
    answer: string | undefined;
    asked: Kana[];
    correctAnswers: number;
    askedQuantity: number;
    hasAnsweredIncorrectly: boolean;
    hasExhaustedKana: boolean;
    startTime: number;
    endTime: number | undefined;
}

class KanaMemoryTest extends Component<KanaMemoryTestProps, KanaMemoryTestState> {
    private readonly timer: React.RefObject<Timer>;

    constructor(props: KanaMemoryTestProps | Readonly<KanaMemoryTestProps>) {
        super(props);
        this.timer = React.createRef();

        const kana = this.props.kana;
        const initialKana = kana[new RandomNumberGenerator().getRandomArrayIndex(kana)];

        this.state = {
            currentKana: initialKana,
            answer: undefined,
            asked: [initialKana],
            correctAnswers: 0,
            askedQuantity: 1,
            hasAnsweredIncorrectly: false,
            hasExhaustedKana: false,
            startTime: Date.now(),
            endTime: undefined
        }
    }

    render() {
        const {
            currentKana, answer, hasAnsweredIncorrectly, hasExhaustedKana
        } = this.state;

        return (
            <Container className={styles.wrapper}>
                <Row noGutters>
                    <Col>
                        <FontAwesomeIcon icon={faTimes} className={styles.close} onClick={this.close.bind(this)}/>
                    </Col>
                    <Col>
                        <Timer className={styles.timer} ref={this.timer}/>
                    </Col>
                </Row>
                {hasAnsweredIncorrectly && <p>That's not right! Try again.</p>}
                <KanaTile kana={currentKana} key={currentKana.code}/>
                <Form>
                    <Form.Group controlId="answer">
                        <Form.Control
                            className={styles.input}
                            plaintext
                            disabled={hasExhaustedKana}
                            value={answer}
                            placeholder={!hasExhaustedKana ? "enter the romanji for the above kana" : ""}
                            onChange={(e) => this.setState({answer: e.target.value})}
                            onKeyPress={this.handleEnterKeySubmit.bind(this)}
                        />
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
        const {currentKana, correctAnswers, askedQuantity, asked, answer} = this.state;

        if (answer === currentKana.romanji) {
            const updatedAsked = asked.concat(currentKana);
            const remainingKana = Arrays.difference(this.props.kana, updatedAsked);
            const index = new RandomNumberGenerator().getRandomArrayIndex(remainingKana);

            if (remainingKana.length > 0) {
                this.setState({
                    askedQuantity: askedQuantity + 1,
                    currentKana: remainingKana[index],
                    hasAnsweredIncorrectly: false
                });
            } else {
                if (this.timer.current != null) this.timer.current.stop();
                this.setState({hasExhaustedKana: true, endTime: Date.now()});
            }
            this.setState({asked: updatedAsked, correctAnswers: correctAnswers + 1});
        } else {
            this.setState({hasAnsweredIncorrectly: true});
        }

        this.setState({answer: ""});
    }

    reset = () => {
        this.setState({
            currentKana: this.props.kana[0],
            answer: "",
            asked: [this.props.kana[0]],
            correctAnswers: 0,
            askedQuantity: 1,
            hasAnsweredIncorrectly: false,
            hasExhaustedKana: false,
            startTime: Date.now()
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
}

export default KanaMemoryTest;