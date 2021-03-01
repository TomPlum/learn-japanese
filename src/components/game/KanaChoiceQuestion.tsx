import React, { Component } from "react";
import { Kana } from "../../types/Kana";
import { Arrays } from "../../utility/Arrays";
import KanaDisplay from "./KanaDisplay";
import { Alert, Button, Col, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/game/KanaChoiceQuestion.module.scss";
import KanaQuestionBanner from "./KanaQuestionBanner";

interface KanaChoiceQuestionProps {
    expected: Kana;
    wrong: Kana[];
    hidden: boolean;
    onSubmit: (correct: boolean) => void;
}

interface KanaChoiceQuestionState {
    selected?: Kana;
    options: Kana[];
}

class KanaChoiceQuestion extends Component<KanaChoiceQuestionProps, KanaChoiceQuestionState> {

    private displays = new Map<Kana, React.RefObject<KanaDisplay>>();

    constructor(props: Readonly<KanaChoiceQuestionProps> | KanaChoiceQuestionProps) {
        super(props);

        const { expected, wrong } = this.props;

        const kana = Arrays.shuffle(wrong.concat(expected));

        kana.map(option => {
            const ref = React.createRef<KanaDisplay>();
            this.displays.set(option, ref);
        });

        this.state = {
            selected: undefined,
            options: kana
        }
    }

    render() {
        const { expected, hidden } = this.props;
        const { selected, options } = this.state;

        return (
            <>
                <KanaQuestionBanner value={expected} />

                <Row>
                    {options.map(option => {
                        return (
                            <Col xs={6}>
                                <KanaDisplay
                                    kana={option}
                                    blur={hidden}
                                    onClick={this.select}
                                    style={{
                                        container: selected === option ? styles.selected : styles.tile,
                                        character: { size: "md", color: selected === option ? "#34b7de" : undefined }
                                    }}
                                    ref={this.displays.get(option)}
                                />
                            </Col>
                        )
                    })}
                </Row>

                <Button variant={"success"} type="button" disabled={!selected || hidden} onClick={this.answer} block>
                    Check
                </Button>
            </>
        );
    }

    private answer = () => {
        const selected = this.state.selected;
        const correct = this.props.expected === selected;
        if (correct) {
            this.props.onSubmit(true);
        } else {
            if (selected) this.displays.get(selected)?.current?.notifyIncorrect();
            this.props.onSubmit(false);
        }
    }

    private select = (value: Kana) => {
        this.setState({ selected: value });
    }

}

export default KanaChoiceQuestion;