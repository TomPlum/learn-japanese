import DashboardCard from "../layout/card/DashboardCard";
import { useUserSelector } from "../../hooks";
import styles from "../../styles/sass/components/cards/ProfileCard.module.scss";
import { faBell, faCircle, faCog, faCompass, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileCard = () => {

    const user = useUserSelector(state => state.user.user);

    return (
        <DashboardCard size="sm" className={styles.card}>
            <DashboardCard.Body className={styles.body}>
                <div className={styles.detailsWrapper}>
                    <span className={["fa-layers", "fa-fw", styles.avatar].join(" ")}>
                        <FontAwesomeIcon icon={faCircle} className={styles.circle} />
                        <FontAwesomeIcon icon={faUserGraduate} className={styles.user}  />
                    </span>
                    <p className={styles.name}>{user?.username}</p>
                    <a className={styles.profile} href="/profile">Go to profile</a>
                </div>

                <div className={styles.linkWrapper}>
                    <a className={styles.link} href="/">
                        <FontAwesomeIcon icon={faBell} className={styles.linkIcon} fixedWidth />
                        <span className={styles.linkText}>Notification Centre</span>
                    </a>
                    <a className={styles.link} href="/">
                        <FontAwesomeIcon icon={faCog} className={styles.linkIcon} fixedWidth />
                        <span className={styles.linkText}>User Settings</span>
                    </a>
                    <a className={styles.link} href="/">
                        <FontAwesomeIcon icon={faCompass} className={styles.linkIcon} fixedWidth />
                        <span className={styles.linkText}>Show Me Around</span>
                    </a>
                </div>
            </DashboardCard.Body>
        </DashboardCard>
    );
}

export default ProfileCard;
