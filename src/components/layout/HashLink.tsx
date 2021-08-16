import { Nav } from "react-bootstrap";
import React from "react";

interface HashLinkProps {
    path: string;
    disabled?: boolean;
    className?: string;
}

const HashLink = (props: React.PropsWithChildren<HashLinkProps>) => {
    const { path, className, disabled, children } = props;
    return (
        <Nav.Link href={process.env.REACT_APP_BASE_PATH + path} className={className} disabled={disabled}>
            {children}
        </Nav.Link>
    );
}

export default HashLink;
