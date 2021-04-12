import { Component } from "react";

export interface DynamicCharacterProps {
    value: string;
    classes?: string[] | string;
    style?: CharacterStyleProps;
    isDiagraphLeft?: boolean;
    isDiagraphRight?: boolean;
}

export interface CharacterStyleProps {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: string;
    className?: string;
}

export class DynamicCharacter extends Component<DynamicCharacterProps> {
    render() {
        const { value, style, isDiagraphLeft, isDiagraphRight } = this.props;

        return (
            <p
                style={{
                    fontSize: this.getSize(),
                    marginLeft: isDiagraphRight ? -this.getMargin() : 0,
                    marginRight: isDiagraphLeft ? -this.getMargin() : 0,
                    color: style?.color
                }}
                className={this.getClasses()}
            >
                {value}
            </p>
        );
    }

    private getClasses = (): string | undefined => {
        const { classes } = this.props;
        return typeof classes === "string" ? classes : classes?.join(" ") ?? undefined;
    }

    private getSize = (): string | undefined => {
        switch (this.props.style?.size) {
            case "xs":
                return "2.5em";
            case "sm":
                return "3em";
            case "md":
                return "5em";
            case "lg":
                return "8em";
            case "xl":
                return "10em";
            default:
                return undefined;
        }
    }

    private getMargin = (): number => {
        switch (this.props.style?.size) {
            case "xs":
                return 3;
            case "sm":
                return 4;
            case "md":
                return 5;
            case "lg":
                return 8;
            case "xl":
                return 10;
            default:
                return 10;
        }
    }
}

export default DynamicCharacter;