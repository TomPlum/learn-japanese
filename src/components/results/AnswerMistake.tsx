import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Kana } from "../../types/Kana";
import styles from "../../styles/sass/components/results/AnswerMistake.module.scss";

interface AnswerMistakeProps {
    kana: Kana;
    times: number;
}

class AnswerMistake extends Component<AnswerMistakeProps> {
    render() {
        const { kana, times } = this.props;

        return (
            <Container className={styles.wrapper}>
                <Row className={styles.kanaWrapper}>
                    <p className={styles.kana}>{kana.code}</p>
                </Row>

                <Row className={styles.infoWrapper}>
                    <Col xs={6} className={styles.col}>
                        <span className={styles.timesWrong}>x{times}</span>
                    </Col>
                    <Col xs={6} className={styles.col}>
                        <span className={styles.romanji}>{kana.romanji[0]}</span>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default AnswerMistake;