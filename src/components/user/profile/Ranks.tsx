import { Card, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/sass/components/user/profile/Ranks.module.scss";

export interface RanksProps {

}

const Ranks = () => {

    const onRefreshHighScores = () => {

    }

    return (
        <Card className={styles.card} border="warning">
            <Card.Body>
                <h2 className={styles.heading}>
                    Ranks
                    <FontAwesomeIcon
                        size="sm"
                        title="Refresh"
                        icon={faRedo}
                        className={styles.icon}
                        onClick={onRefreshHighScores}
                    />
                </h2>
                <Table responsive hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Leaderboard</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>2</td>
                        <td>Romaji Time Attack</td>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td>Kanji Hardcore</td>
                    </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

export default Ranks;
