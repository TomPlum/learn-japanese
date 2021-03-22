import React, { Component } from "react";
import { Dropdown, ListGroup } from "react-bootstrap";
import { GameType } from "../../types/GameType";
import GameTypeMenuListOption from "./GameTypeMenuListOption";
import { faCalendarAlt, faCloudSunRain, faFillDrip, faFont, faGamepad, faPaintBrush, faYenSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GameTypeMenuDropdownOption from "./GameTypeMenuDropdownOption";
import styles from "../../styles/sass/components/layout/GameTypeMenu.module.scss";

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

                <Dropdown className={"d-md-none " + styles.dropdown} data-testid="dropdown">
                    <Dropdown.Toggle variant="primary" className={styles.dropdownToggle} id="select-game-type">
                        <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(selected)} /> {selected}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className={styles.dropdownMenu}>
                        <GameTypeMenuDropdownOption type={GameType.KANA} onClick={this.handleChange} selected={selected}>
                            <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(GameType.KANA)} />
                        </GameTypeMenuDropdownOption>

                        <GameTypeMenuDropdownOption type={GameType.NUMBERS} onClick={this.handleChange} selected={selected}>
                            <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(GameType.NUMBERS)} />
                        </GameTypeMenuDropdownOption>

                        <GameTypeMenuDropdownOption type={GameType.KANJI} onClick={this.handleChange} selected={selected}>
                            <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(GameType.KANJI)} />
                        </GameTypeMenuDropdownOption>

                        <GameTypeMenuDropdownOption type={GameType.COLOURS} onClick={this.handleChange} selected={selected}>
                            <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(GameType.COLOURS)} />
                        </GameTypeMenuDropdownOption>

                        <GameTypeMenuDropdownOption type={GameType.WEATHER} onClick={this.handleChange} selected={selected}>
                            <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(GameType.WEATHER)} />
                        </GameTypeMenuDropdownOption>

                        <GameTypeMenuDropdownOption type={GameType.CALENDAR} onClick={this.handleChange} selected={selected}>
                            <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(GameType.CALENDAR)} />
                        </GameTypeMenuDropdownOption>
                    </Dropdown.Menu>
                </Dropdown>

                <ListGroup className={"d-md-block d-none " + styles.menu} data-testid="list-group-header">
                    <GameTypeMenuListOption text="Select Game Mode" isHeading>
                        <FontAwesomeIcon fixedWidth icon={faGamepad} />
                    </GameTypeMenuListOption>
                </ListGroup>

                <ListGroup className={"d-md-block d-none " + styles.menu} data-testid="list-group">
                    <GameTypeMenuListOption type={GameType.KANA} onClick={this.handleChange} selected={selected}>
                        <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(GameType.KANA)} />
                    </GameTypeMenuListOption>

                    <GameTypeMenuListOption type={GameType.NUMBERS} onClick={this.handleChange} selected={selected}>
                        <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(GameType.NUMBERS)} />
                    </GameTypeMenuListOption>

                    <GameTypeMenuListOption type={GameType.KANJI} onClick={this.handleChange} selected={selected}>
                        <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(GameType.KANJI)} />
                    </GameTypeMenuListOption>

                    <GameTypeMenuListOption type={GameType.COLOURS} onClick={this.handleChange} selected={selected}>
                        <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(GameType.COLOURS)} />
                    </GameTypeMenuListOption>

                    <GameTypeMenuListOption type={GameType.WEATHER} onClick={this.handleChange} selected={selected}>
                        <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(GameType.WEATHER)} />
                    </GameTypeMenuListOption>

                    <GameTypeMenuListOption type={GameType.CALENDAR} onClick={this.handleChange} selected={selected}>
                        <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(GameType.CALENDAR)} />
                    </GameTypeMenuListOption>
                </ListGroup>

            </div>
        );
    }

    private getGameTypeIcon = (type: GameType) => {
        switch(type) {
            case GameType.KANA: return faFont;
            case GameType.NUMBERS: return faYenSign;
            case GameType.KANJI: return faPaintBrush;
            case GameType.COLOURS: return faFillDrip;
            case GameType.WEATHER: return faCloudSunRain;
            case GameType.CALENDAR: return faCalendarAlt;
        }
    }

    private handleChange = (type?: GameType) => {
        if (type) {
            this.setState({ selected: type });
            this.props.onSelect(type);
        }
    }
}

export default GameTypeMenu;