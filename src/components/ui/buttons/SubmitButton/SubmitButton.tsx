import { useEffect } from "react"
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons"
import styles  from "./SubmitButton.module.scss"
import { useTranslation } from "react-i18next"

interface SubmitButtonProps {
  disabled?: boolean
  onClick: () => void
  isRestart?: boolean
  className?: string
}

const SubmitButton = (props: SubmitButtonProps) => {
  const { disabled, className, isRestart, onClick } = props

  const { t } = useTranslation("translation", { keyPrefix: "action" })

  useEffect(() => {
    document.addEventListener("keydown", handleKeySelection)
    return () => {
      document.removeEventListener("keydown", handleKeySelection)
    }
  }, [])

  const handleKeySelection = (e: KeyboardEvent) => {
    if (!disabled && e.key === "Enter") {
      onClick()
      e.preventDefault()
      e.stopPropagation()
    }
  }

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      type="button"
      variant={!isRestart ? "success" : "info"}
      className={[styles.button, className].join(" ")}
    >
      {!isRestart ? (
        t("check")
      ) : (
        <>
          <FontAwesomeIcon icon={faRedoAlt} /> {t("restart")}
        </>
      )}
    </Button>
  )
}

export default SubmitButton
