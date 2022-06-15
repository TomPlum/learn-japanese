import SettingsTabTitle from "./SettingsTabTitle";
import styles from "../../../styles/sass/components/settings/modal/LearnSettingsTab.module.scss";
import SettingsButton from "./SettingsButton";
import { faCopy, faEraser, faFireAlt } from "@fortawesome/free-solid-svg-icons";

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
                <SettingsButton name="Enable" icon={faFireAlt} />
            </div>

            <div className={styles.section}>
                <p className={styles.heading}>Outstanding Mistakes Reminder</p>
                <p className={styles.text}>
                    Toggle reminders for outstanding mistakes that need reviewing.
                </p>
                <SettingsButton name="Enable" icon={faEraser} />
            </div>
        </div>
    );
}

export default NotificationsSettingsTab;
