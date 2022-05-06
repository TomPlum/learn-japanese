import { ChromePicker, ColorResult } from 'react-color'
import React, { useState } from "react";
import Popover from 'react-bootstrap/esm/Popover';
import styles from "../../../../styles/sass/components/ui/menu/colour/ColourPicker.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { OverlayTrigger } from "react-bootstrap";

export interface ColourPickerProps {
    className?: string;
    onShow?: () => void;
    onHide?: () => void;
    onSelect?: (colour: string) => void;
}

const ColourPicker = (props: ColourPickerProps) => {

    const { className, onShow, onHide, onSelect } = props;

    const [show, setShow] = useState(false);
    const [colour, setColour] = useState("#FFFFFF");

    const handleColourSelection = (result: ColorResult) => {
        setColour(result.hex);
        onSelect?.(result.hex);
    }

    const overlay = (
        <Popover id="colour-picker" data-testid="colour-picker">
            <ChromePicker
                color={colour}
                className={styles.picker}
                onChange={handleColourSelection}
            />
        </Popover>
    );

    const handleToggle = () => {
        show ? onHide?.() : onShow?.();
        setShow(!show);
    }

    return (
        <OverlayTrigger trigger="click" placement="right" overlay={overlay} show={show} onToggle={handleToggle} rootClose>
            <FontAwesomeIcon
                fixedWidth
                icon={faPaintBrush}
                title="Choose Colour"
                className={[className, styles.colour].join(" ")}
            />
        </OverlayTrigger>
    );
}

export default ColourPicker;
