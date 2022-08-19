import DashboardCard from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import DashboardCardLink from "../layout/card/DashboardCardLink";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/cards/MistakesCard.module.scss";
import { useTranslation } from "react-i18next";

const MistakesCard = () => {

    const { t, ready } = useTranslation("translation", { keyPrefix: "dashboard.card.mistakes" });

    const mistakes = 17;
    const colourClass = mistakes > 20 ? styles.red : mistakes > 10 ? styles.orange : styles.green;

    return (
        <DashboardCard size="sm" className={styles.card} loading={!ready}>
            <DashboardCard.Header>
                <DashboardCardHeader.Title>
                    {t("title")}
                </DashboardCardHeader.Title>
            </DashboardCard.Header>

            <DashboardCard.Body className={styles.body}>
                <div className={[styles.quantity, colourClass].join(" ")} title={t("practice")}>
                    {mistakes}
                </div>
                <p className={styles.desc}>{t("review")}</p>
                <div className={styles.types}>
                    <div className={styles.type} title={t("kanji")}>字</div>
                    <div className={styles.type} title={t("kana")}>あ</div>
                    <div className={styles.type} title={t("definitions")}>A</div>
                </div>
            </DashboardCard.Body>

            <DashboardCard.Footer className={styles.footer}>
                <DashboardCardLink text={t("view")} icon={faEraser} className={styles.practice} />
            </DashboardCard.Footer>
        </DashboardCard>
    );
}

export default MistakesCard;
