import { Navigate, Outlet } from "react-router-dom"
import { useUserSelector } from "../../../hooks.ts"

const ProtectedRoute = () => {
  const user = useUserSelector((state) => state.user.user)

  if (!Boolean(user)) {
    return <Navigate to={{ pathname: "/home" }} replace />
  }

  return <Outlet />
}

export default ProtectedRoute
