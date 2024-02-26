import React, { useCallback, useEffect, useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap"
import styles from "components/user/UserForm/UserForm.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import UserService from "../../../service/UserService"
import InfoButton from "../../ui/buttons/InfoButton"
import PopOver from "../../ui/PopOver"
import { useDebouncedEffect } from "hooks"
import { useTranslation } from "react-i18next"
import useRegisterUser from "api/hooks/auth/useRegisterUser";
import { RegistrationFormProps } from "components/user/RegistrationForm/types.ts";


const RegistrationForm = ({ onSuccess }: RegistrationFormProps) => {
  const { t } = useTranslation()
  const userService = new UserService()
  const { mutateAsync: register, isPending } = useRegisterUser()

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [nickname, setNickname] = useState("")
  const [password, setPassword] = useState("")
  const [secondPassword, setSecondPassword] = useState("")

  const [validEmail, setValidEmail] = useState(false)
  const [validUsername, setValidUsername] = useState(false)
  const [validNickName, setValidNickName] = useState(true)
  const [validPassword, setValidPassword] = useState(false)
  const [validSecondPassword, setValidSecondPassword] = useState(false)

  const [userExists, setUserExists] = useState(false)
  const [emailExists, setEmailExists] = useState(false)

  const [userEligibilityLoading, setUserEligibilityLoading] = useState(false)
  const [emailEligibilityLoading, setEmailEligibilityLoading] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)
  const [emailFocused, setEmailFocused] = useState(false)

  useDebouncedEffect(() => {
    if (validUsername) {
      checkUsernameEligibility()
    }
  }, 200, [username])

  useDebouncedEffect(() => {
    if (validEmail) {
      checkEmailEligibility()
    } else {
      setEmailExists(false)
    }
  }, 200, [email])

  useEffect(() => {
    setValidSecondPassword(password === secondPassword)
  }, [password, secondPassword])

  const isFormValid = (): boolean => {
    return validEmail && validUsername && validNickName && validPassword && validSecondPassword
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    const isValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    setEmail(email)
    setValidEmail(isValid)
  }

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value
    const isValid = username.length >= 3 && username.length <= 15
    setUsername(username)
    setValidUsername(isValid)
  }

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nickname = e.target.value
    const isValid = nickname.length >= 3 && nickname.length <= 12
    setNickname(nickname)
    setValidNickName(isValid)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value
    const isValid = isPasswordValid(password)
    setPassword(password)
    setValidPassword(isValid)
  }

  const handleSecondPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const secondPassword = e.target.value
    const isValid = isPasswordValid(secondPassword)
    setSecondPassword(secondPassword)
    setValidSecondPassword(isValid)
  }

  const isPasswordValid = (value: string): boolean => {
    // 1 x Lowercase Letter, 1 x Uppercase Letter, 1 x Digit, 1 x Special Character, Length >= 8 and <= 36
    return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,36}$)/.test(value)
  }

  const getPasswordPolicyFailureReason = () => {
    const prefix = "forms.register.password-policy"

    if (!/(?=.*[a-z])/.test(password)) {
      return t(`${prefix}.lowercase`)
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      return t(`${prefix}.uppercase`)
    }

    if (!/(?=.*[0-9])/.test(password)) {
      return t(`${prefix}.number`)
    }

    if (!/(?=.*[^A-Za-z0-9])/.test(password)) {
      return t(`${prefix}.special-char`)
    }

    if (!/(?=.{8,36}$)/.test(password)) {
      return t(`${prefix}.length`)
    }
  }

  const passwordPolicyInfo = (
    <PopOver
      title={t("forms.register.password-policy.title")}
      text={
        <div>
          <ul className={styles.list}>
            <li>At least 1 lowercase letter</li>
            <li>At least 1 uppercase letter</li>
            <li>At least 1 number</li>
            <li>At least 1 special character</li>
            <li>Be between 3 and 36 characters</li>
          </ul>
        </div>
      }
    />
  )

  const registerUser = useCallback(async () => {
    try {
      await register({
        username,
        email,
        password,
        nickname
      })

      onSuccess(username)
    } catch (error: Error) {
      setError(error.message)
    }
  }, [register, username, email, password, nickname, onSuccess])

  const checkUsernameEligibility = () => {
    setUserEligibilityLoading(true)
    userService
      .usernameExists(username)
      .then((response) => {
        setUserExists(response.exists)
        setValidUsername(!response.exists)

        if (response.error) {
          setError(response.error)
        }
      })
      .catch((response) => {
        setError(response.error)
        setUserExists(false)
      })
      .finally(() => {
        setUserEligibilityLoading(false)
      })
  }

  const checkEmailEligibility = () => {
    setEmailEligibilityLoading(true)
    userService
      .emailAlreadyRegistered(email)
      .then((response) => {
        setEmailExists(response.exists)
        setValidEmail(!response.exists)

        if (response.error) {
          setError(response.error)
        }
      })
      .catch((response) => {
        setError(response.error)
        setEmailExists(false)
      })
      .finally(() => {
        setEmailEligibilityLoading(false)
      })
  }

  return (
    <Modal.Body className={styles.body} data-testid="registration-form">
      {error && (
        <Alert variant="danger" data-testid='registration-form-error'>
          {error}
        </Alert>
      )}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{t("forms.common.email")}*</Form.Label>
        <Form.Control
          required
          type="email"
          value={email}
          isValid={validEmail}
          isInvalid={!validEmail}
          className={styles.input}
          placeholder="Enter email"
          onChange={handleEmailChange}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />

        {emailFocused && email.length === 0 && (
          <Form.Text className="text-muted">
            {t("forms.register.email-not-shared")}
          </Form.Text>
        )}

        {emailExists && !emailEligibilityLoading && (
          <Form.Text className="text-muted">
            {t("forms.register.email-taken")}
          </Form.Text>
        )}

        {!emailExists && !emailEligibilityLoading && validEmail && (
          <Form.Text className="text-muted">
            {t("forms.register.email-available")}
          </Form.Text>
        )}

        {emailEligibilityLoading && (
          <Form.Text className="text-muted">
            <FontAwesomeIcon icon={faSpinner} spin fixedWidth />
            {t("forms.register.checking-email-eligibility")}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label>{t("forms.common.username")}*</Form.Label>
        <Form.Control
          required
          value={username}
          isValid={validUsername}
          className={styles.input}
          isInvalid={!validUsername}
          onChange={handleUsernameChange}
          placeholder={t("forms.common.username")}
        />

        {userExists && !userEligibilityLoading && (
          <Form.Text className="text-muted">
            {t("forms.register.username-taken")}
          </Form.Text>
        )}

        {!userExists && !userEligibilityLoading && validUsername && (
          <Form.Text className="text-muted">
            {t("forms.register.username-available")}
          </Form.Text>
        )}

        {userEligibilityLoading && (
          <Form.Text className="text-muted">
            <FontAwesomeIcon icon={faSpinner} spin fixedWidth />
            {t("forms.register.checking-username-eligibility")}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label>
          {t("forms.common.nickname")}
        </Form.Label>

        <Form.Control
          value={nickname}
          isValid={validNickName}
          className={styles.input}
          isInvalid={!validNickName}
          onChange={handleNicknameChange}
          placeholder={t("forms.common.nickname")}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>
          {t("forms.common.password")}*
        </Form.Label>

        <Form.Control
          required
          type="password"
          value={password}
          isValid={validPassword}
          className={styles.input}
          isInvalid={!validPassword}
          onChange={handlePasswordChange}
          placeholder={t("forms.common.password")}
        />

        {!validPassword && password.length > 0 && (
          <Form.Text className="text-muted">
            <InfoButton popover={passwordPolicyInfo} />
            {getPasswordPolicyFailureReason()}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label>
          {t("forms.common.confirm-password")}*
        </Form.Label>

        <Form.Control
          required
          type="password"
          value={secondPassword}
          className={styles.input}
          isValid={validSecondPassword}
          isInvalid={!validSecondPassword}
          onChange={handleSecondPasswordChange}
          placeholder={t("forms.common.confirm-password")}
        />

        {password !== secondPassword && validPassword && (
          <Form.Text className="text-muted">
            {t("forms.register.passwords-dont-match")}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group>
        <Button className={styles.button} variant="info" disabled={!isFormValid()} onClick={registerUser}>
          {isPending && (
            <FontAwesomeIcon
              spin
              fixedWidth
              icon={faSpinner}
              data-testid="register-loading"
            />
          )}{" "}

          {t("action.register")}
        </Button>
      </Form.Group>
    </Modal.Body>
  )
}

export default RegistrationForm
