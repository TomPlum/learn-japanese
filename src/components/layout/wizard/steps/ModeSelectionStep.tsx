import styles from "../../../../styles/sass/components/layout/wizard/steps/ModeSelectionStep.module.scss";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Environment } from "../../../../utility/Environment";
import { AppMode } from "../../../../domain/AppMode";

export interface ModeSelectionStepProps {
    mode: AppMode;
    onSelect: (mode: AppMode) => void;
}

const ModeSelectionStep = (props: ModeSelectionStepProps) => {

    const { mode, onSelect } = props;

    const playButtonClass = mode === AppMode.PLAY ? styles.selected : styles.button;
    const learnButtonClass = mode === AppMode.LEARN ? styles.selected : styles.button;

    const playIconClass = [styles.icon, styles.play].join(" ");
    const learnIconClass = [styles.icon, styles.learn].join(" ");

    useEffect(() => {
        onSelect(mode);
    }, [mode]);

    return (
        <div className={styles.wrapper} data-testid="wizard-mode-step">
            <Container fluid className={styles.container}>
                <Row>
                    <Col>
                        <Button onClick={() => onSelect(AppMode.PLAY)} className={playButtonClass}>
                            <FontAwesomeIcon icon={faPlay} fixedWidth className={playIconClass} />
                            <p className={styles.text}>Play</p>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={() => onSelect(AppMode.LEARN)} className={learnButtonClass}>
                            <FontAwesomeIcon icon={faGraduationCap} fixedWidth className={learnIconClass} />
                            <p className={styles.text}>Learn</p>
                        </Button>
                    </Col>
                    <Col xs={12}>
                        <p className={styles.desc}>
                            {Environment.variable(`${mode}_DESC`)}
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ModeSelectionStep;
