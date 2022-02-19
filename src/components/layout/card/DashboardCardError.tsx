import styles from "../../../styles/sass/components/layout/card/DashboardCardError.module.scss";
import React, { PropsWithChildren } from "react";

export interface DashboardCardHeaderProps {
    active?: boolean;
}

const DashboardCardError = (props: PropsWithChildren<DashboardCardHeaderProps>) => {
    const { active, children } = props;

    if (!active) {
        return null;
    }

    return (
        <div className={styles.errorContainer}>
            <span className={styles.error}>
                {children}
            </span>
        </div>
    );
}

export default DashboardCardError;
