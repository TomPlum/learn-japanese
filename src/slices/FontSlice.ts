import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FontState {
    selected: string;
}

const initialState: FontState = {
    selected: ""
}

export const fontSlice = createSlice({
    name: 'font',
    initialState,
    reducers: {
        setFont: (state, action: PayloadAction<string>) => {
            state.selected = action.payload;
        },
    }
});

export const { setFont } = fontSlice.actions
export default fontSlice.reducer;
