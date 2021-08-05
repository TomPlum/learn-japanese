import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/sass/components/ui/buttons/SubmitButton.module.scss";

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
                onClick={onClick}
                disabled={disabled}
                type="button"
                variant={!isRestart ? "success" : "info"}
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
            e.preventDefault();
            e.stopPropagation();
        }
    }
}

export default SubmitButton;
