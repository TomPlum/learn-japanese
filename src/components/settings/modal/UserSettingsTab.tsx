import SettingsTabTitle from "./SettingsTabTitle";
import styles from "../../../styles/sass/components/settings/modal/UserSettingsTab.module.scss";
import SettingsButton from "./SettingsButton";
import { faFireAlt } from "@fortawesome/free-solid-svg-icons";

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
        </div>
    )
}

export default UserSettingsTab;
