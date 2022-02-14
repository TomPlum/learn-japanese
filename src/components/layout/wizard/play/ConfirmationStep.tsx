import { SessionSettings } from "../../../../domain/session/settings/SessionSettings";
import styles from "../../../../styles/sass/components/layout/wizard/play/ConfirmationStep.module.scss";
import { Accordion, Button } from "react-bootstrap";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import QuestionType from "../../../../domain/game/QuestionType";
import CustomPresetForm from "./CustomPresetForm";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ConfirmationStepProps {
    settings: SessionSettings;
    onSelectStage: (stage: number) => void;
}

const ConfirmationStep = (props: ConfirmationStepProps) => {
    const { settings, onSelectStage } = props;

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
            default: return "answer";
        }
    }

    const getTimeWords = () => {
        if (time?.timed) {
            return (
                <span>{"your session will be "}
                    <span className={[styles.time, styles.highlight].join(" ")}>{"timed"}</span>
                </span>
            );
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

    const answerField = gameSettings?.question.answerField.name;
    const questionField = gameSettings?.question.questionField.name;
    const livesDisplay = lives > 0 ? lives : "unlimited";
    const hintsDisplay = hasUnlimitedHints ? "unlimited" : hints > 0 ? hints : "no";

    return (
        <div>
            <p className={styles.question}>
                <span>{"You'll be given the "}</span>
                <span className={[styles.field, styles.highlight].join(" ")} onClick={() => onSelectStage(4)}>
                    {questionField}
                </span>
                <span>{" and must "}</span>
                <span className={[styles.type, styles.highlight].join(" ")} onClick={() => onSelectStage(4)}>
                    {getQuestionTypeWord()}
                </span>
                <span>{" the "}</span>
                <span className={[styles.field, styles.highlight].join(" ")} onClick={() => onSelectStage(4)}>
                    {answerField}
                </span>
                <span>{" for "}</span>
                <span className={[styles.quantity, styles.highlight].join(" ")} onClick={() => onSelectStage(8)}>
                    {dataSettings?.quantity}
                </span>
                <span>{" questions about "}</span>
                <span className={[styles.topic, styles.highlight].join(" ")} onClick={() => onSelectStage(1)}>
                    {dataSettings?.topic.name}
                </span>
                <span>{". "}</span>
                <span>{"You'll have "}</span>
                <span className={[styles.lives, styles.highlight].join(" ")} onClick={() => onSelectStage(6)}>
                    {livesDisplay}{" lives"}
                </span>
                <span>{", "}</span>
                <span className={[styles.hint, styles.highlight].join(" ")} onClick={() => onSelectStage(5)}>
                    {hintsDisplay}{" hints"}
                </span>
                <span>{", "}</span>
                <span onClick={() => onSelectStage(7)}>{getTimeWords()}</span>
                <span>{" and "}</span>
                <span className={[styles.score, styles.highlight].join(" ")} onClick={() => onSelectStage(4)}>
                    {getScoreWords()}
                </span>
                <span>{"."}</span>
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
