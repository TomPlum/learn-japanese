import React, { Component } from "react";
import KanaDisplay from "./KanaDisplay";
import { Col, Form, Row } from "react-bootstrap";
import RomajiInput from "./RomajiInput";
import HintButton from "./HintButton";
import { Kana } from "../../types/Kana";
import { HintSettings } from "../../types/GameSettings";
import SubmitButton from "../ui/SubmitButton";
import styles from "../../styles/sass/components/game/RomajiQuestion.module.scss";

export interface RomajiQuestionProps {
    kana: Kana;
    hidden: boolean;
    hintSettings: HintSettings;
    onSubmit: (correct: boolean) => void;
}

interface RomajiQuestionState {
    answer: string;
    hints: number;
    hasUsedHintThisQuestion: boolean;
}

class RomajiQuestion extends Component<RomajiQuestionProps, RomajiQuestionState> {

    private readonly kanaDisplay: React.RefObject<KanaDisplay>;

    constructor(props: Readonly<RomajiQuestionProps> | RomajiQuestionProps) {
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
                    style={ { character: { size: "xl" }} }
                />

                <Form>
                    <Form.Group controlId="answer">
                        <Row>
                            <Col xs={true} className={styles.inputCol}>
                                <RomajiInput
                                    value={answer}
                                    disabled={!kana || hidden}
                                    onChange={(value) => this.setState({ answer: value })}
                                    placeholder={hidden ? "Paused" : "Enter the Rōmaji"}
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

                    <SubmitButton onClick={this.answer} disabled={!answer && !!kana || hidden} isRestart={!kana} />
                </Form>
            </>
        );
    }

    private answer = () => {
        const { answer, hints, hasUsedHintThisQuestion } = this.state;
        const { kana } = this.props;

        if (kana.romaji.includes(answer.toLowerCase())) {
            this.props.onSubmit(true);
        } else {
            this.kanaDisplay.current?.notifyIncorrect();
            this.props.onSubmit(false);
        }

        this.setState({
            answer: "",
            hasUsedHintThisQuestion: false,
            hints: hasUsedHintThisQuestion ? hints - 1 : hints
        });
    }
}

export default RomajiQuestion;