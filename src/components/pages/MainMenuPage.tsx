import styles from "../../styles/sass/components/pages/MainMenuPage.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import DashboardCard from "../layout/card/DashboardCard";
import PlayCard from "../cards/PlayCard";
import HighScoresCard from "../cards/HighScoresCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import DashboardToolbar from "../layout/DashboardToolbar";
import FeedbackCard from "../cards/FeedbackCard";
import ScrollableContainer from "../ui/ScrollableContainer";
import ProfileCard from "../cards/ProfileCard";
import SettingsCard from "../cards/SettingsCard";
import ActivityCard from "../cards/ActivityCard";
import MistakesCard from "../cards/MistakesCard";
import FavouritesCard from "../cards/FavouritesCard";

const MainMenuPage = () => {
    return (
        <Container className={styles.wrapper} data-testid="home-page">
            <Row className={styles.row}>
                <Col>
                    <DashboardToolbar />
                </Col>
            </Row>

            <Row className={styles.row}>
                <Col md={3} className={styles.col}>
                    <ProfileCard />

                    <SettingsCard />

                    <FeedbackCard className={styles.feedback} />
                </Col>

                <Col md={6}>
                    <ScrollableContainer className={styles.main} hideScrollBar>
                        <PlayCard />
                        <FavouritesCard />
                        <ActivityCard />
                    </ScrollableContainer>
                </Col>

                <Col md={3}>
                    <HighScoresCard />

                    <MistakesCard />

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
