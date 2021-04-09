import React, { Component } from "react";
import { Toast } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Arrays from "../../utility/Arrays";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

interface MainErrorBoundaryState {
    errors: Error[];
    hasError: boolean;
}

class MainErrorBoundary extends Component<any, MainErrorBoundaryState> {

    constructor(props: Readonly<any> | any) {
        super(props);
        this.state = {
            errors: [],
            hasError: false
        }
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        const errors = this.state.errors;
        errors.push(error);
        this.setState({ errors: errors });
    }

    render() {
        {this.state.hasError && this.state.errors.map((error: Error) => {
            return (
                <Toast>
                    <Toast.Header>
                        <FontAwesomeIcon icon={faExclamationCircle} fixedWidth/>
                        {this.getHeader()}
                    </Toast.Header>
                    <Toast.Body>
                        {error.message}
                    </Toast.Body>
                </Toast>
            );
        })}
        return this.props.children;
    }

    private getHeader = (): string => {
        const headers = ["Oh no!", "Oops!", "Whoops!", "Oh dear!", "Something went wrong."];
        return Arrays.getRandomElements(headers, 1)[0];
    }
}

export default MainErrorBoundary;