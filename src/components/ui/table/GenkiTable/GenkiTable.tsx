import styles  from "./GenkiTable.module.scss"
import { Table } from "react-bootstrap"
import { PropsWithChildren } from "react"

export interface GenkiTableProps {
  chapter: number
  className?: string
  maxWidth?: number
}

const GenkiTable = (props: PropsWithChildren<GenkiTableProps>) => {
  const { children, chapter, className, maxWidth } = props

  const borderClass = chapter <= 12 ? styles.genkiOne : styles.genkiTwo

  return (
    <div className={[styles.wrapper, borderClass, className].join(" ")} style={{ maxWidth: maxWidth }}>
      <Table className={styles.table} borderless size="sm" variant='dark'>
        {children}
      </Table>
    </div>
  )
}

export default GenkiTable
