import NavigationButton from "../NavigationButton";
import { faBrain, faInfoCircle, faQuestion } from "@fortawesome/free-solid-svg-icons";
import menuStyles from "../../../styles/sass/components/layout/ControlsMenu.module.scss";
import styles from "../../../styles/sass/components/ui/buttons/LearnButton.module.scss";

const HelpButton = () => {
    return (
        <NavigationButton
            width={250}
            text="Help"
            id="help-button"
            icon={faInfoCircle}
            textPlacement="bottom"
            iconClass={menuStyles.icon}
            textClass={menuStyles.linkText}
        >
            <NavigationButton.Item icon={faBrain} href="/help" iconClass={styles.sm2}>
                SuperMemo2 Algorithm
            </NavigationButton.Item>

            <NavigationButton.Item icon={faQuestion} href="/help" iconClass={styles.faq}>
                Frequently Asked Questions
            </NavigationButton.Item>
        </NavigationButton>
    );
}

export default HelpButton;
