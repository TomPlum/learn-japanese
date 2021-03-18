import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GameType } from "../../types/GameType";
import KanaGameModeMenu from "./KanaGameModeMenu";
import GameTypeMenu from "./GameTypeMenu";
import { GameSettings } from "../../types/GameSettings";
import styles from "../../styles/sass/components/layout/GameSettingsMenu.module.scss";

export interface GameTypeSettings {
    type: GameType;
    settings: GameSettings;
}

export interface GameSettingsMenuProps {
    onStart: (settings: GameTypeSettings) => void;
}

interface GameSettingsMenuState {
    selectedGameType: GameType;
    selectedGameSettings?: GameSettings;
}

class GameSettingsMenu extends Component<GameSettingsMenuProps, GameSettingsMenuState> {

    constructor(props: Readonly<GameSettingsMenuProps> | GameSettingsMenuProps) {
        super(props);
        this.state = {
            selectedGameType: GameType.KANA,
            selectedGameSettings: undefined
        }
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <Row className={styles.row}>
                    <Col sm={12} md={6} lg={5} xl={4}>
                        <GameTypeMenu
                            onSelect={(selected) => this.setState({ selectedGameType: selected })}
                            className={styles.menu}
                        />
                    </Col>
                    <Col sm={12} md={6} lg={7} xl={8}>
                        {this.getGameTypeMenu()}
                    </Col>
                </Row>
            </div>
        );
    }

    private getGameTypeMenu = () => {
        const { selectedGameType } = this.state;
        switch (selectedGameType) {
            case GameType.KANA: {
                return (
                    <KanaGameModeMenu
                        onSelectedMode={(type, settings) => this.handleOnStart(settings)}
                        className={styles.menu}
                    />
                )
            }
            case GameType.NUMBERS: {
                return <p className={styles.menu} style={{color: '#FFF'}}>Numbers menu here</p>
            }
            case GameType.KANJI: {
                return <p className={styles.menu} style={{color: '#FFF'}}>Kanji menu here</p>
            }
        }
    }

    private handleOnStart = (settings: GameSettings) => {
        const { selectedGameType } = this.state;
        this.props.onStart({ settings: settings, type: selectedGameType });
    }
}

export default GameSettingsMenu;