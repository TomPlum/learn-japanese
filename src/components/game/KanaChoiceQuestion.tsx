import React from "react";
import { Kana } from "../../types/Kana";
import Arrays from "../../utility/Arrays";
import KanaDisplay from "./KanaDisplay";
import { Col, Row } from "react-bootstrap";
import KanaQuestionBanner from "./KanaQuestionBanner";
import { KanaQuestionProps } from "./KanaMemoryGame";
import KanaQuestion from "./KanaQuestion";
import styles from "../../styles/sass/components/game/KanaChoiceQuestion.module.scss";

export interface KanaChoiceQuestionProps extends KanaQuestionProps {
    expected: Kana;
    wrong: Kana[];
    hidden: boolean;
}

interface KanaChoiceQuestionState {
    selected?: Kana;
    options: Kana[];
}

class KanaChoiceQuestion extends KanaQuestion<KanaChoiceQuestionProps, KanaChoiceQuestionState> {

    private displays = new Map<Kana, React.RefObject<KanaDisplay>>();
    private indices = new Map<number, Kana>();

    constructor(props: Readonly<KanaChoiceQuestionProps> | KanaChoiceQuestionProps) {
        super(props);

        const { expected, wrong } = this.props;

        const kana = Arrays.shuffle(wrong.concat(expected));

        kana.forEach((option, i) => {
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
            <div className={styles.wrapper}>
                <KanaQuestionBanner value={expected} />

                <Row>
                    {options.map((option, i) => {
                        return (
                            <Col lg={options.length === 6 ? 4 : 6} xs={6} key={"col-" + i}>
                                <KanaDisplay
                                    kana={option}
                                    blur={hidden}
                                    index={i + 1}
                                    onClick={this.select}
                                    style={{
                                        container: selected === option ? styles.selected : styles.tile,
                                        character: { className: styles.kana, color: selected === option ? "#268ce5" : undefined }
                                    }}
                                    ref={this.displays.get(option)}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </div>
        );
    }

    isCorrect = () => {
        const { selected } = this.state;
        if (this.props.expected === selected) {
            return true;
        } else {
            this.displays.get(selected as Kana)?.current?.notifyIncorrect();
            this.setState({ selected: undefined });
            return false;
        }
    }

    private select = (value?: Kana) => {
        const { selected } = this.state;
        if (!selected) {
            this.props.isValid(true);
        }
        this.setState({ selected: value });
    }

    private handleKeySelection = (e: KeyboardEvent) => {
        e.preventDefault();

        //Handle Numbers (1 - Tile Quantity)
        if ([...this.indices.keys()].map(i => i.toString()).includes(e.key)) {
            const kana = this.indices.get(Number(e.key));
            this.select(kana);
        }
    }
}

export default KanaChoiceQuestion;