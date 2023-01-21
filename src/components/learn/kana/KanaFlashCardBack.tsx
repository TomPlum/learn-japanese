import FlashCardBack from "../FlashCardBack"
import { CardFaceProps } from "../FlashCard"
import styles from "../../../styles/sass/components/learn/kana/KanaFlashCardBack.module.scss"
import DefinitionList from "../DefinitionList"

const KanaFlashCardBack = (props: CardFaceProps) => {
    const { data, onClick } = props

    return (
        <FlashCardBack title={data.getTitle()} onReset={onClick} className={styles.wrapper}>
            <div className={styles.romaji}>
                <DefinitionList words={data.getMeanings()} mode="inline" />
            </div>
        </FlashCardBack>
    )
}

export default KanaFlashCardBack
