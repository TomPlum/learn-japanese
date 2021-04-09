import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/learn/FlashCardFront.module.scss";

export interface FlashCardFrontProps {
    className?: string;
    onClick: () => void;
}

class FlashCardFront extends Component<FlashCardFrontProps> {
    render() {
        const { onClick, className, children } = this.props;

        return (
            <Container className={[className, styles.wrapper].join(" ")} onClick={onClick}>
                <Row>
                    <Col>
                        {children}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default FlashCardFront;