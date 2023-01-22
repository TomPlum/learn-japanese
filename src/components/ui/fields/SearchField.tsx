import { Form, InputGroup } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import styles from "../../../styles/sass/components/ui/fields/SearchField.module.scss"
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons"

export interface SearchFieldProps {
  value?: string
  append?: string
  placeholder?: string
  className?: string
  disabled?: boolean
  enableClear?: boolean
  onChange: (value: string) => void
  onClear?: () => void
}

const SearchField = (props: SearchFieldProps) => {
  const { value, append, placeholder, disabled, enableClear, className, onChange, onClear } = props

  return (
    <InputGroup className={[styles.inputGroup, className].join(" ")}>
      <InputGroup.Text className={styles.prepend}>
                <FontAwesomeIcon icon={faSearch} className={styles.icon} />
            </InputGroup.Text>

      <Form.Control
        type="text"
        value={value}
        disabled={disabled}
        className={styles.input}
        placeholder={placeholder ?? "Enter search term"}
        onChange={(e) => onChange(e.target.value)}
      />

      {enableClear && value && (
        <FontAwesomeIcon
          fixedWidth
          onClick={onClear}
          title="Clear Search"
          icon={faTimesCircle}
          className={styles.clear}
        />
      )}

      {append && (
        <InputGroup.Text>
          {append}
                </InputGroup.Text>
      )}
    </InputGroup>
  )
}

export default SearchField
