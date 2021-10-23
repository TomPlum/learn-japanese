import { Confidence } from "../../domain/learn/spacedrepetition/Confidence";
import { Col, Container, Row } from "react-bootstrap";
import ConfidenceButton from "./ConfidenceButton";
import { useState } from "react";
import InfoButton from "../ui/buttons/InfoButton";
import PopOver from "../ui/PopOver";
import styles from "../../styles/sass/components/learn/ConfidenceSelector.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export interface ConfidenceSelectorProps {
    disabled: boolean;
    onSelect: (confidence: Confidence) => void;
}

const ConfidenceSelector = (props: ConfidenceSelectorProps) => {

    const [selected, setSelected] = useState<Confidence>();

    const handleSelect = (value: Confidence) => {
        props.onSelect(value);
        setSelected(value);
    }

    const info = <PopOver
        className={styles.confidence}
        title={<>
            <FontAwesomeIcon icon={faStar} fixedWidth />
            <span> Confidence Rating</span>
        </>}
        text={<div>
            <ul>
                <li><span className={styles.one}>1</span>A complete blackout. You had absolutely no idea.</li>
                <li><span className={styles.two}>2</span>You gave an incorrect answer, but you realised you knew it afterwards.</li>
                <li><span className={styles.three}>3</span>You gave an incorrect answer, but it was obvious to you afterwards.</li>
                <li><span className={styles.four}>4</span>You gave the correct answer, but had serious trouble remembering.</li>
                <li><span className={styles.five}>5</span>You gave the correct answer after some hesitation.</li>
                <li><span className={styles.six}>6</span>You gave the correct answer with no hesitation at all.</li>
            </ul>
        </div>}
    />

    return (
        <Container>
            <Row>
                <Col className={styles.titleWrapper}>
                    <InfoButton popover={info} className={styles.info} /> {/* TODO: Replace w/side panel once on Bootstrap 5 */}
                    <span>Confidence Rating</span>
                </Col>
            </Row>

            <Row className={styles.row}>
                <Col xs={4} md={2}>
                    <ConfidenceButton
                        title="Blackout"
                        selected={selected}
                        className={styles.one}
                        onClick={handleSelect}
                        disabled={props.disabled}
                        value={Confidence.BLACKOUT}
                    />
                </Col>

                <Col xs={4} md={2}>
                    <ConfidenceButton
                        selected={selected}
                        className={styles.two}
                        onClick={handleSelect}
                        disabled={props.disabled}
                        title="Incorrect, but knew"
                        value={Confidence.INCORRECT_BUT_REMEMBERED}
                    />
                </Col>

                <Col xs={4} md={2}>
                    <ConfidenceButton
                        selected={selected}
                        onClick={handleSelect}
                        className={styles.three}
                        disabled={props.disabled}
                        title="Incorrect, but was obvious"
                        value={Confidence.INCORRECT_OBVIOUS_AFTERWARDS}
                    />
                </Col>

                <Col xs={4} md={2}>
                    <ConfidenceButton
                        selected={selected}
                        onClick={handleSelect}
                        className={styles.four}
                        disabled={props.disabled}
                        title="Correct, but difficult to remember"
                        value={Confidence.CORRECT_DIFFICULT_MEMORY}
                    />
                </Col>

                <Col xs={4} md={2}>
                    <ConfidenceButton
                        selected={selected}
                        onClick={handleSelect}
                        className={styles.five}
                        disabled={props.disabled}
                        title="Correct, small hesitation"
                        value={Confidence.CORRECT_SMALL_HESITATION}
                    />
                </Col>

                <Col xs={4} md={2}>
                    <ConfidenceButton
                        title="Perfect"
                        selected={selected}
                        className={styles.six}
                        onClick={handleSelect}
                        disabled={props.disabled}
                        value={Confidence.PERFECT}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default ConfidenceSelector
