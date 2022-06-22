import SettingsTabTitle from "./SettingsTabTitle";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/sass/components/settings/modal/PlaySettingsTab.module.scss";
import SettingsDropdown from "./SettingsDropdown";
import { Preference } from "../../../domain/user/Preference";

const PlaySettingsTab = () => {
    return (
        <div data-testid="play-settings-tab">
            <SettingsTabTitle
                title="Play Settings"
                description="Configure settings related to games and other play-orientated modes."
            />

            <div className={styles.section}>
                <p className={styles.heading}>High-Score Preference</p>
                <p className={styles.text}>
                    Set the default behaviour for submitting your play sessions to the high-scores.
                </p>
                <SettingsDropdown
                    buttonIcon={faCrown}
                    id="play-settings-high-score-selector"
                    preference={Preference.HIGH_SCORES_BEHAVIOUR}
                    options={[
                        { name: "Ask Each Time" },
                        { name: "Always Submit" },
                        { name: "Never Submit"}
                    ]}
                />
            </div>
        </div>
    );
}

export default PlaySettingsTab;
