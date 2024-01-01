export interface KeyWordDataSummaryProps {
  words: string[]
  className?: string
}

const KeyWordDataSummary = (props: KeyWordDataSummaryProps) => {
  const { words, className } = props

  return (
    <span key={words.join("-")}>
      {words.map((word: string, i: number) => {
        if (i < words.length - 2) {
          return (
            <>
              <span key={word} className={className}>
                {word}
              </span>
              <span key={`comma-${i}`}>{", "}</span>
            </>
          )
        } else if (i < words.length - 1 || words.length === 1) {
          return (
            <span key={word} className={className}>
              {word}
            </span>
          )
        } else {
          return (
            <>
              <span key={`and-${i}`}>{" and "}</span>
              <span key={word} className={className}>
                {word}
              </span>
            </>
          )
        }
      })}
    </span>
  )
}

export default KeyWordDataSummary
