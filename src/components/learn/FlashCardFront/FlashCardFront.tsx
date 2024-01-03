import { PropsWithChildren } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles  from "./FlashCardFront.module.scss"

export interface FlashCardFrontProps {
  className?: string
  onClick: () => void
  borderColour?: string
}

const FlashCardFront = (props: PropsWithChildren<FlashCardFrontProps>) => {
  const { onClick, className, borderColour, children } = props;

  const border = borderColour ?? "#3996e5";

  return (
    <Container className={[className, styles.wrapper].join(" ")} onClick={onClick} style={{ borderColor: border }}>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};

export default FlashCardFront
