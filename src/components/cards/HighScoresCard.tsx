import DashboardCard, { DashboardCardProps } from "../layout/card/DashboardCard";
import { Button, Table } from "react-bootstrap";
import styles from "../../styles/sass/components/cards/HighScoresCard.module.scss";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const HighScoresCard = () => {

    const { t, ready } = useTranslation("translation", { keyPrefix: "dashboard.card.high-scores" });

    const props: DashboardCardProps = {
        size: "sm",
        loading: !ready,
        id: "highscores-card",
        className: styles.card
    }

    return (
        <DashboardCard {...props}>
            <DashboardCard.Header>
                <DashboardCardHeader.Title>{t("title")}</DashboardCardHeader.Title>
                <DashboardCardHeader.Icon icon={faCog} />
            </DashboardCard.Header>

            <DashboardCard.Body className={styles.body}>
                <Table responsive hover className={styles.table}>
                    <thead>
                    <tr>
                        <th>{t("rank")}</th>
                        <th>{t("leaderboard")}</th>
                        <th>{t("score")}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>2</td>
                        <td>{t("names.romaji-time-attack")}</td>
                        <td>04:35</td>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td>{t("names.kanji-hardcore")}</td>
                        <td>6420</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>{t("names.verb-match")}</td>
                        <td>3500</td>
                    </tr>
                    <tr>
                        <td>126</td>
                        <td>{t("names.adverbs")}</td>
                        <td>5000</td>
                    </tr>
                    <tr>
                        <td>5600</td>
                        <td>{t("names.hiragana-speed-run")}</td>
                        <td>00:47</td>
                    </tr>
                    </tbody>
                </Table>
            </DashboardCard.Body>

            <DashboardCard.Footer className={styles.footer}>
                <a className={styles.more} href="/high-scores">{t("more")}</a>
            </DashboardCard.Footer>
        </DashboardCard>
    );
}

export default HighScoresCard;
