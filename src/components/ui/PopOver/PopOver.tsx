import { Component, ReactNode } from "react";
import { Popover } from "react-bootstrap"
import styles  from "./PopOver.module.scss"

export interface PopOverProps {
  title: ReactNode | string
  text: ReactNode | string
  className?: string
}

class PopOver extends Component<PopOverProps> {
  render() {
    const { title, text, className, ...rest } = this.props

    return (
      <Popover id="popover" className={[styles.popover, className].join(" ")} {...rest}>
        <Popover.Header as="h3" className={styles.title}>
          {title}
        </Popover.Header>
        <Popover.Body className={styles.text}>{text}</Popover.Body>
      </Popover>
    )
  }
}

export default PopOver
