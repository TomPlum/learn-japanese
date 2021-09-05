import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 } from "uuid";

export interface Error {
    title: string;
    body?: string;
    time: number;
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
            state.errors[v4().valueOf()] = { ...action.payload, time: new Date().valueOf() };
        },
        removeError: (state, action: PayloadAction<string>) => {
            delete state.errors[action.payload];
        }
    }
});

export const { addError, removeError } = errorSlice.actions
export default errorSlice.reducer;
