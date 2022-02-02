import { Modal } from "react-bootstrap";
import React, { useRef, useState } from "react";
import PresetCustomStep from "./PresetCustomStep";
import styles from "../../../../styles/sass/components/layout/wizard/play/PlayWizard.module.scss";
import { faCheckCircle, faDatabase, faHeartbeat, faLightbulb, faProjectDiagram, faQuestionCircle, faStopwatch, faSwatchbook, faTimes, faTools, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from "@fortawesome/free-solid-svg-icons/faBomb";
import PresetSelectionStep from "./PresetSelectionStep";
import PlayWizardFooter from "./PlayWizardFooter";
import ConfirmModal from "../../../ui/ConfirmModal";
import QuestionSettingsStep from "./QuestionSettingsStep";
import HintSettingsStep from "./HintSettingsStep";
import LifeSettingsStep from "./LifeSettingsStep";
import TimeSettingsStep from "./TimeSettingsStep";
import DataSettingsStep from "./DataSettingsStep";
import TopicSelectionStep from "./TopicSelectionStep";
import Topic from "../../../../domain/Topic";
import ConfirmationStep from "./ConfirmationStep";
import { GameSettingsBuilder } from "../../../../domain/session/settings/game/GameSettings";
import { SessionSettings } from "../../../../domain/session/settings/SessionSettings";
import DataSettings from "../../../../domain/session/settings/data/DataSettings";

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

    const [isCustom, setIsCustom] = useState(false);
    const [topic, setTopic] = useState(Topic.KANA);
    const [confirmClose, setConfirmClose] = useState(false);
    const [stage, setStage] = useState(0);
    const [settings, setSettings] = useState(new GameSettingsBuilder());
    const [dataSettings, setDataSettings] = useState<DataSettings | undefined>(undefined);

    const handleBack = () => {
        if (stage === 3 && isCustom) {
            setStage(1);
        } else {
            setStage(stage - 1);
        }
    }

    const handleNext = () => {
        const value = stageRef.current?.getValue();

/*
        if (stage === 0) {
            // If we've just advanced from the initial stage, then the value is
            // set the true for custom, else false for preset.
            setIsCustom(value === true);
        }
*/

        if (stage === 1 && isCustom) {
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
                    icon: faSwatchbook,
                    name: "Select Topic",
                    body: <TopicSelectionStep onSelect={topic => setTopic(topic)} />
                }
            }
            case 1: {
                return {
                    icon: faTools,
                    name: "Select Type",
                    body: <PresetCustomStep onSelect={custom => setIsCustom(custom)} />,
                    intermediate: true
                }
            }
            case 2: {
                return {
                    icon: faProjectDiagram,
                    name: "Choose Preset",
                    body: <PresetSelectionStep ref={stageRef} />,
                    terminal: true
                }
            }
            case 3: {
                return {
                    icon: faQuestionCircle,
                    iconClass: styles.questionIcon,
                    name: "Question Settings",
                    body: <QuestionSettingsStep onSelect={question => setSettings(settings.withQuestionSettings(question))} />,
                    intermediate: true
                }
            }
            case 4: {
                return {
                    icon: faLightbulb,
                    iconClass: styles.hintsIcon,
                    name: "Hint Settings",
                    body: <HintSettingsStep onSelect={hints => setSettings(settings.withHintSettings(hints))} />,
                    intermediate: true
                }
            }
            case 5: {
                return {
                    icon: faHeartbeat,
                    iconClass: styles.livesIcon,
                    name: "Life Settings",
                    body: <LifeSettingsStep onSelect={life => setSettings(settings.withLifeSettings(life))} />,
                    intermediate: true
                }
            }
            case 6: {
                return {
                    icon: faStopwatch,
                    iconClass: styles.timeIcon,
                    name: "Time Settings",
                    body: <TimeSettingsStep onSelect={time => setSettings(settings.withTimeSettings(time))} />,
                    intermediate: true
                }
            }
            case 7: {
                return {
                    icon: faDatabase,
                    iconClass: styles.dataIcon,
                    name: "Data Settings",
                    body: <DataSettingsStep topic={topic} onSelect={settings => setDataSettings(settings)} />,
                    intermediate: true
                }
            }
            case 8: {
                return {
                    icon: faCheckCircle,
                    iconClass: styles.confirmIcon,
                    name: "Confirmation",
                    body: <ConfirmationStep settings={SessionSettings.forGame(dataSettings!, settings.build())} />,
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
                        custom={isCustom}
                        onBack={handleBack}
                        onNext={handleNext}
                        onPlay={handlePlay}
                        terminal={terminal}
                        currentStage={stage}
                        intermediate={intermediate}
                        onChangeStage={(stage: number) => setStage(stage)}
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
