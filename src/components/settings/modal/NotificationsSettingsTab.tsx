import SettingsTabTitle from "./SettingsTabTitle";

const NotificationsSettingsTab = () => {
    return (
        <div data-testid="notification-settings-tab">
            <SettingsTabTitle
                title="Notification Settings"
                description="Configure settings related to your notification centre and app-wide communication."
            />
        </div>
    );
}

export default NotificationsSettingsTab;
