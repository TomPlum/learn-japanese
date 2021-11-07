import NavigationButton from "../NavigationButton";
import { faBook, faBrain, faInfoCircle, faPaintBrush, faQuestion } from "@fortawesome/free-solid-svg-icons";
import menuStyles from "../../../styles/sass/components/layout/ControlsMenu.module.scss";
import styles from "../../../styles/sass/components/ui/buttons/HelpButton.module.scss";

const HelpButton = () => {
    return (
        <NavigationButton text="Help" icon={faInfoCircle} iconClass={menuStyles.icon} textClass={menuStyles.linkText} width={250}>
            <NavigationButton.Item icon={faPaintBrush} href="/help" iconClass={styles.kanji}>
                Jōyō Kanji Bank
            </NavigationButton.Item>

            <NavigationButton.Item icon={faBook} href="/genki" iconClass={styles.genki}>
                Genki Knowledge Bank
            </NavigationButton.Item>

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
