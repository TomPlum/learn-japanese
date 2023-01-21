import { CardBackFaceProps } from "../FlashCard"
import FlashCardBack from "../FlashCardBack"
import { Col, Container, Row } from "react-bootstrap"
import RomajiDisplay from "../../ui/display/RomajiDisplay"
import styles from "../../../styles/sass/components/learn/calendar/CalendarFlashCardBack.module.scss"

function CalendarFlashCardBack(props: CardBackFaceProps) {
  const { data, onClick } = props

  return (
    <FlashCardBack title={data.getTitle()} className={styles.wrapper} onReset={onClick}>
      <Container>
        <Row>
          <Col>
            <p className={styles.kanji}>{data.getKanjiVariation()}</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className={styles.text} key={data.getKana()[0]}>
              {data.getKana()[0]}
            </p>
          </Col>
        </Row>

        {props.showRomaji && (
          <Row>
            <Col>
              <RomajiDisplay kana={data.getKana()[0]} className={styles.romaji} />
            </Col>
          </Row>
        )}

        {data.getMeanings() && (
          <Row>
            <Col>
              <p className={styles.meaning}>Literally meaning: {data.getMeanings()}</p>
            </Col>
          </Row>
        )}
      </Container>
    </FlashCardBack>
  )
}

export default CalendarFlashCardBack
