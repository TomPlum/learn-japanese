import React, { Component } from "react";
import { Dropdown, ListGroup } from "react-bootstrap";
import Topic from "../../types/Topic";
import GameTypeMenuListOption from "./GameTypeMenuListOption";
import { faGamepad, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
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
                        <FontAwesomeIcon fixedWidth icon={selected.icon} /> {selected.name}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className={styles.dropdownMenu}>
                        {
                            Topic.ALL.map((topic: Topic) => {
                                return (
                                    <GameTypeMenuDropdownOption type={topic} onClick={this.handleChange} selected={selected}>
                                        <FontAwesomeIcon fixedWidth icon={topic.icon} />
                                    </GameTypeMenuDropdownOption>
                                )
                            })
                        }
                    </Dropdown.Menu>
                </Dropdown>

                <ListGroup className={"d-md-block d-none " + styles.menu} data-testid="list-group-header">
                    <GameTypeMenuListOption text={this.getMenuHeading()} onClick={this.handleChange} isHeading>
                        <FontAwesomeIcon fixedWidth icon={appMode === AppMode.PLAY ? faGamepad : faGraduationCap} />
                    </GameTypeMenuListOption>
                </ListGroup>

                <ListGroup className={"d-md-block d-none " + styles.menu} data-testid="list-group">
                    {
                        Topic.ALL.map((topic: Topic) => {
                            return (
                                <GameTypeMenuListOption type={topic} onClick={this.handleChange} selected={selected}>
                                    <FontAwesomeIcon fixedWidth icon={topic.icon}/>
                                </GameTypeMenuListOption>
                            )
                        })
                    }
                </ListGroup>

            </div>
        );
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