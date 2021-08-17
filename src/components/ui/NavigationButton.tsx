import { Nav, Overlay, Popover } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React, { PropsWithChildren, useRef, useState } from "react";
import styles from "../../styles/sass/components/ui/NavigationButton.module.scss";

export interface NavigationButtonProps {
    text: string;
    icon: IconDefinition;
    className?: string;
    menuClass?: string;
    iconClass?: string;
    textClass?: string;
    disabled?: boolean;
    stickyMenu?: boolean;
    onClick?: () => void;
}

const Item = (props: PropsWithChildren<{ icon?: IconDefinition, onClick?: (value: string) => void, className?: string }>) => {

    const handleClick = () => {
        props.onClick?.(props.children as string)
    }

    return (
        <>
            {props.icon && <FontAwesomeIcon icon={props.icon} fixedWidth />}
            <a onClick={handleClick} className={[props.className, styles.item].join(" ")}>
                {props.children}
            </a>
        </>
    );
};

const NavigationButton = (props: PropsWithChildren<NavigationButtonProps>) => {
    const [show, setShow] = useState(false);
    const ref = useRef(null);
    const targetRef = useRef(null);

    const handleClick = () => {
        setShow(!show);
    };

    const handleHide = () => {
        setShow(false);
    };

    const className = [props.className, styles.link].join(" ");

    return (
        <div ref={ref} className={styles.container}>
            <Nav.Link className={className} onClick={handleClick} disabled={props.disabled}>
                <div>
                    <FontAwesomeIcon icon={props.icon} className={props.iconClass} />
                </div>

                <span ref={targetRef} className={props.textClass}>
                    {props.text}
                </span>
            </Nav.Link>

            <Overlay show={show} target={targetRef} placement="bottom" container={ref.current} rootClose={props.stickyMenu} onHide={handleHide}>
                <Popover id={props.text + "-button"} className={styles.popover}>
                    <Popover.Content className={styles.content}>
                        {props.children}
                    </Popover.Content>
                </Popover>
            </Overlay>
        </div>

    );
}

NavigationButton.Item = Item;
export default NavigationButton;
