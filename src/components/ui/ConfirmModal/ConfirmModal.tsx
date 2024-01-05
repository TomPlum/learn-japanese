import { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import styles  from "./ConfirmModal.module.scss"
import { useTranslation } from "react-i18next"
import { ModalProps } from "react-bootstrap/Modal";

export interface ConfirmModalProps {
  title: string
  body?: string
  onConfirm: () => void
  onDismiss?: () => void
}

const ConfirmModal = (props: ConfirmModalProps) => {
  const { title, body, onConfirm, onDismiss } = props

  const [show, setShow] = useState(true)
  const { t } = useTranslation()

  const handleYes = () => {
    setShow(false)
    onConfirm()
  }

  const handleNo = () => {
    setShow(false)
    onDismiss?.()
  }

  const modalProps: ModalProps = {
    contentClassName: styles.content,
    dialogClassName: styles.dialog,
    show: show,
    centered: true,
    onHide: onDismiss,
    "data-testid": "confirm-modal"
  }

  return (
    <Modal {...modalProps}>
      <Modal.Header closeButton className={styles.header}>
        <span className={styles.title}>{title}</span>
      </Modal.Header>

      <Modal.Body className={styles.body}>
        {body}
      </Modal.Body>

      <Modal.Footer className={styles.footer}>
        <Button variant="success" onClick={handleYes} className={styles.yes}>
          {t("action.yes")}
        </Button>

        <Button variant="danger" onClick={handleNo} className={styles.no}>
          {t("action.no")}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmModal
