import { ColorResult, SliderPicker } from 'react-color'
import React, { useState } from "react";
import styles from "../../../../styles/sass/components/ui/menu/colour/ColourPicker.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Form } from 'react-bootstrap';

export interface ColourPickerProps {
    className?: string;
    onClose?: () => void;
    onChange?: (colour: string) => void;
}

const ColourPicker = (props: ColourPickerProps) => {

    const { className, onChange, onClose } = props;

    const [colour, setColour] = useState("#df3d3d");

    const handleChange = (result: ColorResult) => {
        setColour(result.hex);
        onChange?.(result.hex);
    }

    const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColour(e.target.value);
    }

    return (
        <div className={[className, styles.wrapper].join(" ")} data-testid="colour-picker">
            <div onClick={onClose} className={styles.back}>
                <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
                <span>Back</span>
            </div>
            <SliderPicker
                color={colour}
                onChange={handleChange}
                className={styles.picker}
                onChangeComplete={handleChange}
            />
            <Form.Control
                value={colour}
                placeholder="Colour"
                className={styles.input}
                onChange={handleHexChange}
            />
        </div>
    );
}

export default ColourPicker;
