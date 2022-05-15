import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import GameSettings from "../domain/session/settings/game/GameSettings";
import GameSettingsConverter from "../converter/GameSettingsConverter";

export interface GameSettingState {
    hints: {
        enabled: boolean;
        quantity: number;
        unlimited: boolean;
    },
    lives: {
        enabled: boolean;
        quantity: number;
    },
    time: {
        timed: boolean;
        countdown: boolean;
        secondsPerQuestion: number;
    },
    question: {
        questionField: string;
        answerField: string;
        type: string;
        cards: number;
        quantity: number;
        score: boolean;
        answerFilter: number;
    }
}

export interface GameConfigState {
    settings?: GameSettingState;
}

const initialState: GameConfigState = {
    settings: undefined
}

export const gameSettingsSlice = createSlice({
    name: 'game-config',
    initialState,
    reducers: {
        setGameSettings: (state, action: PayloadAction<GameSettings>) => {
            state.settings = new GameSettingsConverter().serialise(action.payload);
        },
        clearGameSettings: (state) => {
            state.settings = undefined;
        }
    }
});

export const { setGameSettings, clearGameSettings } = gameSettingsSlice.actions
export default gameSettingsSlice.reducer;
