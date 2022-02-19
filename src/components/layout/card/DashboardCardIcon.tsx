import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import styles from "../../../styles/sass/components/layout/card/DashboardCardIcon.module.scss";

export interface DashboardCardIconProps extends FontAwesomeIconProps {
    href?: string;
    title?: string;
    className?: string;
    onClick?: () => void;
}

const DashboardCardIcon = (props: DashboardCardIconProps) => {
    const { title, href, className, onClick } = props;

    return (
        <FontAwesomeIcon
            {...props}
            title={title}
            onClick={onClick}
            className={[styles.icon, className].join(" ")}
        />
    );
}
export default DashboardCardIcon;
