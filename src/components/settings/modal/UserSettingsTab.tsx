import SettingsTabTitle from "./SettingsTabTitle";

const UserSettingsTab = () => {
    return (
        <div data-testid="user-settings-tab">
            <SettingsTabTitle
                title="User Settings"
                description="Configure settings related to your user profile."
            />
        </div>
    )
}

export default UserSettingsTab;
