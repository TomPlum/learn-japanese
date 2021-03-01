import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/settings/DisplayTypeButton.module.scss";

interface DisplayTypeButtonProps {
    text: string;
    icon: IconDefinition;
    selected: boolean;
    onClick: () => void;
}

class DisplayTypeButton extends Component<DisplayTypeButtonProps> {

    constructor(props: Readonly<DisplayTypeButtonProps> | DisplayTypeButtonProps) {
        super(props);
        this.state = {
            selected: false
        }
    }

    render() {
        const { icon, onClick, text, selected } = this.props;

        return (
            <Button
                block
                className={selected ? styles.selected : styles.notSelected}
                onClick={onClick}
            >
                <FontAwesomeIcon
                    className={styles.icon}
                    icon={icon}
                />
                <p className={styles.name}>{text}</p>
            </Button>
        );
    }
}

export default DisplayTypeButton;