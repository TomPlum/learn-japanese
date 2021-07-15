import React from "react";
import Arrays from "../../../utility/Arrays";
import { Alert, Col, Row } from "react-bootstrap";
import { GameQuestionProps } from "../MemoryGame";
import styles from "../../../styles/sass/components/game/questions/KanaChoiceQuestion.module.scss";
import GameQuestion from "../../../types/game/GameQuestion";
import AnswerChoiceDisplay from "../../ui/display/AnswerChoiceDisplay";
import LearnableField from "../../../types/learn/LearnableField";
import { Learnable } from "../../../types/learn/Learnable";

export interface ChoiceQuestionProps extends GameQuestionProps {
    question: Learnable;
    questionField: LearnableField;
    answerField: LearnableField;
    wrong: string[];
}

interface ChoiceQuestionState {
    selected?: string;
    options: string[];
}

class ChoiceQuestion extends GameQuestion<ChoiceQuestionProps, ChoiceQuestionState> {

    private displays = new Map<string, React.RefObject<AnswerChoiceDisplay>>();
    private indices = new Map<number, string>();

    constructor(props: Readonly<ChoiceQuestionProps> | ChoiceQuestionProps) {
        super(props);

        const { question, answerField, wrong } = this.props;

        const expected = question.getFieldValues(answerField)[0];
        if (!expected) throw new Error("Expected Answer is null");

        const options = Arrays.shuffle(wrong.concat(expected));

        options.forEach((option, i) => {
            const ref = React.createRef<AnswerChoiceDisplay>();
            this.displays.set(option, ref);
            this.indices.set(i + 1, option);
        });

        this.state = {
            selected: undefined,
            options: options
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeySelection);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeySelection);
    }

    render() {
        const { question, hidden, questionField, answerField } = this.props;
        const { selected, options } = this.state;

        return (
            <div className={styles.wrapper}>
                <Alert variant="info">{/*TODO: Extract to it's own component and style*/}
                    What is the {answerField.name.toLowerCase()} for '{question.getFieldValues(questionField)[0]}' ?
                </Alert>

                <Row>
                    {options.map((option, i) => {
                        return (
                            <Col lg={options.length === 6 ? 4 : 6} xs={6} key={"col-" + i}>
                                <AnswerChoiceDisplay
                                    value={option}
                                    blur={hidden}
                                    index={i + 1}
                                    onClick={this.select}
                                    style={{
                                        container: selected === option ? styles.selected : styles.tile,
                                        character: {
                                            className: styles.kana,
                                            color: selected === option ? "#268ce5" : "#FFF"
                                        }
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
        const { question, answerField } = this.props;
        const { selected } = this.state;
        const expected = question.getFieldValues(answerField)[0];

        if (expected === selected) {
            return true;
        } else {
            if (selected) this.displays.get(selected)?.current?.notifyIncorrect();
            this.setState({ selected: undefined });
            return false;
        }
    }

    private select = (value?: string) => {
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
            const tile = this.indices.get(Number(e.key));
            this.select(tile);
        }
    }
}

export default ChoiceQuestion;