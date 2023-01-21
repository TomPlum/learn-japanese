import { OverlayTrigger } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { OverlayChildren } from "react-bootstrap/Overlay"

export interface InfoButtonProps {
    popover: OverlayChildren
    className?: string
}

const InfoButton = (props: InfoButtonProps) => {
    return (
        <OverlayTrigger trigger={["hover", "click"]} overlay={props.popover} placement="top">
            <FontAwesomeIcon icon={faInfoCircle} fixedWidth className={props.className} {...props} />
        </OverlayTrigger>
    )
}

export default InfoButton
