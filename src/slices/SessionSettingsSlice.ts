import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GameSettingState } from "./GameSettingsSlice";
import { DataSettingsState } from "./DataSettingsSlice";
import PlayMode from "../domain/session/PlayMode";
import GameSettingsConverter from "../converter/GameSettingsConverter";
import GameSettings from "../domain/session/settings/game/GameSettings";
import DataSettingsConverter from "../converter/DataSettingsConverter";
import LearnMode from "../domain/session/LearnMode";
import { SessionSettings } from "../domain/session/settings/SessionSettings";

export interface SessionSettingsState {
    isPreset: boolean;
    topic?: string;
    id?: number;
    name?: string;
    icon?: string;
    colour?: string;
    game?: GameSettingState;
    data: DataSettingsState;
}

export interface SessionSettingsSlice {
    lastPlaySession?: SessionSettingsState;
    lastLearnSession?: SessionSettingsState;
}

const initialState: SessionSettingsSlice = {
    lastLearnSession: undefined,
    lastPlaySession: undefined
}

const LAST_PLAY_SESSION_KEY = "last-play-session";
const LAST_LEARN_SESSION_KEY = "last-learn-session";

export const sessionSettingsSlice = createSlice({
    name: 'session-settings',
    initialState,
    reducers: {
        setLastPlayPreset: (state, action: PayloadAction<PlayMode>) => {
            const payload = action.payload;
            const value: SessionSettingsState = {
                isPreset: true,
                topic: payload.topicName,
                id: payload.id,
                name: payload.displayName,
                icon: payload.icon.toString(),
                colour: payload.colour,
                game: new GameSettingsConverter().serialise(payload.modeSettings as GameSettings),
                data: new DataSettingsConverter().serialise(payload.dataSettings)
            }
            state.lastPlaySession = value;
            localStorage.setItem(LAST_PLAY_SESSION_KEY, JSON.stringify(value));
        },
        setLastLearnPreset: (state, action: PayloadAction<LearnMode>) => {
            const payload = action.payload;
            const value: SessionSettingsState = {
                isPreset: true,
                topic: payload.topicName,
                id: payload.id,
                name: payload.displayName,
                icon: payload.icon.toString(),
                colour: payload.colour,
                data: new DataSettingsConverter().serialise(payload.dataSettings)
            }
            state.lastLearnSession = value;
            localStorage.setItem(LAST_LEARN_SESSION_KEY, JSON.stringify(value));
        },
        setLastCustomSession: (state, action: PayloadAction<SessionSettings>) => {
            const payload = action.payload;

            const value: SessionSettingsState = {
                isPreset: false,
                data: new DataSettingsConverter().serialise(payload.dataSettings)
            }

            if (!!payload.gameSettings) {
                value.game = new GameSettingsConverter().serialise(payload.gameSettings);
                localStorage.setItem(LAST_PLAY_SESSION_KEY, JSON.stringify(value));
            } else {
                localStorage.setItem(LAST_LEARN_SESSION_KEY, JSON.stringify(value));
            }
        },
        clearLastPlayPreset: (state) => {
            state.lastPlaySession = undefined;
        },
        clearLastLearnPreset: (state) => {
            state.lastLearnSession = undefined;
        }
    }
});

export const { setLastPlayPreset, setLastLearnPreset, clearLastPlayPreset, clearLastLearnPreset, setLastCustomSession } = sessionSettingsSlice.actions
export default sessionSettingsSlice.reducer;
