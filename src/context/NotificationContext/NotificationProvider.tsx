import NotificationContext from "context/NotificationContext/NotificationContext.ts";
import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import {
  NotificationContextBag,
  NotificationList,
  NotificationProviderProps,
  NotificationRequest, NotificationType
} from "context/NotificationContext/types.ts";
import { v4 as uuid } from 'uuid'

const NotificationProvider = ({ initialNotifications, children }: PropsWithChildren<NotificationProviderProps>) => {
  const [notifications, setNotifications] = useState<NotificationList>(initialNotifications ?? {
    "1": {
      title: "Welcome!",
      body: "Here you'll see a list of your notifications.",
      time: Date.now(),
      type: NotificationType.INFO,
      precedence: 1
    },
    "2": {
      title: "Cringe Alert!",
      body: "We've been informed that you're a cringe lord.",
      time: Date.now(),
      type: NotificationType.ERROR,
      precedence: 1
    }
  })
  
  const addNotification = useCallback(({ title, body }: NotificationRequest) => {
    setNotifications((current) => {
      current[uuid().valueOf()] = {
        title,
        body,
        time: Date.now(),
        type: NotificationType.ERROR,
        precedence: 99
      }

      return current
    })
  }, [])

  const clearNotifications = useCallback(() => {
    setNotifications({})
  }, [])

  const removeNotification = useCallback((idDelete: string) => {
    setNotifications(existing => {
      const state = { ...existing }
      delete state[idDelete]
      return state
    })
  }, [])

  const addControllerMessage = useCallback(() => {
    setNotifications((current) => {
      current[uuid().valueOf()] = {
        title: "Too many notifications?",
        body: "",
        type: NotificationType.SPECIAL,
        time: 0,
        precedence: 0
      }

      return current
    })
  }, [])

  const values: NotificationContextBag = useMemo(() => ({
    notifications,
    setNotifications,
    addNotification,
    clearNotifications,
    removeNotification,
    addControllerMessage
  }), [notifications, addNotification])

  return (
    <NotificationContext.Provider value={values}>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationProvider