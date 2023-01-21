import React, { Component } from "react"
import { KanaDisplayStyle } from "./KanaDisplay"
import DynamicDisplay from "./DynamicDisplay"
import styles from "../../../styles/sass/components/ui/display/AnswerChoiceDisplay.module.scss"

export interface AnswerChoiceDisplayProps {
    value: string
    blur?: boolean
    index?: number
    style?: KanaDisplayStyle
    onClick?: (value: string) => void
    onMouseDown?: (value: string) => void
    onMouseUp?: (value: string) => void
    onMouseOver?: (value: string) => void
    onMouseOut?: (value: string) => void
    onTouchStart?: (value: string) => void
    onTouchEnd?: (value: string) => void
}

class AnswerChoiceDisplay extends Component<AnswerChoiceDisplayProps> {
    private display = React.createRef<any>()

    constructor(props: Readonly<AnswerChoiceDisplayProps> | AnswerChoiceDisplayProps) {
        super(props)
        this.state = {
            isNotifyingIncorrect: false
        }
    }

    render() {
        const {
            value,
            blur,
            index,
            style,
            onClick,
            onMouseUp,
            onMouseDown,
            onMouseOver,
            onMouseOut,
            onTouchStart,
            onTouchEnd
        } = this.props

        const containerClass = style?.container ? style.container : [styles.wrapper]
        const valueClass = blur ? styles.blur : styles.value
        const clickable = onClick ? styles.clickable : ""

        const indexVisibility = index && !blur ? "visible" : "hidden"

        return (
            <div
                onClick={() => onClick?.(value)}
                onMouseUp={() => onMouseUp?.(value)}
                onMouseDown={() => onMouseDown?.(value)}
                onMouseOver={() => onMouseOver?.(value)}
                onMouseOut={() => onMouseOut?.(value)}
                onTouchStart={() => onTouchStart?.(value)}
                onTouchEnd={() => onTouchEnd?.(value)}
                className={containerClass.join(" ")}
            >
                <span className={styles.index} style={{ color: "#76bfcb", visibility: indexVisibility }}>
                    {index}
                </span>

                <DynamicDisplay
                    value={value}
                    style={style}
                    ref={this.display}
                    className={[valueClass, clickable].join(" ")}
                />
            </div>
        )
    }

    notifyIncorrect = () => {
        this.display?.current?.notify()
    }
}

export default AnswerChoiceDisplay
