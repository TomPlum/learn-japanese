import { Nav } from "react-bootstrap";
import React from "react";

export interface HashLinkProps {
    style?: {};
    path?: string;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
}

const HashLink = (props: React.PropsWithChildren<HashLinkProps>) => {
    const { path, className, disabled, style, children, onClick } = props;

    const href = path ? process.env.REACT_APP_BASE_PATH + path : "";

    return (
        <span onClick={onClick}>
            <Nav.Link href={href} className={className} disabled={disabled} style={style}>
                {children}
            </Nav.Link>
        </span>
    );
}

export default HashLink;
