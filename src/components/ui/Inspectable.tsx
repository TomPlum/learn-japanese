import { Component, PropsWithChildren, ReactElement } from "react";
import { OverlayTrigger } from "react-bootstrap"
import PopOver, { PopOverProps } from "./PopOver"
import styles from "../../styles/sass/components/ui/Inspectable.module.scss"
import { Placement } from "react-bootstrap/Overlay"
import ComponentTree from "../../utility/ComponentTree"

export type InspectableProps = {
  className?: string
  placement?: Placement
  popover: PopOverProps
  disabled?: boolean
  color?: "white" | "black"
  disableUnderline?: boolean
}

class Inspectable extends Component<PropsWithChildren<InspectableProps>> {
  render() {
    const { popover, disabled, className, disableUnderline, placement, children } = this.props

    const classNames = [styles.inspectable, className]

    if (!disableUnderline) {
      classNames.push(styles.underline)
    }

    if (disabled) {
      return children
    }

    return (
      <OverlayTrigger
        rootClose
        defaultShow={false}
        data-testid="inspectable"
        placement={placement ?? "left"}
        overlay={<PopOver {...popover} />}
        trigger={["hover", "focus", "click"]}
      >
        {new ComponentTree(children).addPropsToLeafNode((leaf: ReactElement) => {
          return { className: classNames.concat(leaf.props.className).join(" ") }
        })}
      </OverlayTrigger>
    )
  }
}

export default Inspectable
