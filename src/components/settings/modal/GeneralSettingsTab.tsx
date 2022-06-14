import styles from "../../../styles/sass/components/settings/modal/GeneralSettingsTab.module.scss";
import SettingsTabTitle from "./SettingsTabTitle";

const GeneralSettingsTab = () => {
    return (
        <div data-testid="general-settings-tab">
            <SettingsTabTitle
                title="General Settings"
                description="General settings for common elements and actions around the app."
            />
        </div>
    );
}

export default GeneralSettingsTab;
