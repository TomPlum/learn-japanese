import SessionMode from "../../../domain/session/SessionMode"
import { ModalProps } from "react-bootstrap/Modal"
import styles  from "./LaunchPresetConfirmationModal.module.scss"
import { Button, Fade, Modal } from "react-bootstrap"
import { SessionSettings } from "../../../domain/session/settings/SessionSettings"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faTimes } from "@fortawesome/free-solid-svg-icons"
import Icon from "../../ui/menu/icon/Icon"
import SessionSettingsSummary from "./../SessionSettingsSummary"
import { setDataSettings as setGlobalDataSettings } from "../../../slices/DataSettingsSlice"
import GameSettings from "../../../domain/session/settings/game/GameSettings"
import { setGameSettings, setSelectedPresetID } from "../../../slices/GameSettingsSlice"
import { useHistory } from "react-router-dom"
import { useDataSettingsDispatch, useGameSettingsDispatch, useSessionSettingsDispatch } from "../../../hooks"
import PlayMode from "../../../domain/session/PlayMode"
import LearnSessionSettingsSummary from "./../LearnSessionSettingsSummary"
import { setLastLearnPreset, setLastPlayPreset } from "../../../slices/SessionSettingsSlice"
import { useTranslation } from "react-i18next"

export interface LaunchPresetConfirmationModalProps {
  preset: SessionMode
  onDismiss: () => void
}

const LaunchPresetConfirmationModal = (props: LaunchPresetConfirmationModalProps) => {
  const { preset, onDismiss } = props

  const { t } = useTranslation()
  const history = useHistory()
  const gameSettingsDispatcher = useGameSettingsDispatch()
  const dataSettingsDispatcher = useDataSettingsDispatch()
  const sessionSettingsDispatcher = useSessionSettingsDispatch()

  const handleStartSession = () => {
    const data = preset.dataSettings
    dataSettingsDispatcher(setGlobalDataSettings(data))

    if (preset instanceof PlayMode) {
      const game = preset.modeSettings as GameSettings
      gameSettingsDispatcher(setGameSettings(game))
      sessionSettingsDispatcher(setLastPlayPreset(preset))
      gameSettingsDispatcher(setSelectedPresetID(preset.id))
      history.push("/play")
    } else {
      sessionSettingsDispatcher(setLastLearnPreset(preset))
      history.push("/learn")
    }
  }

  const modalProps: ModalProps = {
    show: true,
    size: "lg",
    centered: true,
    backdrop: "static",
    enforceFocus: false,
    dialogClassName: styles.dialog,
    contentClassName: styles.content,
    "data-testid": "launch-preset-confirmation"
  }

  const renderSettingsSummary = () => {
    const settings = SessionSettings.fromPreset(preset)
    if (preset instanceof PlayMode) {
      return <SessionSettingsSummary settings={settings} />
    } else {
      return <LearnSessionSettingsSummary settings={settings} />
    }
  }

  return (
    <Modal {...modalProps}>
      <Modal.Body className={styles.modal}>
        <div className={styles.header}>
          <Icon value={preset.icon} style={{ fill: preset.colour }} className={styles.icon} />
          <span className={styles.name}>{t(preset.displayName)}</span>
          <FontAwesomeIcon
            fixedWidth
            icon={faTimes}
            onClick={onDismiss}
            className={styles.close}
            title={t("action.close")}
          />
        </div>

        <Fade in appear>
          <div className={styles.body}>
            {renderSettingsSummary()}
            <Button variant="success" onClick={handleStartSession}>
              <FontAwesomeIcon icon={faPlay} fixedWidth /> {t("action.start")}
            </Button>
          </div>
        </Fade>
      </Modal.Body>
    </Modal>
  )
}

export default LaunchPresetConfirmationModal
