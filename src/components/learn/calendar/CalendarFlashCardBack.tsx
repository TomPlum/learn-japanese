import { CardFaceProps } from "../FlashCard";
import FlashCardBack from "../FlashCardBack";
import { KanjiLearnable } from "../../../types/learn/CommonLearnable";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/sass/components/learn/calendar/CalendarFlashCardBack.module.scss"
import JapaneseWord from "../../../types/learn/JapaneseWord";

function CalendarFlashCardBack(props: CardFaceProps) {
    const { data, onClick } = props;

    const value = data as KanjiLearnable;

    return (
        <FlashCardBack title={value.getTitle()} className={styles.wrapper} onReset={onClick}>
            <Container>
                <Row>
                    <Col>
                        <p className={styles.kanji}>{value.getKanji()}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {value.getWords().map((word: JapaneseWord) => {
                            return <p className={styles.text}>{word.kana} ({word.romaji})</p>
                        })}
                    </Col>
                </Row>
                {value.getMeaning() && <Row>
                    <Col>
                        <p className={styles.meaning}>Literally meaning: {value.getMeaning()}</p>
                    </Col>
                </Row>}
            </Container>
        </FlashCardBack>
    );
}

export default CalendarFlashCardBack;