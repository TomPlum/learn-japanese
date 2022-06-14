import styles from "../../../styles/sass/components/settings/modal/InterfaceSettingsTab.module.scss";
import { faFont, faGripVertical, faLanguage, faLightbulb, faSmile, faSortNumericUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DashboardLayoutEditor from "./DashboardLayoutEditor";
import SettingsButton from "./SettingsButton";
import SettingsTabTitle from "./SettingsTabTitle";

const InterfaceSettingsTab = () => {

    const [editing, setEditing] = useState(false);

    if (editing) {
        return <DashboardLayoutEditor onClose={() => setEditing(false)} />;
    }

    return (
        <div data-testid="interface-settings-tab">
            <SettingsTabTitle
                title="Interface Settings"
                description="Configure the user interface to customise the layout and look-and-feel to your liking."
            />

           <div className={styles.section}>
               <p className={styles.heading}>Customise Dashboard Layout</p>
               <p className={styles.text}>
                   Edit the home page dashboard layout. Cards can be toggled on or off, resized or moved
                   to different columns.
               </p>
               <SettingsButton name="Open Layout Editor" icon={faGripVertical} onClick={() => setEditing(true)} />
           </div>

            <div className={styles.section}>
                <p className={styles.heading}>Theme</p>
                <p className={styles.text}>
                    Switch between the dark and light variations of the user-interface theming.
                </p>
                <SettingsButton name="Toggle Light Mode" icon={faLightbulb} />
            </div>

            <div className={styles.section}>
                <p className={styles.heading}>Kanji Font</p>
                <p className={styles.text}>
                    Set your preferred default font-face used for all kanji characters in the app.
                </p>
                <SettingsButton name="Default" icon={faFont} />
            </div>

            <div className={styles.section}>
                <p className={styles.heading}>Language & Internationalisation</p>
                <p className={styles.text}>
                    Set the language that all major buttons, menus and links use.
                </p>
                <SettingsButton name="English" icon={faLanguage} />
            </div>

            <div className={styles.section}>
                <p className={styles.heading}>Confidence Menu Style</p>
                <p className={styles.text}>
                    Change the format of the confidence rating widget used during flash card learning sessions.
                </p>
                <div className={styles.buttonGroup}>
                    <SettingsButton name="Emoji Style" icon={faSmile} />
                    <SettingsButton name="Numerical" icon={faSortNumericUp} />
                </div>
            </div>
        </div>
    );
}

export default InterfaceSettingsTab;
