import styles from "../../../styles/sass/components/settings/modal/InterfaceSettingsTab.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DashboardLayoutEditor from "./DashboardLayoutEditor";

const InterfaceSettingsTab = () => {

    const [editing, setEditing] = useState(false);

    if (editing) {
        return <DashboardLayoutEditor onClose={() => setEditing(false)} />;
    }

    return (
        <div data-testid="interface-settings-tab">
            <p className={styles.title}>Interface Settings</p>
            <p className={styles.description}>
                Configure the user interface to customise the layout and look-and-feel to your liking.
            </p>
            <hr className={styles.rule} />

           <div className={styles.section}>
               <p className={styles.heading}>Customise Dashboard Layout</p>
               <p className={styles.text}>
                   Edit the home page dashboard layout. Cards can be toggled on or off, resized or moved
                   to different columns.
               </p>
               <div className={styles.button} onClick={() => setEditing(true)}>
                   <FontAwesomeIcon icon={faGripVertical} className={styles.icon} />
                   <span className={styles.name}>Open Layout Editor</span>
               </div>
           </div>

            <div className={styles.section}>
                <p className={styles.heading}>Toggle Dark / Light Mode</p>
                <p className={styles.text}>
                    Switch between the dark and light variations of the user-interface theming.
                </p>
                <div className={styles.button} onClick={() => setEditing(true)}>
                    <FontAwesomeIcon icon={faLightbulb} className={styles.icon} />
                    <span className={styles.name}>Toggle Light Mode</span>
                </div>
            </div>
        </div>
    );
}

export default InterfaceSettingsTab;
