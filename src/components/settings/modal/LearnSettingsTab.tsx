import SettingsTabTitle from "./SettingsTabTitle";
import styles from "../../../styles/sass/components/settings/modal/LearnSettingsTab.module.scss";
import SettingsButton from "./SettingsButton";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const LearnSettingsTab = () => {
    return (
        <div data-testid="learn-settings-tab">
            <SettingsTabTitle
                title="Learn Settings"
                description="Configure settings related to learning Japanese."
            />

            <div className={styles.section}>
                <p className={styles.heading}>Flash Cards per Day</p>
                <p className={styles.text}>
                    Set the number of new flash cards you wish to see per day. New cards will only be issued if your
                    deck is active and you have no outstanding cards to be reviewed.
                </p>
                <SettingsButton name="10" icon={faCopy} />
            </div>
        </div>
    );
}

export default LearnSettingsTab;
