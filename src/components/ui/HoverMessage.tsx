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
        console.log(`x: ${e.clientX}, y: ${e.clientY}`);
        setInternal({
            x: e.pageX,// - (e.target as HTMLSpanElement).offsetLeft,
            y: e.pageY// - (e.target as HTMLSpanElement).offsetTop
        });
    }

    const surfaceProperties = {
        className: styles.surface,
        onMouseEnter: handleEnter,
        onMouseOut: handleExit,
        onMouseMove: handleMove,
        "data-testid": "hover-message"
    }

    return (
        <Fragment>
            {show && inside && (
                <div className={styles.message} style={{ top: external.y, left: external.x }}>
                    {message}
                </div>
            )}
            <span {...surfaceProperties}>
                {children}
            </span>
        </Fragment>
    );
}

export default HoverMessage;
