import React, { ChangeEvent, Component } from "react";
import { Form, OverlayTrigger } from "react-bootstrap";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/sass/components/game/RomajiInput.module.scss";
import PopOver from "../ui/PopOver";

export interface RomajiInputProps {
    disabled?: boolean;
    value?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    onEnterKey?: () => void;
    className?: string;
}

class RomajiInput extends Component<RomajiInputProps> {

    private readonly input = React.createRef<HTMLInputElement>();

    componentDidMount() {
        this.input?.current?.focus();
    }

    render() {
        const { disabled, value, placeholder, className } = this.props;

        const popover = <PopOver
            title="What is Rōmaji?"
            text={"Enter the roman characters for the given kana. I.e. 'a', 'ke' or 'zu'."}
        />

        return (
            <div className={styles.wrapper}>
                <OverlayTrigger trigger={"hover"} overlay={popover} placement="top" >
                    <FontAwesomeIcon icon={faInfoCircle} className={styles.icon} />
                </OverlayTrigger>

                <Form.Control
                    className={[styles.input, className].join(" ")}
                    plaintext
                    disabled={disabled}
                    value={value}
                    placeholder={placeholder}
                    onChange={this.handleOnChange}
                    onKeyPress={this.handleKeyPress}
                    onFocus={this.handleFocus}
                    ref={this.input}
                />
            </div>
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

    private handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.preventDefault();
    }
}

export default RomajiInput;