import { ModalProps } from "react-bootstrap/Modal"
import styles  from "./LaunchPresetConfirmationModal.module.scss"
import { Button, Fade, Modal } from "react-bootstrap"
import { SessionSettings } from "../../../domain/session/settings/SessionSettings"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faTimes } from "@fortawesome/free-solid-svg-icons"
import Icon from "../../ui/menu/icon/Icon"
import SessionSettingsSummary from "./../SessionSettingsSummary"
import GameSettings from "../../../domain/session/settings/game/GameSettings"
import { useNavigate } from "react-router-dom"
import PlayMode from "../../../domain/session/PlayMode"
import LearnSessionSettingsSummary from "./../LearnSessionSettingsSummary"
import { useTranslation } from "react-i18next"
import { useSessionSettingsContext } from "context/SessionSettingsContext"
import { LaunchPresetConfirmationModalProps } from "./types.ts"
import { useCallback } from "react";

const LaunchPresetConfirmationModal = ({ preset, onDismiss }: LaunchPresetConfirmationModalProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { setLastPlaySession, setLastLearnSession, setPreset, setGameSettings, setDataSettings } = useSessionSettingsContext()

  const handleStartSession = useCallback(() => {
    setDataSettings(preset.dataSettings)

    if (preset instanceof PlayMode) {
      setGameSettings(preset.modeSettings as GameSettings)
      setLastPlaySession(preset)
      setPreset(preset.id)
      navigate("/play")
    } else {
      setLastLearnSession(preset)
      navigate("/learn")
    }
  }, [setDataSettings, preset, setGameSettings, setLastPlaySession, setPreset, navigate, setLastLearnSession])

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
          <Icon
            value={preset.icon}
            className={styles.icon}
            style={{ fill: preset.colour }}
          />

          <span className={styles.name}>
            {t(preset.displayName)}
          </span>

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

            <Button variant="success" onClick={handleStartSession} data-testid='launch-preset-start'>
              <FontAwesomeIcon icon={faPlay} fixedWidth /> {t("action.start")}
            </Button>
          </div>
        </Fade>
      </Modal.Body>
    </Modal>
  )
}

export default LaunchPresetConfirmationModal
