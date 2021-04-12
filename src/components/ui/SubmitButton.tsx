import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/ui/SubmitButton.module.scss";

interface SubmitButtonProps {
    disabled?: boolean;
    onClick: () => void;
    isRestart?: boolean;
    className?: string;
}

class SubmitButton extends Component<SubmitButtonProps> {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeySelection);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeySelection);
    }

    render() {
        const { disabled, isRestart, onClick, className } = this.props;
        return (
            <Button
                variant={!isRestart ? "success" : "info"}
                disabled={disabled}
                onClick={onClick}
                className={[styles.button, className].join(" ")}
            >
                {!isRestart ? "Check" : <><FontAwesomeIcon icon={faRedoAlt}/> Restart</>}
            </Button>
        );
    }


    private handleKeySelection = (e: KeyboardEvent) => {
        const { disabled, onClick } = this.props;
        if (!disabled && e.key === 'Enter') {
            onClick();
        }
    }
}

export default SubmitButton;