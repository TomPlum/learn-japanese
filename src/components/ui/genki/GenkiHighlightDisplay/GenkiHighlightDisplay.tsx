import styles  from "./GenkiHighlightDisplay.module.scss"

export interface GenkiHighlightDisplayProps {
  text: string
  description: string
  chapter: number
}

const GenkiHighlightDisplay = (props: GenkiHighlightDisplayProps) => {
  const { text, description, chapter } = props

  const highlightClass = [chapter <= 12 ? styles.genkiOne : styles.genkiTwo, styles.highlight].join(" ")

  return (
    <p className={styles.wrapper}>
      <span className={highlightClass}>{text}</span>
      <span className={styles.desc}>{description}</span>
    </p>
  )
}

export default GenkiHighlightDisplay
