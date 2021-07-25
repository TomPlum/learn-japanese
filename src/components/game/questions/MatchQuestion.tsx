import React from "react";
import { GameQuestionProps } from "../MemoryGame";
import { Col, Container, Row } from "react-bootstrap";
import AnswerChoiceDisplay from "../../ui/display/AnswerChoiceDisplay";
import GameQuestion from "../../../types/game/GameQuestion";
import LineTo from "react-lineto";
import styles from "../../../styles/sass/components/game/questions/MatchQuestion.module.scss";
import Maps from "../../../utility/Maps";

export interface MatchQuestionProps extends GameQuestionProps {
    data: Map<string, string>;
}

interface MatchQuestionState {
    answer: Map<string, string>;
    selected?: string;
    hoveredAnswer?: string;
    xCursor: number;
    yCursor: number;
}

class MatchQuestion extends GameQuestion<MatchQuestionProps, MatchQuestionState> {

    private readonly container = React.createRef<HTMLDivElement>();

    constructor(props: Readonly<MatchQuestionProps> | MatchQuestionProps) {
        super(props);
        this.state = {
            answer: new Map(),
            selected: undefined,
            hoveredAnswer: undefined,
            xCursor: 0,
            yCursor: 0
        }
    }

    componentDidMount() {
        this.container?.current?.addEventListener("mouseup", this.handleContainerMouseUp);
        this.container?.current?.addEventListener("mousemove", this.handleCursorMove)
    }

    componentWillUnmount() {
        this.container?.current?.removeEventListener("mouseup", this.handleContainerMouseUp);
        this.container?.current?.removeEventListener("mousemove", this.handleCursorMove)
    }

    render() {
        const { data } = this.props;
        const { xCursor, yCursor } = this.state;

        return (
            <Container className={styles.wrapper} ref={this.container}>
                <div style={{ left: xCursor, top: yCursor }} className={styles.cursor} />

                {[...data.keys()].map((question: string) => {
                    const answer = data.get(question)!;

                    return (
                        <Row className={styles.row}>
                            <Col xs={3}>
                                <AnswerChoiceDisplay
                                    value={question}
                                    style={{
                                        container: [question, styles.display],
                                        character: { className: this.getQuestionValueClassName(question) }
                                    }}
                                    onMouseDown={this.handleQuestionSelection}
                                    onMouseUp={() => this.setState({ selected: undefined })}
                                />
                            </Col>

                            <Col xs={6}>

                            </Col>

                            <Col xs={3}>
                                <AnswerChoiceDisplay
                                    value={answer}
                                    onMouseUp={this.handleAnswerAttempt}
                                    onMouseDown={this.handleAnswerChange}
                                    onMouseOver={(value: string) => this.setState({ hoveredAnswer: value })}
                                    onMouseOut={() => this.setState({ hoveredAnswer: undefined })}
                                    style={{
                                        container: [answer, styles.display],
                                        character: { className: this.getAnswerValueClassName(answer) }
                                    }}
                                />
                            </Col>

                            {this.getConnectorRenderCondition(question) && (
                                <LineTo
                                    from={question}
                                    toAnchor="left"
                                    fromAnchor="right"
                                    borderWidth={5}
                                    borderColor="#fff"
                                    delay={0}
                                    className={styles.connector}
                                    to={this.getConnectorTarget(question)}
                                />
                            )}
                        </Row>
                    )
                })}
            </Container>
        );
    }

    isCorrect = (): boolean => {
        const { data } = this.props;
        const { answer } = this.state;
        const isCorrect = Maps.areEqual(data, answer);

        if (!isCorrect) {
            this.setState({ selected: undefined, hoveredAnswer: undefined, answer: new Map() });
        }

        return isCorrect;
    }

    private handleAnswerAttempt = (selectedAnswer: string) => {
        const { data, isValid } = this.props;
        const { answer, selected } = this.state;
        const selectedAnswers = [...answer.values()];

        if (selected && !selectedAnswers.includes(selectedAnswer)) {
            answer.set(selected, selectedAnswer);
            this.setState({ answer: answer, selected: undefined });
        }

        isValid(data.size === answer.size)
    }

    private getQuestionValueClassName = (value: string) => {
        const { selected, answer } = this.state;
        if (answer.has(value)) {
            return styles.matched;
        } else if (selected === value) {
            return styles.selected;
        } else {
            return styles.question;
        }
    }

    private getAnswerValueClassName = (value: string) => {
        const { selected, answer, hoveredAnswer } = this.state;
        if ([...answer.values()].includes(value)) {
            return styles.matched;
        } else if (selected && hoveredAnswer === value) {
            return styles.selected;
        } else {
            return styles.answer;
        }
    }

    private handleQuestionSelection = (value: string) => {
        const { answer } = this.state;
        if (!answer.has(value)) {
            this.setState({ selected: value });
        }
    }

    private handleContainerMouseUp = (e: Event) => {
        if (e.currentTarget === e.target) {
            this.setState({ selected: undefined });
        }
    }

    private handleCursorMove = (e: MouseEvent) => {
        this.setState({ xCursor: e.pageX, yCursor: e.pageY });
    }

    private handleAnswerChange = (selectedAnswer: string) => {
        const { answer } = this.state;
        const answers = [...answer.values()];
        if (answers.includes(selectedAnswer)) {
            //Reverse mapping - gets the question for the selected answer
            const question = [...answer.entries()].filter(entry => entry[1] === selectedAnswer)[0][0];
            answer.delete(question);
            this.setState({ selected: question, answer: answer });
        }
    }

    private getConnectorTarget = (question: string): string => {
        const { answer } = this.state;
        if (answer.has(question)) {
            return answer.get(question)!;
        }
        return styles.cursor;
    }

    private getConnectorRenderCondition = (question: string): boolean => {
        const { selected, answer } = this.state;
        const questionIsSelected = question === selected;
        const questionHasMatchedAnswer = answer.has(question);
        return questionIsSelected || questionHasMatchedAnswer;
    }
}

export default MatchQuestion;
