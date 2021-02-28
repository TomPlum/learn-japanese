import React, { Component } from "react";
import KanaDisplay from "./KanaDisplay";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/game/KanaMemoryTest.module.scss";
import RomanjiInput from "./RomanjiInput";
import HintButton from "./HintButton";
import { Kana } from "../../types/Kana";
import { HintSettings } from "../../types/GameSettings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";

interface RomanjiQuestionProps {
    kana: Kana;
    hidden: boolean;
    hintSettings: HintSettings;
    onSubmit: (correct: boolean) => void;
}

interface RomanjiQuestionState {
    answer: string;
    hints: number;
    hasUsedHintThisQuestion: boolean;
}

class RomanjiQuestion extends Component<RomanjiQuestionProps, RomanjiQuestionState> {

    private readonly kanaDisplay: React.RefObject<KanaDisplay>;

    constructor(props: Readonly<RomanjiQuestionProps> | RomanjiQuestionProps) {
        super(props);

        this.kanaDisplay = React.createRef();

        this.state = {
            answer: "",
            hints: this.props.hintSettings?.quantity?.valueOf() ?? 0,
            hasUsedHintThisQuestion: false
        }
    }

    render() {
        const { kana, hidden, hintSettings } = this.props;
        const { answer, hints } = this.state;

        return (
            <>
                <KanaDisplay
                    kana={kana}
                    key={kana.code}
                    ref={this.kanaDisplay}
                    blur={hidden}
                    style={{ size: "xl" }}
                />

                <Form>
                    <Form.Group controlId="answer">
                        <Row>
                            <Col xs={true} className={styles.inputCol}>
                                <RomanjiInput
                                    value={answer}
                                    disabled={!kana || hidden}
                                    onChange={(e) => this.setState({ answer: e.target.value })}
                                    placeholder={hidden ? "Paused" : "Enter the romanji"}
                                    onEnterKey={this.answer}
                                />
                            </Col>
                            <Col xs="auto" className={styles.tipCol}>
                                <HintButton
                                    kana={kana}
                                    quantity={hints}
                                    totalQuantity={hintSettings.quantity?.valueOf() ?? 0}
                                    key={kana.code}
                                    title="Get a Hint"
                                    disabled={hidden || !hintSettings.enabled}
                                    onUse={() => this.setState({ hasUsedHintThisQuestion: true })}
                                />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Button
                        className={styles.submit}
                        variant={!!kana ? "success" : "primary"}
                        type="button"
                        disabled={!answer && !!kana || hidden}
                        onClick={this.answer}
                    >
                        {!!kana ? "Check" : <><FontAwesomeIcon icon={faRedoAlt}/> Restart</>}
                    </Button>
                </Form>
            </>
        );
    }

    private answer = () => {
        const { answer, hints, hasUsedHintThisQuestion } = this.state;
        const { kana } = this.props;

        if (answer === kana.romanji) {
            this.props.onSubmit(true);
            this.setState({
                hasUsedHintThisQuestion: false,
                hints: hasUsedHintThisQuestion ? hints - 1 : hints
            });
        } else {
            this.kanaDisplay.current?.notifyIncorrect();
            this.props.onSubmit(false);
        }

        this.setState({ answer: "" });
    }
}

export default RomanjiQuestion;