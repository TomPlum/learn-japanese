import { Component } from "react"
import { Col, Container, Row } from "react-bootstrap"
import styles  from "./HelpPage.module.scss"
import { faLink, faQuestionCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class HelpPage extends Component {
  render() {
    return (
      <Container fluid className={styles.wrapper} data-testid='help-page'>
        <Container className={styles.content}>
          <Row>
            <Col>
              <h1 className={styles.heading}>
                <FontAwesomeIcon icon={faQuestionCircle} /> Frequently Asked Questions
              </h1>

              <h3 className={styles.question}>
                What is <strong>&apos;romaji&apos;</strong> ?
              </h3>
              <p className={styles.answer}>
                Rōmaji or ローマ字 (rōmaji) is the romanisation of the Japanese written language.
              </p>
              <a
                href="https://www.japanesepod101.com/japanese-romaji/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <FontAwesomeIcon icon={faLink} fixedWidth className={styles.sourceIcon} />
                <span className={styles.source}>Source</span>
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default HelpPage
