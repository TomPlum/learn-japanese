import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleNotch, faRedo } from "@fortawesome/free-solid-svg-icons"
import styles from "../../../styles/sass/components/ui/buttons/ReloadButton.module.scss"

export interface ReloadButtonProps {
  loading: boolean
  onClick: () => void
  className?: string
}

const ReloadButton = (props: ReloadButtonProps) => {
  if (props.loading) {
    return <FontAwesomeIcon spin size="sm" title="Loading..." icon={faCircleNotch} className={props.className} />
  } else {
    return (
      <FontAwesomeIcon
        size="sm"
        icon={faRedo}
        title="Refresh"
        onClick={props.onClick}
        className={[props.className, styles.icon].join(" ")}
      />
    )
  }
}

export default ReloadButton
