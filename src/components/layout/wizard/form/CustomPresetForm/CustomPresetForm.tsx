import { Alert, Button, Col, Form, Row } from "react-bootstrap"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faCheckCircle, faPencilAlt, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons"
import styles  from "./CustomPresetForm.module.scss"
import IconPicker from "../../../../ui/menu/icon/IconPicker"
import { CustomIcon } from "types/Icon"
import { useTranslation } from "react-i18next"
import useSavePlayPreset from "api/hooks/presets/useSavePlayPreset";
import { CustomPresetFormProps } from "components/layout/wizard/form/CustomPresetForm/types.ts";
import useSaveLearnPreset from "api/hooks/presets/useSaveLearnPreset";

const CustomPresetForm = ({ settings, onSuccess, onCancel }: CustomPresetFormProps) => {
  const [name, setName] = useState("")
  const [success, setSuccess] = useState(false)
  const [colour, setColour] = useState("#FFFFFF")
  const [editingName, setEditingName] = useState(false)
  const [icon, setIcon] = useState<CustomIcon>("FaRocket")

  const { mutateAsync: savePlayPreset, isPending: isSavePlayLoading, isError: playError } = useSavePlayPreset()
  const { mutateAsync: saveLearnPreset, isPending: isSaveLearnLoading, isError: learnError } = useSaveLearnPreset()

  const isLoading = isSavePlayLoading || isSaveLearnLoading
  const error = playError || learnError

  const { t } = useTranslation("translation", { keyPrefix: "forms.custom-preset" })
  const actions = useTranslation("translation", { keyPrefix: "action" }).t

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleSave = async () => {
    if (settings.gameSettings) {
      await savePlayPreset({ meta: { name, icon, colour }, settings })
      setSuccess(true)
      setTimeout(() => onSuccess(), 2000)
    } else {
      await saveLearnPreset({ meta: { name, icon, colour }, settings })
      setSuccess(true)
      setTimeout(() => onSuccess(), 2000)
    }
  }

  const handleIconChange = (icon: CustomIcon, colour: string) => {
    setIcon(icon)
    setColour(colour)
  }

  const disableSave = name === "" || isLoading
  const saveIcon = isLoading ? faSpinner : faCheck

  return (
    <div data-testid="save-custom-preset-form">
      {error && (
        <Alert variant="danger">
          {t('failed-to-save')}
        </Alert>
      )}

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
                <FontAwesomeIcon icon={saveIcon} spin={isLoading} fixedWidth className={styles.icon} />
                <span>{actions("save")}</span>
              </Button>

              <Button variant="danger" onClick={onCancel} className={styles.button} disabled={isLoading}>
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
