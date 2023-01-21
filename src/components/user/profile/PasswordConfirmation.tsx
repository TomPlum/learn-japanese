import { Alert, Button, FormControl } from "react-bootstrap"
import InfoButton from "../../ui/buttons/InfoButton"
import { OverlayChildren } from "react-bootstrap/Overlay"
import { useEffect, useRef, useState } from "react"
import styles from "../../../styles/sass/components/user/profile/PasswordConfirmation.module.scss"
import authService from "../../../service/AuthenticationService"
import { faExclamationTriangle, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useUserDispatch } from "../../../hooks"
import { clearUser } from "../../../slices/UserSlice"
import { useTranslation } from "react-i18next"

export interface PasswordConfirmationProps {
    alertInfo: OverlayChildren
    onDismiss: () => void
}

const PasswordConfirmation = (props: PasswordConfirmationProps) => {
    const userDispatch = useUserDispatch()

    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | undefined>(undefined)
    const { t } = useTranslation("translation", { keyPrefix: "settings.modal.user.confirmation-modal" })

    const field = useRef<HTMLInputElement>(null)

    useEffect(() => {
        field.current?.focus()
    }, [])

    const deleteAccount = () => {
        setLoading(true)
        setError(undefined)

        authService
            .deleteAccount(password)
            .then((response) => {
                if (response.success) {
                    userDispatch(clearUser())
                } else {
                    setError(response.error)
                    setLoading(false)
                }
            })
            .catch((response) => {
                setError(response.error)
                setLoading(false)
            })
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
                {loading && <FontAwesomeIcon icon={faSpinner} fixedWidth spin />}
                {t("delete-account")}
            </Button>
        </div>
    )
}

export default PasswordConfirmation
