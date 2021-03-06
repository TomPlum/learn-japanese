import React, { ReactElement } from "react";
import { OverlayTrigger } from "react-bootstrap";
import PopOver from "./PopOver";
import styles from "../../styles/sass/components/ui/Inspectable.module.scss";
import { Placement } from "react-bootstrap/Overlay";

type InspectableProps = {
    title: string;
    text: string;
    placement?: Placement;
    className?: string;
}

const Inspectable: React.FunctionComponent<InspectableProps> = ({ text, title, children, className, placement }) => {
    return (
        <OverlayTrigger trigger="hover" placement={placement ?? "left"} overlay={<PopOver text={text} title={title}/>}>
            { React.cloneElement(children as ReactElement, { className: styles.inspectable + " " + className }) }
        </OverlayTrigger>
    )
}


export default Inspectable;