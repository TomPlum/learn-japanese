import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { GameQuestionProps } from "../MemoryGame";
import GameQuestion from "../../../types/game/GameQuestion";
import styles from "../../../styles/sass/components/game/questions/RomajiQuestion.module.scss";
import QuestionDisplay from "../../ui/display/QuestionDisplay";
import AnswerInputField from "../../ui/fields/AnswerInputField";
import LearnableField from "../../../types/learn/LearnableField";

export interface TextQuestionProps extends GameQuestionProps {
    question: string;
    answerField: LearnableField;
    answers: (string | undefined)[];
    className?: string;
}

interface TextQuestionState {
    answer: string;
}

class TextQuestion extends GameQuestion<TextQuestionProps, TextQuestionState> {

    private readonly display: React.RefObject<QuestionDisplay>;

    constructor(props: Readonly<TextQuestionProps> | TextQuestionProps) {
        super(props);

        this.display = React.createRef();

        this.state = {
            answer: "",
        }
    }

    render() {
        const { question, hidden, className, answerField } = this.props;
        const { answer } = this.state;

        return (
            <div className={className}>
                <QuestionDisplay
                    question={question}
                    blur={hidden}
                    key={question}
                    ref={this.display}
                />

                <Form>
                    <Form.Group controlId="answer">
                        <Row>
                            <Col xs={12}>
                                <AnswerInputField
                                    value={answer}
                                    field={answerField}
                                    disabled={!question || hidden}
                                    onChange={this.handleInputChange}
                                    placeholder={hidden ? "Paused" : "Enter the Rōmaji"}
                                    className={styles.input}
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </div>
        );
    }

    private handleInputChange = (value: string) => {
        this.props.isValid(!!value);
        this.setState({ answer: value });
    }

    isCorrect = () => {
        const { answer } = this.state;
        const { answers } = this.props;

        this.setState({ answer: "" });

        if (answers.includes(answer.toLowerCase())) {
            return true;
        } else {
            this.display.current?.notifyIncorrect();
            return false;
        }
    }
}

export default TextQuestion;