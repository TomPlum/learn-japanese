import { Container } from "react-bootstrap"
import { Kanji } from "types/kanji/Kanji"
import { CardFaceProps } from "../../FlashCard"
import DynamicDisplay from "../../../ui/display/DynamicDisplay"
import styles  from "./KanjiFlashCardFront.module.scss"

function KanjiFlashCardFront(props: CardFaceProps) {
  const { data, onClick } = props
  const kanji = data as Kanji
  return (
    <Container
      className={styles["wrapper-grade-" + kanji.grade.value] + " " + styles.wrapper}
      onClick={onClick}
      data-testid="front"
    >
      <DynamicDisplay style={{ container: [styles.display] }} value={kanji.getValue()} />
    </Container>
  )
}

export default KanjiFlashCardFront
