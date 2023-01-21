import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useRef, useState } from "react"
import { Alert, Button, Form, Modal } from "react-bootstrap"
import styles from "../../styles/sass/components/user/UserForm.module.scss"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { useUserDispatch } from "../../hooks"
import { setUser } from "../../slices/UserSlice"
import auth from "../../service/AuthenticationService"
import { useTranslation } from "react-i18next"

export interface LoginFormProps {
  info?: string
  username?: string
  onSuccess: () => void
}

const LoginForm = (props: LoginFormProps) => {
  const { t, ready } = useTranslation()
  const [username, setUsername] = useState(props.username ?? "")
  const [password, setPassword] = useState("")
  const [usernameValid, setUsernameValid] = useState(!!props.username)
  const [passwordValid, setPasswordValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const usernameField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)

  const dispatchUser = useUserDispatch()

  const formValid = usernameValid && passwordValid

  useEffect(() => {
    if (username) {
      passwordField.current?.focus()
    } else {
      usernameField?.current?.focus()
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (formValid && e.key === "Enter") {
        login()
        e.preventDefault()
        e.stopPropagation()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [username, password])

  const login = () => {
    setLoading(true)

    auth
      .login(username, password)
      .then((res) => {
        dispatchUser(
          setUser({
            username: res.username,
            email: res.email,
            nickname: res.nickname,
            roles: res.roles,
            locked: res.locked,
            expired: res.expired,
            credentialsExpired: res.credentialsExpired,
            enabled: res.enabled,
            creationDate: res.creationDate,
            token: res.token,
            refreshToken: res.refreshToken,
            preferences: {
              kanjiFont: res.preferences.kanjiFont,
              language: res.preferences.language,
              theme: res.preferences.theme,
              confidenceMenuStyle: res.preferences.confidenceMenuStyle,
              highScoresBehaviour: res.preferences.highScoresBehaviour,
              flashCardsQuantity: res.preferences.flashCardsQuantity,
              defaultMode: res.preferences.defaultMode,
              streakCardView: res.preferences.streakCardView,
              profileVisibility: res.preferences.profileVisibility,
              activityFeedQuantity: res.preferences.activityFeedQuantity,
              romajiVisibility: res.preferences.romajiVisibility,
              mistakesReminders: res.preferences.mistakesReminders,
              streakNotifications: res.preferences.streakNotifications
            }
          })
        )

        props.onSuccess()
      })
      .catch((e) => {
        if (e === "AUTHENTICATION_ERROR") {
          setPassword("")
          setPasswordValid(false)
          setError("Username or password is incorrect.")
        } else {
          setError("Sorry, an unknown error has occurred.")
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value
    setUsername(username)
    setUsernameValid(username.length > 0)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value
    setPassword(password)
    setPasswordValid(password.length > 0)
  }

  const disabled = !formValid || loading || !ready

  return (
    <Modal.Body className={styles.body} data-testid="login-form">
      {!!error && <Alert variant="danger">{error}</Alert>}

      {props.username && !props.info && <Alert variant="success">Registration successful. You can log-in below.</Alert>}

      {props.info && !error && <Alert variant="warning">{props.info}</Alert>}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{t("forms.common.username")}</Form.Label>
        <Form.Control
          required
          value={username}
          ref={usernameField}
          isValid={usernameValid}
          className={styles.input}
          isInvalid={!usernameValid}
          data-testid="username-input"
          onChange={handleUsernameChange}
          placeholder={t("forms.common.username")}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{t("forms.common.password")}</Form.Label>
        <Form.Control
          required
          type="password"
          value={password}
          ref={passwordField}
          isValid={passwordValid}
          className={styles.input}
          isInvalid={!passwordValid}
          data-testid="password-input"
          onChange={handlePasswordChange}
          placeholder={t("forms.common.password")}
        />
      </Form.Group>

      <Form.Group>
        <Button
          className={styles.login}
          variant="success"
          onClick={login}
          disabled={disabled}
          data-testid="login-button"
        >
          {(loading || !ready) && <FontAwesomeIcon icon={faSpinner} spin fixedWidth data-testid="login-loading" />}{" "}
          {t("action.login")}
        </Button>
      </Form.Group>
    </Modal.Body>
  )
}

export default LoginForm
