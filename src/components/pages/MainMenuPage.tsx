import styles from "../../styles/sass/components/pages/MainMenuPage.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import DashboardCard from "../layout/card/DashboardCard";
import PlayCard from "../cards/PlayCard";
import HighScoresCard from "../cards/HighScoresCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import DashboardToolbar from "../layout/DashboardToolbar";

const MainMenuPage = () => {
    return (
        <Container className={styles.wrapper}>
            <Row className={styles.row}>
                <Col>
                    <DashboardToolbar />
                </Col>
            </Row>
            <Row className={styles.row}>
                <Col md={3}>
                    <DashboardCard size="sm">
                        <DashboardCard.Header>
                            <DashboardCardHeader.Title>
                                Profile
                            </DashboardCardHeader.Title>
                        </DashboardCard.Header>
                    </DashboardCard>

                    <DashboardCard size="sm">
                        <DashboardCard.Header>
                            <DashboardCardHeader.Title>
                                Settings
                            </DashboardCardHeader.Title>
                        </DashboardCard.Header>
                    </DashboardCard>
                </Col>

                <Col>
                    <PlayCard />

                    <DashboardCard size="md" error="Something went wrong.">
                        <DashboardCard.Header>
                            <DashboardCardHeader.Title>
                                Activity
                            </DashboardCardHeader.Title>
                        </DashboardCard.Header>
                    </DashboardCard>
                </Col>

                <Col md={3}>
                    <HighScoresCard />

                    <DashboardCard size="sm" updating>
                        <DashboardCard.Header>
                            <DashboardCardHeader.Title>
                                Mistakes
                            </DashboardCardHeader.Title>
                        </DashboardCard.Header>
                    </DashboardCard>

                    <DashboardCard size="sm" loading>
                        <DashboardCard.Header>
                            <DashboardCardHeader.Title>
                                Stats
                            </DashboardCardHeader.Title>
                        </DashboardCard.Header>
                    </DashboardCard>
                </Col>
            </Row>
        </Container>
    );
}

export default MainMenuPage;
