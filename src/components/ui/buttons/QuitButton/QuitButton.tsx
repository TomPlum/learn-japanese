import { Component } from "react"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import styles  from "./QuitButton.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface QuitButtonProps {
  onClick: () => void
  className?: string
}

class QuitButton extends Component<QuitButtonProps> {
  render() {
    return (
      <FontAwesomeIcon
        icon={faTimes}
        className={[styles.icon, this.props.className].join(" ")}
        onClick={this.props.onClick}
        title="Quit"
      />
    )
  }
}

export default QuitButton
