import styles from "../../../styles/sass/components/ui/display/QuoteDisplay.module.scss";
import { PropsWithChildren } from "react";

export interface QuoteDisplayProps {
    chapter: number;
}

const QuoteDisplay = (props: PropsWithChildren<QuoteDisplayProps>) => {

    const { chapter, children } = props;

    const wrapperClass = [chapter <= 12 ? styles.genkiOne : styles.genkiTwo, styles.wrapper].join(" ");

    return (
        <span className={wrapperClass}>
            <span className={styles.quote}>"</span>
            <span className={styles.value}>{children}</span>
            <span className={styles.quote}>"</span>
        </span>
    );
}

export default QuoteDisplay;
