import { CardFaceProps } from "../FlashCard";
import FlashCardBack from "../FlashCardBack";
import styles from "../../../styles/sass/components/learn/calendar/CalendarFlashCardBack.module.scss"
import CalendarData from "../../../types/calendar/CalendarData";
import { Col, Container, Row } from "react-bootstrap";

function CalendarFlashCardBack(props: CardFaceProps) {
    const { data, onClick } = props;
    const value = data as CalendarData;
    return (
        <FlashCardBack title={data.getTitle()} className={styles.wrapper} onReset={onClick}>
            <Container>
                <Row>
                    <Col>
                        <p className={styles.kanji}>{value.getAnswer()}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className={styles.romaji}>{value.getKana()} ({value.getRomaji()})</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className={styles.meaning}>Literally meaning: {value.getMeaning()}</p>
                    </Col>
                </Row>
            </Container>
        </FlashCardBack>
    );
}

export default CalendarFlashCardBack;