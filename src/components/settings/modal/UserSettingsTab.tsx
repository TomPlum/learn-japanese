import SettingsTabTitle from "./SettingsTabTitle";
import styles from "../../../styles/sass/components/settings/modal/UserSettingsTab.module.scss";
import SettingsButton from "./SettingsButton";
import { faBookOpen, faChartPie, faFireAlt, faMedal, faSkull } from "@fortawesome/free-solid-svg-icons";
import { faFirefoxBrowser } from "@fortawesome/free-brands-svg-icons";

const UserSettingsTab = () => {
    return (
        <div data-testid="user-settings-tab">
            <SettingsTabTitle
                title="User Settings"
                description="Configure settings related to your user profile."
            />

            <div className={styles.section}>
                <p className={styles.heading}>Streak Card Preference</p>
                <p className={styles.text}>
                    Set the default display on the dashboards streak card.
                </p>
                <SettingsButton name="Start Date" icon={faFireAlt} />
            </div>

            <div className={styles.dangerZone}>
                <div className={styles.section}>
                    <p className={styles.title}>Danger Zone</p>
                    <p className={styles.text}>
                        Destructive settings that you might want to think twice about!
                    </p>
                    <hr className={styles.rule} />
                </div>

                <div className={styles.section}>
                    <p className={styles.heading}>Clear Local Storage</p>
                    <p className={styles.text}>
                        Deletes all locally stored data from your browser except for your user session.
                        Does not permanently delete any saved data, but may increase loading times temporarily.
                    </p>
                    <SettingsButton name="Clear" icon={faFirefoxBrowser} />
                </div>

                <div className={styles.section}>
                    <p className={styles.heading}>Reset High-Scores</p>
                    <p className={styles.text}>
                        Resets all your saved scores across the app. Any ranks you currently hold on the high-scores will be lost.
                    </p>
                    <SettingsButton name="Reset" icon={faMedal} />
                </div>

                <div className={styles.section}>
                    <p className={styles.heading}>Reset Statistics</p>
                    <p className={styles.text}>
                        Resets all your tracked statistics such as games played or won. This does not include flash card data.
                    </p>
                    <SettingsButton name="Reset" icon={faChartPie} />
                </div>

                <div className={styles.section}>
                    <p className={styles.heading}>Reset Flash Cards</p>
                    <p className={styles.text}>
                        Resets all your flash card data. Does not affect stats.
                    </p>
                    <SettingsButton name="Reset" icon={faBookOpen} />
                </div>

                <div className={styles.section}>
                    <p className={styles.heading}>Delete Account</p>
                    <p className={styles.text}>
                        Delete your user account and all of your personal data. This is an irreversible operation.
                        You'll need to provide your password for confirmation.
                    </p>
                    <SettingsButton name="Delete" icon={faSkull} />
                </div>
            </div>
        </div>
    )
}

export default UserSettingsTab;
