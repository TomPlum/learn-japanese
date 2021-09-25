import React, { useEffect, useState } from "react";
import { Container, Row, Toast } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faTools, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { addControllerMessage, clearErrors, NotificationType, removeError } from "../../slices/ErrorSlice";
import { useErrorDispatch, useErrorSelector } from "../../hooks";
import styles from "../../styles/sass/components/error/ErrorContainer.module.scss"
import dayjs from "dayjs";
import Copyable from "../ui/Copyable";

const ErrorContainer = () => {

    const errorDispatcher = useErrorDispatch();
    const errors = useErrorSelector(state => state.error.errors);
    const [trigger, setTrigger] = useState(false);
    const [hasControllerMessage, setHasControllerMessage] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTrigger(!trigger);
        }, 60 * 1000);

        return () => clearTimeout(timeout);
    }, [trigger]);

    useEffect(() => {
        if (Object.values(errors).length > 4 && !hasControllerMessage) {
            errorDispatcher(addControllerMessage());
            setHasControllerMessage(true);
        }
    }, [errors]);

    const onDismiss = (id: string) => {
        errorDispatcher(removeError(id));
    }

    const onClearErrors = () => {
        errorDispatcher(clearErrors());
        setHasControllerMessage(false);
    }

    const getTime = (time: number) => {
        const mins = dayjs(Date.now()).diff(time, 'minute', false);
        const hours = Math.floor(mins / 60);
        const remainingMins = mins % 60;
        return mins > 0 ? hours > 0 ? `${hours}h ${remainingMins}m ago` : `${mins}m ago` : "Just now";
    }

    return (
        <Container className={styles.wrapper}>
            {Object.entries(errors).sort(([_, error]) => error.precedence).map(([id, error]) => {
                return error.type !== NotificationType.SPECIAL ? (
                    <Toast onClose={() => onDismiss(id)} key={id} className={styles.toast} animation>
                        <Toast.Header className={styles.header}>
                            <FontAwesomeIcon icon={faExclamationCircle} fixedWidth className={styles.icon}/>
                            <strong className={styles.title}>
                                <Copyable>
                                    <span>{error.title}</span>
                                </Copyable>
                            </strong>
                            <small className="text-muted">
                                {getTime(error.time)}
                            </small>
                        </Toast.Header>

                        <Toast.Body className={styles.body}>
                            <Copyable>
                                <span>{error.body}</span>
                            </Copyable>
                        </Toast.Body>
                    </Toast>
                ) : (
                    <Toast onClose={() => onDismiss(id)} key={id} className={styles.toast} animation>
                        <Toast.Header className={styles.header}>
                            <FontAwesomeIcon icon={faTools} fixedWidth className={styles.controllerIcon}/>
                            <strong className={styles.title}>
                                {error.title}
                            </strong>
                        </Toast.Header>

                        <Toast.Body className={styles.controllerBody}>
                            <Row className={styles.iconWrapper} onClick={onClearErrors}>
                                <FontAwesomeIcon
                                    icon={faTrashAlt}
                                    fixedWidth size="3x"
                                    className={styles.reset}
                                />
                                <span className={styles.clearAll}>Clear all notifications</span>
                            </Row>
                        </Toast.Body>
                    </Toast>
                );
            })}
        </Container>
    );
}

export default ErrorContainer;
