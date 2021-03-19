import React, { Component } from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/sass/components/ui/SubmitButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";

interface SubmitButtonProps {
    disabled?: boolean;
    onClick: () => void;
    isRestart?: boolean;
}

class SubmitButton extends Component<SubmitButtonProps> {
    render() {
        const { disabled, isRestart, onClick } = this.props;
        return (
            <Button variant={!isRestart ? "success" : "info"} block disabled={disabled} onClick={onClick} className={styles.button}>
                {!isRestart ? "Check" : <><FontAwesomeIcon icon={faRedoAlt}/> Restart</>}
            </Button>
        );
    }
}

export default SubmitButton;