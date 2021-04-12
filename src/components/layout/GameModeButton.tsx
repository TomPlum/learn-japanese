import { Component } from "react";
import { KanaGameMode } from "../../types/game/mode/KanaGameMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/GameModeButton.module.scss";

export interface GameModeButtonProps {
    mode: KanaGameMode;
    icon: IconDefinition;
    iconColour?: string;
    onClick: (mode: KanaGameMode) => void;
    isSelected: boolean;
}

class GameModeButton extends Component<GameModeButtonProps> {
    constructor(props: GameModeButtonProps | Readonly<GameModeButtonProps>) {
        super(props);
        this.state = {
            isSelected: false
        }
    }

    handleClick = () => this.props.onClick(this.props.mode);

    render() {
        const { mode, icon, isSelected, iconColour } = this.props;

        return (
            <Button
                className={(isSelected ? styles.selected : styles.notSelected) + " " + styles.button}
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
