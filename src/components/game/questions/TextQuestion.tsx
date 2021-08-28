import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { GameQuestionProps } from "../MemoryGame";
import GameQuestion from "../../../domain/game/GameQuestion";
import QuestionDisplay from "../../ui/display/QuestionDisplay";
import AnswerInputField from "../../ui/fields/AnswerInputField";
import LearnableField from "../../../domain/learn/LearnableField";
import styles from "../../../styles/sass/components/game/questions/TextQuestion.module.scss";

export interface TextQuestionProps extends GameQuestionProps {
    question: string;
    answerField: LearnableField;
    answers: string[];
    className?: string;
}

interface TextQuestionState {
    answer: string;
}

class TextQuestion extends GameQuestion<TextQuestionProps, TextQuestionState> {

    //TODO: typeof QuestionDisplay doesn't work for some reason
    private readonly display: React.RefObject<any>;

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
            <div className={[className, styles.wrapper].join(" ")}>
                <QuestionDisplay
                    blur={hidden}
                    key={question}
                    ref={this.display}
                    question={question}
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
                                    placeholder={hidden ? "Paused" : answerField.name}
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
