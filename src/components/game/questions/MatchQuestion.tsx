import React from "react";
import { GameQuestionProps } from "../MemoryGame";
import { Col, Container, Row } from "react-bootstrap";
import AnswerChoiceDisplay from "../../ui/display/AnswerChoiceDisplay";
import GameQuestion from "../../../types/game/GameQuestion";
import LineTo from "react-lineto";
import Maps from "../../../utility/Maps";
import styles from "../../../styles/sass/components/game/questions/MatchQuestion.module.scss";

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
        this.container?.current?.addEventListener("mousemove", this.handleCursorMove)
        this.container?.current?.addEventListener("touchmove", this.handleTouchMove)
    }

    componentWillUnmount() {
        this.container?.current?.removeEventListener("mousemove", this.handleCursorMove)
        this.container?.current?.removeEventListener("touchmove", this.handleTouchMove)
    }

    render() {
        const { data } = this.props;
        const { xCursor, yCursor } = this.state;

        return (
            <Container className={styles.wrapper} ref={this.container} onMouseUp={this.resetSelected}>
                <div style={{ left: xCursor, top: yCursor }} className={styles.cursor} />

                {[...data.keys()].map((question: string) => {
                    const answer = data.get(question)!;

                    return (
                        <Row className={[styles.row, "justify-content-around"].join(" ")}>
                            <Col xs={5} md={4}>
                                <AnswerChoiceDisplay
                                    value={question}
                                    onMouseUp={this.resetSelected}
                                    onTouchEnd={this.resetSelected}
                                    onMouseDown={this.handleQuestionSelection}
                                    onTouchStart={this.handleQuestionSelection}
                                    style={{
                                        container: [question, styles.display],
                                        character: { className: this.getQuestionValueClassName(question) }
                                    }}
                                />
                            </Col>

                            <Col xs={2} md={4}>

                            </Col>

                            <Col xs={5} md={4}>
                                <AnswerChoiceDisplay
                                    value={answer}
                                    onMouseUp={this.handleAnswerAttempt}
                                    onTouchEnd={this.handleAnswerAttempt}
                                    onMouseDown={this.handleAnswerChange}
                                    onTouchStart={this.handleAnswerChange}
                                    onMouseOver={(value: string) => this.setState({ hoveredAnswer: value })}
                                    onMouseOut={this.resetHoveredAnswer}
                                    style={{
                                        container: [answer, styles.display],
                                        character: { className: this.getAnswerValueClassName(answer) }
                                    }}
                                />
                            </Col>

                            {this.getConnectorRenderCondition(question) && (
                                <LineTo
                                    delay={0}
                                    from={question}
                                    className={styles.connector}
                                    toAnchor="left" fromAnchor="right"
                                    borderWidth={5} borderColor="#fff"
                                    borderStyle={this.getConnectorStyle(question)}
                                    to={this.getConnectorTarget(question)}
                                    data-testid={question + "-connector"}
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

    private getQuestionValueClassName = (value: string): string => {
        const { selected, answer } = this.state;
        if (answer.has(value)) {
            return styles.matched;
        } else if (selected === value) {
            return styles.selected;
        } else {
            return styles.question;
        }
    }

    private getAnswerValueClassName = (value: string): string => {
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

    private resetSelected = () => {
        this.setState({ selected: undefined });
    }

    private resetHoveredAnswer = () => {
        this.setState({ hoveredAnswer: undefined });
    }

    private handleCursorMove = (e: MouseEvent) => {
        this.setState({ xCursor: e.pageX, yCursor: e.pageY });
    }

    private handleTouchMove = (e: TouchEvent) => {
        const touch = e.touches[0];
        this.setState({ xCursor: touch.pageX, yCursor: touch.pageY });
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

    private getConnectorStyle = (question: string): string => {
        const { answer } = this.state;
        return answer.has(question) ? "solid" : "dashed";
    }
}

export default MatchQuestion;
