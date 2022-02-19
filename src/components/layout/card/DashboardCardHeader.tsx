import styles from "../../../styles/sass/components/layout/card/DashboardCardHeader.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

export interface DashboardCardHeaderProps {
    title: string;
    error?: string;
    onReload?: () => void;
}

const DashboardCardHeader = (props: DashboardCardHeaderProps) => {

    const { title, error, onReload } = props;

    return (
        <div className={styles.header}>
            <span className={styles.title}>{title}</span>
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

export default DashboardCardHeader;
