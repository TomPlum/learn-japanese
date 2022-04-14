import { Alert, Button, Col, Form } from "react-bootstrap";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle, faPencilAlt, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../../styles/sass/components/layout/wizard/form/CustomPresetForm.module.scss";
import PlayService from "../../../../service/PlayService";
import { SessionSettings } from "../../../../domain/session/settings/SessionSettings";
import IconPicker from "../../../ui/menu/icon/IconPicker";
import { Icon } from "../../../../domain/Icon";

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
    const [icon, setIcon] = useState<Icon>("FaRocket")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleSave = () => {
        setLoading(true);

        service.saveCustomPreset(name, icon, settings).then(response => {
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
        <div data-testid="save-custom-preset-form">
            {error && (
                <Alert variant="danger">{error}</Alert>
            )}

            {success && (
                <Alert variant="success">
                    <FontAwesomeIcon icon={faCheckCircle} fixedWidth />
                    <span>{` Saved "${name}" successfully.`}</span>
                </Alert>
            )}

            {!success && (
                <Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} style={{ margin: 0 }}>
                            <Form.Label>
                                <FontAwesomeIcon icon={faPencilAlt} fixedWidth/>
                                <span>{" Save Custom Preset"}</span>
                            </Form.Label>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} xs={2} className={styles.iconPickerContainer}>
                            <IconPicker size="1.4em" className={styles.iconPicker} onSelect={icon => setIcon(icon)} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Control
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Enter a name for your preset"
                            />
                        </Form.Group>

                        <Form.Group as={Col} className={styles.buttonContainer} xs={2}>
                            <Button variant="primary" className={styles.button} disabled={disableSave} onClick={handleSave}>
                                <FontAwesomeIcon icon={saveIcon} spin={loading} fixedWidth className={styles.icon}/>
                                <span>Save</span>
                            </Button>
                        </Form.Group>

                        <Form.Group as={Col} className={styles.buttonContainer} xs={2}>
                            <Button variant="danger" onClick={onCancel} className={styles.button} disabled={loading}>
                                <FontAwesomeIcon icon={faTimes} fixedWidth className={styles.icon}/>
                                <span>Cancel</span>
                            </Button>
                        </Form.Group>
                    </Form.Row>
                </Form.Group>
            )}
        </div>
    );
}

export default CustomPresetForm;
