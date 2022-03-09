import DashboardCard from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import DashboardActivityEvent from "../layout/card/DashboardActivityEvent";
import { faEllipsisH, faEraser, faGraduationCap, faPlay } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/cards/ActivityCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActivityCard = () => {
    return (
        <DashboardCard size="md">
            <DashboardCard.Header>
                <DashboardCardHeader.Title>
                    Activity
                </DashboardCardHeader.Title>
            </DashboardCard.Header>

            <DashboardCard.Body className={styles.body}>
                <div className={styles.activity}>
                    <DashboardActivityEvent icon={faGraduationCap} name="Learning Session" />
                    <DashboardActivityEvent icon={faPlay} name="Play Session" />
                    <DashboardActivityEvent icon={faEraser} name="Mistakes Review" />
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
