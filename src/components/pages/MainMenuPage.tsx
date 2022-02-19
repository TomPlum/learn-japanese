import styles from "../../styles/sass/components/pages/MainMenuPage.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import DashboardCard from "../layout/card/DashboardCard";
import PlayCard from "../cards/PlayCard";
import HighScoresCard from "../cards/HighScoresCard";

const MainMenuPage = () => {
    return (
        <Container className={styles.wrapper}>
            <Row className={styles.row}>
                <Col>
                    <DashboardCard className={styles.toolbar} />
                </Col>
            </Row>
            <Row className={styles.row}>
                <Col md={3}>
                    <DashboardCard size="sm" title="Profile">

                    </DashboardCard>
                    <DashboardCard size="sm" title="Settings">

                    </DashboardCard>
                </Col>

                <Col>
                    <PlayCard />

                    <DashboardCard size="md" title="Activity" error="Something went wrong.">

                    </DashboardCard>
                </Col>

                <Col md={3}>
                    <HighScoresCard />

                    <DashboardCard size="sm" title="Mistakes">

                    </DashboardCard>

                    <DashboardCard size="sm" title="Stats">

                    </DashboardCard>
                </Col>
            </Row>
        </Container>
    );
}

export default MainMenuPage;
