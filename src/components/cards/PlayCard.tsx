import styles from "../../styles/sass/components/cards/PlayCard.module.scss";
import { Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import PlayWizard from "../layout/wizard/play/PlayWizard";
import DashboardCard, { DashboardCardProps } from "../layout/card/DashboardCard";

const PlayCard = () => {

    const [customising, setCustomising] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const onRefreshMeta = () => {

    }

    const props: DashboardCardProps = {
        size: "md",
        id: "play-card",
        loading: loading,
        className: styles.card,
    }

    return (
        <DashboardCard {...props}>
            <DashboardCard.Header title="Play" error={error} onReload={onRefreshMeta} />
            <DashboardCard.Body>
                <Row className={error ? styles.blur : undefined}>
                    <Col>
                        <Button variant="outline-light" onClick={() => setCustomising(true)} className={styles.start}>
                            <FontAwesomeIcon icon={faPlay} fixedWidth />
                        </Button>
                        <p>New Session</p>
                    </Col>
                </Row>
            </DashboardCard.Body>

            {customising && <PlayWizard onClose={() => setCustomising(false)} />}
        </DashboardCard>
    )
}

export default PlayCard;
