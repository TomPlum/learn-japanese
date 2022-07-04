import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Preference } from "../domain/user/Preference";

export interface User {
    username: string;
    email: string;
    nickname?: string;
    roles: string[];
    locked: boolean;
    expired: boolean;
    credentialsExpired: boolean;
    enabled: boolean;
    creationDate: string;
    token: string;
    refreshToken: string;
    preferences: UserPreferences;
}

export interface UserPreferences {
    kanjiFont: string;
    theme: string;
    language: string;
    highScoresBehaviour: string;
    defaultMode: string;
    flashCardsQuantity: number;
    confidenceMenuStyle: string;
    profileVisibility: string;
    streakCardView: string;
    activityFeedQuantity: number;
    romajiVisibility: string;
    streakNotifications: boolean;
    mistakesReminders: boolean;
}

export interface UserState {
    user?: User;
}

const user = localStorage.getItem("user");

const initialState: UserState = {
    user: user ? JSON.parse(user) : undefined,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        setPreferences: (state, action: PayloadAction<UserPreferences>) => {
            if (state.user) {
                state.user.preferences = action.payload;
                localStorage.setItem("user", JSON.stringify(state.user));
            }
        },
        setPreference: (state, action: PayloadAction<{ preference: Preference, value: string }>) => {
            if (state.user) {
                const value = action.payload.value;

                switch (action.payload.preference) {
                    case Preference.PROFILE_VISIBILITY: {
                        state.user.preferences.profileVisibility = value;
                        break;
                    }
                    case Preference.LANGUAGE: {
                        state.user.preferences.language = value;
                        break;
                    }
                    case Preference.ROMAJI_VISIBILITY: {
                        state.user.preferences.romajiVisibility = value;
                        break;
                    }
                    case Preference.HIGH_SCORES_BEHAVIOUR: {
                        state.user.preferences.highScoresBehaviour = value;
                        break;
                    }
                    case Preference.STREAK_CARD_VIEW: {
                        state.user.preferences.streakCardView = value;
                        break;
                    }
                    case Preference.CONFIDENCE_MENU_STYLE: {
                        state.user.preferences.confidenceMenuStyle = value;
                        break;
                    }
                    case Preference.DEFAULT_KANJI_FONT: {
                        state.user.preferences.kanjiFont = value;
                        break;
                    }
                    case Preference.ACTIVITY_FEED_QUANTITY: {
                        state.user.preferences.activityFeedQuantity = Number(value);
                        break;
                    }
                    case Preference.FLASH_CARDS_QUANTITY: {
                        state.user.preferences.flashCardsQuantity = Number(value);
                        break;
                    }
                }

                localStorage.setItem("user", JSON.stringify(state.user));
            }
        },
        updateNickname: (state, action: PayloadAction<string>) => {
            if (state.user) {
                state.user.nickname = action.payload;
                localStorage.setItem("user", JSON.stringify(state.user));
            }
        },
        setAccessToken: (state, action: PayloadAction<string>) => {
            if (state.user) {
                state.user.token = action.payload;
                localStorage.setItem("user", JSON.stringify(state.user));
            }
        },
        setRefreshToken: (state, action: PayloadAction<string>) => {
            if (state.user) {
                state.user.refreshToken = action.payload;
                localStorage.setItem("user", JSON.stringify(state.user));
            }
        },
        clearUser: (state) => {
            state.user = undefined;
            localStorage.removeItem("user");
        }
    }
});

export const { setUser, setAccessToken, setRefreshToken, setPreferences, setPreference, updateNickname, clearUser } = userSlice.actions
export default userSlice.reducer;
