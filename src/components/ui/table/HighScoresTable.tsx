import { HighScoreEntry } from "../../../service/HighScoresService"
import { Table } from "react-bootstrap"
import styles from "../../../styles/sass/components/ui/table/HighScoresTable.module.scss"

export interface HighScoresTableProps {
  preset: number
  entries: HighScoreEntry[]
  onClickUser: (username: string) => void
}

const HighScoresTable = (props: HighScoresTableProps) => {
  const { preset, entries, onClickUser } = props

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
          {entries
            .filter((entry) => entry.presetId === preset)
            .sort((a, b) => ((a.score ?? 0) < (b.score ?? 0) ? 1 : -1))
            .map((entry: HighScoreEntry, i: number) => {
              const username = entry.user.name
              return (
                <tr key={entry.user.id}>
                  <td>{i + 1}</td>
                  <td>
                    <a
                      onClick={() => onClickUser(username)}
                      title={`See ${username}'s highscores`}
                      className={styles.user}
                    >
                      {username}
                    </a>
                  </td>
                  <td>{entry.score ?? entry.time}</td>
                </tr>
              )
            })}
        </tbody>
      </Table>
    </div>
  )
}

export default HighScoresTable
