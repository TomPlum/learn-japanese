import styles from "../../../styles/sass/components/ui/display/GenkiStructureDisplay.module.scss";
import React, { PropsWithChildren } from "react";

export interface GenkiStructureDisplayProps {
    book: number;
    width?: number | "auto";
    className?: string;
    noPadding?: boolean;
    style?: React.CSSProperties;
}

const GenkiStructureDisplay = (props: PropsWithChildren<GenkiStructureDisplayProps>) => {

    const { book, width, children, className, style, noPadding } = props;

    const wrapperClass = [book == 1 ? styles.genkiOne : styles.genkiTwo, styles.wrapper, className].join(" ");
    const wrapperStyle: React.CSSProperties = width == "auto" ? { display: "inline-block" } : { maxWidth: `${width}px`};

    if (noPadding) {
        wrapperStyle.padding = 0;
    }

    return (
        <div className={wrapperClass} style={{ ...wrapperStyle, ...style }}>
            {children}
        </div>
    );
}

export default GenkiStructureDisplay;
