import React, { Component } from "react";
import { QuestionType } from "../../../types/game/QuestionType";
import DisplayTypeButton from "../../ui/buttons/DisplayTypeButton";
import { faChevronRight, faFont, faGripVertical, faSquare, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { Col, Form, Row } from "react-bootstrap";
import { Environment } from "../../../utility/Environment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KanaQuantityButton from "../../ui/buttons/KanaQuantityButton";
import styles from "../../../styles/sass/components/settings/kana/QuestionSettingsForm.module.scss";
import QuestionSettings, { QuestionSettingsBuilder } from "../../../types/session/settings/game/QuestionSettings";

export interface QuestionSettingsFormProps {
    onChange: (settings: QuestionSettings) => void;
}

interface QuestionSettingsFormState {
    type: QuestionType;
    cards: number;
    score: boolean;
}

class QuestionSettingsForm extends Component<QuestionSettingsFormProps, QuestionSettingsFormState> {

    private readonly defaultState = new QuestionSettingsBuilder()
        .withType(QuestionType.ROMAJI)
        .withCardQuantity(1)
        .withScoreTracking(true)
        .build();

    constructor(props: Readonly<QuestionSettingsFormProps> | QuestionSettingsFormProps) {
        super(props);
        this.state = {
            type: this.defaultState.type,
            cards: this.defaultState.cards,
            score: this.defaultState.score
        }
    }

    componentDidMount() {
        this.props.onChange(this.defaultState);
    }

    componentDidUpdate(prevProps: Readonly<QuestionSettingsFormProps>, prevState: Readonly<QuestionSettingsFormState>) {
        if (prevState !== this.state) {
            const { type, cards, score } = this.state;
            const settings = new QuestionSettingsBuilder().withType(type).withCardQuantity(cards).withScoreTracking(score).build();
            this.props.onChange(settings);
        }
    }

    render() {
        const { type, cards, score } = this.state;

        return (
            <>
                <Row className={styles.section}>
                    <Col xs={12}>
                        <h5 className={styles.heading}>
                            <FontAwesomeIcon icon={faChevronRight}/> Kana Display Type
                        </h5>
                    </Col>

                    <Col xs={12} className={styles.descriptionWrapper}>
                        <span className={styles.description}>{this.getDescription()}</span>
                    </Col>

                    <Col>
                        <DisplayTypeButton
                            icon={faFont}
                            type={QuestionType.ROMAJI}
                            selected={type}
                            onClick={(type) => this.setState({ type, cards: 1 })}
                        />
                    </Col>

                    <Col>
                        <DisplayTypeButton
                            icon={faThLarge}
                            type={QuestionType.KANA}
                            selected={type}
                            onClick={(type) => this.setState({ type, cards: 4 })}
                        />
                    </Col>
                </Row>


                {type === QuestionType.KANA &&
                    <Row className={styles.section}>
                        <Col xs={12}>
                            <p className={styles.quantityDescription}>You'll be shown {cards} kana to choose from.</p>
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
                                <FontAwesomeIcon fixedWidth className={styles.cardsIcon} icon={faThLarge}/>
                            </KanaQuantityButton>
                        </Col>

                        <Col>
                            <KanaQuantityButton cards={6} selected={cards} onClick={this.handleQuantitySelect}>
                                <FontAwesomeIcon fixedWidth className={styles.cardsIcon} icon={faGripVertical} transform="grow-4"/>
                            </KanaQuantityButton>
                        </Col>
                    </Row>
                }

                <Row className={styles.section}>
                    <Col xs={12}>
                        <h5 className={styles.heading}>
                            <FontAwesomeIcon icon={faChevronRight}/> Track Score
                        </h5>
                        <p className={styles.quantityDescription}>
                            You gain 100 or 150 points per correctly answered kana or diagraph respectively.
                            Streaking will increase your multiplier.
                        </p>
                        <Form.Check
                            type="switch"
                            id="score"
                            className={styles.scoreSwitch}
                            checked={score}
                            onChange={() => this.setState({ score: !score })}
                            data-testid="score-switch"
                        />
                    </Col>
                </Row>
            </>
        );
    }

    reset = () => this.setState({
        type: this.defaultState.type,
        cards: this.defaultState.cards
    });

    private handleQuantitySelect = (quantity: number) => {
        this.setState({ cards: quantity });
    }

    private getDescription = () => Environment.variable(this.state.type + "_MODE_DESC");
}

export default QuestionSettingsForm;