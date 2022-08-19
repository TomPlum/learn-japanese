import { Fade } from "react-bootstrap";
import { PropsWithChildren } from "react";
import styles from "../../../styles/sass/components/layout/card/DashboardCardBody.module.scss";
import { DashboardCardSize } from "./DashboardCard";

export interface DashboardCardBodyProps {
    className?: string;
    updating?: boolean;
    size?: DashboardCardSize;
}

const DashboardCardBody = (props: PropsWithChildren<DashboardCardBodyProps>) => {
    const { updating, children, size, className } = props;

    const getContentPadding = (): number | undefined => {
        switch (size) {
            case "sm": return 5;
            case "md": return 15;
            default: return undefined;
        }
    }

    const contentClasses = [styles.content, className];
    if (updating) contentClasses.push(styles.blur);

    return (
        <Fade in appear>
            <div className={contentClasses.join(" ")} style={{ paddingTop: getContentPadding()}}>
                {children}
            </div>
        </Fade>
    );
}

export default DashboardCardBody;
