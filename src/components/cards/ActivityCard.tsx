import DashboardCard from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import DashboardActivityEvent from "../layout/card/DashboardActivityEvent";
import { faEllipsisH, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/cards/ActivityCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActivityEventType from "../../domain/ActivityEventType";
import ActivityEvent from "../../domain/ActivityEvent";

const ActivityCard = () => {
    return (
        <DashboardCard size="md">
            <DashboardCard.Header>
                <DashboardCardHeader.Title>
                    Activity
                </DashboardCardHeader.Title>
                <DashboardCardHeader.Icon icon={faTimesCircle} title="Clear" />
            </DashboardCard.Header>

            <DashboardCard.Body className={styles.body}>
                <div className={styles.activity}>
                    <DashboardActivityEvent event={ActivityEvent.of(ActivityEventType.LEARN, Date.now())} />
                    <DashboardActivityEvent event={ActivityEvent.of(ActivityEventType.PLAY, Date.now() - 1500000)} />
                    <DashboardActivityEvent event={ActivityEvent.of(ActivityEventType.MISTAKES, Date.now() - 10000000)} />
                    <DashboardActivityEvent event={ActivityEvent.of(ActivityEventType.fromStreak(400), Date.now() - 10000000000)} />
                    <DashboardActivityEvent event={ActivityEvent.of(ActivityEventType.POST_REGISTRATION, Date.UTC(2021, 1, 22).valueOf())} />
                </div>
                <div className={styles.footer}>
                    <div className={styles.more} title="See More">
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </div>
                </div>
            </DashboardCard.Body>
        </DashboardCard>
    );
}

export default ActivityCard;