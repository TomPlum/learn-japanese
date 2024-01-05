import { Component } from "react"
import { Alert } from "react-bootstrap"
import styles  from "./MenuDescription.module.scss"

export interface MenuDescriptionProps {
  text: string
}

class MenuDescription extends Component<MenuDescriptionProps> {
  render() {
    return (
      <Alert className={styles.desc} variant="success">
        {this.props.text}
      </Alert>
    )
  }
}

export default MenuDescription
