import SettingsTabTitle from "./SettingsTabTitle";

const PlaySettingsTab = () => {
    return (
        <div data-testid="play-settings-tab">
            <SettingsTabTitle
                title="Play Settings"
                description="Configure settings related to games and other play-orientated modes."
            />
        </div>
    );
}

export default PlaySettingsTab;
