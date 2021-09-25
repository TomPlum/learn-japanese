import { Button, Card, Col, Row } from "react-bootstrap";
import styles from "../../../styles/sass/components/user/profile/DangerZone.module.scss";

const DangerZone = () => {
    return (
        <Card className={styles.card} border="danger">
            <Card.Body>
                <h2 className={styles.heading}>Danger Zone</h2>

                <Row>
                    <Col xs={6}>
                        <p className={styles.label}>Clear Local Storage</p>
                    </Col>
                    <Col xs={6}>
                        <Button variant="danger">Clear</Button>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6}>
                        <p className={styles.label}>Reset Highscores</p>
                    </Col>
                    <Col xs={6}>
                        <Button variant="danger">Reset</Button>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6}>
                        <p className={styles.label}>Delete Account</p>
                    </Col>
                    <Col xs={6}>
                        <Button variant="danger">Delete</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default DangerZone;
