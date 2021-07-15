import React, { ChangeEvent, Component } from "react";
import GameInputField from "./GameInputField";
import LearnableField from "../../../types/learn/LearnableField";
import PopOver from "../PopOver";

export interface AnswerInputFieldProps {
    disabled?: boolean;
    value?: string;
    placeholder?: string;
    className?: string;
    field: LearnableField;
    onChange?: (value: string) => void;
}

class AnswerInputField extends Component<AnswerInputFieldProps> {

    render() {
        const { value, disabled, placeholder, className, field } = this.props;

        return (
            <GameInputField
                value={value}
                disabled={disabled}
                className={className}
                placeholder={placeholder}
                onChange={this.handleOnChange}
                helpPopover={<PopOver title={field.name} text={field.description}/>}
            />
        );
    }

    private handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { onChange, field } = this.props;
        const value = e.target.value;
        if (field.validationRegex.test(value) || !value) {
            onChange?.(value);
        }
        return false;
    }
}

export default AnswerInputField;