import { CardFaceProps } from "../FlashCard"
import CommonFlashCardBack from "../CommonFlashCardBack"

const NumbersFlashCardBack = (props: CardFaceProps) => {
    const { data, onClick } = props

    return (
        <CommonFlashCardBack
            title={data.getTitle()}
            answer={data.getKanjiVariation() ?? ""}
            kana={data.getKana()}
            example={data.getExample()}
            onClick={onClick}
        />
    )
}

export default NumbersFlashCardBack
