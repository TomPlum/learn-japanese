import { faBell, faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Nav, Overlay, Popover } from "react-bootstrap"
import { useRef, useState } from "react"
import menuStyles from "components/layout/NavigationBar/NavigationBar.module.scss"
import NotificationDisplay from "../../display/NotificationDisplay"
import styles  from "./NotificationsButton.module.scss"
import { useNotificationContext } from "context/NotificationContext"

export interface NotificationsButtonProps {
  className?: string
}

const NotificationsButton = ({ className }: NotificationsButtonProps) => {
  const { notifications, clearNotifications, removeNotification } = useNotificationContext()

  const quantity = Object.keys(notifications).length
  const hasNotifications = quantity > 0

  const ref = useRef(null)
  const targetRef = useRef(null)
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(true)
  }

  return (
    <div ref={ref} className={className}>
      <Nav.Link className={styles.link} onClick={handleClick}>
        <div ref={targetRef} className={styles.iconWrapper}>
          {hasNotifications && <div className={styles.circle} />}

          <FontAwesomeIcon
            fixedWidth
            icon={faBell}
            data-testid="notifications-button"
            className={[menuStyles.icon, show ? styles.highlight : styles.icon].join(" ")}
          />
        </div>
      </Nav.Link>

      <Overlay
        show={show}
        rootClose={true}
        target={targetRef}
        placement="bottom"
        container={ref.current}
        onHide={() => setShow(false)}
      >
        <Popover id="notifications-menu" data-testid="notifications-menu" className={styles.popover}>
          <Popover.Body className={styles.content}>
            {hasNotifications && (
              <div className={styles.header}>
                <span className={styles.title}>
                  {quantity} Notification{quantity > 1 ? "s" : ""}
                </span>
                <span className={styles.clear} onClick={clearNotifications}>
                  Clear
                </span>
              </div>
            )}

            {!hasNotifications && (
              <div className={styles.emptyWrapper}>
                <FontAwesomeIcon icon={faCheck} className={styles.emptyIcon} size="lg" />
                <p className={styles.emptyText}>You&apos;re all up to date!</p>
              </div>
            )}

            <div className={styles.notificationWrapper}>
              {hasNotifications &&
                Object.keys(notifications).map((id) => {
                  return (
                    <NotificationDisplay
                      id={id}
                      key={id}
                      onDismiss={removeNotification}
                      className={styles.notification}
                      notification={notifications[id]}
                    />
                  )
                })}
            </div>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  )
}

export default NotificationsButton
