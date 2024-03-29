import DashboardCard from "../../layout/card/DashboardCard"
import styles  from "./ProfileCard.module.scss"
import { faBell, faCircle, faCog, faCompass, faTimes, faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DashboardCardLink from "../../layout/card/DashboardCardLink"
import { useTranslation } from "react-i18next"
import HashLink from "components/layout/HashLink";
import { useUserContext } from "context/UserContext";

export interface ProfileCardProps {
  onDismiss?: () => void
}

const ProfileCard = (props: ProfileCardProps) => {
  const { onDismiss } = props

  const { user } = useUserContext()
  const { t, ready } = useTranslation("translation", { keyPrefix: "dashboard.card.profile" })

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
            <FontAwesomeIcon icon={faUserGraduate} className={styles.user} />
          </span>

          <p className={styles.name}>
            {user?.username ?? "User Profile"}
          </p>

          <HashLink className={styles.profile} path={user ? "/profile" : "/register"}>
            {user ? t("go") : t("register")}
          </HashLink>
        </div>

        <div className={styles.linkWrapper}>
          {user && (
            <>
              <DashboardCardLink text={t("notifications")} icon={faBell} href="/notifications" />
              <DashboardCardLink text={t("user-settings")} icon={faCog} href="/settings?type=user" />
              <DashboardCardLink text={t("tour")} icon={faCompass} href="/home/tour" />
            </>
          )}

          {!user && <div className={styles.explanation}>{t("description")}</div>}
        </div>
      </DashboardCard.Body>
    </DashboardCard>
  )
}

export default ProfileCard
