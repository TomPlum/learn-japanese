import React, { useImperativeHandle, useRef } from "react";
import DynamicDisplay from "./DynamicDisplay";
import styles from "../../../styles/sass/components/ui/display/QuestionDisplay.module.scss";

export interface QuestionDisplayProps {
    question: string;
    blur?: boolean;
}

const QuestionDisplay = React.forwardRef((props: { question: string, blur?: boolean }, ref) => {

    //TODO: typeof DynamicDisplay doesn't work for some reason
    const display = useRef<any>();

    useImperativeHandle(ref, () => ({
        notifyIncorrect: () => display.current?.notify()
    }));

    return (
       <DynamicDisplay
           ref={display}
           value={props.question}
           style={{ container: [styles.display], character: { className: props.blur ? styles.blur : styles.value } }}
           className={styles.question}
       />
    );
});

export default QuestionDisplay;
