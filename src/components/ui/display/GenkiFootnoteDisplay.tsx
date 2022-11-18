import styles from "../../../styles/sass/components/ui/display/GenkiFootnoteDisplay.module.scss";
import {PropsWithChildren} from "react";

export interface GenkiFootnoteDisplayProps {
    reference: number;
    book: number;
    className?: string;
}

const GenkiFootnoteDisplay = (props: PropsWithChildren<GenkiFootnoteDisplayProps>) => {

    const { children, reference, book, className } = props;

    const refClass = book === 1 ? styles.refBookOne : styles.refBookTwo;

    return (
        <div className={[styles.container, className].join(" ")}>
            <span className={refClass}>{reference}</span>
            <i className={styles.text}>{children}</i>
        </div>
    );
}

export default GenkiFootnoteDisplay;