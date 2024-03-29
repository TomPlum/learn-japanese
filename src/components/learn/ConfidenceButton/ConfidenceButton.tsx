import { Button } from "react-bootstrap"
import Confidence from "../../../domain/learn/spacedrepetition/Confidence"
import styles  from "./ConfidenceButton.module.scss"
import { ConfidenceMenuStyle } from "../../../domain/learn/spacedrepetition/ConfidenceMenuStyle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useUserContext } from "context/UserContext";

export interface ConfidenceButtonProps {
  value: Confidence
  className: string
  disabled: boolean
  selected: Confidence | undefined
  onClick: (value: Confidence) => void
}

const ConfidenceButton = (props: ConfidenceButtonProps) => {
  const { value, className, disabled, selected, onClick } = props
  const { user } = useUserContext()

  const handleClick = () => {
    onClick(props.value)
  }

  const buttonClass = disabled ? styles.disabled : styles.button
  const selectedClass = selected === value ? styles.selected : undefined

  return (
    <Button
      title={value.name}
      disabled={disabled}
      onClick={handleClick}
      className={[className, buttonClass, selectedClass].join(" ")}
    >
      {user?.preferences?.confidenceMenuStyle === ConfidenceMenuStyle.NUMBERS ? (
        value.value + 1
      ) : (
        <FontAwesomeIcon icon={value.icon} />
      )}
    </Button>
  )
}

export default ConfidenceButton
