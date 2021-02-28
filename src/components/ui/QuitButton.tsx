import React, { Component } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/ui/QuitButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface QuitButtonProps {
    onClick: () => void;
}

class QuitButton extends Component<QuitButtonProps> {
    render() {
        return (
            <FontAwesomeIcon
                icon={faTimes}
                className={styles.icon}
                onClick={this.props.onClick}
                title="Quit"
            />
        );
    }
}

export default QuitButton;