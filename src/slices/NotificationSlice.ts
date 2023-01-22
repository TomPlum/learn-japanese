import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 } from "uuid"

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

export interface ErrorState {
  notifications: { [id: string]: Notification }
}

const initialState: ErrorState = {
  notifications: {
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
  }
}

export const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<{ title: string; body: string }>) => {
      state.notifications[v4().valueOf()] = {
        ...action.payload,
        time: Date.now(),
        type: NotificationType.ERROR,
        precedence: 99
      }
    },
    addControllerMessage: (state) => {
      state.notifications["CONTROLLER"] = {
        title: "Too many notifications?",
        body: "",
        type: NotificationType.SPECIAL,
        time: 0,
        precedence: 0
      }
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      delete state.notifications[action.payload]
    },
    clearNotifications: (state) => {
      state.notifications = {}
    }
  }
})

export const { addNotification, removeNotification, addControllerMessage, clearNotifications } =
  notificationSlice.actions
export default notificationSlice.reducer
