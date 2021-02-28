import React, { Component } from "react";
import { Kana } from "../../types/Kana";
import { Arrays } from "../../utility/Arrays";
import KanaDisplay from "./KanaDisplay";
import { Button, Col, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/game/KanaChoiceQuestion.module.scss";

interface KanaChoiceQuestionProps {
    expected: Kana;
    wrong: Kana[];
    onSubmit: (correct: boolean) => void;
}

interface KanaChoiceQuestionState {
    selected?: Kana;
    options: Kana[];
}

class KanaChoiceQuestion extends Component<KanaChoiceQuestionProps, KanaChoiceQuestionState> {

    constructor(props: Readonly<KanaChoiceQuestionProps> | KanaChoiceQuestionProps) {
        super(props);

        const { expected, wrong } = this.props;

        this.state = {
            selected: undefined,
            options: Arrays.shuffle(wrong.concat(expected))
        }
    }

    render() {
        const { expected } = this.props;
        const { selected, options } = this.state;

        return (
            <>
                <p className={styles.question}>Which kana is '{expected.romanji}'?</p>
                <Row>
                    {options.map(option => {
                        return (
                            <Col xs={6} md={4}>
                                <KanaDisplay
                                    kana={option}
                                    onClick={this.select}
                                    style={{
                                        container: selected === option ? styles.selected : styles.tile,
                                        size: "md",
                                        color: selected === option ? "#34b7de" : "#FFF"
                                    }}
                                />
                            </Col>
                        )
                    })}
                </Row>

                <Button variant={"success"} type="button" disabled={!selected} onClick={this.answer} block>
                    Check
                </Button>
            </>
        );
    }

    private answer = () => this.props.onSubmit(this.props.expected === this.state.selected)

    private select = (value: Kana) => this.setState({ selected: value });

}

export default KanaChoiceQuestion;