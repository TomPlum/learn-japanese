import SettingsTabTitle from "./SettingsTabTitle";
import styles from "../../../styles/sass/components/settings/modal/NotificationsSettingsTab.module.scss";
import { faEraser, faFireAlt, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import SettingsBooleanButton from "./SettingsBooleanButton";
import { Preference } from "../../../domain/user/Preference";

const NotificationsSettingsTab = () => {

    return (
        <div data-testid="notification-settings-tab">
            <SettingsTabTitle
                title="Notification Settings"
                description="Configure settings related to your notification centre and app-wide communication."
            />

            <div className={styles.section}>
                <p className={styles.heading}>Streak Notifications</p>
                <p className={styles.text}>
                    Toggle notifications for significant streak milestones.
                </p>
                <SettingsBooleanButton
                    enableHoverColours
                    falsy={{ name: "Enable", icon: faFireAlt }}
                    preference={Preference.STREAK_NOTIFICATIONS}
                    truthy={{ name: "Disable", icon: faSnowflake }}
                />
            </div>

            <div className={styles.section}>
                <p className={styles.heading}>Outstanding Mistakes Reminder</p>
                <p className={styles.text}>
                    Toggle reminders for outstanding mistakes that need reviewing.
                </p>
                <SettingsBooleanButton
                    enableHoverColours
                    preference={Preference.MISTAKES_REMINDERS}
                    falsy={{ name: "Enable", icon: faEraser }}
                    truthy={{ name: "Disable", icon: faEraser }}
                />
            </div>
        </div>
    );
}

export default NotificationsSettingsTab;
