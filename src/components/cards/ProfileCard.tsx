import DashboardCard from "../layout/card/DashboardCard";
import { useUserSelector } from "../../hooks";
import styles from "../../styles/sass/components/cards/ProfileCard.module.scss";
import { faBell, faCircle, faCog, faCompass, faTimes, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashboardCardLink from "../layout/card/DashboardCardLink";
import { useTranslation } from "react-i18next";

export interface ProfileCardProps {
    onDismiss?: () => void;
}

const ProfileCard = (props: ProfileCardProps) => {

    const { onDismiss } = props;

    const user = useUserSelector(state => state.user.user);
    const { t, ready } = useTranslation("translation", { keyPrefix: "dashboard.card.profile" });

    return (
        <DashboardCard size="sm" className={styles.card} id="profile-card" loading={!ready}>
            <DashboardCard.Body className={styles.body}>
                <div className={styles.detailsWrapper}>
                    {!user && (
                        <FontAwesomeIcon
                            icon={faTimes}
                            title="Dismiss"
                            onClick={onDismiss}
                            className={styles.dismiss}
                            data-testid="dismiss-profile-card"
                        />
                    )}
                    <span className={["fa-layers", "fa-fw", styles.avatar].join(" ")}>
                        <FontAwesomeIcon icon={faCircle} className={styles.circle} />
                        <FontAwesomeIcon icon={faUserGraduate} className={styles.user}  />
                    </span>
                    <p className={styles.name}>{user?.username ?? "User Profile"}</p>
                    <a className={styles.profile} href={user ? "/profile" : "/register"}>
                        {user ? t("go") : t("register")}
                    </a>
                </div>

                <div className={styles.linkWrapper}>
                    {user && (<>
                        <DashboardCardLink text={t("notifications")} icon={faBell} href="/notifications" />
                        <DashboardCardLink text={t("user-settings")} icon={faCog} href="/settings?type=user" />
                        <DashboardCardLink text={t("tour")} icon={faCompass} href="/home/tour" />
                    </>)}

                    {!user && (
                        <div className={styles.explanation}>
                            Create an account to save custom presets, compete in the high-scores,
                            and track your progress and statistics.
                        </div>
                    )}
                </div>
            </DashboardCard.Body>
        </DashboardCard>
    );
}

export default ProfileCard;
