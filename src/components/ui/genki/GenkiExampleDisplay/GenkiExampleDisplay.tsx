import GenkiUnderlineDisplay from "./../GenkiUnderlineDisplay"
import styles  from "./GenkiExampleDisplay.module.scss"
import { UnderlineStrategy } from "../../Underline"
import FuriganaDisplay, { FuriganaDisplayProps } from "../../display/FuriganaDisplay"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

interface PlainTextValueWithUnderline {
  text: string
  underline?: UnderlineStrategy
}

type ValueWithFuriganaSupport = FuriganaDisplayProps

type Value = PlainTextValueWithUnderline | ValueWithFuriganaSupport

export interface GenkiExampleDisplayProps {
  jp: Value
  en: PlainTextValueWithUnderline
  compare?: PlainTextValueWithUnderline
  book: number
  noIndent?: boolean
  incorrect?: boolean
}

const GenkiExampleDisplay = (props: GenkiExampleDisplayProps) => {
  const { jp, en, book, compare, noIndent, incorrect } = props

  const style = noIndent ? { marginLeft: 0 } : {}
  const underlineClass = incorrect ? styles.incorrectUnderline : ""

  const isPlainText = (value: Value): value is PlainTextValueWithUnderline => {
    return (value as PlainTextValueWithUnderline).text !== undefined
  }

  const isFurigana = (value: Value): value is ValueWithFuriganaSupport => {
    const casted = value as ValueWithFuriganaSupport
    return casted.chars !== undefined && casted.position !== undefined
  }

  return (
    <div className={styles.wrapper} style={style} data-testid="genki-example-display">
      <div className={styles.jp} data-testid="genki-example-jp">
        {incorrect && (
          <FontAwesomeIcon fixedWidth icon={faTimes} className={styles.incorrect} data-testid="incorrect-example" />
        )}

        {isPlainText(jp) && (
          <GenkiUnderlineDisplay underline={jp.underline} book={book} className={underlineClass}>
            <span>{jp.text}</span>
          </GenkiUnderlineDisplay>
        )}

        {isFurigana(jp) && (
          <div className={styles.furiganaDisplay}>
            <FuriganaDisplay {...jp} />
          </div>
        )}
      </div>

      <div className={styles.en} style={{ marginLeft: incorrect ? "25px" : 0 }} data-testid="genki-example-en">
        <GenkiUnderlineDisplay underline={en.underline} book={book} className={underlineClass}>
          <span>{en.text}</span>
        </GenkiUnderlineDisplay>
      </div>

      {compare && (
        <div
          className={styles.compare}
          style={{ marginLeft: incorrect ? "25px" : 0 }}
          data-testid="genki-example-compare"
        >
          <GenkiUnderlineDisplay underline={compare.underline} book={book}>
            <span>{`cf. ${compare.text}`}</span>
          </GenkiUnderlineDisplay>
        </div>
      )}
    </div>
  )
}

export default GenkiExampleDisplay
