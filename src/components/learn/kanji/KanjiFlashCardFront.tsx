import { Container, Row } from "react-bootstrap";
import KanjiDisplay from "./KanjiDisplay";
import { Kanji } from "../../../types/kanji/Kanji";
import styles from "../../../styles/sass/components/learn/kanji/KanjiFlashCardFront.module.scss";
import { CardFaceProps } from "../FlashCard";

function KanjiFlashCardFront(props: CardFaceProps) {
    const { data, onClick } = props;
    const kanji = data as Kanji;
    return (
        <Container className={styles["wrapper-grade-" + kanji.grade.value] + " " + styles.wrapper} onClick={onClick} data-testid="front">
            <Row>
                <KanjiDisplay kanji={kanji}/>
            </Row>
        </Container>
    );
}

export default KanjiFlashCardFront;