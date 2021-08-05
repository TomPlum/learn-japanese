import LoadingSpinner from "../LoadingSpinner";
import React, { useImperativeHandle, useState } from "react";
import { KanaDisplayStyle } from "./KanaDisplay";
import { Textfit } from "@tomplum/react-textfit";
import styles from "../../../styles/sass/components/ui/display/DynamicDisplay.module.scss";

const DynamicDisplay = React.forwardRef((props: { value: string, className?: string, style?: KanaDisplayStyle }, ref) => {
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);

    useImperativeHandle(ref, () => ({
        notify: () => setActive(true)
    }));

    const style = props.style;

    return (
        <div className={styles.wrapper}>
            <LoadingSpinner active={loading}/>

            <Textfit
                mode="single"
                min={20}
                max={600}
                forceSingleModeWidth={false}
                onReady={() => setLoading(false)}
                className={[styles.text].concat(style?.container ?? []).join(" ")}
            >
                <span
                    style={style?.character}
                    onAnimationEnd={() => setActive(false)}
                    className={[props.className, styles.value, style?.character?.className, active ? styles.active : ""].join(" ")}
                >
                    {props.value}
                </span>
            </Textfit>
        </div>
    );
});

export default DynamicDisplay;
