import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface FontState {
    selected: string
}

const initialState: FontState = {
    selected: ""
}

export const fontSlice = createSlice({
    name: "font",
    initialState,
    reducers: {
        setFont: (state, action: PayloadAction<string>) => {
            const selectedFontName = action.payload
            state.selected = selectedFontName
            localStorage.setItem("font", selectedFontName)
        }
    }
})

export const { setFont } = fontSlice.actions
export default fontSlice.reducer
