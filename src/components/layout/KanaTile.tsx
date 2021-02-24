import { Component } from "react";
import { Kana } from "../../types/Kana";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/layout/KanaTile.module.scss";
import KanaType from "../../types/KanaType";

interface KanaTileProps {
    kana: Kana;
}

class KanaTile extends Component<KanaTileProps> {
    render() {
        const { kana } = this.props;

        return (
            <Container className={styles.wrapper}>
                <Row>
                    <Col xs={12}>
                        <FontAwesomeIcon
                            icon={faCircle}
                            size="xs"
                            className={kana.type === KanaType.HIRAGANA ? styles.hiragana : styles.katakana}
                        />
                    </Col>
                </Row>

                <Row>
                    <p className={styles.kana}>{kana.code}</p>
                </Row>

                <Row>
                    <Col>
                        <span className={styles.romanji}>{kana.romanji}</span>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default KanaTile;