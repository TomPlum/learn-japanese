import React, { useState } from "react";
import { faCheck, faFont } from "@fortawesome/free-solid-svg-icons";
import menuStyles from "../../../styles/sass/components/layout/ControlsMenu.module.scss";
import styles from "../../../styles/sass/components/ui/buttons/FontSelectorButton.module.scss";
import NavigationButton from "../NavigationButton";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

interface FontSelectorProps {
    className?: string;
}

interface Font {
    displayName: string;
    name: string;
}

const FontSelectorButton = (props: FontSelectorProps) => {

    const [selected, setSelected] = useState("Ciutadella");

    const handleSelect = (value: string) => {
        setSelected(value);
    }

    const fonts: Font[] = [
        { displayName: "Handwriting", name: "SanafonMugi Handwriting" },
        { displayName: "Gothic", name: "K Gothic" },
        { displayName: "Mincho", name: "Appli Mincho" }, //アプリ明朝 <- Name in Japanese
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
                const isSelected = selected === font.displayName;

                return (
                    <NavigationButton.Item
                        onClick={handleSelect}
                        key={font.displayName}
                        className={styles.font}
                        iconClass={isSelected ? styles.selected : styles.inactive}
                        style={{ fontFamily: font.name }}
                        icon={isSelected ? faCheck : faCircle}
                    >
                        {font.displayName}
                    </NavigationButton.Item>
                );
            })}
        </NavigationButton>
    );
}

export default FontSelectorButton;
