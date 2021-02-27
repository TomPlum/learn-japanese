import { Component } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/KanjiModeButton.module.scss";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface KanjiModeButtonProps {
    grade: number;
    quantity: number;
    iconColour?: string;
    onClick: (grade: number) => void;
    isSelected: boolean;
}

class KanjiModeButton extends Component<KanjiModeButtonProps> {
    constructor(props: KanjiModeButtonProps | Readonly<KanjiModeButtonProps>) {
        super(props);
        this.state = {
            isSelected: false
        }
    }

    handleClick = () => {
        this.props.onClick(this.props.grade);
    }

    render() {
        const { grade, quantity, isSelected } = this.props;

        return (
            <InputGroup className="mb-3">
                <FormControl as="button" className={isSelected ? styles.selected : styles.notSelected} onClick={this.handleClick}>
                    <FontAwesomeIcon icon={faChevronRight} /> Grade {grade}
                </FormControl>
                <InputGroup.Append className={styles.append}>
                    <InputGroup.Text >(x{quantity})</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        );
    }
}

export default KanjiModeButton;
