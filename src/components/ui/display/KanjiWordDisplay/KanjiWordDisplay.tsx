import InformationalKanji from "./../InformationalKanji"

export interface KanjiWordDisplayProps {
  value: string
  className?: string
}

const KanjiWordDisplay = (props: KanjiWordDisplayProps) => {
  const { value, className } = props

  return (
    <div>
      {[...value].map((char: string) => {
        if (/[一-龯]/.test(char)) {
          return <InformationalKanji value={char} key={"display-" + char} className={className} />
        } else {
          return (
            <span key={char} className={className}>
              {char}
            </span>
          )
        }
      })}
    </div>
  )
}

export default KanjiWordDisplay
