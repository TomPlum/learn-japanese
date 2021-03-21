import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import KanjiDisplay from "./KanjiDisplay";
import { Kanji } from "../../../types/kanji/Kanji";
import styles from "../../../styles/sass/components/learn/kanji/KanjiFlashCardFront.module.scss";

interface KanjiFlashCardFrontProps {
    kanji: Kanji;
    onClick: () => void;
}

class KanjiFlashCardFront extends Component<KanjiFlashCardFrontProps> {
    render() {
        const { kanji, onClick } = this.props;

        return (
            <Container className={styles["wrapper-grade-" + kanji.grade.value] + " " + styles.wrapper} onClick={onClick} data-testid="front">
                <Row>
                    <KanjiDisplay kanji={kanji} />
                </Row>
            </Container>
        );
    }
}

export default KanjiFlashCardFront;