import React, { ChangeEvent, Component } from "react";
import PopOver from "../PopOver";
import GameInputField from "./GameInputField";

export interface RomajiInputProps {
    disabled?: boolean;
    value?: string;
    placeholder?: string;
    className?: string;
    onChange?: (value: string) => void;
}

class RomajiInput extends Component<RomajiInputProps> {

    render() {
        const { disabled, value, placeholder, className } = this.props;

        const popover = <PopOver
            title="What is Rōmaji?"
            text={"Enter the roman characters for the given kana. I.e. 'a', 'ke' or 'zu'."}
        />

        return (
            <GameInputField
                value={value}
                className={className}
                helpPopover={popover}
                disabled={disabled}
                placeholder={placeholder}
                onChange={this.handleOnChange}
            />
        );
    }

    private handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const key = e.target.value;
        if (key.match(/^[A-Za-z]+$/) || !key) {
            this.props?.onChange?.(key);
        }
        return false;
    }
}

export default RomajiInput;