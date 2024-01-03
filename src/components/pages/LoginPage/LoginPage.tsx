import { useQueryParams, useUserSelector } from "../../../hooks"
import { Redirect, useHistory } from "react-router-dom"
import LoginForm from "../../user/LoginForm"
import styles  from "./LoginPage.module.scss"
import { useTranslation } from "react-i18next"
import LoadingSpinner from "../../ui/loading/LoadingSpinner"

const LoginPage = () => {
  const { t, ready } = useTranslation("translation", { keyPrefix: "forms.login" })
  const user = useUserSelector((state) => state.user).user
  const history = useHistory()
  const params = useQueryParams()

  if (user) {
    return <Redirect to="/home" />
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <LoadingSpinner active={!ready} variant="success" className={styles.spinner} />
        {ready && (
          <LoginForm
            username={params.get("username") ?? ""}
            onSuccess={() => history.push("/home")}
            info={params.get("session-expired") ? t("session-expired") : undefined}
          />
        )}
      </div>
    </div>
  )
}

export default LoginPage
