import SettingsTabTitle from "./../SettingsTabTitle"
import styles  from "./LearnSettingsTab.module.scss"
import { faCopy, faFont } from "@fortawesome/free-solid-svg-icons"
import SettingsDropdown from "./../SettingsDropdown"
import { Preference } from "types/user/Preference"
import { useTranslation } from "react-i18next"

const LearnSettingsTab = () => {
  const { t } = useTranslation("translation", { keyPrefix: "settings.modal.learn" })

  return (
    <div data-testid="learn-settings-tab">
      <SettingsTabTitle title={t("heading")} description={t("desc")} />

      <div className={styles.section}>
        <p className={styles.heading}>{t("flash-cards.heading")}</p>
        <p className={styles.text}>{t("flash-cards.desc")}</p>
        <SettingsDropdown
          buttonIcon={faCopy}
          optionsKey="learn.flash-cards"
          id="learn-settings-cards-selector"
          preference={Preference.FLASH_CARDS_QUANTITY}
        />
      </div>

      <div className={styles.section}>
        <p className={styles.heading}>{t("romaji.heading")}</p>
        <p className={styles.text}>{t("romaji.desc")}</p>
        <SettingsDropdown
          buttonIcon={faFont}
          optionsKey="learn.romaji"
          id="learn-settings-romaji-selector"
          preference={Preference.ROMAJI_VISIBILITY}
        />
      </div>
    </div>
  )
}

export default LearnSettingsTab
