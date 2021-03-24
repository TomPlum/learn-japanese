import React from "react";
import KanaDisplay from "./KanaDisplay";
import { Col, Form, Row } from "react-bootstrap";
import RomajiInput from "./RomajiInput";
import { Kana } from "../../types/Kana";
import styles from "../../styles/sass/components/game/RomajiQuestion.module.scss";
import { KanaQuestionProps } from "./KanaMemoryGame";
import KanaQuestion from "./KanaQuestion";

export interface RomajiQuestionProps extends KanaQuestionProps {
    kana: Kana;
    hidden: boolean;
    className?: string;
}

interface RomajiQuestionState {
    answer: string;
}

class RomajiQuestion extends KanaQuestion<RomajiQuestionProps, RomajiQuestionState> {

    private readonly display: React.RefObject<KanaDisplay>;

    constructor(props: Readonly<RomajiQuestionProps> | RomajiQuestionProps) {
        super(props);

        this.display = React.createRef();

        this.state = {
            answer: "",
        }
    }

    render() {
        const { kana, hidden, className } = this.props;
        const { answer } = this.state;

        return (
            <div className={className}>
                <KanaDisplay
                    kana={kana}
                    key={kana.code}
                    ref={this.display}
                    blur={hidden}
                    style={ { character: { size: "xl" }} }
                />

                <Form>
                    <Form.Group controlId="answer">
                        <Row>
                            <Col xs={true} className={styles.inputCol}>
                                <RomajiInput
                                    value={answer}
                                    disabled={!kana || hidden}
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
        const { kana } = this.props;

        this.setState({ answer: "" });

        if (kana.romaji.includes(answer.toLowerCase())) {
            return true;
        } else {
            this.display.current?.notifyIncorrect();
            return false;
        }
    }
}

export default RomajiQuestion;