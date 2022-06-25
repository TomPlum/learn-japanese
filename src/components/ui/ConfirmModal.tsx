import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "../../styles/sass/components/ui/ConfirmModal.module.scss";

export interface ConfirmModalProps {
    title: string;
    body?: string;
    onConfirm: () => void;
    onDismiss?: () => void;
}

const ConfirmModal  = (props: ConfirmModalProps) => {
    const { title, body, onConfirm, onDismiss } = props;

    const [show, setShow] = useState(true);

    const handleYes = () => {
        setShow(false);
        onConfirm();
    }

    const handleNo = () => {
        setShow(false);
        onDismiss?.();
    }

    const modalProps = {
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
                    Yes
                </Button>
                <Button variant="danger" onClick={handleNo} className={styles.no}>
                    No
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmModal;
