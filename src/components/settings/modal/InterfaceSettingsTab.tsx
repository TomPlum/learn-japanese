import styles from "../../../styles/sass/components/settings/modal/InterfaceSettingsTab.module.scss"
import { faFont, faGripVertical, faLanguage } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import SettingsButton from "./SettingsButton"
import SettingsTabTitle from "./SettingsTabTitle"
import SettingsDropdown from "./SettingsDropdown"
import FontService from "../../../service/FontService"
import { Font } from "../../ui/buttons/FontSelectorButton"
import { Preference } from "../../../domain/user/Preference"
import { useFontDispatch } from "../../../hooks"
import { setFont } from "../../../slices/FontSlice"
import { useTranslation } from "react-i18next"

export interface InterfaceSettingsTabProps {
    onEditDashboardLayout: () => void
}

const InterfaceSettingsTab = (props: InterfaceSettingsTabProps) => {
    const { onEditDashboardLayout } = props

    const fontDispatcher = useFontDispatch()
    const fontService = new FontService()

    const [fonts, setFonts] = useState<Font[]>([])
    const { t, i18n } = useTranslation("translation", { keyPrefix: "settings.modal.interface" })

    useEffect(() => {
        fontService.getFonts().then((response) => {
            setFonts(response)
        })
    }, [])

    const handleFontChange = (font: string) => {
        fontDispatcher(setFont(font))
    }

    const handleLanguageChange = async (language: string) => {
        await i18n.changeLanguage(language === "English" ? "en" : "jp")
    }

    return (
        <div data-testid="interface-settings-tab">
            <SettingsTabTitle title={t("heading")} description={t("desc")} />

            <div className={styles.section}>
                <p className={styles.heading}>{t("customise-dashboard-layout.heading")}</p>
                <p className={styles.text}>{t("customise-dashboard-layout.desc")}</p>
                <SettingsButton
                    id="open-layout-editor-button"
                    icon={{ icon: faGripVertical }}
                    onClick={onEditDashboardLayout}
                    className={styles["open-layout-editor"]}
                    name={t("customise-dashboard-layout.button")}
                />
            </div>

            <div className={styles.section}>
                <p className={styles.heading}>{t("theme.heading")}</p>
                <p className={styles.text}>{t("theme.desc")}</p>
                <SettingsDropdown
                    optionsKey="interface.theme"
                    preference={Preference.THEME}
                    id="interface-settings-theme-selector"
                />
            </div>

            <div className={styles.section}>
                <p className={styles.heading}>{t("kanji-font.heading")}</p>
                <p className={styles.text}>{t("kanji-font.desc")}</p>
                <SettingsDropdown
                    buttonIcon={faFont}
                    onChange={handleFontChange}
                    loading={fonts.length === 0}
                    id="interface-settings-font-selector"
                    preference={Preference.DEFAULT_KANJI_FONT}
                    key={fonts.map((font) => font.name).join("-")}
                    options={fonts.map((font) => ({
                        value: font.slug,
                        style: { fontFamily: font.name },
                        name: t(`kanji-font.options.${font.slug}`)
                    }))}
                />
            </div>

            <div className={styles.section}>
                <p className={styles.heading}>{t("language.heading")}</p>
                <p className={styles.text}>{t("language.desc")}</p>
                <SettingsDropdown
                    buttonIcon={faLanguage}
                    optionsKey="interface.language"
                    preference={Preference.LANGUAGE}
                    id="interface-settings-language-selector"
                    onChange={(language: string) => handleLanguageChange(language)}
                />
            </div>

            <div className={styles.section}>
                <p className={styles.heading}>{t("confidence-menu-style.heading")}</p>
                <p className={styles.text}>{t("confidence-menu-style.desc")}</p>
                <SettingsDropdown
                    optionsKey="interface.confidence-menu-style"
                    preference={Preference.CONFIDENCE_MENU_STYLE}
                    id="interface-settings-confidence-menu-selector"
                />
            </div>
        </div>
    )
}

export default InterfaceSettingsTab
