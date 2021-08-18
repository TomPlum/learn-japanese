import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { UserState, UserDispatch, FontDispatch } from './store'
import { FontState } from "./slices/FontSlice";

export const useUserDispatch = () => useDispatch<UserDispatch>();
export const useUserSelector: TypedUseSelectorHook<UserState> = useSelector

export const useFontDispatch = () => useDispatch<FontDispatch>();
export const useFontSelector: TypedUseSelectorHook<FontState> = useSelector
