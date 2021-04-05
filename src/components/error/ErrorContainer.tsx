import React, { Component } from "react";
import { Container, Toast } from "react-bootstrap";
import Arrays from "../../utility/Arrays";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { v4 } from "uuid";

export interface ApplicationError {
    id: string;
    value: Error;
}

export interface ErrorContainerProps {
    errors: Error[];
}

interface ErrorContainerState {
    active: ApplicationError[];
}

class ErrorContainer extends Component<ErrorContainerProps, ErrorContainerState> {

    constructor(props: Readonly<ErrorContainerProps> | ErrorContainerProps) {
        super(props);
        this.state = {
            active: []
        }
    }

    componentDidMount() {
        this.convertErrors();
    }

    componentDidUpdate(prevProps: Readonly<ErrorContainerProps>, prevState: Readonly<ErrorContainerState>) {
        if (prevProps.errors !== this.props.errors) {
            this.setState({ active: this.convertErrors() });
        }
    }

    render() {
        const { active } = this.state;

        return (
            <Container>
                {active.map((error: ApplicationError) => {
                    return (
                        <Toast onClose={() => this.onDismiss(error.id)}>
                            <Toast.Header>
                                <FontAwesomeIcon icon={faExclamationCircle} fixedWidth/>
                                {this.getHeader()}
                            </Toast.Header>
                            <Toast.Body>
                                {error.value.message}
                            </Toast.Body>
                        </Toast>
                    );
                })}
            </Container>
        );
    }

    private onDismiss = (id: string) => {
        this.setState({ active: this.state.active.filter((error: ApplicationError) => error.id === id) });
    }

    private getHeader = (): string => {
        const headers = ["Oh no!", "Oops!", "Whoops!", "Oh dear!", "Something went wrong."];
        return Arrays.getRandomElements(headers, 1)[0];
    }

    private convertErrors = (): ApplicationError[] => {
        return this.props.errors.map((error: Error) => { return { id: v4(), value: error } });
    }
}

export default ErrorContainer;