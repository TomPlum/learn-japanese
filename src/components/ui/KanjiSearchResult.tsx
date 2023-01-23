import styles from "../../styles/sass/components/ui/KanjiSearchResult.module.scss"
import { KanjiResult } from "../../service/KanjiService"

export interface KanjiSearchResultProps {
  result: KanjiResult
  search: string
  style?: object
  className?: string
  onClick: () => void
}

const KanjiSearchResult = (props: KanjiSearchResultProps) => {
  const { result, style, search, className, onClick } = props

  const getFieldValue = () => {
    let matching

    switch (result.field) {
      case "character": {
        matching = "match: " + search
        break
      }
      case "meaning": {
        matching =
          result.value.getMeanings().find((meaning) => {
            return meaning.toLowerCase().includes(search.toLowerCase())
          }) ?? ""
        break
      }
      case "reading": {
        const readings = result.value.readings.map((reading) => reading.kana)
        matching = readings.find((reading) => reading.includes(search))!
        break
      }
      case "tag": {
        matching = "tag: " + result.value.getTags().find((tag) => tag.includes(search))!
        break
      }
      default: {
        matching = search
      }
    }

    let startIndex = 0
    let endIndex = matching.length - 1
    const valueStartIndex = matching?.toLowerCase().indexOf(search.toLowerCase())
    const valueEndIndex = valueStartIndex + search.length

    // If the matching field value is super-long, trim it centered around the matching part
    if (matching.length - search.length >= 10) {
      const revealLength = 4

      if (valueStartIndex > 4) {
        startIndex = valueStartIndex - revealLength
      }

      if (endIndex - valueEndIndex > 4) {
        endIndex = valueEndIndex + revealLength
      }
    }

    return (
      <span>
        <span>
          {startIndex !== 0 ? "..." : ""}
          {matching.substring(startIndex, valueStartIndex).trimLeft()}
        </span>

        <strong className={styles.matching}>{matching.substring(valueStartIndex, valueEndIndex)}</strong>

        <span>
          {matching.substring(valueEndIndex, endIndex + 1).trimRight()}
          {endIndex !== matching.length - 1 ? "..." : ""}
        </span>
      </span>
    )
  }

  return (
    <div className={className}>
      <p style={style} onClick={onClick}>
        {result.value.getKanjiVariation()}
      </p>

      {result.field && <p className={styles.field}>{getFieldValue()}</p>}
    </div>
  )
}

export default KanjiSearchResult
