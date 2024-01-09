export type NotificationList = { [id: string]: Notification }

export interface NotificationRequest {
  title: string
  body: string
}

export interface NotificationProviderProps {
  initialNotifications?: NotificationList
}

export interface NotificationContextBag {
  notifications: NotificationList
  addNotification: (notification: NotificationRequest) => void
  addControllerMessage: () => void
  removeNotification: (id: string) => void
  clearNotifications: () => void
}

export enum NotificationType {
  INFO,
  ERROR,
  SPECIAL
}

export interface Notification {
  title: string
  body: string
  time: number
  type: NotificationType
  precedence: number
}