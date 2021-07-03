import React from "react";
import Arrays from "../../utility/Arrays";
import { Col, Row } from "react-bootstrap";
import { Learnable } from "../../types/learn/Learnable";
import GameQuestion from "./GameQuestion";
import KanaDisplay from "./KanaDisplay";
import KanaQuestionBanner from "./KanaQuestionBanner";
import { GameQuestionProps } from "./MemoryGame";
import { Kana } from "../../types/kana/Kana";
import styles from "../../styles/sass/components/game/KanaChoiceQuestion.module.scss";

export interface LearnableChoiceQuestionProps extends GameQuestionProps {
    expected: Learnable;
    wrong: Learnable[];
}

interface LearnableChoiceQuestionState {
    selected?: Learnable;
    options: Learnable[];
}

class LearnableChoiceQuestion extends GameQuestion<LearnableChoiceQuestionProps, LearnableChoiceQuestionState> {

    private displays = new Map<Learnable, React.RefObject<KanaDisplay>>();
    private indices = new Map<number, Learnable>();

    constructor(props: Readonly<LearnableChoiceQuestionProps> | LearnableChoiceQuestionProps) {
        super(props);

        const { expected, wrong } = this.props;

        const Learnable = Arrays.shuffle(wrong.concat(expected));

        Learnable.forEach((option, i) => {
            const ref = React.createRef<KanaDisplay>();
            this.displays.set(option, ref);
            this.indices.set(i + 1, option);
        });

        this.state = {
            selected: undefined,
            options: Learnable
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
                <KanaQuestionBanner value={expected as Kana} />

                <Row>
                    {options.map((option, i) => {
                        return (
                            <Col lg={options.length === 6 ? 4 : 6} xs={6} key={"col-" + i}>
                                <KanaDisplay
                                    kana={option as Kana}
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
            this.displays.get(selected as Learnable)?.current?.notifyIncorrect();
            this.setState({ selected: undefined });
            return false;
        }
    }

    private select = (value?: Learnable) => {
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
            const Learnable = this.indices.get(Number(e.key));
            this.select(Learnable);
        }
    }
}

export default LearnableChoiceQuestion;