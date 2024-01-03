import { Form } from "react-bootstrap"
import styles  from "./ToggleSwitch.module.scss"

export interface ToggleSwitchProps {
  label?: string
  enabled: boolean
  className?: string
  disabled?: boolean
  onChange?: () => void
}

const ToggleSwitch = (props: ToggleSwitchProps) => {
  const { label, enabled, disabled, className, onChange, ...rest } = props
  return (
    <Form.Check
      inline
      type="switch"
      id={label}
      label={label}
      disabled={disabled}
      className={[className, styles.switch].join(" ")}
      checked={enabled}
      onChange={onChange}
      {...rest}
    />
  )
}

export default ToggleSwitch
