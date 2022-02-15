import { Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import PresetCustomStep from "./PresetCustomStep";
import styles from "../../../../styles/sass/components/layout/wizard/play/PlayWizard.module.scss";
import { faAngleDoubleRight, faCheckCircle, faDatabase, faHeartbeat, faLightbulb, faProjectDiagram, faQuestionCircle, faStopwatch, faSwatchbook, faTimes, faTools, IconDefinition } from "@fortawesome/free-solid-svg-icons";
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
import { useDataSettingsDispatch, useGameSettingsDispatch } from "../../../../hooks";
import { setGameSettings } from "../../../../slices/GameSettingsSlice";
import { setDataSettings as setGlobalDataSettings } from "../../../../slices/DataSettingsSlice";
import { useHistory } from "react-router-dom";
import WizardModeStep from "./WizardModeStep";
import { AppMode } from "../../../../domain/AppMode";

interface PlayWizardProps {
    onClose: () => void;
}

interface StageDetails {
    icon: IconDefinition;
    iconClass?: string;
    name: string;
    body: React.ReactElement;
    intermediate?: boolean;
    terminal?: boolean;
}

enum WizardStep {
    MODE = 0,
    TOPIC = 1,
    TYPE = 2,
    PRESET = 3,
    QUESTION = 4,
    HINT = 5,
    LIVES = 6,
    TIME = 7,
    DATA = 8,
    CONFIRM = 9
}

const PlayWizard = (props: PlayWizardProps) => {

    const { onClose } = props;

    const [animate, setAnimate] = useState(false);
    const [mode, setMode] = useState(AppMode.PLAY);
    const [valid, setValid] = useState(true);
    const [custom, setCustom] = useState(false);
    const [topic, setTopic] = useState(Topic.KANA);
    const [confirmClose, setConfirmClose] = useState(false);
    const [stage, setStage] = useState(WizardStep.MODE);
    const [settings, setSettings] = useState(new GameSettingsBuilder());
    const [dataSettings, setDataSettings] = useState<DataSettings | undefined>(undefined);
    const [goingForwards, setGoingForwards] = useState(true);
    const [preset, setPreset] = useState<PlayMode>(new PlayKanaModes().getModes()[0]);

    const history = useHistory();

    const gameSettingsDispatcher = useGameSettingsDispatch();
    const dataSettingsDispatcher = useDataSettingsDispatch();

    useEffect(() => setAnimate(true), [stage]);

    const handleBack = () => {
        setGoingForwards(false);

        if (stage === WizardStep.DATA) {
            setValid(true);
        }

        if (stage === WizardStep.QUESTION && custom) {
            setStage(WizardStep.TYPE);
        } else if (stage === WizardStep.CONFIRM && !topic.wizardDataMenu) {
            setStage(WizardStep.HINT);
        } else {
            setStage(stage - 1);
        }
    }

    const handleNext = () => {
        setGoingForwards(true);

        if (stage === WizardStep.TYPE && custom) {
            // If the value is true, then it must be custom from the initial step.
            // If so, then we advance 2 steps to skip the preset and go to custom.
            setStage(mode === AppMode.PLAY ? WizardStep.QUESTION : WizardStep.DATA);
        } else if (stage === 7 && !topic.wizardDataMenu) {
            setStage(WizardStep.CONFIRM);
        } else {
            setStage(stage + 1);
        }
    }

    const handlePlay = () => {
        const data = custom ? dataSettings! : preset.dataSettings;
        const game = custom ? settings.build() : preset.modeSettings as GameSettings;
        gameSettingsDispatcher(setGameSettings(game));
        dataSettingsDispatcher(setGlobalDataSettings(data));
        history.push('/play');
    }

    const getStageDetails = (): StageDetails => {
        switch (stage) {
            case WizardStep.MODE: {
                return {
                    icon: faAngleDoubleRight,
                    name: "Select Mode",
                    iconClass: styles.modeIcon,
                    body: <WizardModeStep onSelect={mode => setMode(mode)} />
                }
            }
            case WizardStep.TOPIC: {
                return {
                    icon: faSwatchbook,
                    name: "Select Topic",
                    iconClass: styles.topicIcon,
                    body: <TopicSelectionStep onSelect={topic => setTopic(topic)} />,
                    intermediate: true
                }
            }
            case WizardStep.TYPE: {
                return {
                    icon: faTools,
                    name: "Select Type",
                    iconClass: styles.typeIcon,
                    body: <PresetCustomStep onSelect={custom => setCustom(custom)} />,
                    intermediate: true
                }
            }
            case WizardStep.PRESET: {
                return {
                    icon: faProjectDiagram,
                    name: "Choose Preset",
                    iconClass: styles.presetIcon,
                    body: <PresetSelectionStep selected={topic} onSelect={preset => setPreset(preset)} />,
                    terminal: true
                }
            }
            case WizardStep.QUESTION: {
                return {
                    icon: faQuestionCircle,
                    iconClass: styles.questionIcon,
                    name: "Question Settings",
                    body: <QuestionSettingsStep onSelect={question => setSettings(settings.withQuestionSettings(question))} />,
                    intermediate: true
                }
            }
            case WizardStep.HINT: {
                return {
                    icon: faLightbulb,
                    iconClass: styles.hintsIcon,
                    name: "Hint Settings",
                    body: <HintSettingsStep onSelect={hints => setSettings(settings.withHintSettings(hints))} />,
                    intermediate: true
                }
            }
            case WizardStep.LIVES: {
                return {
                    icon: faHeartbeat,
                    iconClass: styles.livesIcon,
                    name: "Life Settings",
                    body: <LifeSettingsStep onSelect={life => setSettings(settings.withLifeSettings(life))} />,
                    intermediate: true
                }
            }
            case WizardStep.TIME: {
                return {
                    icon: faStopwatch,
                    iconClass: styles.timeIcon,
                    name: "Time Settings",
                    body: <TimeSettingsStep onSelect={time => setSettings(settings.withTimeSettings(time))} />,
                    intermediate: true
                }
            }
            case WizardStep.DATA: {
                return {
                    icon: faDatabase,
                    iconClass: styles.dataIcon,
                    name: "Data Settings",
                    body: <DataSettingsStep topic={topic} onSelect={settings => setDataSettings(settings)} isValid={valid => setValid(valid)} />,
                    intermediate: true
                }
            }
            case WizardStep.CONFIRM: {
                return {
                    icon: faCheckCircle,
                    iconClass: styles.confirmIcon,
                    name: "Confirmation",
                    body: <ConfirmationStep settings={SessionSettings.forGame(dataSettings!, settings.build())} onSelectStage={stage => setStage(stage)} />,
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
                    <CSSTransition classNames={goingForwards ? slideLeft : slideRight} timeout={{ enter: 200, exit: 200 }} in={animate} onExited={() => setAnimate(false)}>
                        {body}
                    </CSSTransition>
                </div>

                <div className={styles.footer}>
                    <PlayWizardFooter
                        mode={mode}
                        valid={valid}
                        custom={custom}
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
