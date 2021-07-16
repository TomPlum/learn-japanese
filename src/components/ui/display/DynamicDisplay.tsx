import { Textfit } from 'react-textfit';
import LoadingSpinner from "../LoadingSpinner";
import { useState } from "react";
import styles from "../../../styles/sass/components/ui/display/DynamicDisplay.module.scss";

const DynamicDisplay = (props: { value: string, className?: string, style?: {} }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className={styles.wrapper}>
            <LoadingSpinner active={loading}/>

            <Textfit mode="single" forceSingleModeWidth={false} onReady={() => setLoading(false)}>
                <span style={props.style} className={[props.className, styles.value].join(" ")}>
                    {props.value}
                </span>
            </Textfit>
        </div>
    );
}

export default DynamicDisplay;