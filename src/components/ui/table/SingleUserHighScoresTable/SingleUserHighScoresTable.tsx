import { useEffect, useState } from "react"
import styles  from "./SingleUserHighScoresTable.module.scss"
import { HighScoreEntry } from "../../../../service/HighScoresService"
import { Table } from "react-bootstrap"

export interface SingleUserHighScoresTableProps {
  user: string
}

const SingleUserHighScoresTable = (_props: SingleUserHighScoresTableProps) => {
  const [entries] = useState<HighScoreEntry[]>([])

  useEffect(() => {}, [])

  return (
    <div data-testid="single-user-high-scores-table">
      <Table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Preset</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {entries
            .sort((a, b) => ((a.score ?? 0) < (b.score ?? 0) ? 1 : -1))
            .map((entry: HighScoreEntry, i: number) => {
              return (
                <tr key={entry.user.id}>
                  <td>{i + 1}</td>
                  <td>{entry.presetId}</td>
                  <td>{entry.score ?? entry.time}</td>
                </tr>
              )
            })}
        </tbody>
      </Table>
    </div>
  )
}

export default SingleUserHighScoresTable
