import DashboardCard from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import DashboardCardLink from "../layout/card/DashboardCardLink";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/cards/MistakesCard.module.scss";

const MistakesCard = () => {

    const mistakes = 17;

    const colourClass = mistakes > 20 ? styles.red : mistakes > 10 ? styles.orange : styles.green;

    return (
        <DashboardCard size="sm" className={styles.card}>
            <DashboardCard.Header>
                <DashboardCardHeader.Title>
                    Mistakes
                </DashboardCardHeader.Title>
            </DashboardCard.Header>

            <DashboardCard.Body className={styles.body}>
                <div className={[styles.quantity, colourClass].join(" ")} title="Practice">
                    {mistakes}
                </div>
                <p className={styles.desc}>to review</p>
                <div className={styles.types}>
                    <div className={styles.type} title="Kanji">字</div>
                    <div className={styles.type} title="Kana">あ</div>
                    <div className={styles.type} title="Definitions">A</div>
                </div>
            </DashboardCard.Body>

            <DashboardCard.Footer className={styles.footer}>
                <DashboardCardLink text="View Mistakes" icon={faEraser} className={styles.practice} />
            </DashboardCard.Footer>
        </DashboardCard>
    );
}

export default MistakesCard;
