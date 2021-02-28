import { Component } from "react";

interface JapaneseCharacterProps {
    value: string;
    classes?: string[] | string;
    style?: CharacterStyleProps;
}

export interface CharacterStyleProps {
    size?: "sm" | "md" | "lg" | "xl";
    color?: string;
}

export class DynamicCharacter extends Component<JapaneseCharacterProps> {
    render() {
        const { value, style } = this.props;

        return (
            <p style={{ fontSize: this.getSize(), color: style?.color }} className={this.getClasses()}>
                {value}
            </p>
        );
    }

    private getClasses = (): string | undefined => {
        const { classes } = this.props;
        return typeof classes === "string" ? classes : classes?.join(" ") ?? undefined;
    }

    private getSize = () => {
        switch(this.props.style?.size) {
            case "sm": return "3em";
            case "md": return "5em";
            case "lg": return "8em";
            case "xl": return "10em";
            default: return "1em";
        }
    }
}

export default DynamicCharacter;