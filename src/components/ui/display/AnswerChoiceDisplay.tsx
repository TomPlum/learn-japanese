import React, { Component } from "react";
import styles from "../../../styles/sass/components/ui/display/AnswerChoiceDisplay.module.scss";
import { KanaDisplayStyle } from "./KanaDisplay";

export interface AnswerChoiceDisplayProps {
    value: string;
    blur?: boolean;
    index?: number;
    style?: KanaDisplayStyle;
    onClick?: (value: string) => void;
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
        const { value, blur, index, style, onClick } = this.props;
        const { isNotifyingIncorrect } = this.state;

        const containerClass = style?.container ? style.container : styles.wrapper;
        const valueClass = isNotifyingIncorrect ? styles.red : blur ? styles.blur : styles.value;
        const clickable = onClick ? styles.clickable : "";

        const indexVisibility = index && !blur ? 'visible' : 'hidden';

        return (
            <div className={containerClass} onClick={this.handleClick}>
                <span className={styles.index} style={{ color: "#76bfcb", visibility: indexVisibility }}>
                    {index}
                </span>

                <span style={{ color: style?.character?.color }} className={[valueClass, clickable].join(" ")}>
                    {value}
                </span>
            </div>
        );
    }

    notifyIncorrect = () => {
        this.setState({ isNotifyingIncorrect: true });
    }

    private handleClick = () => {
        this.props.onClick?.(this.props.value);
    }
}

export default AnswerChoiceDisplay;