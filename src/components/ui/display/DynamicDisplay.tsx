import { Textfit } from 'react-textfit';
import LoadingSpinner from "../LoadingSpinner";
import { useState } from "react";
import styles from "../../../styles/sass/components/ui/display/DynamicDisplay.module.scss";
import { KanaDisplayStyle } from "./KanaDisplay";

const DynamicDisplay = (props: { value: string, className?: string, style?: KanaDisplayStyle }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className={styles.wrapper}>
            <LoadingSpinner active={loading}/>

            <Textfit
                mode="single"
                min={20}
                max={600}
                forceSingleModeWidth={false}
                onReady={() => setLoading(false)}
                className={props.style?.container?.join(" ")}
            >
                <span style={props.style?.character} className={[props.className, styles.value].join(" ")}>
                    {props.value}
                </span>
            </Textfit>
        </div>
    );
}

export default DynamicDisplay;