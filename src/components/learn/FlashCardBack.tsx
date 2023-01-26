import { Component, PropsWithChildren } from "react";
import { Container, Row } from "react-bootstrap"
import FlashCardResetButton from "../ui/buttons/FlashCardResetButton"
import styles from "../../styles/sass/components/learn/FlashCardBack.module.scss"

export interface FlashCardBackProps {
  title: string
  className?: string
  borderColour?: string
  onReset: () => void
}

class FlashCardBack extends Component<PropsWithChildren<FlashCardBackProps>> {
  render() {
    const { title, className, borderColour, onReset, children } = this.props

    return (
      <Container className={[styles.wrapper, className].join(" ")} style={{ borderColor: borderColour ?? "#3996e5" }}>
        <Row className={styles.header}>
          <p className={styles.title}>{title}</p>
          <FlashCardResetButton onClick={onReset} />
        </Row>

        <Row className={styles.body}>{children}</Row>
      </Container>
    )
  }
}

export default FlashCardBack
