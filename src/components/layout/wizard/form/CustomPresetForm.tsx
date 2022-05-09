import { Alert, Button, Col, Form } from "react-bootstrap";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle, faPencilAlt, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../../styles/sass/components/layout/wizard/form/CustomPresetForm.module.scss";
import { SessionSettings } from "../../../../domain/session/settings/SessionSettings";
import IconPicker from "../../../ui/menu/icon/IconPicker";
import { CustomIcon } from "../../../../domain/Icon";
import PresetService from "../../../../service/PresetService";

export interface CustomPresetFormProps {
    settings: SessionSettings;
    onSuccess: () => void;
    onCancel: () => void;
}

const CustomPresetForm = (props: CustomPresetFormProps) => {

    const { settings, onSuccess, onCancel } = props;

    const service = new PresetService();

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [icon, setIcon] = useState<CustomIcon>("FaRocket");
    const [colour, setColour] = useState("#FFFFFF");
    const [editingName, setEditingName] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleSave = () => {
        setLoading(true);

        service.saveCustomPreset({ name, icon, colour }, settings).then(response => {
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

    const handleIconChange = (icon: CustomIcon, colour: string) => {
        setIcon(icon);
        setColour(colour);
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
                                <span>{" Preset Details"}</span>
                            </Form.Label>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <div className={styles.preview}>
                                <div className={styles.iconSurface} title="Change Icon">
                                    <IconPicker
                                        onSelect={handleIconChange}
                                        className={styles.iconPicker}
                                    />
                                </div>
                                <div className={!editingName ? styles.inputWrapper : ""} onClick={() => setEditingName(true)}>
                                    {!editingName && (
                                        <span className={styles.name}>
                                            {name === "" ? "My Preset" : name}
                                        </span>
                                    )}

                                    {editingName && (
                                        <Form.Control
                                            autoFocus
                                            value={name}
                                            onChange={handleChange}
                                            placeholder="My Preset"
                                            className={styles.input}
                                            onBlur={() => setEditingName(false)}
                                        />
                                    )}
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group as={Col} className={styles.buttonContainer}>
                            <Button variant="primary" className={styles.button} disabled={disableSave} onClick={handleSave}>
                                <FontAwesomeIcon icon={saveIcon} spin={loading} fixedWidth className={styles.icon}/>
                                <span>Save</span>
                            </Button>

                            <Button variant="danger" onClick={onCancel} className={styles.button} disabled={loading}>
                                <FontAwesomeIcon fixedWidth icon={faTimes} className={styles.icon}/>
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
