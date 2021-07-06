import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/results/AnswerMistake.module.scss";
import { Learnable } from "../../types/learn/Learnable";
import RomajiGenerator from "../../utility/RomajiGenerator";

interface AnswerMistakeProps {
    value: Learnable;
    times: number;
}

class AnswerMistake extends Component<AnswerMistakeProps> {
    render() {
        const { value, times } = this.props;

        return (
            <Container className={styles.wrapper}>
                <Row className={styles.kanaWrapper}>
                    <p className={styles.kana}>{value.getKana()[0]}</p>
                </Row>

                <Row className={styles.infoWrapper}>
                    <Col xs={6} className={styles.col}>
                        <span className={styles.timesWrong}>x{times}</span>
                    </Col>
                    <Col xs={6} className={styles.col}>
                        <span className={styles.romaji}>
                            {new RomajiGenerator().generate(value.getKana()[0])}
                        </span>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default AnswerMistake;