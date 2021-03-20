import { Component } from "react";
import { Nav } from "react-bootstrap";

interface HashLinkProps {
    path: string;
    className?: string;
}

class HashLink extends Component<HashLinkProps> {
    render() {
        const { path, className, children } = this.props;
        return (
            <Nav.Link href={process.env.REACT_APP_BASE_PATH + path} className={className}>
                {children}
            </Nav.Link>
        );
    }
}

export default HashLink;