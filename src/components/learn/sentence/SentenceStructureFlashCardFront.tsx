import { CardFaceProps } from "../FlashCard"
import FlashCardFront from "../FlashCardFront"
import styles from "../../../styles/sass/components/learn/sentence/SentenceStructureFlashCardFront.module.scss"
import DefinitionList from "../DefinitionList"

const SentenceStructureFlashCardFront = (props: CardFaceProps) => {
  const { data, onClick } = props

  return (
    <FlashCardFront onClick={onClick} className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <DefinitionList words={data.getMeanings()} mode="stacked" />
      </div>
    </FlashCardFront>
  )
}

export default SentenceStructureFlashCardFront
