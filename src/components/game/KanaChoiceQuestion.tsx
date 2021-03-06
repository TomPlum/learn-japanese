import React, { Component } from "react";
import { Kana } from "../../types/Kana";
import Arrays from "../../utility/Arrays";
import KanaDisplay from "./KanaDisplay";
import { Button, Col, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/game/KanaChoiceQuestion.module.scss";
import KanaQuestionBanner from "./KanaQuestionBanner";

export interface KanaChoiceQuestionProps {
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
    private indices = new Map<number, Kana>();

    constructor(props: Readonly<KanaChoiceQuestionProps> | KanaChoiceQuestionProps) {
        super(props);

        const { expected, wrong } = this.props;

        const kana = Arrays.shuffle(wrong.concat(expected));

        kana.map((option, i) => {
            const ref = React.createRef<KanaDisplay>();
            this.displays.set(option, ref);
            this.indices.set(i + 1, option);
        });

        this.state = {
            selected: undefined,
            options: kana
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeySelection);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeySelection);
    }

    render() {
        const { expected, hidden } = this.props;
        const { selected, options } = this.state;

        return (
            <div>
                <KanaQuestionBanner value={expected} />

                <Row>
                    {options.map((option, i) => {
                        return (
                            <Col xs={6}>
                                <KanaDisplay
                                    kana={option}
                                    blur={hidden}
                                    index={i + 1}
                                    onClick={this.select}
                                    style={{
                                        container: selected === option ? styles.selected : styles.tile,
                                        character: { size: "md", color: selected === option ? "#43ea5f" : undefined }
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
            </div>
        );
    }

    private answer = () => {
        const { selected } = this.state;
        if (this.props.expected === selected) {
            this.props.onSubmit(true);
        } else {
            this.displays.get(selected as Kana)?.current?.notifyIncorrect();
            this.props.onSubmit(false);
        }
    }

    private select = (value?: Kana) => this.setState({ selected: value });

    private handleKeySelection = (e: KeyboardEvent) => {
        e.preventDefault();

        //Handle Numbers (1 - Tile Quantity)
        if ([...this.indices.keys()].map(i => i.toString()).includes(e.key)) {
            const kana = this.indices.get(Number(e.key));
            this.select(kana);
        }

        if (this.state.selected && e.key === 'Enter') {
            this.answer();
        }
    }

}

export default KanaChoiceQuestion;