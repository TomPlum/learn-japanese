import {Component} from "react";
import {Kana} from "../types/Kana";
import {Button, Container, Form} from "react-bootstrap";
import KanaTile from "./KanaTile";
import styles from "../styles/sass/components/KanaMemoryTest.module.scss";
import {Arrays} from "../utility/Arrays";

interface KanaMemoryTestProps {
    kana: Kana[];
}

interface KanaMemoryTestState {
    currentKana: Kana;
    answer: string;
    asked: Kana[];
    correctAnswers: number;
    askedQuantity: number;
    hasAnsweredIncorrectly: boolean;
    hasExhaustedKana: boolean;
}

class KanaMemoryTest extends Component<KanaMemoryTestProps, KanaMemoryTestState> {
    constructor(props: KanaMemoryTestProps | Readonly<KanaMemoryTestProps>) {
        super(props);
        this.state = {
            currentKana: this.props.kana[0],
            answer: "",
            asked: [this.props.kana[0]],
            correctAnswers: 0,
            askedQuantity: 1,
            hasAnsweredIncorrectly: false,
            hasExhaustedKana: false
        }
    }

    answerQuestion = () => {
        const { currentKana, correctAnswers, askedQuantity, asked, answer } = this.state;

        if (answer === currentKana.romanji) {
            let updatedAsked = asked.concat(currentKana);
            let remainingKana = Arrays.difference(this.props.kana, updatedAsked);

            if (remainingKana.length > 0) {
                this.setState({
                    askedQuantity: askedQuantity + 1,
                    currentKana: remainingKana[0],
                    hasAnsweredIncorrectly: false
                });
            } else {
                this.setState({
                    hasExhaustedKana: true,
                });
            }
            this.setState({
                asked: updatedAsked,
                correctAnswers: correctAnswers + 1
            });
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
            hasExhaustedKana: false
        });
    }

    render() {
        const {
            currentKana, correctAnswers, askedQuantity, answer, hasAnsweredIncorrectly, hasExhaustedKana
        } = this.state;

        return (
            <Container>
                <p>{correctAnswers}/{askedQuantity}</p>
                {hasAnsweredIncorrectly && <p>That's not right! Try again.</p>}
                {hasExhaustedKana &&
                    <Form>
                        <Form.Label>You've answered all the kana!</Form.Label>
                        <Button variant="info" type="button" onClick={this.reset.bind(this)}>Go Again</Button>
                    </Form>
                }
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
                        />
                    </Form.Group>
                    <Button
                        className={styles.submit}
                        variant="success"
                        type="button"
                        disabled={!answer}
                        onClick={this.answerQuestion.bind(this)}
                    >
                        Answer
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default KanaMemoryTest;