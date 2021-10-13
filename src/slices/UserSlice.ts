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
        },
        updateNickname: (state, action: PayloadAction<string>) => {
            if (state.user) {
                state.user.nickname = action.payload;
                localStorage.setItem("user", JSON.stringify(state.user));
            }
        },
        clearUser: (state) => {
            state.user = undefined;
            localStorage.removeItem("user");
        }
    }
});

export const { setUser, updateNickname, clearUser } = userSlice.actions
export default userSlice.reducer;
