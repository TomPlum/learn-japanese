import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useImperativeHandle, useState } from "react";
import styles from "../../../../styles/sass/components/layout/wizard/play/PresetCustomStep.module.scss";
import { faHammer, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Environment } from "../../../../utility/Environment";

const PresetCustomStep = React.forwardRef((props, ref) => {

    const [isCustom, setIsCustom] = useState(false);

    const presetButtonClass = isCustom ? styles.button : styles.selected;
    const customButtonClass = isCustom ? styles.selected : styles.button;

    useImperativeHandle(ref, () => ({
        getValue: () => isCustom
    }));

    return (
        <div>
            <Container fluid className={styles.container}>
                <Row className={styles.wrapper}>
                    <Col>
                        <Button onClick={() => setIsCustom(false)} className={presetButtonClass}>
                            <FontAwesomeIcon icon={faProjectDiagram} fixedWidth className={styles.icon} />
                            <p className={styles.text}>Preset</p>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={() => setIsCustom(true)} className={customButtonClass}>
                            <FontAwesomeIcon icon={faHammer} fixedWidth className={styles.icon} />
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
});

export default PresetCustomStep;
