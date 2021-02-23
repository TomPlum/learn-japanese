import { Component } from "react";
import { GameMode } from "../../types/GameMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/GameModeButton.module.scss";

interface GameModeButtonProps {
    mode: GameMode;
    icon: IconDefinition;
    iconColour?: string;
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
        const { mode, icon, isSelected, iconColour } = this.props;

        return (
            <Button
                block
                className={isSelected ? styles.selected : styles.notSelected}
                onClick={this.handleClick}
            >
                <FontAwesomeIcon
                    className={styles.icon}
                    color={isSelected ? iconColour : "#000"}
                    icon={icon}
                />
                <p className={styles.name}>{mode}</p>
            </Button>
        );
    }
}

export default GameModeButton;
