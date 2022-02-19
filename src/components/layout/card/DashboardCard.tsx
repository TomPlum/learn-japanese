import React, { PropsWithChildren } from "react";
import styles from "../../../styles/sass/components/layout/card/DashboardCard.module.scss";
import DashboardCardHeader from "./DashboardCardHeader";
import DashboardCardBody from "./DashboardCardBody";
import DashboardCardPreload from "./DashboardCardPreload";
import DashboardCardUpdate from "./DashboardCardUpdate";
import DashboardCardError from "./DashboardCardError";
import DashboardCardFooter from "./DashboardCardFooter";

export type DashboardCardSize = "sm" | "md" | "lg";

export interface DashboardCardProps {
    id?: string;
    size?: DashboardCardSize;
    loading?: boolean;
    updating?: boolean;
    error?: string;
    className?: string;
    onReload?: () => void;
}

const DashboardCard = (props: PropsWithChildren<DashboardCardProps>) => {

    const { id, error, size, updating, loading, onReload, children, className } = props;

    const getSize = (): string | undefined => {
        switch (size) {
            case "sm": return "300px";
            case "md": return "400px";
            case "lg": return "550px";
            default: return undefined;
        }
    }

    const containerClasses = [styles.container, className];
    if (error) containerClasses.push(styles.containerError);

    return (
        <div className={containerClasses.join(" ")} style={{ height: getSize() }} id={id} data-testid={id}>
            <DashboardCardPreload active={loading} />

            <DashboardCardUpdate active={updating} />

            {!loading && React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    switch ((child as React.ReactElement).type) {
                        case DashboardCardHeader: {
                            return React.cloneElement(child, { error: error, onReload: onReload })
                        }
                        case DashboardCardBody: {
                            return React.cloneElement(child, { size: size });
                        }
                        default: {
                            return child;
                        }
                    }
                }
            })}

            <DashboardCardError active={!loading && !!error}>
                {error}
            </DashboardCardError>
        </div>
    );
}

export default Object.assign(DashboardCard, {
    Header: DashboardCardHeader,
    Body: DashboardCardBody,
    Footer: DashboardCardFooter
});
