import styles from "../../../styles/sass/components/settings/modal/InterfaceSettingsTab.module.scss";
import { faFont, faGripVertical, faLanguage, faLightbulb, faMoon, faSmile, faSortNumericUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import SettingsButton from "./SettingsButton";
import SettingsTabTitle from "./SettingsTabTitle";
import SettingsDropdown from "./SettingsDropdown";
import FontService from "../../../service/FontService";
import { Font } from "../../ui/buttons/FontSelectorButton";
import SettingsBooleanButton from "./SettingsBooleanButton";

export interface InterfaceSettingsTabProps {
    onEditDashboardLayout: () => void;
}

const InterfaceSettingsTab = (props: InterfaceSettingsTabProps) => {

    const { onEditDashboardLayout } = props;

    const fontService = new FontService();

    const [fonts, setFonts] = useState<Font[]>([]);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        fontService.getFonts().then(response => {
            setFonts(response);
        })
    }, []);

    const handleFontChange = (font: string) => {

    }

    const handleLanguageChange = (language: string) => {

    }

    const handleConfidenceMenuStyleChange = (style: string) => {

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
               <SettingsButton
                   icon={faGripVertical}
                   name="Open Layout Editor"
                   onClick={onEditDashboardLayout}
               />
           </div>

            <div className={styles.section}>
                <p className={styles.heading}>Theme</p>
                <p className={styles.text}>
                    Switch between the dark and light variations of the user-interface theming.
                </p>
                <SettingsBooleanButton
                    state={darkMode}
                    onClick={(state: boolean) => setDarkMode(state)}
                    truthy={{ name: "Toggle Light Mode", icon: faLightbulb, className: styles.light }}
                    falsy={{ name: "Toggle Dark Mode", icon: faMoon, className: styles.dark }}
                />
            </div>

            <div className={styles.section}>
                <p className={styles.heading}>Kanji Font</p>
                <p className={styles.text}>
                    Set your preferred default font-face used for all kanji characters in the app.
                </p>
                <SettingsDropdown
                    buttonIcon={faFont}
                    onChange={handleFontChange}
                    loading={fonts.length === 0}
                    id="interface-settings-font-selector"
                    key={fonts.map(font => font.name).join("-")}
                    options={fonts.map(font => {
                        return {
                            name: font.displayName,
                            style: { "font-family": font.name }
                        }
                    })}
                />
            </div>

            <div className={styles.section}>
                <p className={styles.heading}>Language & Internationalisation</p>
                <p className={styles.text}>
                    Set the language that all major buttons, menus and links use.
                </p>
                <SettingsDropdown
                    buttonIcon={faLanguage}
                    onChange={handleLanguageChange}
                    id="interface-settings-language-selector"
                    options={[{ name: "English" }, { name: "日本語" }]}
                />
            </div>

            <div className={styles.section}>
                <p className={styles.heading}>Confidence Menu Style</p>
                <p className={styles.text}>
                    Change the format of the confidence rating widget used during flash card learning sessions.
                </p>
                <SettingsDropdown
                    onChange={handleConfidenceMenuStyleChange}
                    id="interface-settings-confidence-menu-selector"
                    options={[
                        { name: "Emoji Style", icon: faSmile },
                        { name: "Numerical", icon: faSortNumericUp }
                    ]}
                />
            </div>
        </div>
    );
}

export default InterfaceSettingsTab;
