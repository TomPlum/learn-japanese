import { SessionSettings } from "../../../../domain/session/settings/SessionSettings";
import styles from "../../../../styles/sass/components/layout/wizard/play/ConfirmationStep.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { faHeart, faInfinity, faLightbulb, faStopwatch, faTrophy } from "@fortawesome/free-solid-svg-icons";
import SettingSummary from "./SettingSummary";
import { QuestionType } from "../../../../domain/game/QuestionType";

export interface ConfirmationStepProps {
    settings: SessionSettings;
}

const ConfirmationStep = (props: ConfirmationStepProps) => {
    const { settings } = props;

    const gameSettings = settings.gameSettings;
    const dataSettings = settings.dataSettings;

    const time = gameSettings?.time;
    const hints = gameSettings?.hints;

    const timeQuantity = time?.timed ? "Timed" : time?.countdown ? gameSettings?.time.secondsPerQuestion : 0;
    const hintQuantity = hints?.enabled ? hints?.unlimited ? faInfinity : hints?.quantity : 0;
    const score = gameSettings?.question.score ? "Enabled" : 0;
    const questionType = gameSettings?.question.type;
    const cards = gameSettings?.question.cards ?? 0;
    const lives = gameSettings?.lives.quantity ?? 0;

    const getQuestionTypeWord = (): string => {
        switch (questionType) {
            case QuestionType.TEXT: return "type";
            case QuestionType.MATCH: return "match";
            case QuestionType.CHOICE: return `pick${cards > 0 ? ` from ${cards} cards` : ""}`;
            case QuestionType.AUDIO: return "listen to";
            case QuestionType.RANDOM: return "answer";
            default: return "answer";
        }
    }

    const getTimeWords = (): string => {
        if (time?.timed) {
            return "your session will be timed";
        }

        if (time?.countdown) {
            return `you will have ${time?.secondsPerQuestion} seconds per question`;
        }

        return "you'll have no time restrictions";
    }

    const getScoreWords = (): string => {
        if (gameSettings?.question.score) {
            return "your score will be tracked";
        } else {
            return "scoring will be disabled.";
        }
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <SettingSummary
                        name="Lives"
                        icon={faHeart}
                        iconClass={styles.lives}
                        quantity={gameSettings?.lives.quantity ?? 0}
                    />
                </Col>
                <Col>
                    <SettingSummary
                        name="Time"
                        icon={faStopwatch}
                        iconClass={styles.time}
                        quantity={timeQuantity ?? 0}
                    />
                </Col>
                <Col>
                    <SettingSummary
                        name="Hints"
                        icon={faLightbulb}
                        iconClass={styles.hint}
                        quantity={hintQuantity ?? 0}
                    />
                </Col>
                <Col>
                    <SettingSummary
                        name="Scoring"
                        icon={faTrophy}
                        iconClass={styles.score}
                        quantity={score}
                    />
                </Col>
            </Row>

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
                <span>{"You have "}</span>
                <span className={styles.lives}>{lives > 0 ? lives : "no"}{" lives"}</span>
                <span>{", "}</span>
                <span className={styles.hint}>{hints?.quantity}{" hints"}</span>
                <span>{", "}</span>
                <span className={styles.time}>{getTimeWords()}</span>
                <span>{" and "}</span>
                <span className={styles.score}>{getScoreWords()}{"."}</span>
            </p>
        </Container>
    );
}

export default ConfirmationStep;
