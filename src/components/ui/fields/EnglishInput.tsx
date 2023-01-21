import React, { ChangeEvent, Component } from "react"
import GameInputField from "./GameInputField"
import PopOver from "../PopOver"

export interface EnglishInputProps {
    disabled?: boolean
    value?: string
    placeholder?: string
    className?: string
    onChange?: (value: string) => void
}

class EnglishInput extends Component<EnglishInputProps> {
    render() {
        const { disabled, value, placeholder, className } = this.props

        const popover = <PopOver title="English Meaning" text={"Enter one of the meanings as a single English word."} />

        return (
            <GameInputField
                value={value}
                className={className}
                helpPopover={popover}
                disabled={disabled}
                placeholder={placeholder}
                onChange={this.handleOnChange}
            />
        )
    }

    private handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const key = e.target.value
        if (key.match(/^[A-Za-z\s]*$/) || !key) {
            this.props?.onChange?.(key)
        }
        return false
    }
}

export default EnglishInput
