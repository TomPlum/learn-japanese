import React, { Component } from "react";
import { Container, Dropdown, ListGroup } from "react-bootstrap";
import { GameType } from "../../types/GameType";
import styles from "../../styles/sass/components/layout/GameTypeMenu.module.scss";
import GameTypeMenuOption from "./GameTypeMenuOption";
import { faFont, faYenSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

                <Dropdown className={"d-sm-none " + styles.dropdown}>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {selected}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            Object.values(GameType).map((type: string) => {
                                return (
                                    <Dropdown.Item
                                        onClick={() => this.handleChange(type as GameType)}
                                    >
                                        {type}
                                    </Dropdown.Item>
                                )
                            })
                        }
                    </Dropdown.Menu>
                </Dropdown>

                <ListGroup className={"d-sm-block d-none " + styles.menu}>
                    <GameTypeMenuOption type={GameType.KANA} onClick={this.handleChange} selected={selected}>
                        <FontAwesomeIcon fixedWidth icon={faFont} />
                    </GameTypeMenuOption>

                    <GameTypeMenuOption type={GameType.NUMBERS} onClick={this.handleChange} selected={selected}>
                        <FontAwesomeIcon fixedWidth icon={faYenSign} />
                    </GameTypeMenuOption>
                </ListGroup>

            </div>
        );
    }

    private handleChange = (type: GameType) => {
        this.setState({ selected: type });
        this.props.onSelect(type);
    }
}

export default GameTypeMenu;