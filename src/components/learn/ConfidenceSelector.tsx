import Confidence from "../../domain/learn/spacedrepetition/Confidence";
import { Col, Container, Row } from "react-bootstrap";
import ConfidenceButton from "./ConfidenceButton";
import { useState } from "react";
import InfoButton from "../ui/buttons/InfoButton";
import PopOver from "../ui/PopOver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import ConfidenceInfoItem from "./ConfidenceInfoItem";
import styles from "../../styles/sass/components/learn/ConfidenceSelector.module.scss";

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
                <ConfidenceInfoItem className={styles.one} confidence={Confidence.BLACKOUT} />
                <ConfidenceInfoItem className={styles.two} confidence={Confidence.INCORRECT_BUT_REMEMBERED} />
                <ConfidenceInfoItem className={styles.three} confidence={Confidence.INCORRECT_OBVIOUS_AFTERWARDS} />
                <ConfidenceInfoItem className={styles.four} confidence={Confidence.CORRECT_DIFFICULT_MEMORY} />
                <ConfidenceInfoItem className={styles.five} confidence={Confidence.CORRECT_SMALL_HESITATION} />
                <ConfidenceInfoItem className={styles.six} confidence={Confidence.PERFECT} />
            </ul>
        </div>}
    />

    return (
        <Container>
            <Row>
                <Col className={styles.titleWrapper}>
                    <InfoButton popover={info} className={styles.info} data-testid="info" /> {/* TODO: Replace w/side panel once on Bootstrap 5 */}
                    <span>Confidence Rating</span>
                </Col>
            </Row>

            <Row className={styles.row}>
                <Col xs={4} md={2}>
                    <ConfidenceButton
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
                        value={Confidence.INCORRECT_BUT_REMEMBERED}
                    />
                </Col>

                <Col xs={4} md={2}>
                    <ConfidenceButton
                        selected={selected}
                        onClick={handleSelect}
                        className={styles.three}
                        disabled={props.disabled}
                        value={Confidence.INCORRECT_OBVIOUS_AFTERWARDS}
                    />
                </Col>

                <Col xs={4} md={2}>
                    <ConfidenceButton
                        selected={selected}
                        onClick={handleSelect}
                        className={styles.four}
                        disabled={props.disabled}
                        value={Confidence.CORRECT_DIFFICULT_MEMORY}
                    />
                </Col>

                <Col xs={4} md={2}>
                    <ConfidenceButton
                        selected={selected}
                        onClick={handleSelect}
                        className={styles.five}
                        disabled={props.disabled}
                        value={Confidence.CORRECT_SMALL_HESITATION}
                    />
                </Col>

                <Col xs={4} md={2}>
                    <ConfidenceButton
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
