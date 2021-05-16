import { CardBackFaceProps } from "../FlashCard";
import FlashCardBack from "../FlashCardBack";
import { KanjiLearnable } from "../../../types/learn/Learnable";
import { Col, Container, Row } from "react-bootstrap";
import RomajiDisplay from "../../ui/RomajiDisplay";
import styles from "../../../styles/sass/components/learn/calendar/CalendarFlashCardBack.module.scss"

function CalendarFlashCardBack(props: CardBackFaceProps) {
    const { data, onClick } = props;

    const value = data as KanjiLearnable;

    return (
        <FlashCardBack title={value.getTitle()} className={styles.wrapper} onReset={onClick}>
            <Container>
                <Row>
                    <Col>
                        <p className={styles.kanji}>{value.getKanjiVariation()}</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p className={styles.text} key={value.getKana()[0]}>
                            {value.getKana()[0]}
                        </p>
                    </Col>
                </Row>

                {props.showRomaji && <Row>
                    <Col>
                        <RomajiDisplay kana={value.getKana()[0]} className={styles.romaji} />
                    </Col>
                </Row>}

                {value.getMeanings() && <Row>
                    <Col>
                        <p className={styles.meaning}>Literally meaning: {value.getMeanings()}</p>
                    </Col>
                </Row>}
            </Container>
        </FlashCardBack>
    );
}

export default CalendarFlashCardBack;