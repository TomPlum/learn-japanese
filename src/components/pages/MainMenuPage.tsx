import styles from "../../styles/sass/components/pages/MainMenuPage.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import PlayCard from "../cards/PlayCard";
import HighScoresCard from "../cards/HighScoresCard";
import DashboardToolbar from "../layout/DashboardToolbar";
import FeedbackCard from "../cards/FeedbackCard";
import ScrollableContainer from "../ui/ScrollableContainer";
import ProfileCard from "../cards/ProfileCard";
import SettingsCard from "../cards/SettingsCard";
import ActivityCard from "../cards/ActivityCard";
import MistakesCard from "../cards/MistakesCard";
import FavouritesCard from "../cards/FavouritesCard";
import StatisticsCard from "../cards/StatisticsCard";
import KanjiShowcaseCard from "../cards/KanjiShowcaseCard";
import KanjiFlashCardsCard from "../cards/KanjiFlashCardsCard";
import { useUserSelector } from "../../hooks";
import StreakCard from "../cards/StreakCard";

const MainMenuPage = () => {

    const user = useUserSelector(state => state.user.user);

    return (
        <Container className={styles.wrapper} data-testid="home-page">
         {/*   <Row className={styles.row}>
                <Col>
                    <DashboardToolbar />
                </Col>
            </Row>*/}

            <Row className={styles.row}>
                <Col md={3} className={styles.col}>
                    <ProfileCard />
                    <SettingsCard />
                    <KanjiShowcaseCard />
                    <FeedbackCard />
                </Col>

                <Col md={6}>
                    <PlayCard />
                    <ScrollableContainer className={styles.main} hideScrollBar>
                        <FavouritesCard />
                        <KanjiFlashCardsCard />
                        <ActivityCard />
                    </ScrollableContainer>
                </Col>

                <Col md={3}>
                    <StreakCard />
                    <HighScoresCard />
                    <MistakesCard />
                    <StatisticsCard />
                </Col>
            </Row>
        </Container>
    );
}

export default MainMenuPage;
