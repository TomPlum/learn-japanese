import { Component } from "react";
import { Container } from "react-bootstrap";

interface ErrorBoundaryState {
    hasError: boolean;
    error: any;
}

class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: any) {
        this.setState({ hasError: true, error });
    }

    render() {
        if (this.state.hasError) {
            return (
                <Container>
                    <h1>It do be broken.</h1>
                    <h2>{this.state.error}</h2>
                </Container>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;