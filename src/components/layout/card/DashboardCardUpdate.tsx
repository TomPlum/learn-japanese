import styles from "../../../styles/sass/components/layout/card/DashboardCardUpdate.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

export interface DashboardCardUpdateProps {
    active?: boolean;
}

const DashboardCardUpdate = (props: DashboardCardUpdateProps) => {
    const { active } = props;

    if (!active) {
        return null;
    }

    return (
        <div className={styles.updating}>
            <FontAwesomeIcon icon={faSyncAlt} className={styles.updateIcon} spin />
        </div>
    )
}

export default DashboardCardUpdate;