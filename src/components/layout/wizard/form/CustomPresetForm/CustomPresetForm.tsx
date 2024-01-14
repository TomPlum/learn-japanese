import { Alert, Button, Col, Form, Row } from "react-bootstrap"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faCheckCircle, faPencilAlt, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons"
import styles  from "./CustomPresetForm.module.scss"
import { SessionSettings } from "types/session/settings/SessionSettings"
import IconPicker from "../../../../ui/menu/icon/IconPicker"
import { CustomIcon } from "types/Icon"
import PresetService from "../../../../../service/PresetService"
import { useTranslation } from "react-i18next"

export interface CustomPresetFormProps {
  settings: SessionSettings
  onSuccess: () => void
  onCancel: () => void
}

const CustomPresetForm = (props: CustomPresetFormProps) => {
  const { settings, onSuccess, onCancel } = props

  const service = new PresetService()

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [name, setName] = useState("")
  const [icon, setIcon] = useState<CustomIcon>("FaRocket")
  const [colour, setColour] = useState("#FFFFFF")
  const [editingName, setEditingName] = useState(false)
  const { t } = useTranslation("translation", { keyPrefix: "forms.custom-preset" })
  const actions = useTranslation("translation", { keyPrefix: "action" }).t

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleSave = () => {
    setLoading(true)

    service
      .saveCustomPreset({ name, icon, colour }, settings)
      .then((response) => {
        if (response.success) {
          setSuccess(true)
          setTimeout(() => onSuccess(), 2000)
        } else {
          if (response.error) {
            setError(response.error)
          } else {
            setError(t("failed-to-save"))
          }
        }
      })
      .catch(() => {
        setError(t("generic-error"))
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleIconChange = (icon: CustomIcon, colour: string) => {
    setIcon(icon)
    setColour(colour)
  }

  const disableSave = name === "" || loading
  const saveIcon = loading ? faSpinner : faCheck

  return (
    <div data-testid="save-custom-preset-form">
      {error && <Alert variant="danger">{error}</Alert>}

      {success && (
        <Alert variant="success">
          <FontAwesomeIcon icon={faCheckCircle} fixedWidth />
          <span> {t("success-message", { name: name })}</span>
        </Alert>
      )}

      {!success && (
        <Form.Group>
          <Row>
            <Form.Group as={Col} style={{ margin: 0 }}>
              <Form.Label>
                <FontAwesomeIcon icon={faPencilAlt} fixedWidth />
                <span> {t("title")}</span>
              </Form.Label>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col}>
              <div className={styles.preview}>
                <div className={styles.iconSurface} title={t("change-icon")}>
                  <IconPicker onSelect={handleIconChange} className={styles.iconPicker} />
                </div>
                <div className={!editingName ? styles.inputWrapper : ""} onClick={() => setEditingName(true)}>
                  {!editingName && <span className={styles.name}>{name === "" ? t("default-preset-name") : name}</span>}

                  {editingName && (
                    <Form.Control
                      autoFocus
                      value={name}
                      onChange={handleChange}
                      className={styles.input}
                      onBlur={() => setEditingName(false)}
                      placeholder={t("default-preset-name")}
                    />
                  )}
                </div>
              </div>
            </Form.Group>

            <Form.Group as={Col} className={styles.buttonContainer}>
              <Button variant="primary" className={styles.button} disabled={disableSave} onClick={handleSave}>
                <FontAwesomeIcon icon={saveIcon} spin={loading} fixedWidth className={styles.icon} />
                <span>{actions("save")}</span>
              </Button>

              <Button variant="danger" onClick={onCancel} className={styles.button} disabled={loading}>
                <FontAwesomeIcon fixedWidth icon={faTimes} className={styles.icon} />
                <span>{actions("cancel")}</span>
              </Button>
            </Form.Group>
          </Row>
        </Form.Group>
      )}
    </div>
  )
}

export default CustomPresetForm
