import { Modal } from "react-bootstrap";
import React, { useRef, useState } from "react";
import PresetCustomStep from "./PresetCustomStep";
import styles from "../../../../styles/sass/components/layout/wizard/play/PlayWizard.module.scss";
import { faHeartbeat, faLightbulb, faProjectDiagram, faQuestionCircle, faStopwatch, faTimes, faTools, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from "@fortawesome/free-solid-svg-icons/faBomb";
import PresetSelectionStep from "./PresetSelectionStep";
import PlayWizardFooter from "./PlayWizardFooter";
import ConfirmModal from "../../../ui/ConfirmModal";
import QuestionSettingsStep from "./QuestionSettingsStep";
import HintSettingsStep from "./HintSettingsStep";
import LifeSettingsStep from "./LifeSettingsStep";
import TimeSettingsStep from "./TimeSettingsStep";

export interface PlayWizardStep {
    getValue: () => any;
    isIntermediateStep: () => boolean;
    isTerminalStep: () => boolean;
}

interface PlayWizardProps {
    onClose: () => void;
    onStart: () => void;
}

interface StageDetails {
    icon: IconDefinition;
    iconClass?: string;
    name: string;
    body: React.ReactElement;
    intermediate?: boolean;
    terminal?: boolean;
}

const PlayWizard = (props: PlayWizardProps) => {

    const { onStart, onClose } = props;

    const stageRef = useRef<any>();

    const [confirmClose, setConfirmClose] = useState(false);
    const [stage, setStage] = useState(0);

    const handleBack = () => {
        setStage(stage - 1);
    }

    const handleNext = () => {
        const value = stageRef.current?.getValue();
        if (value === true) {
            // If the value is true, then it must be isCustom from the initial step.
            // If so, then we advance 2 steps to skip the preset and go to custom.
            setStage(stage + 2);
        } else {
            setStage(stage + 1);
        }
    }

    const handlePlay = () => {
        const value = stageRef.current?.getValue();
    }

    const getStageDetails = (): StageDetails => {
        switch (stage) {
            case 0: {
                return {
                    icon: faTools,
                    name: "Select Type",
                    body: <PresetCustomStep ref={stageRef} />
                }
            }
            case 1: {
                return {
                    icon: faProjectDiagram,
                    name: "Choose Preset",
                    body: <PresetSelectionStep ref={stageRef} />,
                    terminal: true
                }
            }
            case 2: {
                return {
                    icon: faQuestionCircle,
                    iconClass: styles.questionIcon,
                    name: "Question Settings",
                    body: <QuestionSettingsStep />,
                    intermediate: true
                }
            }
            case 3: {
                return {
                    icon: faLightbulb,
                    iconClass: styles.hintsIcon,
                    name: "Hint Settings",
                    body: <HintSettingsStep ref={stageRef} />,
                    intermediate: true
                }
            }
            case 4: {
                return {
                    icon: faHeartbeat,
                    iconClass: styles.livesIcon,
                    name: "Life Settings",
                    body: <LifeSettingsStep ref={stageRef} />,
                    intermediate: true
                }
            }
            case 5: {
                return {
                    icon: faStopwatch,
                    iconClass: styles.timeIcon,
                    name: "Time Settings",
                    body: <TimeSettingsStep ref={stageRef} />,
                    terminal: true
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

    const { icon, iconClass, name, body, intermediate, terminal } = getStageDetails();

    return (
        <Modal show backdrop="static" centered contentClassName={styles.content} size="lg">
            <Modal.Body className={styles.content}>
                <div className={styles.header}>
                    <FontAwesomeIcon icon={icon} fixedWidth className={iconClass} />
                    <span className={styles.stage}>{name}</span>
                    <FontAwesomeIcon
                        fixedWidth
                        title="Close"
                        icon={faTimes}
                        className={styles.close}
                        onClick={() => setConfirmClose(true)}
                    />
                </div>

                <div className={styles.body}>
                    {body}
                </div>

                <div className={styles.footer}>
                    <PlayWizardFooter
                        onBack={handleBack}
                        onNext={handleNext}
                        onPlay={handlePlay}
                        terminal={terminal}
                        intermediate={intermediate}
                    />
                </div>
            </Modal.Body>

            {confirmClose && (
                <ConfirmModal
                    onConfirm={onClose}
                    title="Are you sure?"
                    onDismiss={() => setConfirmClose(false)}
                    body="You'll lose your current configuration."
                />
            )}
        </Modal>
    )
}

export default PlayWizard;
