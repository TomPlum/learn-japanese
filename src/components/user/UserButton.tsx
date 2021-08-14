import { Dropdown, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faDoorOpen, faUser, faUserCircle, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { useUserDispatch, useUserSelector } from "../../hooks";
import React from "react";
import parentStyles from "../../styles/sass/components/layout/ControlsMenu.module.scss";
import styles from "../../styles/sass/components/user/UserButton.module.scss";
import { clearUser } from "../../slices/UserSlice";

export interface UserButtonProps {
    onClick: () => void;
    disabled: boolean;
}

const UserButton = React.forwardRef((props: UserButtonProps, ref: React.ForwardedRef<HTMLAnchorElement>) => {
    const userDispatch = useUserDispatch();
    const userSelector = useUserSelector(state => state.user);
    const user = userSelector.user;
    const userNickname = user?.nickname;
    const username = user?.username;

    const handleClick = (e: React.MouseEvent) => {
        if (!user) {
            props.onClick();
            e.preventDefault();
            e.stopPropagation();
        }
        return false;
    }

    const disabled = props.disabled;

    return (
        <Nav.Link className={parentStyles.navLink} onClick={handleClick} disabled={disabled} ref={ref}>
            <Dropdown>
                <Dropdown.Toggle className={disabled ? styles.disabled : styles.toggle} bsPrefix="toggle">
                    <div>
                        <FontAwesomeIcon icon={user ? faUserTie : faUser} className={parentStyles.icon}/>
                    </div>
                    <span className={parentStyles.linkText}>
                       {user ? userNickname ? user.nickname : username : 'Login'}
                    </span>
                </Dropdown.Toggle>

                {user && (
                    <Dropdown.Menu className={styles.dropdown}>
                        <Dropdown.Item>
                            <FontAwesomeIcon icon={faUserCircle} fixedWidth/>
                            {' Profile'}
                        </Dropdown.Item>

                        <Dropdown.Item>
                            <FontAwesomeIcon icon={faChartBar} fixedWidth/>
                            {' Stats'}
                        </Dropdown.Item>

                        <Dropdown.Item onClick={() => userDispatch(clearUser())}>
                            <FontAwesomeIcon icon={faDoorOpen} fixedWidth/>
                            {' Logout'}
                        </Dropdown.Item>
                    </Dropdown.Menu>
                )}
            </Dropdown>
        </Nav.Link>
    );
});

export default UserButton;
