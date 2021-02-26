import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/learn/FlashCardBack.module.scss";
import KanjiDisplay from "./KanjiDisplay";
import { Kanji } from "../../types/kanji/Kanji";
import { ReadingType } from "../../types/kanji/ReadingType";

interface FlashCardBackProps {
    kanji: Kanji;
    onClick: () => void;
}

class FlashCardBack extends Component<FlashCardBackProps> {
    render() {
        const { kanji } = this.props;
        return (
            <Container className={styles.wrapper} onClick={this.props.onClick}>
                <Row className={styles.header}>
                    <p className={styles.grade}>Grade {kanji.grade}</p>
                </Row>
                <Row>
                    <Col xs={12}>
                        <KanjiDisplay value={kanji} size={"7em"}/>
                    </Col>
                    <Col xs={12}>
                        <p className={styles.reading}>
                            On: {this.getReading(ReadingType.ON)}
                        </p>
                        <p className={styles.reading}>
                            Kun: {this.getReading(ReadingType.KUN)}
                        </p>
                        <p className={styles.reading}>
                            Meaning(s): {kanji.meanings.join(", ")}
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }

    private getReading = (type: ReadingType): string => {
        return this.props.kanji.readings
            .filter(it => it.type === type)
            .map(it => it.romanji + " (" + it.kana + ")")[0];
    }
}

export default FlashCardBack;