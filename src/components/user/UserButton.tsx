import React, { ReactChildren } from "react";
import { Dropdown, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faDoorOpen, faUser, faUserCircle, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { useUserDispatch, useUserSelector } from "../../hooks";
import { clearUser } from "../../slices/UserSlice";
import styles from "../../styles/sass/components/user/UserButton.module.scss";
import menuStyles from "../../styles/sass/components/layout/ControlsMenu.module.scss";

export interface UserButtonProps {
    onClick: () => void;
    disabled: boolean;
}

const UserButton = React.forwardRef((props: UserButtonProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const userDispatch = useUserDispatch();
    const userSelector = useUserSelector(state => state.user);
    const user = userSelector.user;
    console.log(user)
    const userNickname = user?.nickname;
    const username = user?.username;

    const handleClick = (e: React.MouseEvent, parentEvent: any) => {
        if (user) {
            parentEvent(e);
            e.preventDefault();
        } else {
            props.onClick();
            e.stopPropagation();
        }
        return false;
    }

    const disabled = props.disabled;

    const CustomToggle = React.forwardRef((props: { children: ReactChildren, onClick: React.MouseEvent }, ref: React.Ref<HTMLAnchorElement>) => (
        <Nav.Link ref={ref} onClick={(e: React.MouseEvent) => handleClick(e, props.onClick)} className={menuStyles.navLink}>
            {props.children}
        </Nav.Link>
    ));

    return (
        <Dropdown ref={ref}>
            <Dropdown.Toggle as={CustomToggle} className={disabled ? styles.disabled : styles.toggle}>
                <div>
                    <FontAwesomeIcon icon={user ? faUserTie : faUser} className={menuStyles.icon}/>
                </div>
                <span className={menuStyles.linkText}>
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
    );
});

export default UserButton;
