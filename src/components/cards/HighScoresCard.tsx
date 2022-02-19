import DashboardCard, { DashboardCardProps } from "../layout/card/DashboardCard";
import { Table } from "react-bootstrap";
import styles from "../../styles/sass/components/cards/HighScoresCard.module.scss";

const HighScoresCard = () => {

    const props: DashboardCardProps = {
        size: "sm",
        title: "Highscores",
        id: "highscores-card",
        className: styles.card
    }

    return (
        <DashboardCard {...props}>
            <Table responsive hover className={styles.table}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Leaderboard</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>2</td>
                    <td>Romaji Time Attack</td>
                    <td>04:35</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Kanji Hardcore</td>
                    <td>6420</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Verb Match</td>
                    <td>3500</td>
                </tr>
                <tr>
                    <td>126</td>
                    <td>Adverbs</td>
                    <td>5000</td>
                </tr>
                <tr>
                    <td>5600</td>
                    <td>Hiragana Speed Run</td>
                    <td>00:47</td>
                </tr>
                </tbody>
            </Table>
        </DashboardCard>
    );
}

export default HighScoresCard;
