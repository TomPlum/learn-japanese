import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import styles from "../../styles/sass/components/user/UserForm.module.scss";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useUserDispatch } from "../../hooks";
import { setUser } from "../../slices/UserSlice";

export interface LoginFormProps {
    onSuccess: () => void;
}

const LoginForm = (props: LoginFormProps) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [usernameValid, setUsernameValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatchUser = useUserDispatch();

    const handleSubmit = () => {
        setLoading(true);
        //TODO: Hit REST API and get JWT token
        dispatchUser(setUser({ username: username, nickname: "Tom" }));
        setLoading(false);
        props.onSuccess();
    }

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const username = e.target.value;
        setUsername(username);
        setUsernameValid(!!username);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        setPassword(password);
        setPasswordValid(!!password);
    }

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
                <Button className={styles.login} variant={"success"} onClick={handleSubmit} disabled={!(usernameValid && passwordValid)}>
                    {loading && <FontAwesomeIcon icon={faSpinner} spin fixedWidth/>}
                    {' Login'}
                </Button>
            </Form.Group>
        </Modal.Body>
    );
}

export default LoginForm;
