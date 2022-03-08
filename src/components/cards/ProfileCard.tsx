import DashboardCard from "../layout/card/DashboardCard";
import { useUserSelector } from "../../hooks";
import styles from "../../styles/sass/components/cards/ProfileCard.module.scss";
import { faBell, faCircle, faCog, faCompass, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashboardCardLink from "../layout/card/DashboardCardLink";

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
                    <DashboardCardLink text="Notification Centre" icon={faBell} />
                    <DashboardCardLink text="User Settings" icon={faCog} />
                    <DashboardCardLink text="Show Me Around" icon={faCompass} />
                </div>
            </DashboardCard.Body>
        </DashboardCard>
    );
}

export default ProfileCard;
