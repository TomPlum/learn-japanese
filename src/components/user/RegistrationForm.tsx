import React, { useEffect, useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import styles from "../../styles/sass/components/user/UserForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import authService from "../../service/AuthenticationService";
import UserService from "../../service/UserService";
import InfoButton from "../ui/buttons/InfoButton";
import PopOver from "../ui/PopOver";
import { useDebouncedEffect } from "../../hooks";

export interface RegistrationFormProps {
    onSuccess: (username: string) => void;
}

const RegistrationForm = (props: RegistrationFormProps) => {

    const userService = new UserService();

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

    const [userExists, setUserExists] = useState(false);
    const [emailExists, setEmailExists] = useState(false);

    const [loading, setLoading] = useState(false);
    const [userEligibilityLoading, setUserEligibilityLoading] = useState(false);
    const [emailEligibilityLoading, setEmailEligibilityLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [emailFocused, setEmailFocused] = useState(false);

    useDebouncedEffect(() => {
        if (validUsername) {
            checkUsernameEligibility();
        }
    }, 200, [username]);

    useDebouncedEffect(() => {
        if (validEmail) {
            checkEmailEligibility();
        }
    }, 200, [email]);

    useEffect(() => {
        setValidSecondPassword(password === secondPassword);
    }, [password, secondPassword]);

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

    const isPasswordValid = (value: string): boolean => {
        // 1 x Lowercase Letter, 1 x Uppercase Letter, 1 x Digit, 1 x Special Character, Length >= 8 and <= 36
        return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,36}$)/.test(value);
    }

    const getPasswordPolicyFailureReason = () => {
        if (!/(?=.*[a-z])/.test(password)) {
            return "Password must contain at least one lowercase character.";
        }

        if (!/(?=.*[A-Z])/.test(password)) {
            return "Password must contain at least one uppercase character.";
        }

        if (!/(?=.*[0-9])/.test(password)) {
            return "Password must contain at least one number.";
        }

        if (!/(?=.*[^A-Za-z0-9])/.test(password)) {
            return "Password must contain at least one special character.";
        }

        if (!/(?=.{8,36}$)/.test(password)) {
            return "Password must be between 8 and 36 characters (inclusive).";
        }
    }

    const passwordPolicyInfo = <PopOver
        title="Password Policy"
        text={<div>
            <ul className={styles.list}>
                <li>At least 1 lowercase letter</li>
                <li>At least 1 uppercase letter</li>
                <li>At least 1 number</li>
                <li>At least 1 special character</li>
                <li>Be between 3 and 36 characters</li>
            </ul>
        </div>}
    />

    const registerUser = () => {
        setLoading(true);
        setError(undefined);

        authService.register(username, email, password, nickname).then(response => {
            if (response.data) {
                props.onSuccess(username);
            } else {
                setError(response.error);
            }
        }).catch(response => {
            setError(response.error)
            setLoading(false);
        });
    }

    const checkUsernameEligibility = () => {
        setUserEligibilityLoading(true);
        userService.usernameExists(username).then(response => {
            setUserExists(response.exists);
            setValidUsername(!response.exists);

            if (response.error) {
                setError(response.error);
            }
        }).catch(response => {
            setError(response.error);
            setUserExists(false);
        }).finally(() => {
            setUserEligibilityLoading(false);
        });
    }

    const checkEmailEligibility = () => {
        setEmailEligibilityLoading(true);
        userService.emailAlreadyRegistered(email).then(response => {
            setEmailExists(response.exists);
            setValidEmail(!response.exists);

            if (response.error) {
                setError(response.error);
            }
        }).catch(response => {
            setError(response.error);
            setEmailExists(false);
        }).finally(() => {
            setEmailEligibilityLoading(false);
        });
    }

    return (
        <Modal.Body className={styles.body}>
            {error && <Alert variant="danger">{error}</Alert> }

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address*</Form.Label>
                <Form.Control
                    required
                    type="email"
                    value={email}
                    isValid={validEmail}
                    isInvalid={!validEmail}
                    className={styles.input}
                    placeholder="Enter email"
                    onChange={handleEmailChange}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                />

                {emailFocused && email.length === 0 && (
                    <Form.Text className="text-muted">
                        Your email address will not be shared with anyone else.
                    </Form.Text>
                )}

                {emailExists && !emailEligibilityLoading && (
                    <Form.Text className="text-muted">
                        This email address is already registered.
                    </Form.Text>
                )}

                {!emailExists && !emailEligibilityLoading && validEmail && (
                    <Form.Text className="text-muted">Email address is available.</Form.Text>
                )}

                {emailEligibilityLoading && (
                    <Form.Text className="text-muted">
                        <FontAwesomeIcon icon={faSpinner} spin fixedWidth />
                        Checking email address eligibility...
                    </Form.Text>
                )}
            </Form.Group>

            <Form.Group>
                <Form.Label>Username*</Form.Label>
                <Form.Control
                    required
                    value={username}
                    placeholder="Username"
                    isValid={validUsername}
                    className={styles.input}
                    isInvalid={!validUsername}
                    onChange={handleUsernameChange}
                />

                {userExists && !userEligibilityLoading && (
                    <Form.Text className="text-muted">This username is already taken.</Form.Text>
                )}

                {!userExists && !userEligibilityLoading && validUsername && (
                    <Form.Text className="text-muted">Username is available.</Form.Text>
                )}

                {userEligibilityLoading && (
                    <Form.Text className="text-muted">
                        <FontAwesomeIcon icon={faSpinner} spin fixedWidth />
                        Checking username eligibility...
                    </Form.Text>
                )}
            </Form.Group>

            <Form.Group>
                <Form.Label>Nickname</Form.Label>
                <Form.Control
                    value={nickname}
                    placeholder="Nickname"
                    isValid={validNickName}
                    className={styles.input}
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
                    className={styles.input}
                    isInvalid={!validPassword}
                    onChange={handlePasswordChange}
                />

                {!validPassword && password.length > 0 && (
                    <Form.Text className="text-muted">
                        <InfoButton popover={passwordPolicyInfo} />
                        {getPasswordPolicyFailureReason()}
                    </Form.Text>
                )}
            </Form.Group>

            <Form.Group>
                <Form.Label>Confirm Password*</Form.Label>
                <Form.Control
                    required
                    type="password"
                    value={secondPassword}
                    className={styles.input}
                    isValid={validSecondPassword}
                    placeholder="Confirm Password"
                    isInvalid={!validSecondPassword}
                    onChange={handleSecondPasswordChange}
                />

                {password !== secondPassword && validPassword && (
                    <Form.Text className="text-muted">Passwords do not match.</Form.Text>
                )}
            </Form.Group>

            <Form.Group>
                <Button className={styles.button} variant="info" disabled={!isFormValid()} onClick={registerUser}>
                    {loading && <FontAwesomeIcon icon={faSpinner} spin fixedWidth />}
                    {' Register'}
                </Button>
            </Form.Group>
        </Modal.Body>
    );
}

export default RegistrationForm;
