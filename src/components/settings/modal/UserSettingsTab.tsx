import SettingsTabTitle from "./SettingsTabTitle"
import styles from "../../../styles/sass/components/settings/modal/UserSettingsTab.module.scss"
import SettingsButton from "./SettingsButton"
import {
  faBookOpen,
  faCalendarCheck,
  faChartPie,
  faClock,
  faFireAlt,
  faGlobe,
  faGlobeAmericas,
  faMedal,
  faSkull,
  faUserFriends,
  faUserSecret,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons"
import { faChrome, faFirefoxBrowser, faSafari } from "@fortawesome/free-brands-svg-icons"
import SettingsDropdown from "./SettingsDropdown"
import { useState } from "react"
import PasswordConfirmation from "../../user/profile/PasswordConfirmation"
import PopOver from "../../ui/PopOver"
import { isChrome, isFirefox, isSafari } from "react-device-detect"
import { Preference } from "../../../domain/user/Preference"
import LocalStorageService from "../../../service/LocalStorageService"
import HighScoresService from "../../../service/HighScoresService"
import { scrollToTop } from "../../../utility/Window"
import DismissibleAlert from "../../ui/DismissibleAlert"
import { useTranslation } from "react-i18next"

const UserSettingsTab = () => {
  const highScoresService = new HighScoresService()
  const localStorageService = new LocalStorageService()

  const [error, setError] = useState("")
  const [confirmingPassword, setConfirmingPassword] = useState(false)
  const { t } = useTranslation("translation", { keyPrefix: "settings.modal.user" })

  if (confirmingPassword) {
    const deleteAccountPopover = (
      <PopOver
        title={t("danger-zone.delete-account.popover.title")}
        text={t("danger-zone.delete-account.popover.text")}
      />
    )

    return <PasswordConfirmation alertInfo={deleteAccountPopover} onDismiss={() => setConfirmingPassword(false)} />
  }

  const getBrowserIcon = (): { icon: IconDefinition; id: string } => {
    if (isFirefox) {
      return { icon: faFirefoxBrowser, id: "firefox-icon" }
    }

    if (isSafari) {
      return { icon: faSafari, id: "safari-icon" }
    }

    if (isChrome) {
      return { icon: faChrome, id: "chrome-icon" }
    }

    return { icon: faGlobe, id: "default-icon" }
  }
  const browserIcon = getBrowserIcon()

  const handleResetHighScores = () => {
    setError("")
    highScoresService
      .delete()
      .then((response) => {
        if (!response.success) {
          handleError(response.error)
        }
      })
      .catch((response) => {
        handleError(response.error)
      })
  }

  const handleError = (message: string) => {
    setError(message)
    scrollToTop()
  }

  return (
    <div data-testid="user-settings-tab">
      <SettingsTabTitle title={t("heading")} description={t("desc")} />

      {error && (
        <DismissibleAlert variant="danger" onDismiss={() => setError("")}>
          {error}
        </DismissibleAlert>
      )}

      <div className={styles.section}>
        <p className={styles.heading}>{t("profile-visibility.heading")}</p>
        <p className={styles.text}>{t("profile-visibility.desc")}</p>
        <SettingsDropdown
          id="profile-visibility-selector"
          optionsKey="user.profile-visibility"
          preference={Preference.PROFILE_VISIBILITY}
        />
      </div>

      <div className={styles.section}>
        <p className={styles.heading}>{t("streak-card-preference.heading")}</p>
        <p className={styles.text}>{t("streak-card-preference.desc")}</p>
        <SettingsDropdown
          id="streak-card-preference-selector"
          optionsKey="user.streak-card-preference"
          preference={Preference.STREAK_CARD_VIEW}
        />
      </div>

      <div className={styles.dangerZone}>
        <SettingsTabTitle
          className={styles.danger}
          title={t("danger-zone.heading")}
          description={t("danger-zone.desc")}
        />

        <div className={styles.section}>
          <p className={styles.heading}>{t("danger-zone.clear-local-storage.heading")}</p>
          <p className={styles.text}>{t("danger-zone.clear-local-storage.desc")}</p>
          <SettingsButton
            confirm="warn"
            icon={browserIcon}
            id="clear-local-storage-button"
            onClick={localStorageService.clear}
            name={t("danger-zone.clear-local-storage.button")}
          />
        </div>

        <div className={styles.section}>
          <p className={styles.heading}>{t("danger-zone.reset-high-scores.heading")}</p>
          <p className={styles.text}>{t("danger-zone.reset-high-scores.desc")}</p>
          <SettingsButton
            confirm="warn"
            icon={{ icon: faMedal }}
            id="reset-high-scores-button"
            onClick={handleResetHighScores}
            name={t("danger-zone.reset-high-scores.button")}
          />
        </div>

        <div className={styles.section}>
          <p className={styles.heading}>{t("danger-zone.reset-statistics.heading")}</p>
          <p className={styles.text}>{t("danger-zone.reset-statistics.desc")}</p>
          <SettingsButton confirm="warn" icon={{ icon: faChartPie }} name={t("danger-zone.reset-statistics.button")} />
        </div>

        <div className={styles.section}>
          <p className={styles.heading}>{t("danger-zone.reset-flash-cards.heading")}</p>
          <p className={styles.text}>{t("danger-zone.reset-flash-cards.desc")}</p>
          <SettingsButton confirm="warn" icon={{ icon: faBookOpen }} name={t("danger-zone.reset-flash-cards.button")} />
        </div>

        <div className={styles.section}>
          <p className={styles.heading}>{t("danger-zone.delete-account.heading")}</p>
          <p className={styles.text}>{t("danger-zone.delete-account.desc")}</p>
          <SettingsButton
            confirm="danger"
            icon={{ icon: faSkull }}
            id="delete-account-button"
            onClick={() => setConfirmingPassword(true)}
            name={t("danger-zone.delete-account.button")}
          />
        </div>
      </div>
    </div>
  )
}

export default UserSettingsTab
