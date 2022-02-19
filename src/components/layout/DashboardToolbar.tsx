import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/sass/components/layout/DashboardToolbar.module.scss";
import DashboardCard from "./card/DashboardCard";
import { faCogs, faFireAlt, faPencilRuler, faSearch, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const DashboardToolbar = () => {
    return (
        <DashboardCard className={styles.toolbar}>
            <DashboardCard.Body className={styles.body}>
                <div className={styles.streak}>
                    <FontAwesomeIcon icon={faFireAlt} fixedWidth className={styles.fire} />
                    <span>Day 388</span>
                </div>
                <div className={styles.buttons}>
                    <FontAwesomeIcon icon={faPencilRuler} fixedWidth className={styles.icon} />
                    <FontAwesomeIcon icon={faCogs} fixedWidth className={styles.icon} />
                    <FontAwesomeIcon icon={faSearch} fixedWidth className={styles.icon} />
                    <FontAwesomeIcon icon={faSyncAlt} fixedWidth className={styles.icon} />
                </div>
            </DashboardCard.Body>
        </DashboardCard>
    );
}

export default DashboardToolbar;
