import { Navigate, Outlet } from "react-router-dom"
import { useUserContext } from "context/UserContext";

const ProtectedRoute = () => {
  const { user } = useUserContext()

  if (!Boolean(user)) {
    return <Navigate to={{ pathname: "/home" }} replace />
  }

  return <Outlet />
}

export default ProtectedRoute
