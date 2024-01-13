import { UseLocalStorageProps, UseLocalStorageResponse } from "hooks/useLocalStorage/types.ts";
import { useEffect, useState } from "react";

const useLocalStorage = <Value> ({ key }: UseLocalStorageProps): UseLocalStorageResponse<Value> => {
  const storedValue = localStorage.getItem(key)
  const [snapshot, setSnapshot] = useState<Value | undefined>(storedValue ? JSON.parse(storedValue) : undefined)
  console.log('snapshot', snapshot)

  useEffect(() => {
    if (!snapshot) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(snapshot))
    }
  }, [snapshot]);

  return [snapshot, setSnapshot]
}

export default useLocalStorage