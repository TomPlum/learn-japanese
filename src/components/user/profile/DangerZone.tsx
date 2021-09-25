import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Row } from "react-bootstrap";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "../../../styles/sass/components/user/profile/DangerZone.module.scss";
import InfoButton from "../../ui/buttons/InfoButton";
import PopOver from "../../ui/PopOver";

const DangerZone = () => {

    const [locked, setLocked] = useState(true);

    const onToggleLock = () => {
        setLocked(!locked);
    }

    const localStoragePopover = <PopOver
        title="Clear Local Storage"
        text="Deletes all locally stored data from your browser except for your user session. Does not permanently
        delete any saved data, but may increase loading times temporarily."
    />

    const resetHighScorePopover = <PopOver
        title="Reset Highscore Data"
        text="Resets all your saved scores across the app. Any ranks you currently hold on the high-scores will be lost."
    />

    const deleteAccountPopover = <PopOver
        title="Delete Account"
        text="Delete your user account and all of your personal data. This is an irreversible operation.
         You'll need to provide your password for confirmation."
    />

    return (
        <Card className={styles.card} border="danger">
            <Card.Body>
                <h2 className={styles.heading}>
                    Danger Zone
                    {locked ?
                        <FontAwesomeIcon
                            size="sm"
                            fixedWidth
                            icon={faLock}
                            title="Un-Lock"
                            onClick={onToggleLock}
                            className={[styles.unlock, styles.icon].join(" ")}
                        /> :
                        <FontAwesomeIcon
                            size="sm"
                            fixedWidth
                            title="Lock"
                            icon={faLockOpen}
                            onClick={onToggleLock}
                            className={[styles.unlock, styles.icon].join(" ")}
                        />
                    }
                </h2>

                <div className={locked ? styles.locked : styles.unlocked}>
                    <Row className={styles.row}>
                        <Col xs={6}>
                            <p className={styles.label}>
                                Clear Local Storage
                                <InfoButton popover={localStoragePopover} className={styles.info} />
                            </p>
                        </Col>
                        <Col xs={6}>
                            <Button variant="danger" className={styles.button} disabled={locked}>Clear</Button>
                        </Col>
                    </Row>

                    <Row className={styles.row}>
                        <Col xs={6}>
                            <p className={styles.label}>
                                Reset Highscores
                                <InfoButton popover={resetHighScorePopover} className={styles.info} />
                            </p>
                        </Col>
                        <Col xs={6}>
                            <Button variant="danger" className={styles.button} disabled={locked}>Reset</Button>
                        </Col>
                    </Row>

                    <Row className={styles.row}>
                        <Col xs={6}>
                            <p className={styles.label}>
                                Delete Account
                                <InfoButton popover={deleteAccountPopover} className={styles.info} />
                            </p>
                        </Col>
                        <Col xs={6}>
                            <Button variant="danger" className={styles.button} disabled={locked}>Delete</Button>
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </Card>
    );
}

export default DangerZone;
