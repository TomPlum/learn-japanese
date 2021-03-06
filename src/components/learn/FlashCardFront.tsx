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
        return (
            <Container className={styles.wrapper} onClick={this.props.onClick} data-testid="front">
                <Row>
                    <KanjiDisplay value={this.props.kanji} size={"12em"}/>
                </Row>
            </Container>
        );
    }
}

export default FlashCardFront;