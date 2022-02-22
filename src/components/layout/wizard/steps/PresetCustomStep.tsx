import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import styles from "../../../../styles/sass/components/layout/wizard/steps/PresetCustomStep.module.scss";
import { faHammer, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Environment } from "../../../../utility/Environment";

export interface PresetCustomStepProps {
    onSelect: (isCustom: boolean) => void;
}

const PresetCustomStep = (props: PresetCustomStepProps) => {

    const { onSelect } = props;

    const [isCustom, setIsCustom] = useState(false);

    const presetButtonClass = isCustom ? styles.button : styles.selected;
    const customButtonClass = isCustom ? styles.selected : styles.button;

    const hammerIconClass = [styles.icon, styles.custom].join(" ");
    const presetIconClass = [styles.icon, styles.preset].join(" ");

    useEffect(() => {
        onSelect(isCustom);
    }, [isCustom]);

    return (
        <div className={styles.wrapper} data-testid="wizard-type-settings-step">
            <Container fluid className={styles.container}>
                <Row>
                    <Col>
                        <Button onClick={() => setIsCustom(false)} className={presetButtonClass}>
                            <FontAwesomeIcon icon={faProjectDiagram} fixedWidth className={presetIconClass} />
                            <p className={styles.text}>Preset</p>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={() => setIsCustom(true)} className={customButtonClass}>
                            <FontAwesomeIcon icon={faHammer} fixedWidth className={hammerIconClass} />
                            <p className={styles.text}>Custom</p>
                        </Button>
                    </Col>
                    <Col xs={12}>
                        <p className={styles.desc}>
                            {Environment.variable(`${isCustom ? "CUSTOM" : "PRESET"}_DESC`)}
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PresetCustomStep;
