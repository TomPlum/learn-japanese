import React from "react";
import { Form } from "react-bootstrap";
import styles from "../../../styles/sass/components/ui/select/ValueSelector.module.scss";

export interface ValueSelectorProps {
    prefix?: string;
    values: number[];
    disabled?: boolean;
    className?: string;
    onChange: (value: number) => void;
}

const ValueSelector = (props: ValueSelectorProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        props.onChange(Number(e.target.value));
    }

    return (
        <Form.Control
            custom
            as="select"
            onChange={handleChange}
            disabled={props.disabled}
            className={[props.className, styles.select].join(" ")}
        >
            {props.values.map(pageSize => (
                <option key={pageSize} value={pageSize} className={styles.option}>
                    {props.prefix ?? ""} {pageSize}
                </option>
            ))}
        </Form.Control>
    );
}

export default ValueSelector;
