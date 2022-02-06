import styles from "../../styles/sass/components/cards/PlayCard.module.scss";
import { Button, Card, Col, Row } from "react-bootstrap";
import ReloadButton from "../ui/buttons/ReloadButton";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faRedo, faSpinner } from "@fortawesome/free-solid-svg-icons";
import PlayWizard from "../layout/wizard/play/PlayWizard";

const PlayCard = () => {

    const [customising, setCustomising] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const onRefreshMeta = () => {

    }

    return (
        <Card className={styles.card} border="dark">
            <Card.Body>
                <h2 className={styles.heading}>
                    <span>Play</span>
                    {!error && (
                        <ReloadButton
                            loading={loading}
                            onClick={onRefreshMeta}
                            className={styles.icon}
                        />
                    )}
                </h2>

                {error && <div className={styles.error}>
                    <p>{error}</p>
                    <Button variant="warning" onClick={onRefreshMeta}>
                        <FontAwesomeIcon icon={loading ? faSpinner : faRedo} spin={loading} fixedWidth size="sm" />
                        <span> Try again</span>
                    </Button>
                </div>}

                <Row className={error ? styles.blur : undefined}>
                    <Col>
                        <Button variant="success" onClick={() => setCustomising(true)}>
                            <FontAwesomeIcon icon={faPlay} fixedWidth />
                            <span>{" Start Game"}</span>
                        </Button>
                    </Col>
                </Row>

                {customising && <PlayWizard onClose={() => setCustomising(false)} onStart={() => {}} />}
            </Card.Body>
        </Card>
    )
}

export default PlayCard;
