import { Card, Col, Row } from "react-bootstrap";
import styles from "../../../styles/sass/components/user/profile/Preferences.module.scss";

const Preferences = () => {
    return (
        <Card className={styles.card}>
            <Card.Body>
                <h2 className={styles.heading}>Preferences</h2>
                <Row>
                    <Col xs={6}>
                        <p className={styles.label}>Default font</p>
                    </Col>
                    <Col xs={6}>
                        <p className={styles.value}>Default font</p>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6}>
                        <p className={styles.label}>Theme</p>
                    </Col>
                    <Col xs={6}>
                        <p className={styles.value}>Dark Mode</p>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6}>
                        <p className={styles.label}>Language</p>
                    </Col>
                    <Col xs={6}>
                        <p className={styles.value}>English</p>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6}>
                        <p className={styles.label}>Highscores</p>
                    </Col>
                    <Col xs={6}>
                        <p className={styles.value}>Auto-Submit</p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Preferences;
