import React, { ChangeEvent, Component } from "react"
import { Form } from "react-bootstrap"
import { OverlayChildren } from "react-bootstrap/Overlay"
import styles from "../../../styles/sass/components/ui/fields/GameInputField.module.scss"
import InfoButton from "../buttons/InfoButton"

export interface GameInputFieldProps {
    disabled?: boolean
    value?: string
    placeholder?: string
    className?: string
    helpPopover: OverlayChildren
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
}

class GameInputField extends Component<GameInputFieldProps> {
    render() {
        const { disabled, value, placeholder, className, helpPopover, onChange } = this.props

        return (
            <div className={styles.wrapper}>
                <InfoButton popover={helpPopover} className={styles.icon} data-testid="game-input-help" />

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
        )
    }
}

export default GameInputField
