import React, { Component } from "react";
import { QuestionType } from "../../../types/game/QuestionType";
import DisplayTypeButton from "../../ui/buttons/DisplayTypeButton";
import { faChevronRight, faFont, faGripVertical, faSquare, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { Col, Form, Row } from "react-bootstrap";
import { Environment } from "../../../utility/Environment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KanaQuantityButton from "../../ui/buttons/KanaQuantityButton";
import QuestionSettings, { QuestionSettingsBuilder } from "../../../types/session/settings/game/QuestionSettings";
import styles from "../../../styles/sass/components/settings/game/QuestionSettingsForm.module.scss";
import LearnableField from "../../../types/learn/LearnableField";
import LearnableFieldSelector from "../../ui/select/LearnableFieldSelector";
import ScrollableContainer from "../../ui/ScrollableContainer";

export interface QuestionSettingsFormProps {
    onChange: (settings: QuestionSettings) => void;
}

interface QuestionSettingsFormState {
    type: QuestionType;
    cards: number;
    score: boolean;
    questionField: LearnableField;
    answerField: LearnableField;
}

class QuestionSettingsForm extends Component<QuestionSettingsFormProps, QuestionSettingsFormState> {

    private readonly defaultState = new QuestionSettingsBuilder()
        .withType(QuestionType.TEXT)
        .withCardQuantity(1)
        .withFields(LearnableField.ROMAJI, LearnableField.KANA)
        .withScoreTracking(true)
        .build();

    constructor(props: Readonly<QuestionSettingsFormProps> | QuestionSettingsFormProps) {
        super(props);
        this.state = {
            type: this.defaultState.type,
            cards: this.defaultState.cards,
            score: this.defaultState.score,
            questionField: this.defaultState.questionField,
            answerField: this.defaultState.answerField
        }
    }

    componentDidMount() {
        this.props.onChange(this.defaultState);
    }

    componentDidUpdate(prevProps: Readonly<QuestionSettingsFormProps>, prevState: Readonly<QuestionSettingsFormState>) {
        if (prevState !== this.state) {
            const { type, cards, score, questionField, answerField } = this.state;

            const settings = new QuestionSettingsBuilder()
                .withType(type)
                .withCardQuantity(cards)
                .withScoreTracking(score)
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

                    <Col>
                        <DisplayTypeButton
                            icon={faFont}
                            type={QuestionType.TEXT}
                            selected={type}
                            onClick={(type) => this.setState({ type, cards: 1 })}
                        />
                    </Col>

                    <Col>
                        <DisplayTypeButton
                            icon={faThLarge}
                            type={QuestionType.CHOICE}
                            selected={type}
                            onClick={(type) => this.setState({ type, cards: 4 })}
                        />
                    </Col>
                </Row>


                {type === QuestionType.CHOICE &&
                    <Row className={styles.section}>
                        <Col xs={12}>
                            <p className={styles.description}>You'll be shown {cards} answers to choose from.</p>
                        </Col>

                        <Col>
                            <KanaQuantityButton cards={2} selected={cards} onClick={this.handleQuantitySelect}>
                            <span className={"fa-layers fa-fw " + styles.cardsIcon}>
                                <FontAwesomeIcon fixedWidth icon={faSquare} transform="left-5 shrink-8"/>
                                <FontAwesomeIcon fixedWidth icon={faSquare} transform="right-5 shrink-8"/>
                            </span>
                            </KanaQuantityButton>
                        </Col>

                        <Col>
                            <KanaQuantityButton cards={4} selected={cards} onClick={this.handleQuantitySelect}>
                                <FontAwesomeIcon
                                    fixedWidth
                                    icon={faThLarge}
                                    className={styles.cardsIcon}
                                />
                            </KanaQuantityButton>
                        </Col>

                        <Col>
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
                            <FontAwesomeIcon icon={faChevronRight}/> Track Score
                        </h5>

                        <p className={styles.description}>
                            You gain a base score per correctly answered question.
                            Streaking will increase your multiplier.
                        </p>

                        <Form.Check
                            id="score"
                            type="switch"
                            checked={score}
                            data-testid="score-switch"
                            className={styles.scoreSwitch}
                            onChange={() => this.setState({ score: !score })}
                        />
                    </Col>
                </Row>
            </ScrollableContainer>
        );
    }

    reset = () => this.setState({
        type: this.defaultState.type,
        cards: this.defaultState.cards,
        score: this.defaultState.score,
        questionField: this.defaultState.questionField,
        answerField: this.defaultState.answerField
    });

    private handleQuantitySelect = (quantity: number) => {
        this.setState({ cards: quantity });
    }

    private getDescription = () => Environment.variable(this.state.type + "_MODE_DESC");
}

export default QuestionSettingsForm;