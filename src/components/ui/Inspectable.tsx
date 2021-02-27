import React, { ReactElement } from "react";
import { OverlayTrigger } from "react-bootstrap";
import PopOver from "./PopOver";
import styles from "../../styles/sass/components/ui/Inspectable.module.scss";

type InspectableProps = {
    title: string;
    text: string;
}

const Inspectable: React.FunctionComponent<InspectableProps> = ({ text, title, children }) => {
    return (
        <OverlayTrigger trigger="hover" placement="left" overlay={<PopOver text={text} title={title}/>}>
            { React.cloneElement(children as ReactElement, { className: styles.inspectable }) }
        </OverlayTrigger>
    )
}


export default Inspectable;