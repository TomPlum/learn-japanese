import React, { ReactElement } from "react";
import { OverlayTrigger } from "react-bootstrap";
import PopOver from "./PopOver";
import styles from "../../styles/sass/components/ui/Inspectable.module.scss";
import { Placement } from "react-bootstrap/Overlay";

export type InspectableProps = {
    title: string;
    text: string;
    placement?: Placement;
    className?: string;
    color?: 'white' | 'black';
}

const Inspectable: React.FunctionComponent<InspectableProps> = ({ text, title, children, className, placement, color }) => {
    const child = children as ReactElement;
    const childClasses: string = child && child.props ? child.props.className : "";

    return (
        <OverlayTrigger
            trigger={["hover", "focus", "click"]}
            rootClose={true}
            placement={placement ?? "left"}
            overlay={<PopOver text={text} title={title}/>}
        >
            {
                React.cloneElement(children as ReactElement, {
                    className: color === 'white' ? styles.white : [styles.black, childClasses, className].join(" ")
                })
            }
        </OverlayTrigger>
    );
}


export default Inspectable;