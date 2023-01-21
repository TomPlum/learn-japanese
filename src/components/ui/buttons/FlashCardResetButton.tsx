import { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReply } from "@fortawesome/free-solid-svg-icons"
import { Button } from "react-bootstrap"
import styles from "../../../styles/sass/components/ui/buttons/FlashCardResetButton.module.scss"

export interface FlashCardResetButtonProps {
  onClick: () => void
}

class FlashCardResetButton extends Component<FlashCardResetButtonProps> {
  render() {
    return (
      <Button className={styles.button} variant="outline-danger" onClick={this.props.onClick} title="Reset">
        <FontAwesomeIcon icon={faReply} />
      </Button>
    )
  }
}

export default FlashCardResetButton
