import { Dispatch, SetStateAction } from "react";

export interface UseLocalStorageProps {
  key: string
}

export type UseLocalStorageResponse<Value> = [value: Value | undefined, setter: Dispatch<SetStateAction<Value | undefined>>]