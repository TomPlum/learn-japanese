import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/UserSlice'
import fontReducer from './slices/FontSlice'
import errorReducer from './slices/ErrorSlice'
import modeReducer from './slices/ModeSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        font: fontReducer,
        error: errorReducer,
        mode: modeReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
