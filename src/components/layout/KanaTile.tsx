import { Component } from "react";
import { Kana } from "../../types/Kana";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/KanaTile.module.scss";
import KanaType from "../../types/KanaType";
import KanaTypeIndicator from "./KanaTypeIndicator";

interface KanaTileProps {
    kana: Kana;
}

class KanaTile extends Component<KanaTileProps> {
    render() {
        const { kana } = this.props;

        return (
            <Container className={styles.wrapper}>
                <Row className={styles.typeWrapper}>
                    <Col xs={12}>
                        <KanaTypeIndicator className={kana.type === KanaType.HIRAGANA ? styles.hiragana : styles.katakana} />
                        {kana.isDiagraph() && <KanaTypeIndicator className={styles.diagraph} />}
                        {kana.isDiacritical && <KanaTypeIndicator className={styles.diacritical} />}
                    </Col>
                </Row>

                <Row className={styles.kanaWrapper}>
                    <p className={styles.kana}>{kana.code}</p>
                </Row>

                <Row>
                    <Col>
                        <p className={styles.romanji}>{kana.romanji}</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default KanaTile;