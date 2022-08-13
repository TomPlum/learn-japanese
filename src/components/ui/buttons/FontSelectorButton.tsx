import React, { useEffect, useState } from "react";
import { faCheck, faFont } from "@fortawesome/free-solid-svg-icons";
import menuStyles from "../../../styles/sass/components/layout/NavigationBar.module.scss";
import NavigationButton from "../NavigationButton";
import { useFontDispatch } from "../../../hooks";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import styles from "../../../styles/sass/components/ui/buttons/FontSelectorButton.module.scss";
import { setFont } from "../../../slices/FontSlice";
import FontService from "../../../service/FontService";
import { useTranslation } from "react-i18next";

interface FontSelectorProps {
    className?: string;
}

export interface Font {
    name: string;
    slug: string;
}

const FontSelectorButton = (props: FontSelectorProps) => {

    const service = new FontService();

    const defaultFont = { name: "Default", slug: "default" };
    const [fonts, setFonts] = useState<Font[]>([]);
    const [map, setMap] = useState(new Map());
    const [selected, setSelected] = useState<Font>(defaultFont);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation("translation", { keyPrefix: "settings.modal.interface.kanji-font.options" });

    useEffect(() => {
        setLoading(true);
        service.getSelectedFont().then(response => {
            if (response) {
                setSelected(response);
            }
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        setLoading(true);
        service.getFonts().then(response => {
            setFonts(response);
            setMap(new Map(response.map(font => [t(font.slug), font.slug])));
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    const fontDispatcher = useFontDispatch();

    const handleSelect = (value: string) => {
        const selected = fonts.find(font => font.slug === map.get(value)) ?? defaultFont;
        setSelected(selected);
        fontDispatcher(setFont(selected.name));
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
                const isSelected = selected === font;

                return (
                    <NavigationButton.Item
                        key={font.slug}
                        onClick={handleSelect}
                        className={styles.font}
                        style={{ fontFamily: font.name }}
                        containerClass={styles.fontContainer}
                        icon={isSelected ? faCheck : faCircle}
                        iconClass={isSelected ? styles.selected : styles.inactive}
                    >
                        {t(font.slug)}
                    </NavigationButton.Item>
                );
            })}
        </NavigationButton>
    );
}

export default FontSelectorButton;
