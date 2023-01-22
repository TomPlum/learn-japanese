import { Col, Row } from "react-bootstrap"
import styles from "../../styles/sass/components/pages/HomePage.module.scss"
import ProfileCard from "../cards/ProfileCard"
import SettingsCard from "../cards/SettingsCard"
import KanjiShowcaseCard from "../cards/KanjiShowcaseCard"
import FeedbackCard from "../cards/FeedbackCard"
import PlayCard from "../cards/PlayCard"
import ScrollableContainer from "../ui/ScrollableContainer"
import FavouritesCard from "../cards/FavouritesCard"
import KanjiFlashCardsCard from "../cards/KanjiFlashCardsCard"
import ActivityCard from "../cards/ActivityCard"
import StreakCard from "../cards/StreakCard"
import HighScoresCard from "../cards/HighScoresCard"
import MistakesCard from "../cards/MistakesCard"
import StatisticsCard from "../cards/StatisticsCard"

const UserDashboardLayout = () => {
  return (
    <Row className={styles.row} data-testid="user-dashboard">
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
  )
}

export default UserDashboardLayout
