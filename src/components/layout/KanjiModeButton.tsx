import { Component } from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/KanjiModeButton.module.scss";

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
            <Button
                block
                className={isSelected ? styles.selected : styles.notSelected}
                onClick={this.handleClick}
            >
                <p className={styles.icon}>G{grade}</p>
                <p className={styles.name}>{quantity} Kanji</p>
            </Button>
        );
    }
}

export default KanjiModeButton;
