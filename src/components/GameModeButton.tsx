import {Component} from "react";
import {GameMode} from "../types/GameMode";
import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import styles from "../styles/sass/components/GameModeButton.module.scss";

interface GameModeButtonProps {
    mode: GameMode;
    icon: IconDefinition;
    onClick: (mode: GameMode) => void;
    isSelected: boolean;
}

class GameModeButton extends Component<GameModeButtonProps> {
    constructor(props: GameModeButtonProps | Readonly<GameModeButtonProps>) {
        super(props);
        this.state = {
            isSelected: false
        }
    }

    handleClick = () => {
        this.props.onClick(this.props.mode);
    }

    render() {
        const { mode, icon, isSelected } = this.props;

        return (
            <Button
                className={isSelected ? styles.selected : styles.notSelected}
                disabled={isSelected}
                onClick={this.handleClick}
            >
                <FontAwesomeIcon className={isSelected ? styles.iconSelected : styles.iconNotSelected} icon={icon}/>
                <p className={styles.name}>{mode}</p>
            </Button>
        );
    }
}

export default GameModeButton;
