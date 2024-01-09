import LoadingSpinner from "../../loading/LoadingSpinner"
import React, { Ref, useImperativeHandle, useState } from "react"
import { KanaDisplayStyle } from "./../KanaDisplay"
import { Textfit } from "@tomplum/react-textfit"
import styles  from "./DynamicDisplay.module.scss"
import { useFontContext } from "context/FontContext";

export interface DynamicDisplayProps {
  value: string
  className?: string
  style?: KanaDisplayStyle
}

export type DynamicDisplayHandle = {
  notify: () => void
}

const DynamicDisplay = React.forwardRef(({ value, style, className }: DynamicDisplayProps, ref: Ref<DynamicDisplayHandle>) => {
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState(false)
  const { font: selectedFont } = useFontContext()

  useImperativeHandle(ref, () => ({
    notify: () => setActive(true)
  }))

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
          className={[className, styles.value, style?.character?.className, active ? styles.active : ""].join(
            " "
          )}
        >
          {value}
        </span>
      </Textfit>
    </div>
  )
})

DynamicDisplay.displayName = "DynamicDisplay"

export default DynamicDisplay
