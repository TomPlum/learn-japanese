import DashboardCard from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import DashboardCardLink from "../layout/card/DashboardCardLink";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/cards/MistakesCard.module.scss";

const MistakesCard = () => {
    return (
        <DashboardCard size="sm" className={styles.card}>
            <DashboardCard.Header>
                <DashboardCardHeader.Title>
                    Mistakes
                </DashboardCardHeader.Title>
            </DashboardCard.Header>

            <DashboardCard.Body className={styles.body}>
                <div className={styles.quantity} title="Practice">17</div>
                <p className={styles.desc}>to review</p>
            </DashboardCard.Body>

            <DashboardCard.Footer className={styles.footer}>
                <DashboardCardLink text="View Mistakes" icon={faEraser} className={styles.practice} />
            </DashboardCard.Footer>
        </DashboardCard>
    );
}

export default MistakesCard;
