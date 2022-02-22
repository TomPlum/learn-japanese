import { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "../../styles/sass/components/ui/ConfirmModal.module.scss";

export interface ConfirmModalProps {
    title: string;
    body?: string;
    onConfirm: () => void;
    onDismiss?: () => void;
}

interface ConfirmModalState {
    show: boolean;
}

class ConfirmModal extends Component<ConfirmModalProps, ConfirmModalState> {
    constructor(props: Readonly<ConfirmModalProps> | ConfirmModalProps) {
        super(props);
        this.state = {
            show: true
        }
    }

    render() {
        const { title, body, onDismiss } = this.props;
        const { show } = this.state;
        return (
            <Modal contentClassName={styles.modal} show={show} centered onHide={onDismiss} size="sm" backdrop="static" data-testid="confirm-modal">
                <Modal.Header closeButton className={styles.header}>
                    <span className={styles.title}>{title}</span>
                </Modal.Header>

                <Modal.Body className={styles.body}>
                    {body}
                </Modal.Body>

                <Modal.Footer className={styles.footer}>
                    <Button variant="success" onClick={this.handleYes} className={styles.yes}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={this.handleNo} className={styles.no}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    private handleYes = () => {
        this.setState({ show: false });
        this.props.onConfirm();
    }

    private handleNo = () => {
        this.setState({ show: false });
        this.props?.onDismiss?.();
    }
}

export default ConfirmModal;
