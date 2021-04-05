import { Component } from "react";
import { Button } from "react-bootstrap";
import { faThumbsDown, faThumbsUp, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/sass/components/ui/LearningFeedbackButton.module.scss";

export interface LearningFeedbackButtonProps {
    type: LearningFeedback;
    disabled: boolean;
    active: boolean;
    onClick: () => void;
}

export enum LearningFeedback {
    REMEMBERED, FORGOT
}

class LearningFeedbackButton extends Component<LearningFeedbackButtonProps> {
    render() {
        const { type, disabled, active, onClick } = this.props;

        return (
            <Button
                onClick={onClick}
                className={[active ? styles.active : !disabled ? styles.inactive : "", styles.button].join(" ")}
                variant={type === LearningFeedback.REMEMBERED ? "success" : "danger"}
                disabled={disabled}
                title={this.getTitle()}
            >
                <FontAwesomeIcon icon={this.getIcon()} fixedWidth className={styles.icon} />
                <span className={styles.text}>{this.getText()}</span>
            </Button>
        );
    }

    private getIcon = (): IconDefinition => {
        switch (this.props.type) {
            case LearningFeedback.REMEMBERED: return faThumbsUp;
            case LearningFeedback.FORGOT: return faThumbsDown;
        }
    }

    private getText = (): string  => {
        switch (this.props.type) {
            case LearningFeedback.REMEMBERED: return "Remembered It!";
            case LearningFeedback.FORGOT: return "Forgot It";
        }
    }

    private getTitle = (): string => {
        switch (this.props.type) {
            case LearningFeedback.REMEMBERED: return "I remembered it";
            case LearningFeedback.FORGOT: return "I couldn't remember it";
        }
    }
}

export default LearningFeedbackButton;