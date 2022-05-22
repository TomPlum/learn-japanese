import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    defaultFont: string;
    theme: string;
    language: string;
    highScores: string;
    defaultMode: string;
    cardsPerDay: number;
    confidenceMenuStyle: string;
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

export const { setUser, setAccessToken, setRefreshToken, setPreferences, updateNickname, clearUser } = userSlice.actions
export default userSlice.reducer;
