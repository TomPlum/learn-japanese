import { Component } from "react"
import { Kana } from "types/kana/Kana"
import { Col, Container, Row } from "react-bootstrap"
import styles  from "./KanaTile.module.scss"
import KanaType from "types/kana/KanaType"
import KanaTypeIndicator from "./../KanaTypeIndicator"
import KanaDisplay from "../../display/KanaDisplay"

export interface KanaTileProps {
  kana: Kana
}

class KanaTile extends Component<KanaTileProps> {
  render() {
    const { kana } = this.props

    return (
      <Container className={styles.wrapper}>
        <Row className={styles.typeWrapper}>
          <Col xs={12}>
            <KanaTypeIndicator
              className={kana.type === KanaType.HIRAGANA ? styles.hiragana : styles.katakana}
              title={kana.type}
            />
            {kana.isDiagraph() && <KanaTypeIndicator className={styles.diagraph} title="Diagraph" />}
            {kana.isDiacritical && <KanaTypeIndicator className={styles.diacritical} title="Diacritical" />}
          </Col>
        </Row>

        <KanaDisplay
          kana={kana}
          style={{
            character: { color: "#000", size: "xs" },
            container: [styles.kanaWrapper]
          }}
        />

        <p className={styles.romaji}>{kana.getFullRomajiString()}</p>
      </Container>
    )
  }
}

export default KanaTile
