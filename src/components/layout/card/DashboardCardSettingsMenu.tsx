import React, { PropsWithChildren, ReactElement, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Overlay, Popover } from "react-bootstrap";
import styles from "../../../styles/sass/components/layout/card/DashboardCardSettingsMenu.module.scss";

export interface DashboardCardSettingsMenuProps {
    className?: string;
}

const DashboardCardSettingsMenu = (props: PropsWithChildren<DashboardCardSettingsMenuProps>) => {
    const { children, className } = props;

    const ref = useRef(null);
    const targetRef = useRef(null);
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(true);
    }

    return (
        <span ref={ref} className={[className, styles.wrapper].join(" ")} data-testid="dashboard-settings-menu">
            <div ref={targetRef}>
                <FontAwesomeIcon
                    onClick={handleClick}
                    fixedWidth icon={faCog}
                    className={styles.icon}
                    data-testid="dashboard-settings-menu-button"
                />
            </div>

            <Overlay
                show={show}
                rootClose={true}
                target={targetRef}
                placement="bottom-end"
                container={ref.current}
                onHide={() => setShow(false)}
            >
                <Popover id="card-settings-menu" data-testid="card-settings-menu" className={styles.popover}>
                    <Popover.Body className={styles.content}>
                        {React.Children.map(children, link => {
                            return React.cloneElement(link as ReactElement, {
                                className: styles.link,
                                onMouseDown: () => setShow(false)
                            })
                        })}
                    </Popover.Body>
                </Popover>
            </Overlay>
        </span>
    );
}

export default DashboardCardSettingsMenu;
