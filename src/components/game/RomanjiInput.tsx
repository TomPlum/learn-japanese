import React, { ChangeEvent, Component } from "react";
import styles from "../../styles/sass/components/game/RomanjiInput.module.scss";
import { Form } from "react-bootstrap";

export interface RomanjiInputProps {
    disabled?: boolean;
    value?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    onEnterKey?: () => void;
}

class RomanjiInput extends Component<RomanjiInputProps> {

    private readonly input = React.createRef<HTMLInputElement>();

    componentDidMount() {
        this.input?.current?.focus();
    }

    render() {
        const { disabled, value, placeholder } = this.props;

        return (
            <Form.Control
                className={styles.input}
                plaintext
                disabled={disabled}
                value={value}
                placeholder={placeholder}
                onChange={this.handleOnChange}
                onKeyPress={this.handleKeyPress}
                ref={this.input}
            />
        );
    }

    private handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (this.props.value && this.props.onEnterKey) {
                this.props.onEnterKey();
            }
        }
        return false;
    }

    private handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        this.props?.onChange?.(e.target.value);
    }
}

export default RomanjiInput;