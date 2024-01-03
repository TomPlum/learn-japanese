import { Component } from "react"
import { faHeart, faHeartBroken, faInfinity } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles  from "./LifeDisplay.module.scss"

export interface LifeDisplayProps {
  enabled: boolean
  hearts: number
  className?: string
}

class LifeDisplay extends Component<LifeDisplayProps> {
  render() {
    const { hearts, enabled, className } = this.props
    return (
      <div className={[className, styles.wrapper].join(" ")}>
        <FontAwesomeIcon
          icon={enabled && hearts === 1 ? faHeartBroken : faHeart}
          title="Lives"
          className={styles.icon}
        />

        <span className={styles.quantity}>
          {!enabled ? <FontAwesomeIcon className={styles.infinite} icon={faInfinity} title="Infinite" /> : hearts}
        </span>
      </div>
    )
  }
}

export default LifeDisplay
