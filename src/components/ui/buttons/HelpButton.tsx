import NavigationButton from "../NavigationButton"
import { faBrain, faInfoCircle, faQuestion } from "@fortawesome/free-solid-svg-icons"
import menuStyles from "../../../styles/sass/components/layout/NavigationBar.module.scss"
import styles from "../../../styles/sass/components/ui/buttons/HelpButton.module.scss"
import { useTranslation } from "react-i18next"

export interface HelpButtonProps {
    className?: string
}

const HelpButton = (props: HelpButtonProps) => {
    const { t, ready } = useTranslation()

    return (
        <NavigationButton
            width={250}
            id="help-button"
            icon={faInfoCircle}
            textLoading={!ready}
            textPlacement="right"
            iconClass={menuStyles.icon}
            className={props.className}
            textClass={menuStyles.linkText}
            text={t("navigation.button.help")}
        >
            <NavigationButton.Item icon={faBrain} href="/help" iconClass={styles.sm2}>
                {t("navigation.button.sm2")}
            </NavigationButton.Item>

            <NavigationButton.Item icon={faQuestion} href="/help" iconClass={styles.faq}>
                {t("navigation.button.faq")}
            </NavigationButton.Item>
        </NavigationButton>
    )
}

export default HelpButton
