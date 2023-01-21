import React, { ChangeEvent, useEffect, useState } from "react"
import { Form, OverlayTrigger } from "react-bootstrap"
import LearnableField from "../../../domain/learn/LearnableField"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import PopOver from "../PopOver"
import styles from "../../../styles/sass/components/ui/select/LearnableFieldSelector.module.scss"
import { useTranslation } from "react-i18next"

export interface LearnableFieldSelectorProps {
  defaultField?: LearnableField
  exclude?: LearnableField
  onSelect: (field: LearnableField) => void
}

const LearnableFieldSelector = (props: LearnableFieldSelectorProps) => {
  const { defaultField, exclude, onSelect } = props

  const { t } = useTranslation()
  const [selected, setSelected] = useState(defaultField ?? LearnableField.KANA)

  useEffect(() => {
    onSelect(selected)
  }, [selected])

  const helpPopover = <PopOver title={t(selected.name)} text={t(selected.description)} />

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const field = LearnableField.fromTranslationPath(e.target.value)
    setSelected(field)
    onSelect(field)
  }

  return (
    <div>
      <OverlayTrigger trigger={["hover", "click"]} overlay={helpPopover} placement="top">
        <FontAwesomeIcon icon={faInfoCircle} className={styles.icon} data-testid="field-help" />
      </OverlayTrigger>

      <Form.Control as="select" onChange={handleChange} className={styles.menu} data-testid="learnable-field-selector">
        {LearnableField.values()
          .filter((field: LearnableField) => field !== exclude)
          .map((field) => {
            return (
              <option key={field.name} selected={selected.name === field.name} value={field.name}>
                {t(field.name)}
              </option>
            )
          })}
      </Form.Control>
    </div>
  )
}

export default LearnableFieldSelector
