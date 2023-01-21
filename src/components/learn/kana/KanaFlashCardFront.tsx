import KanaDisplay from "../../ui/display/KanaDisplay"
import { CardFaceProps } from "../FlashCard"
import { Kana } from "../../../domain/kana/Kana"
import FlashCardFront from "../FlashCardFront"
import styles from "../../../styles/sass/components/learn/kana/KanaFlashCardFront.module.scss"

const KanaFlashCardFront = (props: CardFaceProps) => {
    const { data, onClick } = props

    return (
        <FlashCardFront onClick={onClick} className={styles.wrapper}>
            <KanaDisplay kana={data as Kana} style={{ character: { className: styles.kana } }} />
        </FlashCardFront>
    )
}

export default KanaFlashCardFront
