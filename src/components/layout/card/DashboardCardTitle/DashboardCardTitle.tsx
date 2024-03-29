import { PropsWithChildren } from "react"
import styles  from "./DashboardCardTitle.module.scss"

export interface DashboardCardTitleProps {
  className?: string
}

const DashboardCardTitle = (props: PropsWithChildren<DashboardCardTitleProps>) => {
  const { children, className } = props

  return <span className={[styles.title, className].join(" ")}>{children}</span>
}

export default DashboardCardTitle
