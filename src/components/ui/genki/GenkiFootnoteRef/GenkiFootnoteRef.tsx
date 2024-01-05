import styles  from "./GenkiFootnoteRef.module.scss"

export interface GenkiFootnoteRefProps {
  value: number
  book: number
}

const GenkiFootnoteRef = (props: GenkiFootnoteRefProps) => {
  const { value, book } = props

  const className = book === 1 ? styles.bookOne : styles.bookTwo

  return <span className={[className, styles.value].join(" ")}>{value}</span>
}

export default GenkiFootnoteRef
