import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import PlayWizardFooter from "./PlayWizardFooter";
import styles from "../../../../styles/sass/components/layout/wizard/play/PresetCustomStep.module.scss";
import { faHammer, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface PresetCustomStepProps {
    onNext: (isCustom: boolean) => void;
}

const PresetCustomStep = (props: PresetCustomStepProps) => {

    const [isCustom, setIsCustom] = useState(false);

    const presetButtonClass = isCustom ? styles.button : styles.selected;
    const customButtonClass = isCustom ? styles.selected : styles.button;

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
                </Row>
            </Container>

            <PlayWizardFooter onNext={() => props.onNext(isCustom)} />
        </div>
    )
}

export default PresetCustomStep;
