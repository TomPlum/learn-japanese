import { Alert, Button, FormControl } from "react-bootstrap"
import InfoButton from "../../../ui/buttons/InfoButton"
import { OverlayChildren } from "react-bootstrap/Overlay"
import { useEffect, useRef, useState } from "react"
import styles from "./PasswordConfirmation.module.scss"
import { faExclamationTriangle, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslation } from "react-i18next"
import useDeleteAccount from "api/hooks/auth/useDeleteAccount";

export interface PasswordConfirmationProps {
  alertInfo: OverlayChildren
  onDismiss: () => void
}

const PasswordConfirmation = (props: PasswordConfirmationProps) => {
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string>()
  const { mutateAsync, isPending } = useDeleteAccount()
  const { t } = useTranslation("translation", { keyPrefix: "settings.modal.user.confirmation-modal" })

  const field = useRef<HTMLInputElement>(null)

  useEffect(() => {
    field.current?.focus()
  }, [field])

  const deleteAccount = async () => {
    const { error } = await mutateAsync({ password })
    setError(error)
  }

  const disabled = password.length === 0

  return (
    <div className={styles.wrapper} data-testid="password-confirmation">
      <Alert variant="warning" className={styles.alert}>
        {t("confirm-password")}
      </Alert>

      <Alert variant="danger" className={styles.alert}>
        {error ? (
          <>
            <FontAwesomeIcon icon={faExclamationTriangle} fixedWidth />
            <span> {error}</span>
          </>
        ) : (
          <>
            <span>{t("irreversible-operation")}</span>
            <InfoButton popover={props.alertInfo} className={styles.info} />
          </>
        )}
      </Alert>

      <FormControl
        required
        ref={field}
        type="password"
        value={password}
        className={styles.password}
        placeholder={t("password-placeholder")}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button variant="success" onClick={props.onDismiss} className={styles.changed}>
        {t("changed-mind")}
      </Button>

      <Button variant="danger" onClick={deleteAccount} disabled={disabled} className={styles.confirm}>
        {isPending && <FontAwesomeIcon icon={faSpinner} fixedWidth spin />}
        {t("delete-account")}
      </Button>
    </div>
  )
}

export default PasswordConfirmation
