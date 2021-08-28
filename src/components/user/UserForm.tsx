import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import styles from "../../styles/sass/components/user/UserForm.module.scss";
import { faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

export interface UserFormProps {
    show: boolean;
    location: string;
    onClose: () => void;
}

interface UserFormState {
    login: boolean;
}

class UserForm extends Component<UserFormProps, UserFormState> {

    constructor(props: Readonly<UserFormProps> | UserFormProps) {
        super(props);
        this.state = {
            login: true,
        }
    }

    render() {
        const { show, onClose } = this.props;
        const { login } = this.state;

        return (
            <Modal contentClassName={styles.modal} centered backdrop="static" onHide={onClose} show={show} data-testid="user-modal">
                <Modal.Header className={styles.header} closeButton onHide={onClose}>
                    <Modal.Title>
                        <FontAwesomeIcon icon={login ? faUser : faUserPlus} fixedWidth />
                        {login ? "Login" : " Register"}
                    </Modal.Title>
                </Modal.Header>

                {login ? <LoginForm onSuccess={onClose}/> : <RegistrationForm onSuccess={onClose} /> }

                <Modal.Footer className={styles.footer}>
                    <p className={styles.footerText} onClick={() => this.setState({ login: !login })}>
                        {login ? "I don't have an account" : "I already have an account"}
                    </p>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default UserForm;
