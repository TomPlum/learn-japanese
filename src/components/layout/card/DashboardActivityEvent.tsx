import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsWithChildren } from "react";
import styles from "../../../styles/sass/components/layout/card/DashboardActivityEvent.module.scss";

export interface DashboardActivityEventProps {
    name: string;
    className?: string
    description?: string;
    icon?: IconDefinition;
    onClick?: () => void;
}

const DashboardActivityEvent = (props: PropsWithChildren<DashboardActivityEventProps>) => {

    const { name, description, icon, className, onClick, children } = props;

    return (
        <div className={[className, styles.wrapper].join(" ")}>
            <div className={styles.header}>
                {icon && <FontAwesomeIcon icon={icon} fixedWidth className={styles.icon} />}
                <span>{name}</span>
                {description && <span>{description}</span>}
                <span className={styles.time}>15m ago</span>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default DashboardActivityEvent;
