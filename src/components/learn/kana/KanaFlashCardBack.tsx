import { Component } from "react";
import { Kana } from "../../../types/kana/Kana";
import { Container, Row } from "react-bootstrap";
import styles from "../../../styles/sass/components/learn/kana/KanaFlashCardBack.module.scss"
import FlashCardResetButton from "../../ui/FlashCardResetButton";

export interface KanaFlashCardBackProps {
    kana: Kana;
    onClick: () => void;
}

class KanaFlashCardBack extends Component<KanaFlashCardBackProps> {
    render() {
        const { kana, onClick } = this.props;

        return (
            <Container className={styles.wrapper}>
                <Row className={styles.header}>
                    <p className={styles.type}>{kana.type}</p>
                    <FlashCardResetButton onClick={onClick} />
                </Row>

                <Row className={styles.body}>
                    <span className={styles.romaji}>{kana.getFullRomajiString()}</span>
                </Row>
            </Container>
        );
    }
}

export default KanaFlashCardBack;