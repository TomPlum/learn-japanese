import styles from "../../../styles/sass/components/ui/display/GenkiStructureDisplay.module.scss";
import React, { PropsWithChildren } from "react";

export interface GenkiStructureDisplayProps {
    book: number;
    width?: number | "auto";
}

const GenkiStructureDisplay = (props: PropsWithChildren<GenkiStructureDisplayProps>) => {

    const { book, width, children } = props;

    const wrapperClass = [book == 1 ? styles.genkiOne : styles.genkiTwo, styles.wrapper].join(" ");
    const style = width == "auto" ? { display: "inline-block" } : { width: `${width}px`};

    return (
        <div className={wrapperClass} style={style}>
            {children}
        </div>
    );
}

export default GenkiStructureDisplay;
