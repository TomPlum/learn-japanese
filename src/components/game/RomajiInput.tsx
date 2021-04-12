import React, { ChangeEvent, Component } from "react";
import { Form, OverlayTrigger } from "react-bootstrap";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PopOver from "../ui/PopOver";
import styles from "../../styles/sass/components/game/RomajiInput.module.scss";

export interface RomajiInputProps {
    disabled?: boolean;
    value?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
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
                <OverlayTrigger trigger={["hover", "click"]} overlay={popover} placement="top" >
                    <FontAwesomeIcon icon={faInfoCircle} className={styles.icon} data-testid="help" />
                </OverlayTrigger>

                <Form.Control
                    className={[styles.input, className].join(" ")}
                    plaintext
                    disabled={disabled}
                    value={value}
                    placeholder={placeholder}
                    onChange={this.handleOnChange}
                    onFocus={this.handleFocus}
                    ref={this.input}
                />
            </div>
        );
    }

    private handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const key = e.target.value;
        if (key.match(/^[A-Za-z]+$/) || !key) {
            this.props?.onChange?.(key);
        }
        return false;
    }

    private handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.preventDefault();
    }
}

export default RomajiInput;