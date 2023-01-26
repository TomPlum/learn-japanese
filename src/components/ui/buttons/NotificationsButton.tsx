import { faBell, faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Nav, Overlay, Popover } from "react-bootstrap"
import React, { useRef, useState } from "react"
import menuStyles from "../../../styles/sass/components/layout/NavigationBar.module.scss"
import { useNotificationDispatch, useNotificationSelector } from "../../../hooks"
import NotificationDisplay from "../display/NotificationDisplay"
import { clearNotifications, removeNotification } from "../../../slices/NotificationSlice"
import styles from "../../../styles/sass/components/ui/buttons/NotificationsButton.module.scss"

export interface NotificationsButtonProps {
  className?: string
}

const NotificationsButton = (props: NotificationsButtonProps) => {
  const { className } = props
  const notifications = useNotificationSelector((state) => state.notification).notifications
  const notificationDispatch = useNotificationDispatch()
  const quantity = Object.keys(notifications).length
  const hasNotifications = quantity > 0

  const ref = useRef(null)
  const targetRef = useRef(null)
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(true)
  }

  const handleClear = () => {
    notificationDispatch(clearNotifications())
  }

  const handleNotificationDismiss = (id: string) => {
    notificationDispatch(removeNotification(id))
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
          <Popover.Content className={styles.content}>
            {hasNotifications && (
              <div className={styles.header}>
                <span className={styles.title}>
                  {quantity} Notification{quantity > 1 ? "s" : ""}
                </span>
                <span className={styles.clear} onClick={handleClear}>
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
                      className={styles.notification}
                      notification={notifications[id]}
                      onDismiss={handleNotificationDismiss}
                    />
                  )
                })}
            </div>
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  )
}

export default NotificationsButton
