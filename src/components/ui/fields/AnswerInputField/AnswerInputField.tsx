import { ChangeEvent } from "react"
import GameInputField from "./../GameInputField"
import LearnableField from "../../../../domain/learn/LearnableField"
import PopOver from "../../PopOver"
import { useTranslation } from "react-i18next"

export interface AnswerInputFieldProps {
  value: string
  disabled?: boolean
  className?: string
  placeholder?: string
  field: LearnableField
  onChange?: (value: string) => void
}

const AnswerInputField = (props: AnswerInputFieldProps) => {
  const { value, disabled, placeholder, className, field, onChange } = props

  const { t } = useTranslation()

  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.value
    if (field.validationRegex.test(value) || !value) {
      onChange?.(value)
    }
    return false
  }

  return (
    <GameInputField
      value={value}
      disabled={disabled}
      className={className}
      placeholder={placeholder}
      onChange={handleOnChange}
      helpPopover={<PopOver title={t(field.name)} text={t(field.description)} />}
    />
  )
}

export default AnswerInputField
