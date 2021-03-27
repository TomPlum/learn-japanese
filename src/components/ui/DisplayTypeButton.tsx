import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/ui/DisplayTypeButton.module.scss";
import { DisplayType } from "../../types/DisplayType";

interface DisplayTypeButtonProps {
    type: DisplayType;
    selected: DisplayType;
    icon: IconDefinition;
    onClick: (type: DisplayType) => void;
}

class DisplayTypeButton extends Component<DisplayTypeButtonProps> {

    constructor(props: Readonly<DisplayTypeButtonProps> | DisplayTypeButtonProps) {
        super(props);
        this.state = {
            selected: false
        }
    }

    render() {
        const { type, selected, icon, onClick } = this.props;

        return (
            <Button
                block
                className={selected === type ? styles.selected : styles.notSelected}
                onClick={() => onClick(type)}
            >
                <FontAwesomeIcon
                    className={styles.icon}
                    icon={icon}
                />
                <p className={styles.name}>{type}</p>
            </Button>
        );
    }
}

export default DisplayTypeButton;