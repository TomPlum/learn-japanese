import { faExclamationCircle, faExclamationTriangle, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import styles from "../../../styles/sass/components/settings/modal/SettingsButton.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef, useState } from "react"
import { useOnComponentBlur } from "../../../hooks"
import { useTranslation } from "react-i18next"

export type ButtonIcon = {
  id?: string
  icon: IconDefinition
}

export interface SettingsButtonProps {
  id?: string
  name: string
  className?: string
  icon: ButtonIcon
  onClick?: () => void
  confirm?: "warn" | "danger"
}

const SettingsButton = (props: SettingsButtonProps) => {
  const { id, name, icon, confirm, className, onClick } = props

  const ref = useRef(null)

  const cancel = () => {
    setExtraClass("")
    setIsConfirming(false)
  }

  useOnComponentBlur(ref, cancel)

  const [extraClass, setExtraClass] = useState("")
  const [isConfirming, setIsConfirming] = useState(false)
  const { t } = useTranslation("translation", { keyPrefix: "settings.modal.user" })

  const handleClick = () => {
    if (confirm) {
      if (isConfirming) {
        onClick?.()
        cancel()
      } else {
        setIsConfirming(true)
        setExtraClass(confirm === "warn" ? styles.warn : styles.danger)
      }
    } else {
      onClick?.()
    }
  }

  const title = isConfirming ? t("are-you-sure") : ""
  const buttonText = isConfirming ? t("click-to-confirm") : name
  const classes = [styles.button, className, extraClass].join(" ")
  const buttonIcon = isConfirming ? (confirm === "warn" ? faExclamationCircle : faExclamationTriangle) : icon.icon

  return (
    <div ref={ref} className={classes} onClick={handleClick} title={title} data-testid={id}>
      <FontAwesomeIcon icon={buttonIcon} data-testid={icon.id} className={styles.icon} />
      <span className={styles.name}>{buttonText}</span>
    </div>
  )
}

export default SettingsButton
