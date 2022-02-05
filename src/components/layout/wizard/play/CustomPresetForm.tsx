import { Alert, Button, Col, Form } from "react-bootstrap";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle, faPencilAlt, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../../styles/sass/components/layout/wizard/play/CustomPresetForm.module.scss";
import PlayService from "../../../../service/PlayService";
import { SessionSettings } from "../../../../domain/session/settings/SessionSettings";

export interface CustomPresetFormProps {
    settings: SessionSettings;
    onSuccess: () => void;
    onCancel: () => void;
}

const CustomPresetForm = (props: CustomPresetFormProps) => {

    const { settings, onSuccess, onCancel } = props;

    const service = new PlayService();

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [name, setName] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleSave = () => {
        setLoading(true);

        service.saveCustomPreset(name, settings).then(response => {
            if (response.success) {
                setSuccess(true);
                setTimeout(() => onSuccess(), 2000);
            } else {
                if (response.error) {
                    setError(response.error);
                } else {
                    setError("Failed to save preset.");
                }
            }
        }).catch(() => {
            setError("An error occurred while saving your preset.");
        }).finally(() => {
            setLoading(false);
        });
    }

    const disableSave = name === "" || loading;
    const saveIcon = loading ? faSpinner : faCheck;

    return (
        <div>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && (
                <Alert variant="success">
                    <FontAwesomeIcon icon={faCheckCircle} fixedWidth />
                    <span>{` Saved "${name}" successfully.`}</span>
                </Alert>
            )}

            {!success && <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>
                        <FontAwesomeIcon icon={faPencilAlt} fixedWidth/>
                        <span>{" Preset Name"}</span>
                    </Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Enter a name for your preset"
                    />
                </Form.Group>

                <Form.Group as={Col} className={styles.buttonContainer} xs={2}>
                    <Button variant="primary" className={styles.button} disabled={disableSave} onClick={handleSave}>
                        <FontAwesomeIcon icon={saveIcon} spin={loading} fixedWidth className={styles.icon}/>
                        Save
                    </Button>
                </Form.Group>

                <Form.Group as={Col} className={styles.buttonContainer} xs={2}>
                    <Button variant="danger" onClick={onCancel} className={styles.button} disabled={loading}>
                        <FontAwesomeIcon icon={faTimes} fixedWidth className={styles.icon}/>
                        Cancel
                    </Button>
                </Form.Group>
            </Form.Row>}
        </div>
    );
}

export default CustomPresetForm;
