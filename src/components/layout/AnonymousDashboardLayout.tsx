import { Col, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/pages/HomePage.module.scss";
import ProfileCard from "../cards/ProfileCard";
import KanjiShowcaseCard from "../cards/KanjiShowcaseCard";
import FeedbackCard from "../cards/FeedbackCard";
import PlayCard from "../cards/PlayCard";
import ScrollableContainer from "../ui/ScrollableContainer";
import ActivityCard from "../cards/ActivityCard";
import HighScoresCard from "../cards/HighScoresCard";
import SettingsCard from "../cards/SettingsCard";
import LocalStorageService from "../../service/LocalStorageService";
import { useState } from "react";

const AnonymousDashboardLayout = () => {

    const localStorageService = new LocalStorageService();
    const [hideProfile, setHideProfile] = useState(localStorageService.getHideUserProfileHint());

    const handleProfileCardDismiss = () => {
        setHideProfile(true);
        localStorageService.setHideUserProfileHint();
    }

    return (
        <Row className={styles.row} data-testid="anonymous-dashboard">
            <Col md={3} className={styles.col}>
                {!hideProfile && (
                    <ProfileCard onDismiss={handleProfileCardDismiss} />
                )}
                <KanjiShowcaseCard />
                <FeedbackCard />
            </Col>

            <Col md={6}>
                <PlayCard />
                <ScrollableContainer className={styles.main} hideScrollBar>
                    <ActivityCard />
                </ScrollableContainer>
            </Col>

            <Col md={3}>
                <HighScoresCard />
                <SettingsCard />
            </Col>
        </Row>
    );
}

export default AnonymousDashboardLayout;
