import { Form, Nav, Overlay, Popover } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React, { PropsWithChildren, ReactElement, ReactNode, useRef, useState } from "react";
import HashLink from "../layout/HashLink";
import ScrollableContainer from "./ScrollableContainer";
import ConditionalWrapper from "./ConditionalWrapper";
import styles from "../../styles/sass/components/ui/NavigationButton.module.scss";

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
    searchable?: boolean;
    show?: number;
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
    const [search, setSearch] = useState("");
    const [expandSearch, setExpandSearch] = useState(false);
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

    const handleExited = () => {
        setSearch("")
        setExpandSearch(false);
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const search = e.target.value;
        setSearch(search);
        if (!search) {
            setExpandSearch(false);
        }
    }

    const className = [props.className, styles.link].join(" ");

    return (
        <div ref={ref} className={styles.container}>
            <Nav.Link className={className} onClick={handleClick} disabled={props.disabled}>
                <div>
                    <FontAwesomeIcon
                        fixedWidth
                        icon={props.icon}
                        className={[props.iconClass, show ? styles.active : "", styles.icon].join(" ")}
                    />
                </div>

                <span ref={targetRef} className={[props.textClass, show ? styles.active : "", styles.text].join(" ")}>
                    {props.text}
                </span>
            </Nav.Link>

            <Overlay
                show={show}
                rootClose={true}
                placement="bottom"
                target={targetRef}
                onHide={handleHide}
                onExited={handleExited}
                container={ref.current}
            >
                <Popover id={props.text + "-button"} className={styles.popover} style={{ width: props.width }}>
                    {props.searchable && <Form.Control
                        type="text"
                        value={search}
                        placeholder="Search"
                        onChange={handleSearch}
                        className={styles.search}
                        onFocus={() => setExpandSearch(true)}
                        style={{ height: expandSearch ? 45 : 30 }}
                    />}

                    <Popover.Content className={styles.content}>
                        <ConditionalWrapper
                            condition={!!props.show}
                            wrapper={(children) => (
                                <ScrollableContainer height={props.show! * 55} hideScrollBar>
                                    {children}
                                </ScrollableContainer>
                            )}>
                            <>{
                                React.Children.map(props.children, (child) => child)?.filter((child: ReactNode) => {
                                    const value = (child as ReactElement).props.children.toString();
                                    return search === "" || value.toLowerCase().includes(search.toLowerCase());
                                })
                            }</>
                        </ConditionalWrapper>
                    </Popover.Content>
                </Popover>
            </Overlay>
        </div>

    );
}

NavigationButton.Item = Item;
export default NavigationButton;
