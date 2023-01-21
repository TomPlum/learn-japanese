import styles from "../../../styles/sass/components/layout/card/DashboardCardPreload.module.scss"
import { Fade } from "react-bootstrap"

export interface DashboardCardPreload {
  active?: boolean
}

const DashboardCardPreload = (props: DashboardCardPreload) => {
  const { active } = props

  if (!active) {
    return null
  }

  return (
    <Fade in appear data-testid="dashboard-card-loader">
      <div className={styles.loading}>
        <div className={styles.shimmer}>
          <div className={styles["_2iwr"]} />
          <div className={styles["_2iws"]} />
          <div className={styles["_2iwt"]} />
          <div className={styles["_2iwu"]} />
          <div className={styles["_2iwv"]} />
          <div className={styles["_2iww"]} />
          <div className={styles["_2iwx"]} />
          <div className={styles["_2iwy"]} />
          <div className={styles["_2iwz"]} />
          <div className={styles["_2iw-"]} />
          <div className={styles["_2iw_"]} />
          <div className={styles["_2ix0"]} />
        </div>
      </div>
    </Fade>
  )
}

export default DashboardCardPreload
