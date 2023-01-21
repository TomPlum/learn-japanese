import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PropsWithChildren } from "react"
import styles from "../../../styles/sass/components/layout/card/DashboardActivityEvent.module.scss"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import updateLocale from "dayjs/plugin/updateLocale"
import { faTimes, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { useTranslation } from "react-i18next"

export type ActivityEventDetails = { name: string; icon: IconDefinition; colour: string; time: number }

export interface DashboardActivityEventProps {
  event: ActivityEventDetails
  className?: string
  onClick?: () => void
  onDismiss?: () => void
}

const DashboardActivityEvent = (props: PropsWithChildren<DashboardActivityEventProps>) => {
  const { event, className, onClick, onDismiss, children } = props

  const { name, icon, colour, time } = event

  const { t } = useTranslation("translation", { keyPrefix: "dashboard.card.activity.time" })
  const actions = useTranslation("translation", { keyPrefix: "action" }).t

  const getElapsedTime = (ms: number) => {
    dayjs.extend(relativeTime)
    dayjs.extend(updateLocale)
    dayjs.updateLocale("en", {
      relativeTime: {
        future: "in %s",
        past: "%s",
        s: t("now"),
        m: t("one-minute-ago"),
        mm: t("minutes-past"),
        h: t("one-hour-ago"),
        hh: t("hours-past"),
        d: t("one-day-ago"),
        dd: t("days-past"),
        M: t("one-month-ago"),
        MM: t("months-past"),
        y: t("one-year-ago"),
        yy: t("years-past")
      }
    })
    return dayjs(ms).fromNow()
  }

  return (
    <div className={[className, styles.wrapper].join(" ")} onClick={onClick}>
      <div className={styles.header}>
        <FontAwesomeIcon icon={icon} fixedWidth className={styles.icon} style={{ color: colour }} />
        <span>{name}</span>
        <span className={styles.time}>{getElapsedTime(event.time)}</span>
        <FontAwesomeIcon icon={faTimes} className={styles.dismiss} onClick={onDismiss} title={actions("dismiss")} />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardActivityEvent
