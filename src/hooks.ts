import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { UserState, UserDispatch } from './store'

export const useUserDispatch = () => useDispatch<UserDispatch>();
export const useUserSelector: TypedUseSelectorHook<UserState> = useSelector
