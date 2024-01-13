import { createContext } from "react";
import { NotificationContextBag } from "context/NotificationContext/types.ts";

const NotificationContext = createContext<NotificationContextBag>({
  addNotification: () => {
    console.debug('Cannot invoke addNotification() from NotificationContext as it has not been initialised')
  },
  removeNotification: () => {
    console.debug('Cannot invoke removeNotification() from NotificationContext as it has not been initialised')
  },
  clearNotifications: () => {
    console.debug('Cannot invoke clearNotifications() from NotificationContext as it has not been initialised')
  },
  addControllerMessage: () => {
    console.debug('Cannot invoke addControllerMessage() from NotificationContext as it has not been initialised')
  },
  notifications: {}
})

export default NotificationContext