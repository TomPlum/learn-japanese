import SettingsTabTitle from "./SettingsTabTitle";
import SettingsButton from "./SettingsButton";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/sass/components/settings/modal/PlaySettingsTab.module.scss";

const PlaySettingsTab = () => {
    return (
        <div data-testid="play-settings-tab">
            <SettingsTabTitle
                title="Play Settings"
                description="Configure settings related to games and other play-orientated modes."
            />

            <div className={styles.section}>
                <p className={styles.heading}>High-score Preference</p>
                <p className={styles.text}>
                    Set the default behaviour for submitting your play sessions to the high-scores.
                </p>
                <SettingsButton name="Ask Each Time" icon={faTrophy} />
            </div>
        </div>
    );
}

export default PlaySettingsTab;
