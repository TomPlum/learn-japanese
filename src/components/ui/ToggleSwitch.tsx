import { Form } from "react-bootstrap";
import React from "react";
import styles from "../../styles/sass/components/ui/ToggleSwitch.module.scss";

export interface ToggleSwitchProps {
    label?: string;
    enabled: boolean;
    className?: string;
    onChange?: () => void;
}

const ToggleSwitch = (props: ToggleSwitchProps) => {
    const { label, enabled, className, onChange, ...rest} = props;
    return (
        <Form.Check
            inline
            type="switch"
            id={label}
            label={label}
            className={[className, styles.switch].join(" ")}
            checked={enabled}
            onChange={onChange}
            {...rest}
        />
    )
}

export default ToggleSwitch;
