import { Accordion, Col, Container, Row } from "react-bootstrap"
import styles from "../../styles/sass/components/learn/GrammarInfo.module.scss"
import PageNumber from "../../domain/learn/PageNumber"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp, faHashtag } from "@fortawesome/free-solid-svg-icons"
import { ReactNode, useState } from "react";

export interface GrammarInfoProps {
  id?: string
  title: string
  body: ReactNode | string
  chapter: number
  section: number
  page?: PageNumber
  preExpand?: boolean
}

const GrammarInfo = (props: GrammarInfoProps) => {
  const { id, title, body, chapter, page, section, preExpand } = props

  const [expanded, setExpanded] = useState(preExpand)

  const iconClassName = [chapter <= 12 ? styles.genki1 : styles.genki2, styles.icon].join(" ")
  const headerStyle = !expanded ? { borderRadius: 10 } : { borderRadius: "10px 10px 0 0" }

  return (
    <Accordion className={styles.wrapper} data-testid={id}>
      <Container className={styles.container} fluid>
        <Accordion.Toggle
          as={Row}
          eventKey={title}
          style={headerStyle}
          className={styles.header}
          onClick={() => setExpanded(!expanded)}
        >
          <Col className={styles.chapter}>
            <div className={iconClassName}>
              {chapter}.{section}
            </div>
          </Col>

          <Col className={styles.title}>{title}</Col>

          <Col className={styles.expanderWrapper}>
            <FontAwesomeIcon fixedWidth className={styles.expander} icon={expanded ? faChevronUp : faChevronDown} />
          </Col>
        </Accordion.Toggle>

        <Accordion.Collapse eventKey={title}>
          <Container className={styles.body}>
            <Row>
              <Col>
                <span>{body}</span>
              </Col>
            </Row>

            <Row className={styles.footer} noGutters>
              <Col className={styles.page}>
                <FontAwesomeIcon icon={faHashtag} fixedWidth />
                <em>
                  {page?.toString()} from Genki {chapter <= 12 ? "I" : "II"} (3rd Edition) - Chapter {chapter}, Section{" "}
                  {section}.
                </em>
              </Col>
            </Row>
          </Container>
        </Accordion.Collapse>
      </Container>
    </Accordion>
  )
}

export default GrammarInfo
