import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap"
import styles from "components/user/UserForm/UserForm.module.scss"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { useTranslation } from "react-i18next"
import useLogin from "api/hooks/auth/useLogin";

export interface LoginFormProps {
  info?: string
  registeredUsername?: string
  onSuccess: () => void
}

const LoginForm = ({ info, registeredUsername, onSuccess }: LoginFormProps) => {
  const { t, ready } = useTranslation()
  const { mutateAsync, isPending } = useLogin()

  const [error, setError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordValid, setPasswordValid] = useState(false)
  const [usernameValid, setUsernameValid] = useState(!!registeredUsername)
  const [inputUsername, setInputUsername] = useState(registeredUsername ?? "")

  const usernameField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)

  const formValid = usernameValid && passwordValid

  const login = useCallback(async () => {
    try {
      await mutateAsync({ username: inputUsername, password })
      onSuccess()
    } catch (e) {
      if (e === "AUTHENTICATION_ERROR") {
        setPassword("")
        setPasswordValid(false)
        setError("Username or password is incorrect.")
      } else {
        setError("Sorry, an unknown error has occurred.")
      }
    }
  }, [mutateAsync, onSuccess, inputUsername, password])

  useEffect(() => {
    if (inputUsername) {
      passwordField.current?.focus()
    } else {
      usernameField?.current?.focus()
    }
  }, [inputUsername, usernameField, passwordField])

  useEffect(() => {
    const handleKeyDown = async (e: KeyboardEvent) => {
      if (formValid && e.key === "Enter") {
        await login()
        e.preventDefault()
        e.stopPropagation()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [inputUsername, password, login, formValid])

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value
    setInputUsername(username)
    setUsernameValid(username.length > 0)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value
    setPassword(password)
    setPasswordValid(password.length > 0)
  }

  const disabled = !formValid || isPending || !ready

  return (
    <Modal.Body className={styles.body} data-testid="login-form">
      {!!error && (
        <Alert variant="danger">
          {error}
        </Alert>
      )}

      {registeredUsername && !info && (
        <Alert variant="success">
          Registration successful. You can log-in below.
        </Alert>
      )}

      {info && !error && (
        <Alert variant="warning">
          {info}
        </Alert>
      )}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          {t("forms.common.username")}
        </Form.Label>

        <Form.Control
          required
          value={inputUsername}
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
          {(isPending || !ready) && (
            <FontAwesomeIcon
              spin
              fixedWidth
              icon={faSpinner}
              data-testid="login-loading"
            />
          )}{" "}
          {t("action.login")}
        </Button>
      </Form.Group>
    </Modal.Body>
  )
}

export default LoginForm
