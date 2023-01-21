import React, { Ref, useImperativeHandle, useRef } from "react"
import DynamicDisplay, { DynamicDisplayHandle } from "./DynamicDisplay"
import styles from "../../../styles/sass/components/ui/display/QuestionDisplay.module.scss"

export interface QuestionDisplayProps {
    question: string
    blur?: boolean
}

export type QuestionDisplayHandler = {
    notifyIncorrect: () => void
}

const QuestionDisplay = React.forwardRef((props: QuestionDisplayProps, ref: Ref<QuestionDisplayHandler>) => {
    const display = useRef<DynamicDisplayHandle>(null)

    useImperativeHandle(ref, () => ({
        notifyIncorrect() {
            display.current?.notify()
        }
    }))

    return (
        <DynamicDisplay
            ref={display}
            value={props.question}
            style={{ container: [styles.display], character: { className: props.blur ? styles.blur : styles.value } }}
            className={styles.question}
        />
    )
})

export default QuestionDisplay
