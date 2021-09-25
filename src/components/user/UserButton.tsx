import React from "react";
import { faChartBar, faDoorOpen, faUser, faUserCircle, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { useUserDispatch, useUserSelector } from "../../hooks";
import { clearUser } from "../../slices/UserSlice";
import menuStyles from "../../styles/sass/components/layout/ControlsMenu.module.scss";
import styles from "../../styles/sass/components/user/UserButton.module.scss";
import NavigationButton from "../ui/NavigationButton";

export interface UserButtonProps {
    onClick: () => void;
    disabled: boolean;
}

const UserButton = (props: UserButtonProps) => {
    const userDispatch = useUserDispatch();
    const user = useUserSelector(state => state.user.user);

    const getButtonText = (): string => {
        if (user) {
            if (user.nickname) {
                return user.nickname;
            } else {
                return user.username;
            }
        } else {
            return "Login";
        }
    }

    return (
        <NavigationButton
            text={getButtonText()}
            onClick={props.onClick}
            disableDropdown={!user}
            disabled={props.disabled}
            iconClass={menuStyles.icon}
            textClass={menuStyles.linkText}
            icon={user ? faUserTie : faUser}
        >
            <NavigationButton.Item icon={faUserCircle} iconClass={styles.profile} href="/profile">
                Profile
            </NavigationButton.Item>

            <NavigationButton.Item icon={faChartBar} iconClass={styles.stats}>
                Stats
            </NavigationButton.Item>

            <NavigationButton.Item icon={faDoorOpen} onClick={() => userDispatch(clearUser())} iconClass={styles.logout}>
                Logout
            </NavigationButton.Item>
        </NavigationButton>
    );
}

export default UserButton;
