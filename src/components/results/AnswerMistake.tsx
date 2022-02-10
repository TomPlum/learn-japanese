import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/results/AnswerMistake.module.scss";
import { Learnable } from "../../domain/learn/Learnable";
import RomajiGenerator from "../../utility/RomajiGenerator";

interface AnswerMistakeProps {
    value: Learnable;
    times: number;
}

class AnswerMistake extends Component<AnswerMistakeProps> {
    render() {
        const { value, times } = this.props;

        const kanji = value.getKanjiVariation()
        const kana = value.getKana()[0];
        const romaji = new RomajiGenerator().generate(kana)

        return (
            <Container className={styles.wrapper}>
                <Row className={styles.kanaWrapper}>
                    <p className={styles.kana}>{kanji ? kanji : kana}</p>
                </Row>

                <Row className={styles.infoWrapper}>
                    <Col xs={6} className={styles.col}>
                        <span className={styles.timesWrong}>x{times}</span>
                    </Col>
                    <Col xs={6} className={styles.col}>
                        <span className={styles.romaji}>
                            {romaji}
                        </span>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AnswerMistake;
