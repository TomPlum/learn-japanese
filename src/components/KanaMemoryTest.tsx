import React, {Component} from "react";
import {Kana} from "../types/Kana";
import {Button, Col, Container, Form, ProgressBar, Row} from "react-bootstrap";
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
    answered: Kana[];
    hasAnsweredIncorrectly: boolean;
    hasExhaustedKana: boolean;
}

class KanaMemoryTest extends Component<KanaMemoryTestProps, KanaMemoryTestState> {
    private readonly timer: React.RefObject<Timer>;
    private readonly displayedKana: React.RefObject<KanaTile>;

    constructor(props: KanaMemoryTestProps | Readonly<KanaMemoryTestProps>) {
        super(props);
        this.timer = React.createRef();
        this.displayedKana = React.createRef();

        const kana = this.props.kana;
        const initialKana = kana[new RandomNumberGenerator().getRandomArrayIndex(kana)];

        this.state = {
            currentKana: initialKana,
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

                <KanaTile kana={currentKana} key={currentKana.code} ref={this.displayedKana}/>

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
        const {currentKana, answered, answer} = this.state;

        if (answer === currentKana.romanji) {
            const updatedAnswered = answered.concat(currentKana);
            const remainingKana = Arrays.intersect(this.props.kana, updatedAnswered);
            const index = new RandomNumberGenerator().getRandomArrayIndex(remainingKana);

            if (remainingKana.length > 0) {
                this.setState({currentKana: remainingKana[index], hasAnsweredIncorrectly: false});
            } else {
                if (this.timer.current != null) this.timer.current.stop();
                this.setState({hasExhaustedKana: true});
            }
            this.setState({answered: updatedAnswered});
        } else {
            if (this.displayedKana.current != null) this.displayedKana.current.notifyIncorrect();
            this.setState({hasAnsweredIncorrectly: true});
        }

        this.setState({answer: ""});
    }

    reset = () => {
        this.setState({
            currentKana: this.props.kana[0],
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
}

export default KanaMemoryTest;