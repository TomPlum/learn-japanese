import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import PresetCustomStep from "./PresetCustomStep";
import styles from "../../../../styles/sass/components/layout/wizard/play/PlayWizard.module.scss";
import { faProjectDiagram, faTimes, faTools, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from "@fortawesome/free-solid-svg-icons/faBomb";
import PresetSelectionStep from "./PresetSelectionStep";

interface PlayWizardProps {
    onClose: () => void;
    onStart: () => void;
}

interface StageDetails {
    icon: IconDefinition;
    name: string;
    body: React.ReactElement;
}

const PlayWizard = (props: PlayWizardProps) => {

    const { onStart, onClose } = props;

    const [confirmClose, setConfirmClose] = useState(false);
    const [stage, setStage] = useState(0);

    const getStageDetails = (): StageDetails => {
        switch (stage) {
            case 0: {
                return {
                    icon: faTools,
                    name: "Select Type",
                    body: <PresetCustomStep onNext={isCustom => setStage(isCustom ? 2 : 1)} />
                }
            }
            case 1: {
                return {
                    icon: faProjectDiagram,
                    name: "Choose Preset",
                    body: <PresetSelectionStep onNext={onStart} onBack={() => setStage(stage - 1)} />
                }
            }
            default: {
                return {
                    icon: faBomb,
                    name: "Something went wrong",
                    body: <span>Invalid Stage {stage}</span>
                }
            }
        }
    }

    const { icon, name, body } = getStageDetails();

    return (
        <Modal show backdrop="static" centered contentClassName={styles.content} size="lg">
            <Modal.Body className={styles.content}>
                <div className={styles.header}>
                    <FontAwesomeIcon icon={icon} fixedWidth />
                    <span className={styles.stage}>{name}</span>
                    <FontAwesomeIcon icon={faTimes} fixedWidth title="Close" className={styles.close} />
                </div>

                <div className={styles.body}>
                    {body}
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default PlayWizard;
