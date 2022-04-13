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
        setSearch("");
        onSelect(icon);
        setSelected(icon);
    }

    const icons = iconList
        .filter(name => name.toLowerCase().includes(search.toLowerCase()))
        .slice(0, 25);

    const popover = (
        <Popover id="icon-picker" data-testid="icon-picker" className={styles.popover}>
            <Popover.Content>
                <Form.Control
                    value={search}
                    className={styles.search}
                    placeholder="Search for an icon"
                    onChange={e => setSearch(e.target.value)}
                />
                <div className={styles.iconContainer}>
                    {icons.map((icon: IconType) => (
                        <Icon
                            value={icon}
                            key={icon.toString()}
                            onClick={handleSelect}
                            className={styles.icon}
                        />
                    ))}
                </div>
                <div>
                    {icons.length === 0 && (
                        <p className={styles.notFound}>
                            {`No icons found for "${search}".`}
                        </p>
                    )}
                </div>
            </Popover.Content>
        </Popover>
    );

    return (
        <div className={[className, styles.wrapper].join(" ")}>
            <OverlayTrigger trigger="click" placement="top" overlay={popover} rootClose>
                <div>
                    <Icon
                        value={selected}
                        className={styles.selected}
                        data-testid="icon-picker-selected"
                    />
                </div>
            </OverlayTrigger>
        </div>
    );
}

export default IconPicker;
