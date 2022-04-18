import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import styles from "../../styles/sass/components/user/UserForm.module.scss";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useUserDispatch } from "../../hooks";
import { setUser } from "../../slices/UserSlice";
import auth from "../../service/AuthenticationService";

export interface LoginFormProps {
    username?: string;
    onSuccess: () => void;
}

const LoginForm = (props: LoginFormProps) => {

    const [username, setUsername] = useState(props.username ?? "");
    const [password, setPassword] = useState("")
    const [usernameValid, setUsernameValid] = useState(!!props.username);
    const [passwordValid, setPasswordValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const usernameField = useRef<HTMLInputElement>(null);
    const passwordField = useRef<HTMLInputElement>(null);

    const dispatchUser = useUserDispatch();

    const formValid = usernameValid && passwordValid;

    useEffect(() =>  {
        if (username) {
            passwordField.current?.focus();
        } else {
            usernameField?.current?.focus();
        }
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (formValid && e.key === 'Enter') {
                login();
                e.preventDefault();
                e.stopPropagation();
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [username, password]);

    const login = () => {
        setLoading(true);

        auth.login(username, password).then(res => {
            dispatchUser(setUser({
                username: res.username,
                email: res.email,
                nickname: res.nickname,
                roles: res.roles,
                locked: res.locked,
                expired: res.expired,
                credentialsExpired: res.credentialsExpired,
                enabled: res.enabled,
                creationDate: res.creationDate,
                token: res.token,
                preferences: {
                    defaultFont: res.preferences.defaultFont,
                    language: res.preferences.language,
                    theme: res.preferences.theme,
                    confidenceMenuStyle: res.preferences.confidenceMenuStyle,
                    highScores: res.preferences.highScores,
                    cardsPerDay: res.preferences.cardsPerDay,
                    defaultMode: res.preferences.defaultMode
                }
            }));

            props.onSuccess();
        }).catch(e => {
            if (e === "AUTHENTICATION_ERROR") {
                setPassword("")
                setPasswordValid(false)
                setError("Username or password is incorrect.");
            } else {
                setError("Sorry, an unknown error has occurred.");
            }
        }).finally(() => {
            setLoading(false);
        });
    }

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const username = e.target.value;
        setUsername(username);
        setUsernameValid(username.length > 0);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        setPassword(password);
        setPasswordValid(password.length > 0);
    }

    return (
        <Modal.Body className={styles.body}>
            {!!error && <Alert variant="danger">{error}</Alert>}
            {props.username && <Alert variant="success">Registration successful. You can log-in below.</Alert>}

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    required
                    value={username}
                    ref={usernameField}
                    placeholder="Username"
                    isValid={usernameValid}
                    className={styles.input}
                    isInvalid={!usernameValid}
                    onChange={handleUsernameChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    value={password}
                    ref={passwordField}
                    placeholder="Password"
                    isValid={passwordValid}
                    className={styles.input}
                    isInvalid={!passwordValid}
                    onChange={handlePasswordChange}
                />
            </Form.Group>

            <Form.Group>
                <Button className={styles.login} variant="success" onClick={login} disabled={!formValid || loading}>
                    {loading && <FontAwesomeIcon icon={faSpinner} spin fixedWidth/>}
                    {' Login'}
                </Button>
            </Form.Group>
        </Modal.Body>
    );
}

export default LoginForm;
