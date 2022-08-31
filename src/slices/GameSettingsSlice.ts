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
    presetId?: number;
}

const localConfig = localStorage.getItem("game-config");
const localPresetId = localStorage.getItem("selected-preset-id");

const initialState: GameConfigState = {
    settings: localConfig ? JSON.parse(localConfig) as GameSettingState : undefined,
    presetId: localPresetId ? Number(localPresetId) : undefined
}

export const gameSettingsSlice = createSlice({
    name: 'game-config',
    initialState,
    reducers: {
        setGameSettings: (state, action: PayloadAction<GameSettings>) => {
            const serialised = new GameSettingsConverter().serialise(action.payload);
            localStorage.setItem("game-config", JSON.stringify(serialised));
            state.settings = serialised;
        },
        setSelectedPresetID: (state, action: PayloadAction<number>) => {
            const presetId = action.payload;
            localStorage.setItem("selected-preset-id", presetId.toString());
            state.presetId = presetId;
        },
        clearGameSettings: (state) => {
            state.settings = undefined;
        }
    }
});

export const { setGameSettings, clearGameSettings, setSelectedPresetID } = gameSettingsSlice.actions
export default gameSettingsSlice.reducer;
