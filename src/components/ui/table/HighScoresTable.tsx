import { HighScoreEntry } from "../../../service/HighScoresService";
import { Table } from "react-bootstrap";
import styles from "../../../styles/sass/components/ui/table/HighScoresTable.module.scss";

export interface HighScoresTableProps {
    preset: number;
    entries: HighScoreEntry[];
}

const HighScoresTable = (props: HighScoresTableProps) => {
    const { preset, entries } = props;

    return (
        <div className={styles.wrapper} data-testid="high-scores-table">
            <Table className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.filter(entry => entry.presetId === preset)
                        .sort((a, b) => (a.score ?? 0) < (b.score ?? 0) ? 1 : -1)
                        .map((entry: HighScoreEntry, i: number) => (
                            <tr key={entry.user.id}>
                                <td>{i + 1}</td>
                                <td>{entry.user.name}</td>
                                <td>{entry.score ?? entry.time}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    );
}

export default HighScoresTable;
