import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import styles from "../../styles/sass/components/user/UserForm.module.scss";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useUserDispatch, useErrorDispatch } from "../../hooks";
import { setJWT, setUser } from "../../slices/UserSlice";
import auth from "../../service/AuthenticationService";
import { addError } from "../../slices/ErrorSlice";

export interface LoginFormProps {
    onSuccess: () => void;
}

const LoginForm = (props: LoginFormProps) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [usernameValid, setUsernameValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const [badCredentials, setBadCredentials] = useState(false);

    const usernameField = useRef<HTMLInputElement>(null);

    const dispatchUser = useUserDispatch();
    const dispatchNotification = useErrorDispatch();

    const formValid = usernameValid && passwordValid;

    useEffect(() =>  usernameField?.current?.focus(), []);

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
                creationDate: "some date"
            }));

            dispatchUser(setJWT(res.token));
            props.onSuccess();
        }).catch(e => {
            if (e === "AUTHENTICATION_ERROR") {
                setBadCredentials(true);
                setPassword("")
                setPasswordValid(false)
            } else {
                dispatchNotification(addError({
                    title: "Login Error",
                    body: e
                }));
                props.onSuccess();
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
            {badCredentials && <Alert variant="danger">Username or password is incorrect.</Alert>}

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    required
                    value={username}
                    ref={usernameField}
                    placeholder="Username"
                    isValid={usernameValid}
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
                    placeholder="Password"
                    isValid={passwordValid}
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
