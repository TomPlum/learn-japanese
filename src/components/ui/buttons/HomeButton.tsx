import menuStyles from "../../../styles/sass/components/layout/NavigationBar.module.scss";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import NavigationButton from "../NavigationButton";
import { useTranslation } from "react-i18next";

export interface HomeButtonProps {
    className?: string;
    disabled?: boolean;
}

const HomeButton = (props: HomeButtonProps) => {

    const { t } = useTranslation();

    return (
        <NavigationButton
            icon={faHome}
            disableDropdown
            id="home-button"
            href="/home"
            textPlacement="right"
            disabled={props.disabled}
            iconClass={menuStyles.icon}
            textClass={menuStyles.linkText}
            text={t("navigation.button.home")}
        />
    );
}

export default HomeButton;
