import { Component } from "react";
import { Button } from "react-bootstrap";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/sass/components/ui/MemorisedButton.module.scss";

export interface MemorisedButtonProps {
    disabled: boolean;
    active: boolean;
    onClick: () => void;
}

class MemorisedButton extends Component<MemorisedButtonProps> {
    render() {
        const { disabled, active, onClick } = this.props;

        return (
            <Button onClick={onClick} className={active ? styles.active : styles.button} variant="success" disabled={disabled}>
                <FontAwesomeIcon icon={faThumbsUp} fixedWidth className={styles.icon} />
                <span className={styles.text}>Remembered It!</span>
            </Button>
        );
    }
}

export default MemorisedButton;