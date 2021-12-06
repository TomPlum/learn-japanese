import { Col, Form, Nav, Overlay, Popover, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React, { PropsWithChildren, ReactElement, ReactNode, useRef, useState } from "react";
import HashLink from "../layout/HashLink";
import ScrollableContainer from "./ScrollableContainer";
import ConditionalWrapper from "./ConditionalWrapper";
import styles from "../../styles/sass/components/ui/NavigationButton.module.scss";

export interface NavigationButtonProps {
    id?: string;
    text?: string;
    icon: IconDefinition;
    width?: number;
    textPlacement?: 'bottom' | 'left';
    className?: string;
    menuClass?: string;
    iconClass?: string;
    textClass?: string;
    disabled?: boolean;
    disableDropdown?: boolean;
    searchable?: boolean;
    showItemQuantity?: number;
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

    const { icon, iconClass, className, href, style, onClick, children } = props;

    const handleClick = () => {
        onClick?.(children as string)
    }

    const linkClassName = [className, styles.item].join(" ");
    const key = children?.toString();

    return (
        <div className={styles.itemWrapper} key={`${key}-wrapper`}>
            {icon && (
                <FontAwesomeIcon
                    fixedWidth
                    icon={icon}
                    key={`${key}-icon`}
                    className={[styles.itemIcon, iconClass].join(" ")}
                />
            )}

            <HashLink path={href} onClick={handleClick} className={linkClassName} style={style} key={key}>
                {children}
            </HashLink>
        </div>
    );
};

const NavigationButton = (props: PropsWithChildren<NavigationButtonProps>) => {

    const { text, icon, width, textPlacement, className, iconClass, textClass, disabled, disableDropdown, id,
        searchable, showItemQuantity, onClick, children } = props;

    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");
    const [expandSearch, setExpandSearch] = useState(false);
    const ref = useRef(null);
    const targetRef = useRef(null);

    const handleClick = () => {
        if (!disableDropdown) {
            setShow(!show);
        } else {
            onClick?.();
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

    const linkClassName = [className, styles.link].join(" ");
    const isLeft = textPlacement && textPlacement === "left";
    const iconPositionClass = isLeft ? styles.placementCol : undefined;

    return (
        <div ref={ref} className={styles.container}>
            <Nav.Link className={linkClassName} onClick={handleClick} disabled={disabled} data-testid="nav-btn-link">
               <Row>
                   {isLeft && (
                       <Col xs={6} className={iconPositionClass}>
                           <span className={[textClass, show ? styles.active : "", styles.text, styles.left].join(" ")}>
                               {text}
                           </span>
                       </Col>
                   )}

                   <Col xs={isLeft ? 6 : 12} className={iconPositionClass}>
                       <div ref={!text || isLeft ? targetRef : undefined}>
                           <FontAwesomeIcon
                               fixedWidth
                               icon={icon}
                               data-testid={id}
                               className={[iconClass, show ? styles.active : "", styles.icon].join(" ")}
                           />
                       </div>
                   </Col>

                   {textPlacement === "bottom" && (
                       <Col xs={12}>
                           <span ref={targetRef} className={[textClass, show ? styles.active : "", styles.text].join(" ")}>
                               {text}
                           </span>
                       </Col>
                   )}
               </Row>
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
                <Popover id={text + "-button"} className={styles.popover} style={{ width: width }}>
                    {searchable && <Form.Control
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
                            condition={!!showItemQuantity}
                            wrapper={(children) => (
                                <ScrollableContainer height={showItemQuantity! * 55} hideScrollBar>
                                    {children}
                                </ScrollableContainer>
                            )}>
                            <>{
                                React.Children.map(children, (child) => child)?.filter((child: ReactNode) => {
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
