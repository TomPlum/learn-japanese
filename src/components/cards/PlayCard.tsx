import styles from "../../styles/sass/components/cards/PlayCard.module.scss";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher, faGamepad, faPlay, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import SessionWizard from "../layout/wizard/SessionWizard";
import DashboardCard, { DashboardCardProps } from "../layout/card/DashboardCard";
import DashboardCardLink from "../layout/card/DashboardCardLink";

const PlayCard = () => {

    const [customising, setCustomising] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

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
            <DashboardCard.Body>
                <Row>
                    <Col xs={12}>
                        <p onClick={handleStart} className={styles.start} data-testid="launch-wizard">
                            <FontAwesomeIcon icon={faPlay} fixedWidth size="sm" />
                            <span>Start Session</span>
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col className={styles.left}>
                        <DashboardCardLink text="Last Play Session" icon={faGamepad} className={styles.last} />
                    </Col>
                    <Col className={styles.right}>
                        <DashboardCardLink text="Last Learn Session" icon={faUserGraduate} className={styles.last} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className={styles.favourites}>
                            <div className={styles.favourite}>
                                <FontAwesomeIcon icon={faChalkboardTeacher} fixedWidth />
                                <span>Kyoiku Kanji</span>
                            </div>
                        </div>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </DashboardCard.Body>

            {customising && <SessionWizard onClose={() => setCustomising(false)} />}
        </DashboardCard>
    )
}

export default PlayCard;
