import { Notification, NotificationType } from "../../../../slices/NotificationSlice"
import styles  from "./NotificationDisplay.module.scss"
import { faBell, faExclamationCircle, faInfoCircle, faTimes, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import dayjs from "dayjs"

export interface NotificationDisplayProps {
  id: string
  className?: string
  notification: Notification
  onDismiss: (id: string) => void
}

const NotificationDisplay = (props: NotificationDisplayProps) => {
  const { id, notification, className, onDismiss } = props

  const handleDismiss = () => {
    onDismiss(id)
  }

  const getElapsedTime = (ms: number) => {
    const mins = dayjs(Date.now()).diff(ms, "minute", false)
    const hours = Math.floor(mins / 60)
    const remainingMins = mins % 60
    return mins > 0 ? (hours > 0 ? `${hours}h ${remainingMins}m ago` : `${mins}m ago`) : "Just now"
  }

  const getIcon = (): { icon: IconDefinition; className: string; "data-testid": string } => {
    switch (notification.type) {
      case NotificationType.ERROR: {
        return { icon: faExclamationCircle, className: styles.error, "data-testid": "error" }
      }
      case NotificationType.INFO: {
        return { icon: faInfoCircle, className: styles.info, "data-testid": "info" }
      }
      case NotificationType.SPECIAL: {
        return { icon: faBell, className: styles.special, "data-testid": "special" }
      }
    }
  }

  const iconMeta = getIcon()
  iconMeta.className = [iconMeta.className, styles.icon].join(" ")

  return (
    <div className={[className, styles.container].join(" ")}>
      <div className={styles.leftWrapper}>
        <p className={styles.heading}>
          <FontAwesomeIcon {...iconMeta} fixedWidth size="sm" />
          <span className={styles.title}>{notification.title}</span>
          <span className={styles.time}>{getElapsedTime(notification.time)}</span>
        </p>
        <p className={styles.body}>{notification.body}</p>
      </div>

      <div className={styles.rightWrapper}>
        <FontAwesomeIcon
          icon={faTimes}
          onClick={handleDismiss}
          className={styles.dismiss}
          data-testid={`dismiss-notification-${id}`}
        />
      </div>
    </div>
  )
}

export default NotificationDisplay
