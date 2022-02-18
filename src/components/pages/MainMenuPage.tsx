import styles from "../../styles/sass/components/pages/MainMenuPage.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import DashboardCard from "../layout/DashboardCard";

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
                    <DashboardCard size="md" title="Play" loading>

                    </DashboardCard>

                    <DashboardCard size="md" title="Activity" error="Something went wrong.">

                    </DashboardCard>
                </Col>

                <Col md={3}>
                    <DashboardCard size="sm" title="Highscores">

                    </DashboardCard>

                    <DashboardCard size="sm" title="Mistakes">

                    </DashboardCard>

                    <DashboardCard size="sm" title="Stats">

                    </DashboardCard>
                </Col>
            </Row>
            {/*<CardContainer />*/}
        </Container>
    );
}

export default MainMenuPage;
