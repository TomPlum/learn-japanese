import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import styles from "../../styles/sass/components/user/LoginRegistrationForm.module.scss";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export interface LoginFormProps {
    onSuccess: () => void;
}

interface LoginFormState {
    username: string;
    password: string;
    usernameValid: boolean;
    passwordValid: boolean;
    loading: boolean;
}

class LoginForm extends Component<LoginFormProps, LoginFormState> {

    constructor(props: LoginFormProps) {
        super(props);
        this.state = {
            username: "",
            password: "",
            usernameValid: false,
            passwordValid: false,
            loading: false,
        }
    }

    render() {
        const { username, password, usernameValid, passwordValid, loading } = this.state;

        return (
            <Modal.Body className={styles.body}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        required
                        value={username}
                        placeholder="Username"
                        isValid={usernameValid}
                        isInvalid={!usernameValid}
                        onChange={this.handleUsernameChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        value={password}
                        placeholder="Password"
                        isValid={passwordValid}
                        isInvalid={!passwordValid}
                        onChange={this.handlePasswordChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Button className={styles.login} variant={"success"} onClick={this.handleSubmit} disabled={!this.isFormValid()}>
                        {loading && <FontAwesomeIcon icon={faSpinner} spin fixedWidth />}
                        {' Login'}
                    </Button>
                </Form.Group>
            </Modal.Body>
        )
    }

    private handleSubmit = () => {
        const { username, password } = this.state;
        this.setState({ loading: true });
        //TODO: Hit REST API and get JWT token
        this.setState({ loading: false });
        this.props.onSuccess();
    }

    private handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const username = e.target.value;
        this.setState({ username: username, usernameValid: !!username });
    }

    private handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        this.setState({ password: password, passwordValid: !!password });
    }

    private isFormValid = (): boolean => {
        const { usernameValid, passwordValid } = this.state;
        return usernameValid && passwordValid;
    }
}

export default LoginForm;
