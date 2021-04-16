import { CardFaceProps } from "../FlashCard";
import FlashCardBack from "../FlashCardBack";
import { Col, Container, Row } from "react-bootstrap";
import Colour from "../../../types/colour/Colour";
import styles from "../../../styles/sass/components/learn/calendar/CalendarFlashCardBack.module.scss";

function BasicsFlashCardBack(props: CardFaceProps) {
    const value = props.data as Colour;

    return (
        <FlashCardBack title={value.name} onReset={props.onClick} borderColour={props.data instanceof Colour ? props.data.colour : undefined}>
            <Container>
                <Row>
                    <Col>
                        <p className={styles.kanji}>{value.getAnswer()}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className={styles.romaji}>{value.getKana()}</p>
                        <p className={styles.romaji}>({value.getRomaji()})</p>
                    </Col>
                </Row>
            </Container>
        </FlashCardBack>
    );
}

export default BasicsFlashCardBack;