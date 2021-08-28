import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { QuestionType } from "../../../types/game/QuestionType";
import styles from "../../../styles/sass/components/ui/buttons/DisplayTypeButton.module.scss";

export interface DisplayTypeButtonProps {
    type: QuestionType;
    selected: QuestionType;
    icon: IconDefinition;
    onClick: (type: QuestionType) => void;
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
