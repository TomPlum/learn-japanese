import { PropsWithChildren } from "react"
import styles  from "./DashboardCardFooter.module.scss"

export interface DashboardCardFooterProps {
  className?: string
}

const DashboardCardFooter = (props: PropsWithChildren<DashboardCardFooterProps>) => {
  const { className, children } = props

  return <div className={[styles.container, className].join(" ")}>{children}</div>
}

export default DashboardCardFooter
