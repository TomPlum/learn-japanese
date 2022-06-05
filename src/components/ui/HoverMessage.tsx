import React, { Fragment, PropsWithChildren, ReactElement, useEffect, useRef, useState } from "react";
import styles from "../../styles/sass/components/ui/HoverMessage.module.scss";

export interface HoverMessageProps {
    message: string;
    show?: boolean;
}

const HoverMessage = (props: PropsWithChildren<HoverMessageProps>) => {
    const { show, message, children } = props;

    const element = useRef<HTMLSpanElement>(null);
   // const external = useMousePosition();
    const [internal, setInternal] = useState({ x: element.current?.offsetLeft, y: element.current?.offsetTop });
    const [inside, setInside] = useState(false);

    const handleEnter = () => {
        setInside(true);
    }

    const handleExit = () => {
        setInside(false);
    }

    const handleMove = (e: React.MouseEvent<HTMLSpanElement>) => {
        setInternal({
            x: e.clientX,// - (e.target as HTMLSpanElement).offsetLeft,
            y: e.clientY// - (e.target as HTMLSpanElement).offsetTop
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
        <div className={styles.wrapper}>
            {show && inside && (
                <div className={styles.message} style={{ top: internal.y, left: internal.x }}>
                    {message}
                </div>
            )}
            <span {...surfaceProperties} ref={element}>
                {React.cloneElement(children as ReactElement, { className: styles.child })}
            </span>
        </div>
    );
}

export default HoverMessage;
