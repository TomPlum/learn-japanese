import SettingsTabTitle from "./SettingsTabTitle"
import styles from "../../../styles/sass/components/settings/modal/NotificationSettingsTab.module.scss"
import { faEraser, faFireAlt, faSnowflake } from "@fortawesome/free-solid-svg-icons"
import SettingsBooleanButton from "./SettingsBooleanButton"
import { Preference } from "../../../domain/user/Preference"
import { useTranslation } from "react-i18next"

const NotificationsSettingsTab = () => {
  const { t } = useTranslation("translation", { keyPrefix: "settings.modal.notification" })

  return (
    <div data-testid="notification-settings-tab">
      <SettingsTabTitle title={t("heading")} description={t("desc")} />

      <div className={styles.section}>
        <p className={styles.heading}>{t("streak-notifications.heading")}</p>
        <p className={styles.text}>{t("streak-notifications.desc")}</p>
        <SettingsBooleanButton
          enableHoverColours
          id="streak-notifications-toggle"
          preference={Preference.STREAK_NOTIFICATIONS}
          truthy={{
            name: t("streak-notifications.enabled"),
            hover: t("streak-notifications.disable"),
            icon: faFireAlt
          }}
          falsy={{
            name: t("streak-notifications.disabled"),
            hover: t("streak-notifications.enable"),
            icon: faSnowflake
          }}
        />
      </div>

      <div className={styles.section}>
        <p className={styles.heading}>{t("outstanding-mistakes-reminder.heading")}</p>
        <p className={styles.text}>{t("outstanding-mistakes-reminder.desc")}</p>
        <SettingsBooleanButton
          enableHoverColours
          id="mistakes-reminders-toggle"
          preference={Preference.MISTAKES_REMINDERS}
          falsy={{
            name: t("outstanding-mistakes-reminder.disabled"),
            hover: t("outstanding-mistakes-reminder.enable"),
            icon: faEraser
          }}
          truthy={{
            name: t("outstanding-mistakes-reminder.enabled"),
            hover: t("outstanding-mistakes-reminder.disable"),
            icon: faEraser
          }}
        />
      </div>
    </div>
  )
}

export default NotificationsSettingsTab
