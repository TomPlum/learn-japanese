import { Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
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
import GameSettings, { GameSettingsBuilder } from "../../../../domain/session/settings/game/GameSettings";
import { SessionSettings } from "../../../../domain/session/settings/SessionSettings";
import DataSettings from "../../../../domain/session/settings/data/DataSettings";
import { CSSTransition } from "react-transition-group";
import slideRight from "../../../../styles/sass/transitions/slide-right.module.scss";
import slideLeft from "../../../../styles/sass/transitions/slide-left.module.scss";
import PlayKanaModes from "../../../../domain/game/mode/PlayKanaModes";
import PlayMode from "../../../../domain/session/PlayMode";

interface PlayWizardProps {
    onClose: () => void;
    onStart: (settings: SessionSettings) => void;
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

    const [animate, setAnimate] = useState(false);
    const [isCustom, setIsCustom] = useState(false);
    const [topic, setTopic] = useState(Topic.KANA);
    const [confirmClose, setConfirmClose] = useState(false);
    const [stage, setStage] = useState(0);
    const [settings, setSettings] = useState(new GameSettingsBuilder());
    const [dataSettings, setDataSettings] = useState<DataSettings | undefined>(undefined);
    const [goingForwards, setGoingForwards] = useState(true);
    const [preset, setPreset] = useState<PlayMode>(new PlayKanaModes().getModes()[0]);

   // const prevStage = usePrevious<number>(stage);

    useEffect(() => setAnimate(true), [stage]);

    const handleBack = () => {
        setGoingForwards(false);

        if (stage === 3 && isCustom) {
            setStage(1);
        } else {
            setStage(stage - 1);
        }
    }

    const handleNext = () => {
        setGoingForwards(true);

        if (stage === 1 && isCustom) {
            // If the value is true, then it must be isCustom from the initial step.
            // If so, then we advance 2 steps to skip the preset and go to custom.
            setStage(stage + 2);
        } else {
            setStage(stage + 1);
        }
    }

    const handlePlay = () => {
        const data = isCustom ? dataSettings! : preset.dataSettings;
        const game = isCustom ? settings.build() : preset.modeSettings as GameSettings;
        onStart(SessionSettings.forGame(data, game));
    }

    const getStageDetails = (): StageDetails => {
        switch (stage) {
            case 0: {
                return {
                    icon: faSwatchbook,
                    name: "Select Topic",
                    iconClass: styles.topicIcon,
                    body: <TopicSelectionStep onSelect={topic => setTopic(topic)} />
                }
            }
            case 1: {
                return {
                    icon: faTools,
                    name: "Select Type",
                    iconClass: styles.typeIcon,
                    body: <PresetCustomStep onSelect={custom => setIsCustom(custom)} />,
                    intermediate: true
                }
            }
            case 2: {
                return {
                    icon: faProjectDiagram,
                    name: "Choose Preset",
                    iconClass: styles.presetIcon,
                    body: <PresetSelectionStep onSelect={preset => setPreset(preset)} />,
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
        <Modal show backdrop="static" centered contentClassName={styles.content} size="lg" dialogClassName={styles.dialog}>
            <Modal.Body className={styles.modal}>
                <div className={styles.header}>
                    <FontAwesomeIcon icon={icon} className={iconClass} />
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
                    <CSSTransition classNames={goingForwards ? slideLeft : slideRight} timeout={{ enter: 200, exit: 200 }} in={goingForwards} onExited={() => setAnimate(false)}>
                        {body}
                    </CSSTransition>
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
