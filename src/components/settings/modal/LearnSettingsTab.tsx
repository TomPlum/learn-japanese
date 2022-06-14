import SettingsTabTitle from "./SettingsTabTitle";

const LearnSettingsTab = () => {
    return (
        <div data-testid="learn-settings-tab">
            <SettingsTabTitle
                title="Learn Settings"
                description="Configure settings related to learning Japanese."
            />
        </div>
    );
}

export default LearnSettingsTab;
