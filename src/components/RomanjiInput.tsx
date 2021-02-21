import React, { ChangeEvent, Component } from "react";
import styles from "../styles/sass/components/RomanjiInput.module.scss";
import { Form } from "react-bootstrap";

interface RomanjiInputProps {
    disabled?: boolean;
    value?: string;
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    onEnterKey?: () => void;
}

class RomanjiInput extends Component<RomanjiInputProps> {
    render() {
        const { disabled, value, placeholder, onChange } = this.props;

        return (
            <Form.Control
                className={styles.input}
                plaintext
                disabled={disabled}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onKeyPress={this.handleEnterKeySubmit}
            />
        );
    }

    private handleEnterKeySubmit = (event: any) => {
        if (event.charCode === 13) {
            event.preventDefault();
            if (this.props.value && this.props.onEnterKey) {
                this.props.onEnterKey();
            }
        }
        return false;
    }
}

export default RomanjiInput;