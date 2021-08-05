import React, { Component, ReactElement, ReactNode } from "react";
import { OverlayTrigger } from "react-bootstrap";
import PopOver, { PopOverProps } from "./PopOver";
import styles from "../../styles/sass/components/ui/Inspectable.module.scss";
import { Placement } from "react-bootstrap/Overlay";
import ComponentTree from "../../utility/ComponentTree";

export type InspectableProps = {
    popover: PopOverProps;
    placement?: Placement;
    className?: string;
    color?: 'white' | 'black';
}

class Inspectable extends Component<InspectableProps> {
    render() {
        const { popover, className, placement, color, children } = this.props;

        const classes = color === 'white' ? [styles.white] : [styles.black, className ?? ""]

        return (
            <OverlayTrigger
                trigger={["hover", "focus", "click"]}
                rootClose={true}
                placement={placement ?? "left"}
                overlay={<PopOver {...popover} />}
                defaultShow={false}
            >
                {
                    new ComponentTree(children).addPropsToLeafNode((leaf: ReactElement) => {
                        return { className: classes.concat(leaf.props.className).join(" ") }
                    })
                }
            </OverlayTrigger>
        );
    }
}

export default Inspectable;
