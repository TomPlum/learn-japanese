import SettingsTabTitle from "./SettingsTabTitle"
import styles from "../../../styles/sass/components/settings/modal/InterfaceSettingsTab.module.scss"
import SettingsDropdown from "./SettingsDropdown"
import { faRss } from "@fortawesome/free-solid-svg-icons"
import { Preference } from "../../../domain/user/Preference"
import { useTranslation } from "react-i18next"

const GeneralSettingsTab = () => {
  const { t } = useTranslation("translation", { keyPrefix: "settings.modal.general" })

  return (
    <div data-testid="general-settings-tab">
      <SettingsTabTitle title={t("heading")} description={t("desc")} />

      <div className={styles.section}>
        <p className={styles.heading}>{t("activity-feed.heading")}</p>
        <p className={styles.text}>{t("activity-feed.desc")}</p>
        <SettingsDropdown
          buttonIcon={faRss}
          optionsKey="general.activity-feed"
          id="general-settings-activity-selector"
          preference={Preference.ACTIVITY_FEED_QUANTITY}
        />
      </div>
    </div>
  )
}

export default GeneralSettingsTab
