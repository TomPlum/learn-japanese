import styles from "../../../styles/sass/components/settings/modal/InterfaceSettingsTab.module.scss";
import { faFont, faGripVertical, faLanguage, faLightbulb, faMoon, faSmile, faSortNumericUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import SettingsButton from "./SettingsButton";
import SettingsTabTitle from "./SettingsTabTitle";
import SettingsDropdown from "./SettingsDropdown";
import FontService from "../../../service/FontService";
import { Font } from "../../ui/buttons/FontSelectorButton";
import { Preference } from "../../../domain/user/Preference";
import { useFontDispatch } from "../../../hooks";
import { setFont } from "../../../slices/FontSlice";

export interface InterfaceSettingsTabProps {
    onEditDashboardLayout: () => void;
}

const InterfaceSettingsTab = (props: InterfaceSettingsTabProps) => {

    const { onEditDashboardLayout } = props;

    const fontDispatcher = useFontDispatch();
    const fontService = new FontService();

    const [fonts, setFonts] = useState<Font[]>([]);

    useEffect(() => {
        fontService.getFonts().then(response => {
            setFonts(response);
        })
    }, []);

    const handleFontChange = (font: string) => {
        fontDispatcher(setFont(font));
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
                   name="Open Layout Editor"
                   icon={{ icon: faGripVertical }}
                   onClick={onEditDashboardLayout}
               />
           </div>

            <div className={styles.section}>
                <p className={styles.heading}>Theme</p>
                <p className={styles.text}>
                    Switch between the dark and light variations of the user-interface theming.
                </p>
                <SettingsDropdown
                    id="interface-settings-theme-selector"
                    preference={Preference.THEME}
                    options={[
                        { name: "Dark Mode", icon: faMoon, className: styles.dark },
                        { name: "Light Mode", icon: faLightbulb, className: styles.light }
                    ]}
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
                    preference={Preference.DEFAULT_KANJI_FONT}
                    loading={fonts.length === 0}
                    id="interface-settings-font-selector"
                    key={fonts.map(font => font.name).join("-")}
                    options={fonts.map(font => {
                        return {
                            name: font.displayName,
                            style: { fontFamily: font.name }
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
                    preference={Preference.LANGUAGE}
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
                    preference={Preference.CONFIDENCE_MENU_STYLE}
                    id="interface-settings-confidence-menu-selector"
                    options={[
                        { name: "Emoji Style", icon: faSmile },
                        { name: "Numbers 1 - 6", icon: faSortNumericUp }
                    ]}
                />
            </div>
        </div>
    );
}

export default InterfaceSettingsTab;
