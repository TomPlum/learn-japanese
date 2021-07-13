import React, { ChangeEvent, Component } from "react";
import { Form, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { OverlayChildren } from "react-bootstrap/Overlay";
import styles from "../../styles/sass/components/game/GameInputField.module.scss";

export interface GameInputFieldProps {
    disabled?: boolean;
    value?: string;
    placeholder?: string;
    className?: string;
    helpPopover: OverlayChildren;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

class GameInputField extends Component<GameInputFieldProps> {

    private readonly input = React.createRef<HTMLInputElement>();

    componentDidMount() {
        this.input?.current?.focus();
    }

    render() {
        const { disabled, value, placeholder, className, helpPopover, onChange } = this.props;

        return (
            <div className={styles.wrapper}>
                <OverlayTrigger trigger={["hover", "click"]} overlay={helpPopover} placement="top">
                    <FontAwesomeIcon icon={faInfoCircle} className={styles.icon} data-testid="help"/>
                </OverlayTrigger>

                <Form.Control
                    plaintext
                    value={value}
                    ref={this.input}
                    disabled={disabled}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={[styles.input, className].join(" ")}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.preventDefault()}
                />
            </div>
        );
    }
}

export default GameInputField;