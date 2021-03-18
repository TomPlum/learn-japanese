import React, { Component } from "react";
import { Dropdown, ListGroup } from "react-bootstrap";
import { GameType } from "../../types/GameType";
import styles from "../../styles/sass/components/layout/GameTypeMenu.module.scss";
import GameTypeMenuListOption from "./GameTypeMenuListOption";
import { faFont, faPaintBrush, faYenSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GameTypeMenuDropdownOption from "./GameTypeMenuDropdownOption";

interface GameTypeMenuProps {
    onSelect: (type: GameType) => void;
    className?: string;
}

interface GameTypeMenuState {
    selected: GameType;
}

class GameTypeMenu extends Component<GameTypeMenuProps, GameTypeMenuState> {

    constructor(props: Readonly<GameTypeMenuProps> | GameTypeMenuProps) {
        super(props);
        this.state = {
            selected: GameType.KANA
        }
    }

    render() {
        const { selected } = this.state;

        return (
            <div className={this.props.className}>

                <Dropdown className={"d-md-none " + styles.dropdown}>
                    <Dropdown.Toggle variant="primary" className={styles.dropdownToggle} id="select-game-type">
                        <FontAwesomeIcon fixedWidth icon={this.getDropdownToggleIcon()} /> {selected}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className={styles.dropdownMenu}>
                        <GameTypeMenuDropdownOption type={GameType.KANA} onClick={this.handleChange} selected={selected}>
                            <FontAwesomeIcon fixedWidth icon={faFont} />
                        </GameTypeMenuDropdownOption>

                        <GameTypeMenuDropdownOption type={GameType.NUMBERS} onClick={this.handleChange} selected={selected}>
                            <FontAwesomeIcon fixedWidth icon={faYenSign} />
                        </GameTypeMenuDropdownOption>

                        <GameTypeMenuDropdownOption type={GameType.KANJI} onClick={this.handleChange} selected={selected}>
                            <FontAwesomeIcon fixedWidth icon={faPaintBrush} />
                        </GameTypeMenuDropdownOption>
                    </Dropdown.Menu>
                </Dropdown>

                <ListGroup className={"d-md-block d-none " + styles.menu}>
                    <GameTypeMenuListOption type={GameType.KANA} onClick={this.handleChange} selected={selected}>
                        <FontAwesomeIcon fixedWidth icon={faFont} />
                    </GameTypeMenuListOption>

                    <GameTypeMenuListOption type={GameType.NUMBERS} onClick={this.handleChange} selected={selected}>
                        <FontAwesomeIcon fixedWidth icon={faYenSign} />
                    </GameTypeMenuListOption>

                    <GameTypeMenuListOption type={GameType.KANJI} onClick={this.handleChange} selected={selected}>
                        <FontAwesomeIcon fixedWidth icon={faPaintBrush} />
                    </GameTypeMenuListOption>
                </ListGroup>

            </div>
        );
    }

    private getDropdownToggleIcon = () => {
        switch(this.state.selected) {
            case GameType.KANA: return faFont;
            case GameType.NUMBERS: return faYenSign;
            case GameType.KANJI: return faPaintBrush;
        }
    }

    private handleChange = (type: GameType) => {
        this.setState({ selected: type });
        this.props.onSelect(type);
    }
}

export default GameTypeMenu;