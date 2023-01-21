import { Component } from "react"
import { Col, Container, Row } from "react-bootstrap"
import styles from "../../styles/sass/components/learn/FlashCardFront.module.scss"

export interface FlashCardFrontProps {
  className?: string
  onClick: () => void
  borderColour?: string
}

class FlashCardFront extends Component<FlashCardFrontProps> {
  render() {
    const { onClick, className, borderColour, children } = this.props

    const border = borderColour ?? "#3996e5"

    return (
      <Container className={[className, styles.wrapper].join(" ")} onClick={onClick} style={{ borderColor: border }}>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    )
  }
}

export default FlashCardFront
