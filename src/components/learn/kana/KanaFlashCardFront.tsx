import { Component } from "react";
import { Kana } from "../../../types/kana/Kana";
import { Container, Row } from "react-bootstrap";
import KanaDisplay from "../../game/KanaDisplay";
import styles from "../../../styles/sass/components/learn/kana/KanaFlashCardFront.module.scss";

export interface KanaFlashCardFrontProps {
    kana: Kana;
    onClick: () => void;
}

class KanaFlashCardFront extends Component<KanaFlashCardFrontProps> {
    render() {
        const { kana, onClick } = this.props;

        return (
            <Container className={styles.wrapper} onClick={onClick}>
                <Row>
                    <KanaDisplay kana={kana} style={{ character: { className: styles.kana } }}/>
                </Row>
            </Container>
        )
    }
}

export default KanaFlashCardFront;