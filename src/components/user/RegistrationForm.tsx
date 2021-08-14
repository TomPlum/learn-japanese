import React, { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import styles from "../../styles/sass/components/user/LoginRegistrationForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export interface RegistrationFormProps {
    onSuccess: () => void;
}

interface RegistrationFormState {
    email: string;
    username: string;
    nickname: string;
    password: string;
    secondPassword: string;
    validEmail: boolean;
    validUsername: boolean;
    validNickname: boolean;
    validPassword: boolean;
    validSecondPassword: boolean;
    loading: boolean;
    emailFocused: boolean;
}

class RegistrationForm extends Component<RegistrationFormProps, RegistrationFormState> {

    constructor(props: Readonly<RegistrationFormProps> | RegistrationFormProps) {
        super(props);
        this.state = {
            email: "",
            username: "",
            nickname: "",
            password: "",
            secondPassword: "",
            validEmail: false,
            validUsername: false,
            validNickname: true,
            validPassword: false,
            validSecondPassword: false,
            loading: false,
            emailFocused: true
        }
    }

    render() {
        const { onSuccess } = this.props;
        const { email, username, nickname, password, secondPassword } = this.state;
        const { validEmail, validUsername, validNickname, validPassword, validSecondPassword, loading, emailFocused } = this.state;

        return (
            <Modal.Body className={styles.body}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address*</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        value={email}
                        isValid={validEmail}
                        isInvalid={!validEmail}
                        placeholder="Enter email"
                        onChange={this.handleEmailChange}
                        onFocus={() => this.setState({ emailFocused: true })}
                        onBlur={() => this.setState({ emailFocused: false })}
                    />
                    {emailFocused && <Form.Text className="text-muted">
                        Your email address will not be shared with anyone else.
                    </Form.Text>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Username*</Form.Label>
                    <Form.Control
                        required
                        value={username}
                        placeholder="Username"
                        isValid={validUsername}
                        isInvalid={!validUsername}
                        onChange={this.handleUsernameChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Nickname</Form.Label>
                    <Form.Control
                        value={nickname}
                        placeholder="Nickname"
                        isValid={validNickname}
                        isInvalid={!validNickname}
                        onChange={this.handleNicknameChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password*</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        value={password}
                        placeholder="Password"
                        isValid={validPassword}
                        isInvalid={!validPassword}
                        onChange={this.handlePasswordChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Re-Enter Password*</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        value={secondPassword}
                        placeholder="Confirm Password"
                        isValid={validSecondPassword}
                        isInvalid={!validSecondPassword}
                        onChange={this.handleSecondPasswordChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Button className={styles.button} variant="info" disabled={!this.isFormValid()} onClick={onSuccess}>
                        {loading && <FontAwesomeIcon icon={faSpinner} spin fixedWidth />}
                        {' Register'}
                    </Button>
                </Form.Group>
            </Modal.Body>
        )
    }

    private isFormValid = (): boolean => {
        const { validEmail, validUsername, validNickname, validPassword, validSecondPassword } = this.state;
        return validEmail && validUsername && validNickname && validPassword && validSecondPassword;
    }

    private handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        const isValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        this.setState({ email: email, validEmail: isValid });
    }

    private handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const username = e.target.value;
        const isValid = username.length >= 3 && username.length <= 15;
        this.setState({ username: username, validUsername: isValid });
    }

    private handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nickname = e.target.value;
        const isValid = nickname.length >= 3 && nickname.length <= 12;
        this.setState({ nickname: nickname, validNickname: isValid });
    }

    private handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        const isValid = this.isPasswordValid(password);
        this.setState({ password: password, validPassword: isValid });
    }

    private handleSecondPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const secondPassword = e.target.value;
        const isValid = this.isPasswordValid(secondPassword);
        this.setState({ secondPassword: secondPassword, validSecondPassword: isValid });
    }

    /**
     * 1 x Lowercase Letter, 1 x Uppercase Letter, 1 x Digit, 1 x Special Character, Length >= 8 and <= 36
     */
    private isPasswordValid = (value: string): boolean => {
        return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,36}$)/.test(value);
    }
}

export default RegistrationForm;
