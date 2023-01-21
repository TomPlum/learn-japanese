import LoadingSpinner from "../loading/LoadingSpinner"
import React, { Ref, useImperativeHandle, useState } from "react"
import { KanaDisplayStyle } from "./KanaDisplay"
import { Textfit } from "@tomplum/react-textfit"
import styles from "../../../styles/sass/components/ui/display/DynamicDisplay.module.scss"
import { useFontSelector } from "../../../hooks"

export interface DynamicDisplayProps {
    value: string
    className?: string
    style?: KanaDisplayStyle
}

export type DynamicDisplayHandle = {
    notify: () => void
}

const DynamicDisplay = React.forwardRef((props: DynamicDisplayProps, ref: Ref<DynamicDisplayHandle>) => {
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)
    const selectedFont = useFontSelector((state) => state.font.selected)

    useImperativeHandle(ref, () => ({
        notify: () => setActive(true)
    }))

    const style = props.style

    return (
        <div className={styles.wrapper}>
            <LoadingSpinner active={loading} />

            <Textfit
                min={20}
                max={600}
                mode="single"
                forceSingleModeWidth={false}
                onReady={() => setLoading(false)}
                className={[styles.text].concat(style?.container ?? []).join(" ")}
            >
                <span
                    onAnimationEnd={() => setActive(false)}
                    style={{ color: style?.character?.color, fontFamily: selectedFont }}
                    className={[
                        props.className,
                        styles.value,
                        style?.character?.className,
                        active ? styles.active : ""
                    ].join(" ")}
                >
                    {props.value}
                </span>
            </Textfit>
        </div>
    )
})

export default DynamicDisplay
