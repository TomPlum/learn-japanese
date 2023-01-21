import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "../../../styles/sass/components/layout/card/DashboardToolbar.module.scss"
import DashboardCard from "./DashboardCard"
import { faCogs, faFireAlt, faPencilRuler, faSearch, faSyncAlt } from "@fortawesome/free-solid-svg-icons"

const DashboardToolbar = () => {
    const getDaysSinceStartDate = () => {
        const startDate = new Date("2021/01/30")
        const now = new Date()
        const diff = now.getTime() - startDate.getTime()
        const days = diff / (1000 * 3600 * 24)
        return `Day ${days.toFixed(0)}`
    }

    return (
        <DashboardCard className={styles.toolbar}>
            <DashboardCard.Body className={styles.body}>
                <div className={styles.streak}>
                    <FontAwesomeIcon icon={faFireAlt} fixedWidth className={styles.fire} />
                    <span>{getDaysSinceStartDate()}</span>
                </div>
                <div className={styles.buttons}>
                    <FontAwesomeIcon
                        title="Edit Layout"
                        icon={faPencilRuler}
                        fixedWidth
                        className={styles.icon}
                        data-testid="edit-dashboard-layout"
                    />
                    <FontAwesomeIcon
                        icon={faCogs}
                        fixedWidth
                        className={styles.icon}
                        title="Dashboard Settings"
                        data-testid="edit-dashboard-settings"
                    />
                    <FontAwesomeIcon
                        fixedWidth
                        title="Search"
                        icon={faSearch}
                        className={styles.icon}
                        data-testid="search-dashboard"
                    />
                    <FontAwesomeIcon
                        fixedWidth
                        icon={faSyncAlt}
                        title="Sync All"
                        className={styles.icon}
                        data-testid="dashboard-sync-all"
                    />
                </div>
            </DashboardCard.Body>
        </DashboardCard>
    )
}

export default DashboardToolbar
