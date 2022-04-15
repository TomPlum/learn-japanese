import styles from "../../../../styles/sass/components/ui/menu/icon/IconPicker.module.scss";
import React, { useState } from "react";
import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";
import { iconList } from "../../../../icons";
import { Icon as IconType } from "../../../../domain/Icon";
import Icon from "./Icon";
import LocalStorageService from "../../../../service/LocalStorageService";
import ScrollableContainer from "../../ScrollableContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import { Numbers } from "../../../../utility/Numbers";

export interface IconPickerProps {
    size?: string;
    className?: string;
    onSelect: (icon: IconType) => void;
}

const IconPicker = (props: IconPickerProps) => {

    const { size, className, onSelect } = props;

    const localStorageService = new LocalStorageService();
    const recentlyUsed = localStorageService.getRecentlyUsedIcons();

    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState<IconType>("FaRocket");

    const handleSelect = (icon: IconType) => {
        setSearch("");
        setShow(false);
        onSelect(icon);
        setSelected(icon);
        localStorageService.addRecentlyUsedIcon(icon);
    }

    const handleRandomise = () => {
        const index = Numbers.randomInt(0, iconList.length - 1);
        const icon = iconList[index];
        handleSelect(icon);
    }

    let icons = iconList.filter(name => !recentlyUsed.includes(name));
    icons.unshift(...recentlyUsed);
    icons = icons
        .filter(it => !!it)
        .filter(name => name.toLowerCase().includes(search.toLowerCase()))
        .slice(0, 25 - recentlyUsed.length);

    const popover = (
        <Popover id="icon-picker" data-testid="icon-picker" className={styles.popover}>
            <Popover.Content>
                <div className={styles.inputWrapper}>
                    <Form.Control
                        type="text"
                        value={search}
                        id="icon-picker-search"
                        className={styles.search}
                        isInvalid={icons.length === 0}
                        data-testid="icon-picker-search"
                        placeholder="Search for an icon"
                        onChange={e => setSearch(e.target.value)}
                    />
                    <FontAwesomeIcon
                        fixedWidth
                        icon={faRandom}
                        title="Randomise"
                        onClick={handleRandomise}
                        className={styles.random}
                    />
                </div>
                <ScrollableContainer className={styles.iconContainer} maxHeight={180}>
                    {icons.map((icon: IconType) => (
                        <Icon
                            value={icon}
                            key={icon.toString()}
                            onClick={handleSelect}
                            className={styles.icon}
                        />
                    ))}
                </ScrollableContainer>
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
            <OverlayTrigger trigger="click" placement="top" overlay={popover} show={show} onToggle={() => setShow(!show)} rootClose>
                <Button variant="info" title="Select Icon" className={styles.button}>
                    <Icon
                        size={size}
                        value={selected}
                        className={styles.selected}
                        data-testid="icon-picker-selected"
                    />
                </Button>
            </OverlayTrigger>
        </div>
    );
}

export default IconPicker;
