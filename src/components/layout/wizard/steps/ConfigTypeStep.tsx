import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useEffect } from "react";
import styles from "../../../../styles/sass/components/layout/wizard/steps/ConfigTypeStep.module.scss";
import { faHammer, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

export interface ConfigTypeStepProps {
    isCustom: boolean;
    onSelect: (isCustom: boolean) => void;
}

const ConfigTypeStep = (props: ConfigTypeStepProps) => {

    const { isCustom, onSelect } = props;

    const { t } = useTranslation("translation", { keyPrefix: "wizard.steps.type" });

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
                        <Button onClick={() => onSelect(false)} className={presetButtonClass}>
                            <FontAwesomeIcon icon={faProjectDiagram} fixedWidth className={presetIconClass} />
                            <p className={styles.text}>{t("preset")}</p>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={() => onSelect(true)} className={customButtonClass}>
                            <FontAwesomeIcon icon={faHammer} fixedWidth className={hammerIconClass} />
                            <p className={styles.text}>{t("custom")}</p>
                        </Button>
                    </Col>
                    <Col xs={12}>
                        <p className={styles.desc}>
                            {t(`${isCustom ? "custom" : "preset"}-desc`)}
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ConfigTypeStep;
