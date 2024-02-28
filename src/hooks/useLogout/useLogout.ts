import { useCallback, useEffect } from "react";
import { LogoutResponse } from "hooks/useLogout/types.ts";

const useLogout = (): LogoutResponse => {
  const logout = useCallback(() => {
    localStorage.removeItem("user")
  }, [])

  return {
    logout
  }
}

export default useLogout