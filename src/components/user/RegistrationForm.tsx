import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import styles from "../../styles/sass/components/user/UserForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export interface RegistrationFormProps {
    onSuccess: () => void;
}

const RegistrationForm = (props: RegistrationFormProps) => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [validUsername, setValidUsername] = useState(false);
    const [validNickName, setValidNickName] = useState(true);
    const [validPassword, setValidPassword] = useState(false);
    const [validSecondPassword, setValidSecondPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);

    const isFormValid = (): boolean => {
        return validEmail && validUsername && validNickName && validPassword && validSecondPassword;
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        const isValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        setEmail(email);
        setValidEmail(isValid);
    }

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const username = e.target.value;
        const isValid = username.length >= 3 && username.length <= 15;
        setUsername(username);
        setValidUsername(isValid);
    }

    const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nickname = e.target.value;
        const isValid = nickname.length >= 3 && nickname.length <= 12;
        setNickname(nickname);
        setValidNickName(isValid);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        const isValid = isPasswordValid(password);
        setPassword(password);
        setValidPassword(isValid);
    }

    const handleSecondPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const secondPassword = e.target.value;
        const isValid = isPasswordValid(secondPassword);
        setSecondPassword(secondPassword);
        setValidSecondPassword(isValid);
    }

    /**
     * 1 x Lowercase Letter, 1 x Uppercase Letter, 1 x Digit, 1 x Special Character, Length >= 8 and <= 36
     */
    const isPasswordValid = (value: string): boolean => {
        return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,36}$)/.test(value);
    }

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
                    onChange={handleEmailChange}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
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
                    onChange={handleUsernameChange}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Nickname</Form.Label>
                <Form.Control
                    value={nickname}
                    placeholder="Nickname"
                    isValid={validNickName}
                    isInvalid={!validNickName}
                    onChange={handleNicknameChange}
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
                    onChange={handlePasswordChange}
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
                    onChange={handleSecondPasswordChange}
                />
            </Form.Group>

            <Form.Group>
                <Button className={styles.button} variant="info" disabled={!isFormValid()} onClick={props.onSuccess}>
                    {loading && <FontAwesomeIcon icon={faSpinner} spin fixedWidth />}
                    {' Register'}
                </Button>
            </Form.Group>
        </Modal.Body>
    );
}

export default RegistrationForm;
