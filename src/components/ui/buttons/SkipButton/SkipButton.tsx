import { Button } from "react-bootstrap"
import { faForward } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SizeMeProps, withSize } from "react-sizeme"
import styles  from "./SkipButton.module.scss"
import { useTranslation } from "react-i18next"

export interface SkipButtonProps extends SizeMeProps {
  disabled?: boolean
  className?: string
  onClick: () => void
}

const SkipButton = (props: SkipButtonProps) => {
  const { disabled, className, onClick, size } = props

  const { t } = useTranslation("translation", { keyPrefix: "action" })

  const defaultClass = disabled ? styles.disabled : styles.button

  return (
    <Button className={[defaultClass, className].join(" ")} onClick={onClick} disabled={disabled} variant="danger">
      {(size?.width ?? -1) > 105 && <FontAwesomeIcon icon={faForward} data-testid="icon" />} {t("skip")}
    </Button>
  )
}

export default withSize()(SkipButton)
