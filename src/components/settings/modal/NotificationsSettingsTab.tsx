import SettingsTabTitle from "./SettingsTabTitle";
import styles from "../../../styles/sass/components/settings/modal/NotificationsSettingsTab.module.scss";
import SettingsButton from "./SettingsButton";
import { faCopy, faEraser, faFireAlt, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import SettingsBooleanButton from "./SettingsBooleanButton";
import { useState } from "react";

const NotificationsSettingsTab = () => {

    const [streakNotifications, setStreakNotifications] = useState(false);
    const [mistakesNotifications, setMistakesNotifications] = useState(false);

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
                    state={streakNotifications}
                    falsy={{ name: "Enable", icon: faFireAlt }}
                    truthy={{ name: "Disable", icon: faSnowflake }}
                    onClick={(state: boolean) => setStreakNotifications(state)}
                />
            </div>

            <div className={styles.section}>
                <p className={styles.heading}>Outstanding Mistakes Reminder</p>
                <p className={styles.text}>
                    Toggle reminders for outstanding mistakes that need reviewing.
                </p>
                <SettingsBooleanButton
                    enableHoverColours
                    state={mistakesNotifications}
                    falsy={{ name: "Enable", icon: faEraser }}
                    truthy={{ name: "Disable", icon: faEraser }}
                    onClick={(state: boolean) => setMistakesNotifications(state)}
                />
            </div>
        </div>
    );
}

export default NotificationsSettingsTab;
