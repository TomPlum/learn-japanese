import NavigationButton from "../NavigationButton";
import { faBook, faGraduationCap, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import menuStyles from "../../../styles/sass/components/layout/ControlsMenu.module.scss";
import styles from "../../../styles/sass/components/ui/buttons/LearnButton.module.scss";
import { faKickstarterK } from "@fortawesome/free-brands-svg-icons";

const LearnButton = () => {
    return (
        <NavigationButton
            width={250}
            text="Learn"
            textPlacement="right"
            icon={faGraduationCap}
            iconClass={menuStyles.icon}
            id="learning-resources-button"
            textClass={menuStyles.linkText}
        >
            <NavigationButton.Item icon={faPaintBrush} href="/kanji" iconClass={styles.kanji}>
                Kanji Dictionary
            </NavigationButton.Item>

            <NavigationButton.Item icon={faKickstarterK} href="/kana" iconClass={styles.kana}>
                Kana Dictionary
            </NavigationButton.Item>

            <NavigationButton.Item icon={faBook} href="/genki" iconClass={styles.genki}>
                Genki Knowledge Bank
            </NavigationButton.Item>
        </NavigationButton>
    );
}

export default LearnButton;
