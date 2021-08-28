import React, { ChangeEvent, Component } from "react";
import { Form, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { OverlayChildren } from "react-bootstrap/Overlay";
import styles from "../../../styles/sass/components/ui/fields/GameInputField.module.scss";

export interface GameInputFieldProps {
    disabled?: boolean;
    value?: string;
    placeholder?: string;
    className?: string;
    helpPopover: OverlayChildren;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

class GameInputField extends Component<GameInputFieldProps> {

    render() {
        const { disabled, value, placeholder, className, helpPopover, onChange } = this.props;

        return (
            <div className={styles.wrapper}>
                <OverlayTrigger trigger={["hover", "click"]} overlay={helpPopover} placement="top">
                    <FontAwesomeIcon icon={faInfoCircle} className={styles.icon} data-testid="game-input-help"/>
                </OverlayTrigger>

                <Form.Control
                    autoFocus
                    plaintext
                    value={value}
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