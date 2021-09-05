import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 } from "uuid";

export interface Error {
    id: string;
    title: string;
    body?: string;
    time: number;
}

export interface ErrorState {
    errors: Error[];
}

const initialState: ErrorState = {
    errors: []
}

export const errorSlice = createSlice({
    name: 'errors',
    initialState,
    reducers: {
        addError: (state, action: PayloadAction<{ title: string, body?: string }>) => {
            state.errors.push({ ...action.payload, id: v4().valueOf(), time: new Date().valueOf() });
        },
        removeError: (state, action: PayloadAction<string>) => ({
            ...state,
            errors: state.errors.filter((error: Error) => error.id === action.payload)
        })
    }
});

export const { addError, removeError } = errorSlice.actions
export default errorSlice.reducer;
