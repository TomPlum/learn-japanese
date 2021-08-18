import { Nav, Overlay, Popover } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React, { PropsWithChildren, useRef, useState } from "react";
import styles from "../../styles/sass/components/ui/NavigationButton.module.scss";
import HashLink from "../layout/HashLink";

export interface NavigationButtonProps {
    text: string;
    icon: IconDefinition;
    width?: number;
    className?: string;
    menuClass?: string;
    iconClass?: string;
    textClass?: string;
    disabled?: boolean;
    disableDropdown?: boolean;
    onClick?: () => void;
}

export interface ItemProps {
    icon?: IconDefinition;
    iconClass?: string;
    className?: string;
    href?: string;
    style?: {};
    onClick?: (value: string) => void;
}

const Item = (props: PropsWithChildren<ItemProps>) => {

    const handleClick = () => {
        props.onClick?.(props.children as string)
    }

    const className = [props.className, styles.item].join(" ");
    const key = props.children?.toString();

    return (
        <div className={styles.itemWrapper} key={`${key}-wrapper`}>
            {props.icon && (
                <FontAwesomeIcon
                    fixedWidth
                    icon={props.icon}
                    key={`${key}-icon`}
                    className={[styles.itemIcon, props.iconClass].join(" ")}
                />
            )}

            <HashLink path={props.href} onClick={handleClick} className={className} style={props.style} key={key}>
                {props.children}
            </HashLink>
        </div>
    );
};

const NavigationButton = (props: PropsWithChildren<NavigationButtonProps>) => {
    const [show, setShow] = useState(false);
    const ref = useRef(null);
    const targetRef = useRef(null);

    const handleClick = () => {
        if (!props.disableDropdown) {
            setShow(!show);
        } else {
            props.onClick?.();
        }
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

            <Overlay show={show} target={targetRef} placement="bottom" container={ref.current} rootClose={true} onHide={handleHide}>
                <Popover id={props.text + "-button"} className={styles.popover} style={{ width: props.width }}>
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
