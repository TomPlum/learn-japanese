import { Alert, Button, FormControl } from "react-bootstrap";
import InfoButton from "../../ui/buttons/InfoButton";
import { OverlayChildren } from "react-bootstrap/Overlay";
import { useEffect, useRef, useState } from "react";
import styles from "../../../styles/sass/components/user/profile/PasswordConfirmation.module.scss";

export interface PasswordConfirmationProps {
    alertInfo: OverlayChildren;
    onSubmit: (password: string) => void;
    onDismiss: () => void;
}

const PasswordConfirmation = (props: PasswordConfirmationProps) => {

    const [password, setPassword] = useState("");
    const field = useRef<HTMLInputElement>(null);

    useEffect(() => {
        field.current?.focus();
    }, []);

    const confirm = () => {
        props.onSubmit(password);
    }

    const disabled = password.length == 0;

    return (
        <div className={styles.wrapper}>
            <Alert variant="warning" className={styles.alert}>
                Please confirm your password.
            </Alert>

            <Alert variant="danger" className={styles.alert}>
                <span>Remember - this operation is irreversible.</span>
                <InfoButton popover={props.alertInfo} className={styles.info} />
            </Alert>

            <FormControl
                required
                ref={field}
                type="password"
                value={password}
                placeholder="Password"
                className={styles.password}
                onChange={e => setPassword(e.target.value)}
            />

            <Button variant="success" onClick={props.onDismiss} block>
                I've changed my mind
            </Button>

            <Button variant="danger" onClick={confirm} disabled={disabled} className={styles.confirm} block>
                Delete my account
            </Button>

        </div>
    );
}

export default PasswordConfirmation;
