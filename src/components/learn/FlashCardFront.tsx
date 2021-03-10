import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/learn/FlashCardFront.module.scss";
import KanjiDisplay from "./KanjiDisplay";
import { Kanji } from "../../types/kanji/Kanji";

interface FlashCardFrontProps {
    kanji: Kanji;
    onClick: () => void;
}

class FlashCardFront extends Component<FlashCardFrontProps> {
    render() {
        const { kanji, onClick } = this.props;

        return (
            <Container className={styles["wrapper-grade-" + kanji.grade.value]} onClick={onClick} data-testid="front">
                <Row>
                    <KanjiDisplay kanji={kanji} size={"12em"}/>
                </Row>
            </Container>
        );
    }
}

export default FlashCardFront;