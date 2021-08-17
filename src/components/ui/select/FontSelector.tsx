import React, { useState } from "react";
import { faCheck, faFont } from "@fortawesome/free-solid-svg-icons";
import menuStyles from "../../../styles/sass/components/layout/ControlsMenu.module.scss";
import styles from "../../../styles/sass/components/ui/select/FontSelector.module.scss";
import NavigationButton from "../NavigationButton";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

interface FontSelectorProps {
    className?: string;
}

interface Font {
    displayName: string;
    name: string;
}

const FontSelector = (props: FontSelectorProps) => {

    const [selected, setSelected] = useState("Ciutadella");

    const handleSelect = (value: string) => {
        setSelected(value);
    }

    const fonts: Font[] = [
        { displayName: "Ciutadella", name: "Ciutadella Rounded Medium" },
        { displayName: "Montserrat", name: "Montserrat" },
        { displayName: "Segoe UI", name: "Segoe UI" },
    ];

    return (
        <NavigationButton
            text="Font"
            stickyMenu
            icon={faFont}
            menuClass={styles.menu}
            iconClass={menuStyles.icon}
            textClass={menuStyles.linkText}
        >
            {fonts.map((font: Font) => {
                return (
                    <NavigationButton.Item
                        onClick={handleSelect}
                        key={font.displayName}
                        className={styles.font}
                        style={{ fontFamily: font.name }}
                        icon={selected === font.displayName ? faCheck : faCircle}
                    >
                        {font.displayName}
                    </NavigationButton.Item>
                );
            })}
        </NavigationButton>
    );
}

export default FontSelector;
