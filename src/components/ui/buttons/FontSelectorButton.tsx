import React, { useState } from "react";
import { faCheck, faFont } from "@fortawesome/free-solid-svg-icons";
import menuStyles from "../../../styles/sass/components/layout/ControlsMenu.module.scss";
import NavigationButton from "../NavigationButton";
import { useFontDispatch, useFontSelector } from "../../../hooks";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import styles from "../../../styles/sass/components/ui/buttons/FontSelectorButton.module.scss";
import { setFont } from "../../../slices/FontSlice";

interface FontSelectorProps {
    className?: string;
}

interface Font {
    displayName: string;
    name: string;
}

const FontSelectorButton = (props: FontSelectorProps) => {

    const [selected, setSelected] = useState("Default");
    const fontDispatcher = useFontDispatch();

    const handleSelect = (value: string) => {
        setSelected(value);
        const font = fonts.find(it => it.displayName === value)?.name!;
        fontDispatcher(setFont(font));
    }

    const fonts: Font[] = [
        { displayName: "Default", name: "" },
        { displayName: "Handwriting", name: "SanafonMugi Handwriting" },
        { displayName: "Gothic", name: "K Gothic" },
        { displayName: "Mincho", name: "Appli Mincho" }, //アプリ明朝 <- Name in Japanese
        { displayName: "Test", name: "Test" }
    ];

    return (
        <NavigationButton
            show={4}
            searchable
            text="Font"
            icon={faFont}
            menuClass={styles.menu}
            className={props.className}
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
