import React, { Component } from "react";
import { Dropdown, ListGroup } from "react-bootstrap";
import { Topic } from "../../types/Topic";
import GameTypeMenuListOption from "./GameTypeMenuListOption";
import { faCalendarAlt, faCloudSunRain, faFillDrip, faFont, faGamepad, faGraduationCap, faPaintBrush, faYenSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GameTypeMenuDropdownOption from "./GameTypeMenuDropdownOption";
import { AppMode } from "../../types/AppMode";
import styles from "../../styles/sass/components/layout/GameTypeMenu.module.scss";

interface GameTypeMenuProps {
    appMode: AppMode;
    onSelect: (type: Topic) => void;
    className?: string;
}

interface GameTypeMenuState {
    selected: Topic;
}

class GameTypeMenu extends Component<GameTypeMenuProps, GameTypeMenuState> {

    constructor(props: Readonly<GameTypeMenuProps> | GameTypeMenuProps) {
        super(props);
        this.state = {
            selected: Topic.KANA
        }
    }

    render() {
        const { selected } = this.state;
        const { appMode } = this.props;

        return (
            <div className={this.props.className}>

                <Dropdown className={"d-md-none " + styles.dropdown} data-testid="dropdown">
                    <Dropdown.Toggle variant="primary" className={styles.dropdownToggle} id="select-game-type">
                        <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(selected)} /> {selected}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className={styles.dropdownMenu}>
                        <GameTypeMenuDropdownOption type={Topic.KANA} onClick={this.handleChange} selected={selected}>
                            <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(Topic.KANA)} />
                        </GameTypeMenuDropdownOption>

                        <GameTypeMenuDropdownOption type={Topic.NUMBERS} onClick={this.handleChange} selected={selected}>
                            <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(Topic.NUMBERS)} />
                        </GameTypeMenuDropdownOption>

                        <GameTypeMenuDropdownOption type={Topic.KANJI} onClick={this.handleChange} selected={selected}>
                            <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(Topic.KANJI)} />
                        </GameTypeMenuDropdownOption>

                        <GameTypeMenuDropdownOption type={Topic.COLOURS} onClick={this.handleChange} selected={selected}>
                            <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(Topic.COLOURS)} />
                        </GameTypeMenuDropdownOption>

                        <GameTypeMenuDropdownOption type={Topic.WEATHER} onClick={this.handleChange} selected={selected}>
                            <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(Topic.WEATHER)} />
                        </GameTypeMenuDropdownOption>

                        <GameTypeMenuDropdownOption type={Topic.CALENDAR} onClick={this.handleChange} selected={selected}>
                            <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(Topic.CALENDAR)} />
                        </GameTypeMenuDropdownOption>
                    </Dropdown.Menu>
                </Dropdown>

                <ListGroup className={"d-md-block d-none " + styles.menu} data-testid="list-group-header">
                    <GameTypeMenuListOption text={this.getMenuHeading()} onClick={this.handleChange} isHeading>
                        <FontAwesomeIcon fixedWidth icon={appMode === AppMode.PLAY ? faGamepad : faGraduationCap} />
                    </GameTypeMenuListOption>
                </ListGroup>

                <ListGroup className={"d-md-block d-none " + styles.menu} data-testid="list-group">
                    <GameTypeMenuListOption type={Topic.KANA} onClick={this.handleChange} selected={selected}>
                        <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(Topic.KANA)} />
                    </GameTypeMenuListOption>

                    <GameTypeMenuListOption type={Topic.NUMBERS} onClick={this.handleChange} selected={selected}>
                        <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(Topic.NUMBERS)} />
                    </GameTypeMenuListOption>

                    <GameTypeMenuListOption type={Topic.KANJI} onClick={this.handleChange} selected={selected}>
                        <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(Topic.KANJI)} />
                    </GameTypeMenuListOption>

                    <GameTypeMenuListOption type={Topic.COLOURS} onClick={this.handleChange} selected={selected}>
                        <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(Topic.COLOURS)} />
                    </GameTypeMenuListOption>

                    <GameTypeMenuListOption type={Topic.WEATHER} onClick={this.handleChange} selected={selected}>
                        <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(Topic.WEATHER)} />
                    </GameTypeMenuListOption>

                    <GameTypeMenuListOption type={Topic.CALENDAR} onClick={this.handleChange} selected={selected}>
                        <FontAwesomeIcon fixedWidth icon={this.getGameTypeIcon(Topic.CALENDAR)} />
                    </GameTypeMenuListOption>
                </ListGroup>

            </div>
        );
    }

    private getGameTypeIcon = (type: Topic) => {
        switch(type) {
            case Topic.KANA: return faFont;
            case Topic.NUMBERS: return faYenSign;
            case Topic.KANJI: return faPaintBrush;
            case Topic.COLOURS: return faFillDrip;
            case Topic.WEATHER: return faCloudSunRain;
            case Topic.CALENDAR: return faCalendarAlt;
        }
    }

    private getMenuHeading = () => {
        const { appMode } = this.props;
        switch (appMode) {
            case AppMode.PLAY: return "Select Game Mode";
            case AppMode.LEARN: return "Select Topic"
        }
    }

    private handleChange = (type?: Topic) => {
        if (type) {
            this.setState({ selected: type });
            this.props.onSelect(type);
        }
    }
}

export default GameTypeMenu;