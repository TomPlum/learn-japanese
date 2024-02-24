import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Modal } from "react-bootstrap"
import styles  from "./UserForm.module.scss"
import { faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import LoginForm from "./../LoginForm"
import RegistrationForm from "./../RegistrationForm"
import { useTranslation } from "react-i18next"

export interface UserFormProps {
  show: boolean
  onClose: () => void
}

const UserForm = (props: UserFormProps) => {
  const { show, onClose } = props

  const { t } = useTranslation()
  const [login, setLogin] = useState(true)
  const [registeredUsername, setRegisteredUsername] = useState("")

  const onSuccessfulRegistration = (username: string) => {
    setRegisteredUsername(username)
    setLogin(true)
  }

  return (
    <Modal
      contentClassName={styles.modal}
      centered
      backdrop="static"
      onHide={onClose}
      show={show}
      data-testid="user-modal"
    >
      <Modal.Header className={styles.header} closeButton closeLabel="Close" onHide={onClose}>
        <Modal.Title>
          <FontAwesomeIcon icon={login ? faUser : faUserPlus} fixedWidth className={styles.icon} />
          {login ? t("action.login") : t("action.register")}
        </Modal.Title>
      </Modal.Header>

      {login ? (
        <LoginForm onSuccess={onClose} registeredUsername={registeredUsername} />
      ) : (
        <RegistrationForm onSuccess={onSuccessfulRegistration} />
      )}

      <Modal.Footer className={styles.footer}>
        <p className={styles.footerText} onClick={() => setLogin(!login)}>
          {login ? t("forms.login.no-account") : t("forms.register.already-registered")}
        </p>
      </Modal.Footer>
    </Modal>
  )
}

export default UserForm
