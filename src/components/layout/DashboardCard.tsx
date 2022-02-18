import { PropsWithChildren, useState } from "react";
import styles from "../../styles/sass/components/layout/DashboardCard.module.scss";
import { Fade } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

export interface DashboardCardProps {
    id?: string;
    size?: "sm" | "md" | "lg";
    title?: string;
    loading?: boolean;
    error?: string;
    className?: string;
    onReload?: () => void;
}

const DashboardCard = (props: PropsWithChildren<DashboardCardProps>) => {

    const { id, title, error, size, loading, onReload, children, className } = props;

    const getSize = (): string | undefined => {
        switch (size) {
            case "sm": return "300px";
            case "md": return "400px";
            case "lg": return "550px";
            default: return undefined;
        }
    }

    const containerClasses = [styles.container, className];
    if (error) containerClasses.push(styles.containerError)

    return (
        <div className={containerClasses.join(" ")} style={{ height: getSize() }} id={id} data-testid={id}>
            {title && (
                <div className={styles.header}>
                    <span className={styles.title}>{title}</span>
                    {error && (
                        <FontAwesomeIcon
                            title="Retry"
                            icon={faSyncAlt}
                            onClick={onReload}
                            className={styles.reload}
                        />
                    )}
                </div>
            )}
            {loading && (
                <Fade in={loading} appear data-testid="dashboard-card-loader">
                    <div className={styles.loading}>
                        <div className={styles.shimmer}>
                            <div className={styles["_2iwr"]}/>
                            <div className={styles["_2iws"]}/>
                            <div className={styles["_2iwt"]}/>
                            <div className={styles["_2iwu"]}/>
                            <div className={styles["_2iwv"]}/>
                            <div className={styles["_2iww"]}/>
                            <div className={styles["_2iwx"]}/>
                            <div className={styles["_2iwy"]}/>
                            <div className={styles["_2iwz"]}/>
                            <div className={styles["_2iw-"]}/>
                            <div className={styles["_2iw_"]}/>
                            <div className={styles["_2ix0"]}/>
                        </div>
                    </div>
                </Fade>
            )}

            {!loading && !error && (
                <div className={styles.content}>
                    {children}
                </div>
            )}

            {!loading && error && (
                <div className={styles.errorContainer}>
                    <span className={styles.error}>{error}</span>
                </div>
            )}
        </div>
    );
}

export default DashboardCard;
