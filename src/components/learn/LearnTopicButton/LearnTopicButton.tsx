import { Component } from "react"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles  from "./LearnTopicButton.module.scss"
import SessionMode from "types/session/SessionMode"

export interface LearnTopicButtonProps {
  icon: IconDefinition | string
  iconColour?: string
  type: SessionMode
  selected: SessionMode
  className?: string
  onClick: (mode: SessionMode) => void
}

class LearnTopicButton extends Component<LearnTopicButtonProps> {
  render() {
    const { icon, type, selected, iconColour, className } = this.props
    const isSelected = selected.displayName === type.displayName
    const colour = isSelected ? iconColour : "#000"
    const buttonClass = [className, isSelected ? styles.selected : styles.notSelected, styles.button].join(" ")

    return (
      <Button onClick={this.handleOnClick} className={buttonClass}>
        {this.isFontAwesomeIcon() && (
          <FontAwesomeIcon icon={icon as IconDefinition} fixedWidth className={styles.icon} style={{ color: colour }} />
        )}

        {!this.isFontAwesomeIcon() && (
          <span className={styles.textIcon} style={{ color: colour }}>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            {icon}
          </span>
        )}

        <p className={styles.name}>{type.displayName}</p>
      </Button>
    )
  }

  private handleOnClick = () => this.props.onClick(this.props.type)

  private isFontAwesomeIcon() {
    const icon: IconDefinition | string = this.props.icon
    return !(typeof icon === "string")
  }
}

export default LearnTopicButton
