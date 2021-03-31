import { Component } from "react";
import { Button } from "react-bootstrap";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/sass/components/ui/ForgotButton.module.scss";

export interface ForgotButtonProps {
    disabled: boolean;
    active: boolean;
    onClick: () => void;
}

class ForgotButton extends Component<ForgotButtonProps> {
    render() {
        const { disabled, active, onClick } = this.props;

        return (
            <Button onClick={onClick} className={active ? styles.active : styles.button} variant="danger" disabled={disabled}>
                <FontAwesomeIcon icon={faThumbsDown} fixedWidth className={styles.icon} />
                <span className={styles.text}>Forgot It</span>
            </Button>
        );
    }
}

export default ForgotButton;