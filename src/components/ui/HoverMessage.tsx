import React, { Fragment, PropsWithChildren, ReactElement, useEffect, useRef, useState } from "react";
import styles from "../../styles/sass/components/ui/HoverMessage.module.scss";
import { useMousePosition } from "../../hooks";

export interface HoverMessageProps {
    message: string;
    show?: boolean;
}

const HoverMessage = (props: PropsWithChildren<HoverMessageProps>) => {
    const { show, message, children } = props;

    const external = useMousePosition();
    const [internal, setInternal] = useState({ x: 0, y: 0 });
    const [inside, setInside] = useState(false);

    const handleEnter = () => {
        setInside(true);
    }

    const handleExit = () => {
        setInside(false);
    }

    const handleMove = (e: React.MouseEvent<HTMLSpanElement>) => {
        setInternal({
            x: e.clientX - (e.target as HTMLSpanElement).offsetLeft,
            y: e.clientY - (e.target as HTMLSpanElement).offsetTop
        });
    }

    return (
        <Fragment>
            {show && inside && <div className={styles.message} style={{ top: internal.y, left: internal.x }}>{message}</div>}
            <span className={styles.surface} onMouseEnter={handleEnter} onMouseOut={handleExit} onMouseMove={handleMove}>
                {children}
            </span>
        </Fragment>
    );
}

export default HoverMessage;
