import React from "react";
import KanaDisplay, { KanaDisplayStyle } from "./KanaDisplay";
import { Col, Form, Row } from "react-bootstrap";
import RomajiInput from "./RomajiInput";
import { Kana } from "../../types/kana/Kana";
import { GameQuestionProps } from "./MemoryGame";
import GameQuestion from "./GameQuestion";
import styles from "../../styles/sass/components/game/RomajiQuestion.module.scss";

export interface RomajiQuestionProps extends GameQuestionProps {
    kana: Kana;
    className?: string;
    displayStyle?: KanaDisplayStyle;
}

interface RomajiQuestionState {
    answer: string;
}

class RomajiQuestion extends GameQuestion<RomajiQuestionProps, RomajiQuestionState> {

    private readonly display: React.RefObject<KanaDisplay>;

    constructor(props: Readonly<RomajiQuestionProps> | RomajiQuestionProps) {
        super(props);

        this.display = React.createRef();

        this.state = {
            answer: "",
        }
    }

    render() {
        const { kana, hidden, className, displayStyle } = this.props;
        const { answer } = this.state;

        return (
            <div className={className}>
                <KanaDisplay
                    kana={kana}
                    key={kana.code}
                    ref={this.display}
                    blur={hidden}
                    style={displayStyle}
                />

                <Form>
                    <Form.Group controlId="answer">
                        <Row>
                            <Col xs={12}>
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