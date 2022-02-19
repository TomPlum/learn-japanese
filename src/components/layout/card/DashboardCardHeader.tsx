import styles from "../../../styles/sass/components/layout/card/DashboardCardHeader.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import DashboardCardTitle from "./DashboardCardTitle";
import { PropsWithChildren } from "react";

export interface DashboardCardHeaderProps {
    error?: string;
    onReload?: () => void;
}

const DashboardCardHeader = (props: PropsWithChildren<DashboardCardHeaderProps>) => {

    const { children, error, onReload } = props;

    return (
        <div className={styles.header}>
            {children}

            {error && error != "" && (
                <FontAwesomeIcon
                    title="Retry"
                    icon={faSyncAlt}
                    onClick={onReload}
                    className={styles.reload}
                />
            )}
        </div>
    );
}

export default Object.assign(DashboardCardHeader, {
    Title: DashboardCardTitle
});
