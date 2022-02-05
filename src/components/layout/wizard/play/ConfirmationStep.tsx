import { SessionSettings } from "../../../../domain/session/settings/SessionSettings";
import styles from "../../../../styles/sass/components/layout/wizard/play/ConfirmationStep.module.scss";
import { Accordion, Button } from "react-bootstrap";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { QuestionType } from "../../../../domain/game/QuestionType";
import CustomPresetForm from "./CustomPresetForm";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ConfirmationStepProps {
    settings: SessionSettings;
}

const ConfirmationStep = (props: ConfirmationStepProps) => {
    const { settings } = props;

    const [inSavePresetForm, setInSavePresetForm] = useState(false);
    const [showSave, setShowSave] = useState(true);

    const gameSettings = settings.gameSettings;
    const dataSettings = settings.dataSettings;

    if (!gameSettings) {
        return <span>Your game settings could not be found. Please reload and try again.</span>
    }

    const time = gameSettings.time;
    const hints = gameSettings.hints.quantity;
    const hasUnlimitedHints = gameSettings.hints.unlimited

    const questionType = gameSettings?.question.type;
    const cards = gameSettings.question.cards;
    const lives = gameSettings.lives.quantity;

    const getQuestionTypeWord = (): string => {
        switch (questionType) {
            case QuestionType.TEXT: return "type";
            case QuestionType.MATCH: return "match";
            case QuestionType.CHOICE: return `pick from ${cards} cards`;
            case QuestionType.AUDIO: return "listen to";
            case QuestionType.RANDOM: return "answer";
            default: return "answer";
        }
    }

    const getTimeWords = () => {
        if (time?.timed) {
            return <span className={styles.time}>{"your session will be timed"}</span>;
        }

        if (time?.countdown) {
            return (
                <span>{"you'll have "}
                    <span className={styles.time}>{time?.secondsPerQuestion}{" seconds per question"}</span>
                </span>
            );
        }

        return <span>{"you'll have "}<span className={styles.time}>no time restrictions</span></span>;
    }

    const getScoreWords = (): string => {
        if (gameSettings?.question.score) {
            return "your score will be tracked";
        } else {
            return "scoring will be disabled";
        }
    }

    const handleClickSave = () => {
        setShowSave(false);
        setInSavePresetForm(true);
    }

    const handleCancelSave = () => {
        setShowSave(true);
        setInSavePresetForm(false);
    }

    return (
        <div>
            <p className={styles.question}>
                <span>{"You'll be given the "}</span>
                <span className={styles.field}>{gameSettings?.question.questionField.name}</span>
                <span>{" and must "}</span>
                <span className={styles.type}>{getQuestionTypeWord()}</span>
                <span>{" the "}</span>
                <span className={styles.field}>{gameSettings?.question.answerField.name}</span>
                <span>{" for "}</span>
                <span className={styles.quantity}>{dataSettings?.quantity}</span>
                <span>{" questions about "}</span>
                <span className={styles.topic}>{dataSettings?.topic.name}</span>
                <span>{". "}</span>
                <span>{"You'll have "}</span>
                <span className={styles.lives}>{lives > 0 ? lives : "unlimited"}{" lives"}</span>
                <span>{", "}</span>
                <span className={styles.hint}>{hasUnlimitedHints ? "unlimited" : hints > 0 ? hints : "no"}{" hints"}</span>
                <span>{", "}</span>
                <span>{getTimeWords()}</span>
                <span>{" and "}</span>
                <span className={styles.score}>{getScoreWords()}{"."}</span>
            </p>

            <Accordion>
                {showSave && (
                    <Accordion.Toggle eventKey="save" as={Button} onClick={handleClickSave} variant="info">
                        <FontAwesomeIcon icon={faDownload} fixedWidth />
                        <span>Save Preset</span>
                    </Accordion.Toggle>
                )}
                <Accordion.Collapse eventKey="save" in={inSavePresetForm} data-testid="confirmation-step-accordion">
                    <CustomPresetForm
                        settings={settings}
                        onCancel={handleCancelSave}
                        onSuccess={() => setInSavePresetForm(false)}
                    />
                </Accordion.Collapse>
            </Accordion>
        </div>
    );
}

export default ConfirmationStep;
