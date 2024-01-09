import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/UserSlice"
import notificationReducer from "./slices/NotificationSlice"
import modeReducer from "./slices/ModeSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer,
    mode: modeReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
