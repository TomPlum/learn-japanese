import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/UserSlice"
import notificationReducer from "./slices/NotificationSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
