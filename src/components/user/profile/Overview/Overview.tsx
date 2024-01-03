import { Card } from "react-bootstrap"
import styles  from "./Overview.module.scss"

const Overview = () => {
  return (
    <Card className={styles.card} border="primary">
      <Card.Body>
        <h2 className={styles.heading}>Overview</h2>
      </Card.Body>
    </Card>
  )
}

export default Overview
