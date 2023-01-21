import { Card, Table } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRedo } from "@fortawesome/free-solid-svg-icons"
import styles from "../../../styles/sass/components/user/profile/Ranks.module.scss"
import { User } from "../../../slices/UserSlice"

export interface RanksProps {
  user: User
}

const Ranks = () => {
  const onRefreshHighScores = () => {}

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
      </Card.Body>
    </Card>
  )
}

export default Ranks
