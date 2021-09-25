import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 } from "uuid";

export enum NotificationType {
    INFO, ERROR, SPECIAL
}

export interface Error {
    title: string;
    body?: string;
    time: number;
    type: NotificationType;
    precedence: number;
}

export interface ErrorState {
    errors: { [id: string]: Error };
}

const initialState: ErrorState = {
    errors: {}
}

export const errorSlice = createSlice({
    name: 'errors',
    initialState,
    reducers: {
        addError: (state, action: PayloadAction<{ title: string, body?: string }>) => {
            state.errors[v4().valueOf()] = {
                ...action.payload,
                time: Date.now(),
                type: NotificationType.ERROR,
                precedence: 99
            };
        },
        addControllerMessage: (state) => {
            state.errors["CONTROLLER"] = {
                title: "Too many notifications?",
                type: NotificationType.SPECIAL,
                time: 0,
                precedence: 0
            }
        },
        removeError: (state, action: PayloadAction<string>) => {
            delete state.errors[action.payload];
        },
        clearErrors: (state) => {
            state.errors = {}
        }
    }
});

export const { addError, removeError, addControllerMessage, clearErrors } = errorSlice.actions
export default errorSlice.reducer;
