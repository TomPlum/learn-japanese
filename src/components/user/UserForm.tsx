import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "../../styles/sass/components/user/UserForm.module.scss";
import { faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

export interface UserFormProps {
    show: boolean;
    onClose: () => void;
}

const UserForm = (props: UserFormProps) => {

    const { show, onClose } = props;
    const [login, setLogin] = useState(true);
    const [registeredUsername, setRegisteredUsername] = useState("");

    const onSuccessfulRegistration = (username: string) => {
        setRegisteredUsername(username);
        setLogin(true);
    }

    return (
        <Modal contentClassName={styles.modal} centered backdrop="static" onHide={onClose} show={show} data-testid="user-modal">
            <Modal.Header className={styles.header} closeButton onHide={onClose}>
                <Modal.Title>
                    <FontAwesomeIcon icon={login ? faUser : faUserPlus} fixedWidth />
                    {login ? "Login" : " Register"}
                </Modal.Title>
            </Modal.Header>

            {login ?
                <LoginForm onSuccess={onClose} username={registeredUsername} />
                : <RegistrationForm onSuccess={onSuccessfulRegistration} />
            }

            <Modal.Footer className={styles.footer}>
                <p className={styles.footerText} onClick={() => setLogin(!login)}>
                    {login ? "I don't have an account" : "I already have an account"}
                </p>
            </Modal.Footer>
        </Modal>
    )
}

export default UserForm;
