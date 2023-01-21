import { Col, Container, Row } from "react-bootstrap"
import FlashCardBack from "./FlashCardBack"
import { Component } from "react"
import { LearningExample } from "../../domain/learn/Learnable"
import styles from "../../styles/sass/components/learn/CommonFlashCardBack.module.scss"
import RomajiGenerator from "../../utility/RomajiGenerator"

export interface CommonFlashCardBackProps {
  answer: string
  kana: string[]
  title: string
  borderColour?: string
  example?: LearningExample
  onClick: () => void
}

class CommonFlashCardBack extends Component<CommonFlashCardBackProps> {
  render() {
    const { answer, kana, title, example, borderColour, onClick } = this.props

    const romaji = new RomajiGenerator()

    return (
      <FlashCardBack title={title} onReset={onClick} className={styles.wrapper} borderColour={borderColour}>
        <Container className={styles.innerWrapper}>
          <Row>
            <Col sm={6} xs={12}>
              <p className={styles.kanji}>{answer}</p>
            </Col>

            <Col sm={6} xs={12} className={styles.rightCol}>
              <div className={styles.rightDataWrapper}>
                <p className={styles.kana}>{kana.join(" or ")}</p>
                <p className={styles.romaji}>({kana.map((it) => romaji.generate(it)).join(" or ")})</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              {example && (
                <div>
                  <p className={styles.exampleEnglish}>{example.english}</p>
                  <p className={styles.exampleKana}>{example.kana}</p>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </FlashCardBack>
    )
  }
}

export default CommonFlashCardBack
