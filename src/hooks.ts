import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'

export const useUserDispatch = () => useDispatch<AppDispatch>();
export const useUserSelector: TypedUseSelectorHook<RootState> = useSelector

export const useFontDispatch = () => useDispatch<AppDispatch>();
export const useFontSelector: TypedUseSelectorHook<RootState> = useSelector

export const useErrorDispatch = () => useDispatch<AppDispatch>();
export const useErrorSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useModeDispatch = () => useDispatch<AppDispatch>();
export const useModeSelector: TypedUseSelectorHook<RootState> = useSelector;
