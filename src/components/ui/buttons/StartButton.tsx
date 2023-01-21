import { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { Button } from "react-bootstrap"
import styles from "../../../styles/sass/components/ui/buttons/StartButton.module.scss"

export interface StartButtonProps {
  onClick: () => void
}

class StartButton extends Component<StartButtonProps> {
  render() {
    return (
      <Button variant="success" className={styles.button} block onClick={this.props.onClick}>
        <FontAwesomeIcon size="xs" icon={faPlay} /> Start
      </Button>
    )
  }
}

export default StartButton
