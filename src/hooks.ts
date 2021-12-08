import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'
import { useEffect, useState } from "react";

export const useUserDispatch = () => useDispatch<AppDispatch>();
export const useUserSelector: TypedUseSelectorHook<RootState> = useSelector

export const useFontDispatch = () => useDispatch<AppDispatch>();
export const useFontSelector: TypedUseSelectorHook<RootState> = useSelector

export const useNotificationDispatch = () => useDispatch<AppDispatch>();
export const useNotificationSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useModeDispatch = () => useDispatch<AppDispatch>();
export const useModeSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDebouncedEffect = (effect: () => any, delay: number, deps: any[] = []) => {
    useEffect(() => {
        const handler = setTimeout(() => effect(), delay);

        return () => clearTimeout(handler);
    }, [...deps || [], delay]);
}

export const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const setFromEvent = (e: { clientX: any; clientY: any; }) => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", setFromEvent);

        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, []);

    return position;
};

