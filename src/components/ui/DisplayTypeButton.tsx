import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/ui/DisplayTypeButton.module.scss";
import { DisplayType } from "../../types/DisplayType";

export interface DisplayTypeButtonProps {
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
        const className = selected === type ? styles.selected : styles.notSelected;

        return (
            <Button block className={className} onClick={() => onClick(type)}>
                <FontAwesomeIcon className={styles.icon} icon={icon} />
                <p className={styles.name}>{type}</p>
            </Button>
        );
    }
}

export default DisplayTypeButton;