import { Confidence } from "../../domain/learn/spacedrepetition/Confidence";
import { Col, Container, Row } from "react-bootstrap";
import ConfidenceButton from "./ConfidenceButton";
import { useState } from "react";
import styles from "../../styles/sass/components/learn/ConfidenceSelector.module.scss";

export interface ConfidenceSelectorProps {
    onSelect: (confidence: Confidence) => void;
}

const ConfidenceSelector = (props: ConfidenceSelectorProps) => {

    const [selected, setSelected] = useState<Confidence>();

    const handleSelect = (value: Confidence) => {
        props.onSelect(value);
        setSelected(value);
    }

    return (
        <Container>
            <Row className={styles.row}>
                <Col xs={4} md={2}>
                    <ConfidenceButton
                        selected={selected}
                        className={styles.one}
                        onClick={handleSelect}
                        value={Confidence.BLACKOUT}
                    />
                </Col>

                <Col xs={4} md={2}>
                    <ConfidenceButton
                        selected={selected}
                        className={styles.two}
                        onClick={handleSelect}
                        value={Confidence.INCORRECT_BUT_REMEMBERED}
                    />
                </Col>

                <Col xs={4} md={2}>
                    <ConfidenceButton
                        selected={selected}
                        onClick={handleSelect}
                        className={styles.three}
                        value={Confidence.INCORRECT_OBVIOUS_AFTERWARDS}
                    />
                </Col>

                <Col xs={4} md={2}>
                    <ConfidenceButton
                        selected={selected}
                        onClick={handleSelect}
                        className={styles.four}
                        value={Confidence.CORRECT_DIFFICULT_MEMORY}
                    />
                </Col>

                <Col xs={4} md={2}>
                    <ConfidenceButton
                        selected={selected}
                        onClick={handleSelect}
                        className={styles.five}
                        value={Confidence.CORRECT_SMALL_HESITATION}
                    />
                </Col>

                <Col xs={4} md={2}>
                    <ConfidenceButton
                        selected={selected}
                        className={styles.six}
                        onClick={handleSelect}
                        value={Confidence.PERFECT}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default ConfidenceSelector
