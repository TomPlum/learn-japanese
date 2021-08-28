import { Container, Row } from "react-bootstrap";
import { Kanji } from "../../../domain/kanji/Kanji";
import { CardFaceProps } from "../FlashCard";
import DynamicDisplay from "../../ui/display/DynamicDisplay";
import styles from "../../../styles/sass/components/learn/kanji/KanjiFlashCardFront.module.scss";

function KanjiFlashCardFront(props: CardFaceProps) {
    const { data, onClick } = props;
    const kanji = data as Kanji;
    return (
        <Container className={styles["wrapper-grade-" + kanji.grade.value] + " " + styles.wrapper} onClick={onClick} data-testid="front">
            <DynamicDisplay style={{ container: [styles.display] }} value={kanji.getValue()} />
        </Container>
    );
}

export default KanjiFlashCardFront;
