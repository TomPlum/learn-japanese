import NavigationButton from "../NavigationButton"
import { faBook, faBookOpen, faGraduationCap, faPaintBrush } from "@fortawesome/free-solid-svg-icons"
import menuStyles from "../../../styles/sass/components/layout/NavigationBar.module.scss"
import styles from "../../../styles/sass/components/ui/buttons/LearnButton.module.scss"
import { faKickstarterK } from "@fortawesome/free-brands-svg-icons"
import { useTranslation } from "react-i18next"

const LearnButton = () => {
    const { t, ready } = useTranslation()

    return (
        <NavigationButton
            width={250}
            textLoading={!ready}
            textPlacement="right"
            icon={faGraduationCap}
            iconClass={menuStyles.icon}
            id="learning-resources-button"
            textClass={menuStyles.linkText}
            text={t("navigation.button.learn")}
        >
            <NavigationButton.Item icon={faPaintBrush} href="/kanji" iconClass={styles.kanji}>
                {t("navigation.button.kanji-dict")}
            </NavigationButton.Item>

            <NavigationButton.Item icon={faKickstarterK} href="/kana" iconClass={styles.kana}>
                {t("navigation.button.kana-dict")}
            </NavigationButton.Item>

            <NavigationButton.Item icon={faBook} href="/genki" iconClass={styles.genki}>
                {t("navigation.button.genki-dict")}
            </NavigationButton.Item>

            <NavigationButton.Item icon={faBookOpen} href="/genki/grammar" iconClass={styles.grammar}>
                {t("navigation.button.genki-grammar")}
            </NavigationButton.Item>
        </NavigationButton>
    )
}

export default LearnButton
