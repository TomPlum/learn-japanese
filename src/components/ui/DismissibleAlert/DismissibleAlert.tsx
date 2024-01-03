import { Alert } from "react-bootstrap"
import { AlertProps } from "react-bootstrap/Alert"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import styles  from "./DismissibleAlert.module.scss"
import { PropsWithChildren } from "react"

export interface DismissibleAlertProps extends AlertProps {
  onDismiss?: () => void
}

const DismissibleAlert = (props: PropsWithChildren<DismissibleAlertProps>) => {
  const { onDismiss, children, ...rest } = props

  return (
    <div className={styles.container}>
      <Alert {...rest}>{children}</Alert>

      <FontAwesomeIcon
        fixedWidth
        icon={faTimes}
        onClick={onDismiss}
        className={styles.dismiss}
        data-testid="dismiss-error-alert"
      />
    </div>
  )
}

export default DismissibleAlert
