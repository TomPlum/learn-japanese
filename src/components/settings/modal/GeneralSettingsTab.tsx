import SettingsTabTitle from "./SettingsTabTitle";
import styles from "../../../styles/sass/components/settings/modal/InterfaceSettingsTab.module.scss";
import SettingsDropdown from "./SettingsDropdown";
import { faRss } from "@fortawesome/free-solid-svg-icons";

const GeneralSettingsTab = () => {
    const handleActivityFeedChange = (quantity: string) => {

    }

    return (
        <div data-testid="general-settings-tab">
            <SettingsTabTitle
                title="General Settings"
                description="General settings for common elements and actions around the app."
            />

            <div className={styles.section}>
                <p className={styles.heading}>Activity Feed</p>
                <p className={styles.text}>
                    Set the number of events to display in the activity feed card by default.
                </p>
                <SettingsDropdown
                    buttonIcon={faRss}
                    onChange={handleActivityFeedChange}
                    id="general-settings-activity-selector"
                    options={[
                        { name: '3' },
                        { name: '5' },
                        { name: '8' }
                    ]}
                />
            </div>
        </div>
    );
}

export default GeneralSettingsTab;
