import styles  from "./EditFavouriteButton.module.scss"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faTimes } from "@fortawesome/free-solid-svg-icons"
import { Fade } from "react-bootstrap"
import Icon from "../../../menu/icon/Icon"
import { CustomIcon } from "../../../../../domain/Icon"
import { useTranslation } from "react-i18next"

export interface EditFavouriteButtonProps {
  id: number
  name: string
  selected: boolean
  className?: string
  onAdd: (id: number) => void
  onCancel: (id: number) => void
  icon: CustomIcon
}

const EditFavouriteButton = (props: EditFavouriteButtonProps) => {
  const { id, name, icon, selected, className, onAdd, onCancel } = props

  const [inside, setInside] = useState(false)
  const { t, ready } = useTranslation()
  const actions = useTranslation("translation", { keyPrefix: "action" }).t

  const classes = [styles.button, selected ? styles.selected : ""]
  if (className) classes.push(className)

  const testId = `edit-favourite-button-${id}`

  return (
    <div className={classes.join(" ")} data-testid={testId}>
      <div
        className={styles.surface}
        onMouseOut={() => setInside(false)}
        onMouseEnter={() => setInside(true)}
        onClick={() => (selected ? onCancel(id) : onAdd(id))}
      />

      {inside && (
        <Fade in={inside} timeout={2000} appear>
          <div className={styles.container}>
            <FontAwesomeIcon
              fixedWidth
              icon={selected ? faTimes : faStar}
              className={selected ? styles.delete : styles.star}
            />
            <span className={styles.name}>{selected ? actions("cancel") : actions("favourite")}</span>
          </div>
        </Fade>
      )}

      {!inside && (
        <Fade in={!inside} timeout={2000} appear>
          <div className={styles.container}>
            <Icon value={icon} className={styles.icon} />
            <span className={styles.name}>{ready ? t(name) : ""}</span>
          </div>
        </Fade>
      )}
    </div>
  )
}

export default EditFavouriteButton
