import React, { Component } from "react";
import { QuestionType } from "../../../domain/game/QuestionType";
import DisplayTypeButton from "../../ui/buttons/DisplayTypeButton";
import { faChevronRight, faFont, faGripVertical, faHandPointer, faSquare, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import { Environment } from "../../../utility/Environment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KanaQuantityButton from "../../ui/buttons/KanaQuantityButton";
import QuestionSettings, { QuestionSettingsBuilder } from "../../../domain/session/settings/game/QuestionSettings";
import styles from "../../../styles/sass/components/settings/game/QuestionSettingsForm.module.scss";
import LearnableField from "../../../domain/learn/LearnableField";
import LearnableFieldSelector from "../../ui/select/LearnableFieldSelector";
import ScrollableContainer from "../../ui/ScrollableContainer";
import ToggleSwitch from "../../ui/ToggleSwitch";

export interface QuestionSettingsFormProps {
    onChange: (settings: QuestionSettings) => void;
}

interface QuestionSettingsFormState {
    type: QuestionType;
    cards: number;
    score: boolean;
    questions: number;
    questionField: LearnableField;
    answerField: LearnableField;
}

class QuestionSettingsForm extends Component<QuestionSettingsFormProps, QuestionSettingsFormState> {

    private readonly defaultState = new QuestionSettingsBuilder()
        .withType(QuestionType.TEXT)
        .withCardQuantity(1)
        .withQuantity(1)
        .withFields(LearnableField.ROMAJI, LearnableField.KANA)
        .withScoreTracking(true)
        .build();

    constructor(props: Readonly<QuestionSettingsFormProps> | QuestionSettingsFormProps) {
        super(props);
        this.state = {
            type: this.defaultState.type,
            cards: this.defaultState.cards,
            score: this.defaultState.score,
            questions: this.defaultState.quantity,
            questionField: this.defaultState.questionField,
            answerField: this.defaultState.answerField
        }
    }

    componentDidMount() {
        this.props.onChange(this.defaultState);
    }

    componentDidUpdate(prevProps: Readonly<QuestionSettingsFormProps>, prevState: Readonly<QuestionSettingsFormState>) {
        if (prevState !== this.state) {
            const { type, cards, score, questions, questionField, answerField } = this.state;

            const settings = new QuestionSettingsBuilder()
                .withType(type)
                .withCardQuantity(cards)
                .withScoreTracking(score)
                .withQuantity(questions)
                .withFields(questionField, answerField)
                .build();

            this.props.onChange(settings);
        }
    }

    render() {
        const { type, cards, score, questionField, answerField } = this.state;

        return (
            <ScrollableContainer className={styles.formWrapper}>
                <Row className={styles.section}>
                    <Col xs={12}>
                        <p className={styles.leadingDescription}>
                            Configure settings regarding the types of question you'll be asked.
                        </p>
                    </Col>
                    <Col xs={12}>
                        <h5 className={styles.heading}>
                            <FontAwesomeIcon icon={faChevronRight}/> Question Type
                        </h5>
                    </Col>

                    <Col xs={12} className={styles.descriptionWrapper}>
                        <span className={styles.description}>{this.getDescription()}</span>
                    </Col>

                    <Col className={styles.noGuttersRight}>
                        <DisplayTypeButton
                            icon={faFont}
                            type={QuestionType.TEXT}
                            selected={type}
                            onClick={(type) => this.setState({ type, cards: 1 })}
                        />
                    </Col>

                    <Col className={[styles.noGuttersLeft, styles.noGuttersRight].join(" ")}>
                        <DisplayTypeButton
                            icon={faThLarge}
                            type={QuestionType.CHOICE}
                            selected={type}
                            onClick={(type) => this.setState({ type, cards: 4 })}
                        />
                    </Col>

                    <Col className={styles.noGuttersLeft}>
                        <DisplayTypeButton
                            icon={faHandPointer}
                            type={QuestionType.MATCH}
                            selected={type}
                            onClick={(type) => this.setState({ type, questions: 3 })}
                        />
                    </Col>
                </Row>


                {type === QuestionType.CHOICE &&
                    <Row className={styles.section}>
                        <Col xs={12}>
                            <p className={styles.description}>You'll be shown {cards} answers to choose from.</p>
                        </Col>

                        <Col className={styles.noGuttersRight}>
                            <KanaQuantityButton cards={2} selected={cards} onClick={this.handleQuantitySelect}>
                            <span className={"fa-layers fa-fw " + styles.cardsIcon}>
                                <FontAwesomeIcon fixedWidth icon={faSquare} transform="left-5 shrink-8"/>
                                <FontAwesomeIcon fixedWidth icon={faSquare} transform="right-5 shrink-8"/>
                            </span>
                            </KanaQuantityButton>
                        </Col>

                        <Col className={[styles.noGuttersLeft, styles.noGuttersRight].join(" ")}>
                            <KanaQuantityButton cards={4} selected={cards} onClick={this.handleQuantitySelect}>
                                <FontAwesomeIcon
                                    fixedWidth
                                    icon={faThLarge}
                                    className={styles.cardsIcon}
                                />
                            </KanaQuantityButton>
                        </Col>

                        <Col className={styles.noGuttersLeft}>
                            <KanaQuantityButton cards={6} selected={cards} onClick={this.handleQuantitySelect}>
                                <FontAwesomeIcon
                                    fixedWidth
                                    icon={faGripVertical}
                                    transform="grow-5 rotate-90"
                                    className={styles.cardsIcon}
                                />
                            </KanaQuantityButton>
                        </Col>
                    </Row>
                }

                <Row className={styles.section}>
                    <Col xs={12}>
                        <h5 className={styles.heading}>
                            <FontAwesomeIcon icon={faChevronRight}/> Question & Answer Fields
                        </h5>
                    </Col>

                    <Col xs={12}>
                        <p className={styles.description}>
                            Select which piece of information you are given in the question and what you must give
                            as the answer. You cannot select the same field for both.
                        </p>
                    </Col>

                    <Col xs={6}>
                        <h6 className={styles.heading}>Give me the...</h6>
                        <LearnableFieldSelector
                            exclude={answerField}
                            default={questionField}
                            onSelect={(field: LearnableField) => this.setState({ questionField: field })}
                        />
                    </Col>

                    <Col xs={6}>
                        <h6 className={styles.heading}>Ask me the...</h6>
                        <LearnableFieldSelector
                            exclude={questionField}
                            default={answerField}
                            onSelect={(field: LearnableField) => this.setState({ answerField: field })}
                        />
                    </Col>
                </Row>

                <Row className={styles.section}>
                    <Col xs={12}>
                        <h5 className={styles.heading}>
                            <FontAwesomeIcon icon={faChevronRight}/> Score
                        </h5>

                        <ToggleSwitch
                            label="Track Score"
                            enabled={score}
                            data-testid="score-switch"
                            className={styles.check}
                            onChange={() => this.setState({ score: !score })}
                        />

                        <p className={styles.description}>
                            You gain a base score per question answered correctly.
                            Streaking will increase your multiplier exponentially, but breaking it
                            will reset to the base. Skipping a question will lose you the 1 x the base score.
                        </p>
                    </Col>
                </Row>
            </ScrollableContainer>
        );
    }

    reset = () => this.setState({
        type: this.defaultState.type,
        cards: this.defaultState.cards,
        score: this.defaultState.score,
        questions: this.defaultState.quantity,
        questionField: this.defaultState.questionField,
        answerField: this.defaultState.answerField
    });

    private handleQuantitySelect = (quantity: number) => {
        this.setState({ cards: quantity });
    }

    private getDescription = () => Environment.variable(this.state.type + "_MODE_DESC");
}

export default QuestionSettingsForm;
