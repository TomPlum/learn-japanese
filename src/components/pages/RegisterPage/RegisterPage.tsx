import { useUserSelector } from "../../../hooks"
import { Navigate, useNavigate } from "react-router-dom"
import RegistrationForm from "../../user/RegistrationForm"
import styles  from "./RegisterPage.module.scss"

const RegisterPage = () => {
  const user = useUserSelector((state) => state.user).user
  const navigate = useNavigate()

  if (user) {
    return <Navigate to="/home" />
  }

  const handleRegistrationSuccess = (username: string) => {
    navigate(`/login?=${username}`)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <RegistrationForm onSuccess={handleRegistrationSuccess} />
      </div>
    </div>
  )
}

export default RegisterPage
