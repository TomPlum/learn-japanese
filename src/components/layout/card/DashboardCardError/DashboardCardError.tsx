import styles  from "./DashboardCardError.module.scss"
import { PropsWithChildren } from "react"

export interface DashboardCardErrorProps {
  active?: boolean
}

const DashboardCardError = (props: PropsWithChildren<DashboardCardErrorProps>) => {
  const { active, children } = props

  if (!active) {
    return null
  }

  return (
    <div className={styles.errorContainer} data-testid="dashboard-card-error">
      <span className={styles.error}>{children}</span>
    </div>
  )
}

export default DashboardCardError
