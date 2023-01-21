import { CardFaceProps } from "../FlashCard"
import Colour from "../../../domain/colour/Colour"
import CommonFlashCardBack from "../CommonFlashCardBack"

function BasicsFlashCardBack(props: CardFaceProps) {
  const value = props.data as Colour

  return (
    <CommonFlashCardBack
      title={value.getTitle()}
      answer={value.getKanjiVariation() ?? value.getKana()[0]}
      kana={value.getKana()}
      onClick={props.onClick}
      borderColour={props.data instanceof Colour ? props.data.colour : undefined}
    />
  )
}

export default BasicsFlashCardBack
