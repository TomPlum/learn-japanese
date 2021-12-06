import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Overlay, Popover } from "react-bootstrap";
import React, { useRef, useState } from "react";
import styles from "../../../styles/sass/components/ui/buttons/NotificationsButton.module.scss";
import menuStyles from "../../../styles/sass/components/layout/ControlsMenu.module.scss";

export interface NotificationsButtonProps {
    className?: string;
}

const NotificationsButton = (props: NotificationsButtonProps) => {

    const { className } = props;

    const ref = useRef(null);
    const targetRef = useRef(null);
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(true);
    }

    return (
        <div ref={ref} className={className}>
            <Nav.Link className={className} onClick={handleClick}>
                <div ref={targetRef}>
                    <FontAwesomeIcon fixedWidth icon={faBell} className={menuStyles.icon} />
                </div>
            </Nav.Link>

            <Overlay
                show={show}
                rootClose={true}
                target={targetRef}
                container={ref.current}
                onHide={() => setShow(false)}
                placement="bottom"
            >
                <Popover id="notifications-menu" className={styles.popover}>
                    <Popover.Content className={styles.content}>
                        <p>Test</p>
                    </Popover.Content>
                </Popover>
            </Overlay>
        </div>
    );
}

export default NotificationsButton;
