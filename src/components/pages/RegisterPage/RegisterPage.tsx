import { Navigate, useNavigate } from "react-router-dom"
import RegistrationForm from "../../user/RegistrationForm"
import styles  from "./RegisterPage.module.scss"
import { useUserContext } from "context/UserContext";

const RegisterPage = () => {
  const { user } = useUserContext()
  const navigate = useNavigate()

  if (user) {
    return <Navigate to="/home" />
  }

  const handleRegistrationSuccess = (username: string) => {
    navigate(`/login?=${username}`)
  }

  return (
    <div className={styles.wrapper} data-testid='registration-page'>
      <div className={styles.form}>
        <RegistrationForm onSuccess={handleRegistrationSuccess} />
      </div>
    </div>
  )
}

export default RegisterPage
