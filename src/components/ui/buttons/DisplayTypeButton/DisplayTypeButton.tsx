import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "react-bootstrap"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import QuestionType from "types/game/QuestionType"
import styles  from "./DisplayTypeButton.module.scss"
import { useTranslation } from "react-i18next"

export interface DisplayTypeButtonProps {
  type: QuestionType
  selected: QuestionType
  icon: IconDefinition
  onClick: (type: QuestionType) => void
}

const DisplayTypeButton = (props: DisplayTypeButtonProps) => {
  const { type, selected, icon, onClick } = props

  const { t } = useTranslation("translation", { keyPrefix: "wizard.steps.question.type" })

  const className = selected === type ? styles.selected : styles.notSelected

  return (
    <Button className={[className, styles.button].join(" ")} onClick={() => onClick(type)}>
      <FontAwesomeIcon className={styles.icon} icon={icon} />
      <p className={styles.name}>{t(`${type.name}.name`)}</p>
    </Button>
  )
}

export default DisplayTypeButton
