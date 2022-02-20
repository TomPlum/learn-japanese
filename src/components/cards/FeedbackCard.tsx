import DashboardCard from "../layout/card/DashboardCard";
import styles from "../../styles/sass/components/cards/FeedbackCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faCommentDots } from "@fortawesome/free-solid-svg-icons";

export interface FeedbackCardProps {
    className?: string;
}

const FeedbackCard = (props: FeedbackCardProps) => {

    const { className } = props;

    return (
        <DashboardCard className={[styles.card, className].join(" ")}>
            <DashboardCard.Body className={styles.body}>
                <FontAwesomeIcon icon={faGithub} fixedWidth className={styles.icon} title="Source Repo" />
                <FontAwesomeIcon icon={faCommentDots} fixedWidth className={styles.icon} title="Feedback" />
                <FontAwesomeIcon icon={faCoffee} fixedWidth className={styles.icon} title="Buy me a coffee" />
            </DashboardCard.Body>
        </DashboardCard>
    );
}

export default FeedbackCard;
