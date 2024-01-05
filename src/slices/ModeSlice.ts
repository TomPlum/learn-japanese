import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppMode } from "../domain/AppMode"

export interface ModeState {
  mode: AppMode
  active: boolean // Whether or not the nav bar is active (all icons clickable)
}

const initialState: ModeState = {
  mode: AppMode.PLAY,
  active: true
}

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    switchApplicationMode: (state) => {
      const currentMode = state.mode
      state.mode = currentMode === AppMode.PLAY ? AppMode.LEARN : AppMode.PLAY
    },
    setApplicationMode: (state, action: PayloadAction<AppMode>) => {
      state.mode = action.payload
    }
  }
})

export const { switchApplicationMode, setApplicationMode } = modeSlice.actions
export default modeSlice.reducer
