import React, { Component } from "react";
import { KanaDisplayStyle } from "./KanaDisplay";
import DynamicDisplay from "./DynamicDisplay";
import styles from "../../../styles/sass/components/ui/display/AnswerChoiceDisplay.module.scss";

export interface AnswerChoiceDisplayProps {
    value: string;
    blur?: boolean;
    index?: number;
    style?: KanaDisplayStyle;
    onClick?: (value: string) => void;
    onMouseDown?: (value: string) => void;
    onMouseUp?: (value: string) => void;
    onMouseOver?: (value: string) => void;
    onMouseOut?: (value: string) => void;
}

interface AnswerChoiceDisplayState {
    isNotifyingIncorrect: boolean;
}

class AnswerChoiceDisplay extends Component<AnswerChoiceDisplayProps, AnswerChoiceDisplayState> {

    constructor(props: Readonly<AnswerChoiceDisplayProps> | AnswerChoiceDisplayProps) {
        super(props);
        this.state = {
            isNotifyingIncorrect: false
        }
    }

    componentDidUpdate(prevProps: Readonly<AnswerChoiceDisplayProps>, prevState: Readonly<AnswerChoiceDisplayState>) {
        if (prevState.isNotifyingIncorrect) {
            this.setState({ isNotifyingIncorrect: false });
        }
    }

    render() {
        const { value, blur, index, style, onClick, onMouseUp, onMouseDown, onMouseOver, onMouseOut } = this.props;
        const { isNotifyingIncorrect } = this.state;

        const containerClass = style?.container ? style.container : [styles.wrapper];
        const valueClass = isNotifyingIncorrect ? styles.red : blur ? styles.blur : styles.value;
        const clickable = onClick ? styles.clickable : "";

        const indexVisibility = index && !blur ? 'visible' : 'hidden';

        return (
            <div
                onClick={() => onClick?.(value)}
                onMouseUp={() => onMouseUp?.(value) }
                onMouseDown={() => onMouseDown?.(value)}
                onMouseOver={() => onMouseOver?.(value)}
                onMouseOut={() => onMouseOut?.(value)}
                className={containerClass.join(" ")}
            >
                <span className={styles.index} style={{ color: "#76bfcb", visibility: indexVisibility }}>
                    {index}
                </span>

                <DynamicDisplay
                    value={value}
                    style={style}
                    className={[valueClass, clickable].join(" ")}
                />
            </div>
        );
    }

    notifyIncorrect = () => {
        this.setState({ isNotifyingIncorrect: true });
    }

}

export default AnswerChoiceDisplay;
