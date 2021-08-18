import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/UserSlice'
import fontReducer from './slices/FontSlice'

export const userStore = configureStore({
    reducer: {
        user: userReducer
    }
});

export const fontStore = configureStore({
    reducer: {
        font: fontReducer
    }
});

export type UserState = ReturnType<typeof userStore.getState>
export type UserDispatch = typeof userStore.dispatch

export type FontState = ReturnType<typeof fontStore.getState>
export type FontDispatch = typeof fontStore.dispatch
