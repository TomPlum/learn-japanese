import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/UserSlice'

export const userStore = configureStore({
    reducer: {
        user: userReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type UserState = ReturnType<typeof userStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type UserDispatch = typeof userStore.dispatch
