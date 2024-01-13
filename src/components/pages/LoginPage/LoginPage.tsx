import { useQueryParams } from "../../../hooks"
import { Navigate, useNavigate } from "react-router-dom"
import LoginForm from "../../user/LoginForm"
import styles  from "./LoginPage.module.scss"
import { useTranslation } from "react-i18next"
import LoadingSpinner from "../../ui/loading/LoadingSpinner"
import { useUserContext } from "context/UserContext";

const LoginPage = () => {
  const { t, ready } = useTranslation("translation", { keyPrefix: "forms.login" })
  const { user } = useUserContext()
  const navigate = useNavigate()
  const params = useQueryParams()

  if (user) {
    return <Navigate to="/home" />
  }

  return (
    <div className={styles.wrapper} data-testid='login-page'>
      <div className={styles.form}>
        <LoadingSpinner
          active={!ready}
          variant="success"
          className={styles.spinner}
        />

        {ready && (
          <LoginForm
            username={params.get("username") ?? ""}
            onSuccess={() => navigate("/home")}
            info={params.get("session-expired") ? t("session-expired") : undefined}
          />
        )}
      </div>
    </div>
  )
}

export default LoginPage
