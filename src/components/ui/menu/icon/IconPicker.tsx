import styles from "../../../../styles/sass/components/ui/menu/icon/IconPicker.module.scss";
import React, { useState } from "react";
import { Form, OverlayTrigger, Popover } from "react-bootstrap";
import { iconList } from "../../../../icons";
import { Icon as IconType } from "../../../../domain/Icon";
import Icon from "./Icon";

export interface IconPickerProps {
    className?: string;
    onSelect: (icon: IconType) => void;
}

const IconPicker = (props: IconPickerProps) => {

    const { className, onSelect } = props;

    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState<IconType>("FaRocket");

    const handleSelect = (icon: IconType) => {
        setSearch("")
        onSelect(icon);
        setSelected(icon);
    }

    const popover = (
        <Popover id="icon-picker" className={styles.popover}>
            <Popover.Content>
                <Form.Control
                    value={search}
                    placeholder="Search for an icon"
                    className={styles.search}
                    onChange={e => setSearch(e.target.value)}
                />
                <div className={styles.iconContainer}>
                    {iconList
                        .filter(name => name.toLowerCase().includes(search.toLowerCase()))
                        .slice(0, 25)
                        .map((icon: IconType) => (
                            <Icon
                                value={icon}
                                onClick={handleSelect}
                                className={styles.icon}
                            />
                        ))
                    }
                </div>
            </Popover.Content>
        </Popover>
    );

    return (
        <div className={[className, styles.wrapper].join(" ")}>
            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                <div>
                    <Icon value={selected} className={styles.selected} />
                </div>
            </OverlayTrigger>
        </div>
    );
}

export default IconPicker;
