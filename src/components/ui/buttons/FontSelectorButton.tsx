import React, { useEffect, useState } from "react";
import { faCheck, faFont } from "@fortawesome/free-solid-svg-icons";
import menuStyles from "../../../styles/sass/components/layout/NavigationBar.module.scss";
import NavigationButton from "../NavigationButton";
import { useFontDispatch } from "../../../hooks";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import styles from "../../../styles/sass/components/ui/buttons/FontSelectorButton.module.scss";
import { setFont } from "../../../slices/FontSlice";
import FontService from "../../../service/FontService";

interface FontSelectorProps {
    className?: string;
}

export interface Font {
    displayName: string;
    name: string;
}

export const fonts: Font[] = [
    { displayName: "Default", name: "" },
    { displayName: "Handwriting", name: "SanafonMugi Handwriting" },
    { displayName: "Gothic", name: "K Gothic" },
    { displayName: "Mincho", name: "Appli Mincho" }, //アプリ明朝 <- Name in Japanese
];

const FontSelectorButton = (props: FontSelectorProps) => {

    const service = new FontService();

    const [fonts, setFonts] = useState<Font[]>([]);
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        service.getSelectedFont().then(response => {
            if (response) {
                setSelected(response.displayName);
            }
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        setLoading(true);
        service.getFonts().then(response => {
            setFonts(response);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    const fontDispatcher = useFontDispatch();

    const handleSelect = (value: string) => {
        setSelected(value);
        const font = fonts.find(it => it.displayName === value)?.name!;
        fontDispatcher(setFont(font));
    }

    return (
        <NavigationButton
            searchable
            icon={faFont}
            loading={loading}
            id="font-selector"
            showItemQuantity={4}
            menuClass={styles.menu}
            onShow={() => setOpen(true)}
            onHide={() => setOpen(false)}
            textClass={menuStyles.linkText}
            containerClass={props.className}
            iconClass={[menuStyles.icon, open ? styles.highlight : styles.icon].join(" ")}
        >
            {fonts.map((font: Font) => {
                const isSelected = selected === font.displayName;

                return (
                    <NavigationButton.Item
                        onClick={handleSelect}
                        key={font.displayName}
                        className={styles.font}
                        style={{ fontFamily: font.name }}
                        containerClass={styles.fontContainer}
                        icon={isSelected ? faCheck : faCircle}
                        iconClass={isSelected ? styles.selected : styles.inactive}
                    >
                        {font.displayName}
                    </NavigationButton.Item>
                );
            })}
        </NavigationButton>
    );
}

export default FontSelectorButton;
