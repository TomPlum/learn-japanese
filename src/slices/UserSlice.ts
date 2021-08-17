import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
    username: string;
    nickname?: string;
}

export interface UserState {
    user?: User
}

const initialState: UserState = {
    user: undefined
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = undefined
        }
    }
});

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer;
