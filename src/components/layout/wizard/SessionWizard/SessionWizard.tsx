import { Fade, Modal } from "react-bootstrap"
import { useState } from "react"
import ConfigTypeStep from "./../steps/ConfigTypeStep"
import styles  from "./SessionWizard.module.scss"
import {
  faAngleDoubleRight,
  faCheckCircle,
  faDatabase,
  faHeartbeat,
  faLightbulb,
  faProjectDiagram,
  faQuestionCircle,
  faStopwatch,
  faSwatchbook,
  faTimes,
  faTools
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PresetSelectionStep from "./../steps/PresetSelectionStep"
import PlayWizardFooter from "./../footer/PlayWizardFooter"
import ConfirmModal from "../../../ui/ConfirmModal"
import QuestionSettingsStep from "./../steps/QuestionSettingsStep"
import HintSettingsStep from "./../steps/HintSettingsStep"
import LifeSettingsStep from "./../steps/LifeSettingsStep"
import TimeSettingsStep from "./../steps/TimeSettingsStep"
import DataSettingsStep from "./../steps/DataSettingsStep"
import TopicSelectionStep from "./../steps/TopicSelectionStep"
import Topic from "../../../../domain/Topic"
import GameSettings, { GameSettingsBuilder } from "../../../../domain/session/settings/game/GameSettings"
import DataSettings from "../../../../domain/session/settings/data/DataSettings"
import { useDataSettingsDispatch, useGameSettingsDispatch } from "../../../../hooks"
import { setGameSettings } from "../../../../slices/GameSettingsSlice"
import { setDataSettings as setGlobalDataSettings } from "../../../../slices/DataSettingsSlice"
import ModeSelectionStep from "./../steps/ModeSelectionStep"
import { AppMode } from "../../../../domain/AppMode"
import { SessionSettings } from "../../../../domain/session/settings/SessionSettings"
import ConfirmationStep from "./../steps/ConfirmationStep"
import LearnConfirmationStep from "./../steps/LearnConfirmationStep"
import LearnSettings from "../../../../domain/session/settings/LearnSettings"
import { ModalProps } from "react-bootstrap/Modal"
import SessionMode from "../../../../domain/session/SessionMode"
import { useTranslation } from "react-i18next"
import { SessionWizardProps, StageDetails, WizardStep } from "components/layout/wizard/SessionWizard/types.ts";
import { useNavigate } from "react-router-dom"

const SessionWizard = (props: SessionWizardProps) => {
  const { onClose } = props

  const { t } = useTranslation()
  const [mode, setMode] = useState(AppMode.PLAY)
  const [valid, setValid] = useState(true)
  const [custom, setCustom] = useState(false)
  const [topic, setTopic] = useState(Topic.KANA)
  const [confirmClose, setConfirmClose] = useState(false)
  const [stage, setStage] = useState(WizardStep.MODE)
  const [settings, setSettings] = useState(new GameSettingsBuilder())
  const [dataSettings, setDataSettings] = useState<DataSettings | undefined>(undefined)
  const [preset, setPreset] = useState<SessionMode | undefined>(undefined)

  const { MODE, TOPIC, TYPE, PRESET, QUESTION, LIVES, HINT, TIME, DATA, CONFIRM } = WizardStep

  const navigate = useNavigate()

  const gameSettingsDispatcher = useGameSettingsDispatch()
  const dataSettingsDispatcher = useDataSettingsDispatch()

  const handleBack = () => {
    setValid(true)

    if (custom && (stage === QUESTION || (stage === DATA && mode === AppMode.LEARN))) {
      setStage(TYPE)
    } else {
      setStage(stage - 1)
    }
  }

  const handleNext = () => {
    if (stage === TYPE && custom) {
      // Play mode has extra game configuration steps. Learn skips to the data step.
      setStage(mode === AppMode.PLAY ? QUESTION : DATA)
    } else {
      setStage(stage + 1)
    }
  }

  const handleStartSession = () => {
    const data = custom ? dataSettings! : preset!.dataSettings
    dataSettingsDispatcher(setGlobalDataSettings(data))

    if (mode === AppMode.PLAY) {
      const game = custom ? settings.build() : (preset!.modeSettings as GameSettings)
      gameSettingsDispatcher(setGameSettings(game))
      navigate("/play")
    } else {
      navigate("/learn")
    }
  }

  const handleChangeTopic = (topic: Topic) => {
    setTopic(topic)
  }

  const getStageDetails = (): StageDetails => {
    switch (stage) {
      case MODE: {
        return {
          icon: faAngleDoubleRight,
          iconClass: styles.modeIcon,
          name: t("wizard.steps.mode.title"),
          body: <ModeSelectionStep mode={mode} onSelect={(mode) => setMode(mode)} />
        }
      }
      case TOPIC: {
        return {
          icon: faSwatchbook,
          iconClass: styles.topicIcon,
          name: t("wizard.steps.topic.title"),
          body: <TopicSelectionStep topic={topic} onSelect={handleChangeTopic} />,
          intermediate: true
        }
      }
      case TYPE: {
        return {
          icon: faTools,
          name: t("wizard.steps.type.title"),
          iconClass: styles.typeIcon,
          body: <ConfigTypeStep isCustom={custom} onSelect={(custom) => setCustom(custom)} />,
          intermediate: true
        }
      }
      case PRESET: {
        return {
          icon: faProjectDiagram,
          name: t("wizard.steps.preset.title"),
          iconClass: styles.presetIcon,
          body: (
            <PresetSelectionStep
              mode={mode}
              topic={topic}
              preset={preset}
              onSelect={(preset) => setPreset(preset)}
              onChangeTopic={(topic) => setTopic(topic)}
              isValid={(valid: boolean) => setValid(valid)}
            />
          ),
          terminal: true
        }
      }
      case QUESTION: {
        return {
          icon: faQuestionCircle,
          iconClass: styles.questionIcon,
          name: t("wizard.steps.question.title"),
          body: <QuestionSettingsStep onSelect={(question) => setSettings(settings.withQuestionSettings(question))} />,
          intermediate: true
        }
      }
      case HINT: {
        return {
          icon: faLightbulb,
          iconClass: styles.hintsIcon,
          name: t("wizard.steps.hint.title"),
          body: <HintSettingsStep onSelect={(hints) => setSettings(settings.withHintSettings(hints))} />,
          intermediate: true
        }
      }
      case LIVES: {
        return {
          icon: faHeartbeat,
          iconClass: styles.livesIcon,
          name: t("wizard.steps.life.title"),
          body: <LifeSettingsStep onSelect={(life) => setSettings(settings.withLifeSettings(life))} />,
          intermediate: true
        }
      }
      case TIME: {
        return {
          icon: faStopwatch,
          iconClass: styles.timeIcon,
          name: t("wizard.steps.time.title"),
          body: <TimeSettingsStep onSelect={(time) => setSettings(settings.withTimeSettings(time))} />,
          intermediate: true
        }
      }
      case DATA: {
        return {
          icon: faDatabase,
          iconClass: styles.dataIcon,
          name: `${topic.name} Settings`,
          body: (
            <DataSettingsStep
              topic={topic}
              onSelect={(settings) => setDataSettings(settings)}
              isValid={(valid) => setValid(valid)}
            />
          ),
          intermediate: true
        }
      }
      case CONFIRM: {
        return {
          icon: faCheckCircle,
          iconClass: styles.confirmIcon,
          name: t("wizard.steps.confirmation.title"),
          body:
            mode === AppMode.PLAY ? (
              <ConfirmationStep
                onSelectStage={(stage) => setStage(stage)}
                settings={SessionSettings.forGame(dataSettings!, settings.build())}
              />
            ) : (
              <LearnConfirmationStep
                onSelectStage={(stage) => setStage(stage)}
                settings={SessionSettings.forLearning(dataSettings!, new LearnSettings())}
              />
            ),
          terminal: true
        }
      }
    }
  }

  const contentClasses = [styles.content]
  if (confirmClose) contentClasses.push(styles.blur)

  const modalProps: ModalProps = {
    show: true,
    size: "lg",
    centered: true,
    backdrop: "static",
    enforceFocus: false,
    dialogClassName: styles.dialog,
    "data-testid": "start-session-wizard",
    contentClassName: contentClasses.join(" ")
  }

  const { icon, iconClass, name, body, intermediate, terminal } = getStageDetails()

  return (
    <Modal {...modalProps}>
      <Modal.Body className={styles.modal}>
        <div className={styles.header}>
          <FontAwesomeIcon icon={icon} className={iconClass} />

          <span className={styles.stage}>
            {name}
          </span>

          <FontAwesomeIcon
            fixedWidth
            icon={faTimes}
            className={styles.close}
            title={t("action.close")}
            onClick={() => setConfirmClose(true)}
          />
        </div>

        <div className={styles.body}>
          <Fade in appear>
            {body}
          </Fade>
        </div>

        <div className={styles.footer}>
          <PlayWizardFooter
            mode={mode}
            valid={valid}
            custom={custom}
            onBack={handleBack}
            onNext={handleNext}
            terminal={terminal}
            currentStage={stage}
            onChangeStage={setStage}
            intermediate={intermediate}
            onPlay={handleStartSession}
          />
        </div>
      </Modal.Body>

      {confirmClose && (
        <ConfirmModal
          onConfirm={onClose}
          body={t("wizard.confirmation.body")}
          title={t("wizard.confirmation.title")}
          onDismiss={() => setConfirmClose(false)}
        />
      )}
    </Modal>
  )
}

export default SessionWizard
