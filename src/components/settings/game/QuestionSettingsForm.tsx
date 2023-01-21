import React, { forwardRef, Ref, useEffect, useImperativeHandle, useState } from "react"
import QuestionType from "../../../domain/game/QuestionType"
import DisplayTypeButton from "../../ui/buttons/DisplayTypeButton"
import {
    faChevronRight,
    faFont,
    faGripVertical,
    faHandPointer,
    faSquare,
    faThLarge
} from "@fortawesome/free-solid-svg-icons"
import { Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import KanaQuantityButton from "../../ui/buttons/KanaQuantityButton"
import QuestionSettings, { QuestionSettingsBuilder } from "../../../domain/session/settings/game/QuestionSettings"
import styles from "../../../styles/sass/components/settings/game/QuestionSettingsForm.module.scss"
import LearnableField from "../../../domain/learn/LearnableField"
import LearnableFieldSelector from "../../ui/select/LearnableFieldSelector"
import ScrollableContainer from "../../ui/ScrollableContainer"
import ToggleSwitch from "../../ui/ToggleSwitch"
import { useTranslation } from "react-i18next"
import { SettingsFormHandle } from "./GameSettingsMenu"

export interface QuestionSettingsFormProps {
    onChange: (settings: QuestionSettings) => void
}

const QuestionSettingsForm = forwardRef((props: QuestionSettingsFormProps, ref: Ref<SettingsFormHandle>) => {
    const { onChange } = props

    const defaultState = new QuestionSettingsBuilder()
        .withType(QuestionType.TEXT)
        .withCardQuantity(1)
        .withQuantity(1)
        .withFields(LearnableField.ROMAJI, LearnableField.KANA)
        .withScoreTracking(true)
        .build()

    const [type, setType] = useState(defaultState.type)
    const [cards, setCards] = useState(defaultState.cards)
    const [score, setScore] = useState(defaultState.score)
    const [questions, setQuestions] = useState(defaultState.quantity)
    const [questionField, setQuestionField] = useState(defaultState.questionField)
    const [answerField, setAnswerField] = useState(defaultState.answerField)
    const { t } = useTranslation("translation", { keyPrefix: "wizard.steps.question" })

    useEffect(() => {
        onChange(defaultState)
    }, [])

    useEffect(() => {
        const settings = new QuestionSettingsBuilder()
            .withType(type)
            .withCardQuantity(cards)
            .withScoreTracking(score)
            .withQuantity(questions)
            .withFields(questionField, answerField)
            .build()

        onChange(settings)
    }, [type, cards, score, questions, questionField, answerField])

    useImperativeHandle(ref, () => ({
        reset() {
            setType(defaultState.type)
            setCards(defaultState.cards)
            setScore(defaultState.score)
            setQuestions(defaultState.quantity)
            setAnswerField(defaultState.answerField)
            setQuestionField(defaultState.questionField)
        }
    }))

    const handleQuantitySelect = (quantity: number) => {
        setCards(quantity)
    }

    const handleSelectTextType = (type: QuestionType) => {
        setCards(1)
        setType(type)
    }

    const handleSelectChoiceType = (type: QuestionType) => {
        setCards(4)
        setType(type)
    }

    const handleSelectMatchType = (type: QuestionType) => {
        setType(type)
        setQuestions(3)
    }

    return (
        <ScrollableContainer className={styles.formWrapper} id="question-settings-form">
            <Row className={styles.section}>
                <Col xs={12}>
                    <p className={styles.leadingDescription}>{t("desc")}</p>
                </Col>
                <Col xs={12}>
                    <h5 className={styles.heading}>
                        <FontAwesomeIcon icon={faChevronRight} /> {t("type-heading")}
                    </h5>
                </Col>

                <Col xs={12} className={styles.descriptionWrapper}>
                    <span className={styles.description}>{t(`type.${type.name}.desc`)}</span>
                </Col>

                <Col className={styles.noGuttersRight}>
                    <DisplayTypeButton
                        icon={faFont}
                        selected={type}
                        type={QuestionType.TEXT}
                        onClick={handleSelectTextType}
                    />
                </Col>

                <Col className={[styles.noGuttersLeft, styles.noGuttersRight].join(" ")}>
                    <DisplayTypeButton
                        selected={type}
                        icon={faThLarge}
                        type={QuestionType.CHOICE}
                        onClick={handleSelectChoiceType}
                    />
                </Col>

                <Col className={styles.noGuttersLeft}>
                    <DisplayTypeButton
                        selected={type}
                        icon={faHandPointer}
                        type={QuestionType.MATCH}
                        onClick={handleSelectMatchType}
                    />
                </Col>
            </Row>

            {type === QuestionType.CHOICE && (
                <Row className={styles.section}>
                    <Col xs={12}>
                        <p className={styles.description}>{t("cards-quantity.desc", { quantity: cards })}</p>
                    </Col>

                    <Col className={styles.noGuttersRight}>
                        <KanaQuantityButton cards={2} selected={cards} onClick={handleQuantitySelect}>
                            <span className={"fa-layers fa-fw " + styles.cardsIcon}>
                                <FontAwesomeIcon fixedWidth icon={faSquare} transform="left-5 shrink-8" />
                                <FontAwesomeIcon fixedWidth icon={faSquare} transform="right-5 shrink-8" />
                            </span>
                        </KanaQuantityButton>
                    </Col>

                    <Col className={[styles.noGuttersLeft, styles.noGuttersRight].join(" ")}>
                        <KanaQuantityButton cards={4} selected={cards} onClick={handleQuantitySelect}>
                            <FontAwesomeIcon fixedWidth icon={faThLarge} className={styles.cardsIcon} />
                        </KanaQuantityButton>
                    </Col>

                    <Col className={styles.noGuttersLeft}>
                        <KanaQuantityButton cards={6} selected={cards} onClick={handleQuantitySelect}>
                            <FontAwesomeIcon
                                fixedWidth
                                icon={faGripVertical}
                                transform="grow-5 rotate-90"
                                className={styles.cardsIcon}
                            />
                        </KanaQuantityButton>
                    </Col>
                </Row>
            )}

            <Row className={styles.section}>
                <Col xs={12}>
                    <h5 className={styles.heading}>
                        <FontAwesomeIcon icon={faChevronRight} /> {t("fields-heading")}
                    </h5>
                </Col>

                <Col xs={12}>
                    <p className={styles.description}>{t("fields-desc")}</p>
                </Col>

                <Col xs={6}>
                    <h6 className={styles.heading}>{t("give-me")}</h6>
                    <LearnableFieldSelector
                        exclude={answerField}
                        defaultField={questionField}
                        onSelect={(field: LearnableField) => setQuestionField(field)}
                    />
                </Col>

                <Col xs={6}>
                    <h6 className={styles.heading}>{t("ask-me")}</h6>
                    <LearnableFieldSelector
                        exclude={questionField}
                        defaultField={answerField}
                        onSelect={(field: LearnableField) => setAnswerField(field)}
                    />
                </Col>
            </Row>

            <Row className={styles.section}>
                <Col xs={12}>
                    <h5 className={styles.heading}>
                        <FontAwesomeIcon icon={faChevronRight} /> {t("score-heading")}
                    </h5>

                    <ToggleSwitch
                        enabled={score}
                        label={t("track-score")}
                        className={styles.check}
                        data-testid="score-switch"
                        onChange={() => setScore(!score)}
                    />

                    <p className={styles.description}>{t("score-desc")}</p>
                </Col>
            </Row>
        </ScrollableContainer>
    )
})

export default QuestionSettingsForm
