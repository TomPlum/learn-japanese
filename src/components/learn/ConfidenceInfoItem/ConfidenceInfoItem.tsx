import Confidence from "types/learn/spacedrepetition/Confidence"
import { ConfidenceMenuStyle } from "types/learn/spacedrepetition/ConfidenceMenuStyle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles  from "./ConfidenceInfoItem.module.scss"
import { useUserContext } from "context/UserContext";

export interface ConfidenceInfoItemProps {
  confidence: Confidence
  className?: string
}

const ConfidenceInfoItem = (props: ConfidenceInfoItemProps) => {
  const { user } = useUserContext()

  const { confidence, className } = props

  return (
    <li>
      {user?.preferences?.confidenceMenuStyle === ConfidenceMenuStyle.NUMBERS ? (
        <span className={className}>{confidence.value + 1}</span>
      ) : (
        <FontAwesomeIcon icon={confidence.icon} className={[className, styles.icon].join(" ")} />
      )}
      <span>{confidence.description}</span>
    </li>
  )
}

export default ConfidenceInfoItem
