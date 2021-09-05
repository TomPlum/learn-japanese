import React, { useEffect, useState } from "react";
import { Container, Toast } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { removeError } from "../../slices/ErrorSlice";
import { useErrorDispatch, useErrorSelector } from "../../hooks";
import styles from "../../styles/sass/components/error/ErrorContainer.module.scss"
import dayjs from "dayjs";
import Copyable from "../ui/Copyable";

const ErrorContainer = () => {

    const errorDispatcher = useErrorDispatch();
    const errors = useErrorSelector(state => state.error.errors);
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTrigger(!trigger);
        }, 60 * 1000);
    }, [trigger]);

    const onDismiss = (id: string) => {
        console.log("Removing Error w/ID: " + id);
        errorDispatcher(removeError(id));
    }

    const getTime = (time: number) => {
        const mins = dayjs(Date.now()).diff(time, 'minute', false);
        const hours = Math.floor(mins / 60);
        const remainingMins = mins % 60;
        return mins > 0 ? hours > 0 ? `${hours}h ${remainingMins}m ago` : `${mins}m ago` : "Just now";
    }

    return (
        <Container className={styles.wrapper}>
            {Object.entries(errors).map(([id, error]) => {
                return (
                    <Toast onClose={() => onDismiss(id)} key={id} className={styles.toast} animation>
                        <Toast.Header className={styles.header}>
                            <FontAwesomeIcon icon={faExclamationCircle} fixedWidth className={styles.icon} />
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
                );
            })}
        </Container>
    );
}

export default ErrorContainer;
