import { SessionSettings } from "../../../../domain/session/settings/SessionSettings";
import styles from "../../../../styles/sass/components/layout/wizard/play/ConfirmationStep.module.scss";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat, faInfinity } from "@fortawesome/free-solid-svg-icons";

export interface ConfirmationStepProps {
    settings: SessionSettings;
}

const ConfirmationStep = (props: ConfirmationStepProps) => {
    const { settings } = props;

    const gameSettings = settings.gameSettings;
    const dataSettings = settings.dataSettings;

    const livesEnabled = gameSettings?.lives.enabled;

    return (
        <div>
            <Card bg="dark">
                <Card.Header>
                    <FontAwesomeIcon icon={faHeartbeat} fixedWidth className={styles.heart} />
                    <span>Life Settings</span>
                </Card.Header>
                <Card.Body>
                    {!livesEnabled && (
                        <>
                            <FontAwesomeIcon icon={faInfinity} fixedWidth />
                            <span>Infinite Lives</span>
                        </>
                    )}
                    {livesEnabled && (
                        <p>{gameSettings?.lives.quantity} Lives</p>
                    )}
                </Card.Body>
            </Card>

            <p>Timed? {gameSettings?.time.timed}</p>
            <p>Countdown? {gameSettings?.time.countdown}</p>
            <p>Seconds per Question {gameSettings?.time.secondsPerQuestion}</p>

            <p>Hints Enabled? {gameSettings?.hints.enabled}</p>
            <p>Hints Quantity {gameSettings?.hints.quantity}</p>
            <p>Hints Unlimited? {gameSettings?.hints.unlimited}</p>

            <p>Question Quantity {gameSettings?.question.quantity}</p>
            <p>Question Field {gameSettings?.question.questionField.name}</p>
            <p>Answer Field {gameSettings?.question.answerField.name}</p>
            <p>Type {gameSettings?.question.type}</p>
            <p>Cards {gameSettings?.question.cards}</p>
            <p>Score {gameSettings?.question.score}</p>

            <p>Data Quantity {dataSettings?.quantity}</p>
            <p>Topic {dataSettings?.topic.name}</p>
        </div>
    );
}

export default ConfirmationStep;
