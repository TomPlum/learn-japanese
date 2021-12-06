import { useState } from "react";
import { Theme } from "../../../domain/Theme";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";
import menuStyles from "../../../styles/sass/components/layout/ControlsMenu.module.scss";
import NavigationButton from "../NavigationButton";

export interface ThemeButtonProps {
    className?: string;
}

const ThemeButton = (props: ThemeButtonProps) => {
    const [theme, setTheme] = useState(Theme.DARK);

    const handleOnClick = () => {
        switch(theme) {
            case Theme.DARK: {
                setTheme(Theme.LIGHT);
                break;
            }
            case Theme.LIGHT: {
                setTheme(Theme.DARK);
                break;
            }
        }
    }

    return (
        <NavigationButton
            disableDropdown
            id="theme-button"
            onClick={handleOnClick}
            className={props.className}
            iconClass={menuStyles.icon}
            textClass={menuStyles.linkText}
            icon={theme === Theme.DARK ? faLightbulb : faMoon}
        />
    );
}

export default ThemeButton;
