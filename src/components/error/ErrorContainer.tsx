import React from "react";
import { Container, Toast } from "react-bootstrap";
import Arrays from "../../utility/Arrays";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Error, removeError } from "../../slices/ErrorSlice";
import { useErrorDispatch, useErrorSelector } from "../../hooks";
import styles from "../../styles/sass/components/error/ErrorContainer.module.scss"

const ErrorContainer = () => {

    const errorDispatcher = useErrorDispatch();
    const errors = useErrorSelector(state => state.error.errors);

    const onDismiss = (id: string) => {
        errorDispatcher(removeError(id));
    }

    const getHeader = (): string => {
        const headers = ["Oh no!", "Oops!", "Whoops!", "Oh dear!", "Something went wrong."];
        return Arrays.getRandomElements(headers, 1)[0];
    }

    return (
        <Container className={styles.wrapper}>
            {errors.map((error: Error) => {
                return (
                    <Toast onClose={() => onDismiss(error.id)}>
                        <Toast.Header>
                            <FontAwesomeIcon icon={faExclamationCircle} fixedWidth />
                            {getHeader()}
                        </Toast.Header>
                        <Toast.Body>
                            {error.body}
                        </Toast.Body>
                    </Toast>
                );
            })}
        </Container>
    );
}

export default ErrorContainer;
