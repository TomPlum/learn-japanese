import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import styles from "../../../styles/sass/components/layout/card/DashboardCardIcon.module.scss";

export interface DashboardCardIconProps extends FontAwesomeIconProps {
    href?: string;
    title?: string;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

const DashboardCardIcon = (props: DashboardCardIconProps) => {
    const { title, href, disabled, className, onClick } = props;

    const classes = [styles.icon, className];

    if (disabled) {
        classes.push(styles.disabled);
    }

    const handleClick = () => {
        if (!disabled) {
            onClick?.();
        }
    }

    return (
        <FontAwesomeIcon
            {...props}
            href={href}
            title={title}
            onClick={handleClick}
            className={classes.join(" ")}
            data-testid="dashboard-card-icon"
        />
    );
}
export default DashboardCardIcon;
