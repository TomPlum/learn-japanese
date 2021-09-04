import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Error {
    id: string;
    title: string;
    body?: string;
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
        addError: (state, action: PayloadAction<Error>) => {
            state.errors.push(action.payload);
        },
        removeError: (state, action: PayloadAction<string>) => {
            state.errors.filter((error: Error) => error.id === action.payload);
        }
    }
});

export const { addError, removeError } = errorSlice.actions
export default errorSlice.reducer;
