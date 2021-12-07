import styles from "../../../styles/sass/components/layout/ControlsMenu.module.scss";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import NavigationButton from "../NavigationButton";
import menuStyles from "../../../styles/sass/components/layout/ControlsMenu.module.scss";

export interface HomeButtonProps {
    className?: string;
    disabled?: boolean;
}

const HomeButton = (props: HomeButtonProps) => {

    return (
        <NavigationButton
            text="Home"
            icon={faHome}
            disableDropdown
            href="/menu/learn"
            textPlacement="right"
            disabled={props.disabled}
            className={styles.navLink}
            iconClass={menuStyles.icon}
            textClass={menuStyles.linkText}
        />
    );
}

export default HomeButton;
