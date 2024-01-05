import styles  from "./QuoteDisplay.module.scss"
import { PropsWithChildren } from "react"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export interface QuoteDisplayProps {
  chapter: number
  incorrect?: boolean
}

const QuoteDisplay = (props: PropsWithChildren<QuoteDisplayProps>) => {
  const { chapter, incorrect, children } = props

  const colouredClass = incorrect ? styles.incorrect : chapter <= 12 ? styles.genkiOne : styles.genkiTwo
  const wrapperClass = [colouredClass, styles.wrapper].join(" ")

  return (
    <span className={wrapperClass}>
      {incorrect && <FontAwesomeIcon icon={faTimes} className={styles.wrong} fixedWidth title="Incorrect" />}
      <span className={styles.quote}>&quot;</span>
      <span className={styles.value}>{children}</span>
      <span className={styles.quote}>&quot;</span>
    </span>
  )
}

export default QuoteDisplay
