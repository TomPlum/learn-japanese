import React, { Component, ReactElement, ReactNode } from "react";
import { OverlayTrigger } from "react-bootstrap";
import PopOver, { PopOverProps } from "./PopOver";
import styles from "../../styles/sass/components/ui/Inspectable.module.scss";
import { OverlayChildren, Placement } from "react-bootstrap/Overlay";
import PropTypes from "prop-types";

export type InspectableProps = {
    popover: PopOverProps;
    placement?: Placement;
    className?: string;
    color?: 'white' | 'black';
}

class Inspectable extends Component<InspectableProps> {
    render() {
        const { popover, className, placement, color } = this.props;

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
                    this.addClassToLeafChild(classes)
                }
            </OverlayTrigger>
        );
    }

    private addClassToLeafChild(classNames: string[]): ReactElement {
        let response: ReactNode;

        const children: ReactElement[] = this.getAllChildren();

        children.reverse().forEach((child: ReactNode, i: number) => {
            if (i === children.length - 1) {
                const leaf = children[i];
                const existingClasses = leaf.props.className;
                response = React.cloneElement(leaf, { className: classNames.concat(existingClasses).join(" ") });
            } else {
                const nextChild = children[i];
                response = React.cloneElement(nextChild, nextChild.props, response)
            }
        });

        return response as ReactElement;
    }

    private getAllChildren(): ReactElement[] {
        let child = this.props.children as ReactElement;

        let children: ReactElement[] = [];

        while (child.props && child.props.children) {
            children.push(child);
            child = child.props.children;
        }

        return children;
    }

}

export default Inspectable;