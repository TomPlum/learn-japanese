import DashboardCard from "../layout/card/DashboardCard"
import DashboardCardHeader from "../layout/card/DashboardCardHeader"
import DashboardActivityEvent, { ActivityEventDetails } from "../layout/card/DashboardActivityEvent"
import {
  faBirthdayCake,
  faEllipsisH,
  faEraser,
  faFireAlt,
  faGraduationCap,
  faPlay,
  faQuestionCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons"
import styles from "../../styles/sass/components/cards/ActivityCard.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslation } from "react-i18next"
import { ActivityEventType } from "../../domain/ActivityEventType"

const ActivityCard = () => {
  const { t, ready } = useTranslation("translation", { keyPrefix: "dashboard.card.activity" })
  const actionsTranslation = useTranslation("translation", { keyPrefix: "action" })
  const actions = actionsTranslation.t
  const actionsReady = actionsTranslation.ready

  const getEvent = (type: ActivityEventType): ActivityEventDetails => {
    switch (type) {
      case ActivityEventType.LEARN: {
        return { name: t("event.learn"), icon: faGraduationCap, colour: "#ffe53c", time: Date.now() }
      }
      case ActivityEventType.PLAY: {
        return { name: t("event.play"), icon: faPlay, colour: "#2ec947", time: Date.now() - 1500000 }
      }
      case ActivityEventType.MISTAKES: {
        return { name: t("event.mistakes"), icon: faEraser, colour: "#dc7bde", time: Date.now() - 10000000 }
      }
      case ActivityEventType.POST_REGISTRATION: {
        return {
          name: t("event.welcome"),
          icon: faBirthdayCake,
          colour: "#4d9af8",
          time: Date.UTC(2021, 1, 22).valueOf()
        }
      }
      case ActivityEventType.STREAK: {
        return {
          name: t("event.streak", { streak: 549 }),
          icon: faFireAlt,
          colour: "#f3881b",
          time: Date.now() - 10000000000
        }
      }
      default: {
        return { name: "Unknown", icon: faQuestionCircle, colour: "#edd63b", time: Date.now() }
      }
    }
  }

  return (
    <DashboardCard size="md" loading={!ready && !actionsReady}>
      <DashboardCard.Header>
        <DashboardCardHeader.Title>{t("title")}</DashboardCardHeader.Title>
        <DashboardCardHeader.Icon icon={faTimesCircle} title={actions("clear")} />
      </DashboardCard.Header>

      <DashboardCard.Body className={styles.body}>
        <div className={styles.activity}>
          <DashboardActivityEvent event={getEvent(ActivityEventType.LEARN)} />
          <DashboardActivityEvent event={getEvent(ActivityEventType.PLAY)} />
          <DashboardActivityEvent event={getEvent(ActivityEventType.MISTAKES)} />
          <DashboardActivityEvent event={getEvent(ActivityEventType.STREAK)} />
          <DashboardActivityEvent event={getEvent(ActivityEventType.POST_REGISTRATION)} />
        </div>
        <div className={styles.footer}>
          <div className={styles.more} title={t("more")}>
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>
        </div>
      </DashboardCard.Body>
    </DashboardCard>
  )
}

export default ActivityCard
