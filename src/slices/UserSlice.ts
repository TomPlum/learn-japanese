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
}

export interface UserState {
    user?: User;
    token?: string;
}

const user = localStorage.getItem("user");

const initialState: UserState = {
    user: user ? JSON.parse(user) : undefined,
    token: undefined
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        setJWT: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        clearUser: (state) => {
            state.user = undefined;
            state.token = undefined;
            localStorage.removeItem("user");
        }
    }
});

export const { setUser, clearUser, setJWT } = userSlice.actions
export default userSlice.reducer;
