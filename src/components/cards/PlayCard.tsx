import styles from "../../styles/sass/components/cards/PlayCard.module.scss";
import { Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import SessionWizard from "../layout/wizard/SessionWizard";
import DashboardCard, { DashboardCardProps } from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";

const PlayCard = () => {

    const [customising, setCustomising] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const onRefreshMeta = () => {

    }

    const handleStart = () => {
        setCustomising(true);
    }

    const props: DashboardCardProps = {
        size: "md",
        error: error,
        id: "play-card",
        loading: loading,
        className: styles.card,
    }

    return (
        <DashboardCard {...props}>
            <DashboardCard.Header error={error} onReload={onRefreshMeta}>
                <DashboardCardHeader.Title>Play</DashboardCardHeader.Title>
            </DashboardCard.Header>

            <DashboardCard.Body>
                <Row>
                    <Col>
                        <Button variant="outline-light" onClick={handleStart} className={styles.start} data-testid="launch-wizard">
                            <FontAwesomeIcon icon={faPlay} fixedWidth />
                        </Button>
                        <p>New Session</p>
                    </Col>
                </Row>
            </DashboardCard.Body>

            {customising && <SessionWizard onClose={() => setCustomising(false)} />}
        </DashboardCard>
    )
}

export default PlayCard;
