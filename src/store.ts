import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/UserSlice'
import fontReducer from './slices/FontSlice'
import notificationReducer from './slices/NotificationSlice'
import modeReducer from './slices/ModeSlice'
import gameSettingsReducer from './slices/GameSettingsSlice'
import dataSettingsReducer from './slices/DataSettingsSlice'
import sessionSettingsReducer from './slices/SessionSettingsSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        font: fontReducer,
        notification: notificationReducer,
        mode: modeReducer,
        gameSettings: gameSettingsReducer,
        dataSettings: dataSettingsReducer,
        sessionSettings: sessionSettingsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
