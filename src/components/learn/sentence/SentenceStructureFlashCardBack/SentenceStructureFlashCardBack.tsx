import FlashCardBack from "../../FlashCardBack"
import { CardBackFaceProps } from "../../FlashCard"
import RomajiDisplay from "../../../ui/display/RomajiDisplay"
import Copyable from "../../../ui/Copyable"
import KanjiWordDisplay from "../../../ui/display/KanjiWordDisplay"
import styles  from "./SentenceStructureFlashCardBack.module.scss"

const SentenceStructureFlashCardBack = (props: CardBackFaceProps) => {
  const { data, onClick } = props

  const kanjiVariation = data.getKanjiVariation()

  return (
    <FlashCardBack title={data.getTitle()} onReset={onClick} className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        {kanjiVariation && <KanjiWordDisplay className={styles.kanjiVariation} value={kanjiVariation} />}

        <Copyable className={styles.kana}>
          <span>{data.getKana()}</span>
        </Copyable>

        {props.showRomaji && <RomajiDisplay kana={data.getKana()[0]} className={styles.romaji} />}
      </div>
    </FlashCardBack>
  )
}

export default SentenceStructureFlashCardBack
