import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GameType } from "../../types/GameType";
import KanaGameModeMenu from "./KanaGameModeMenu";
import GameTypeMenu from "./GameTypeMenu";
import { GameSettings } from "../../types/GameSettings";
import styles from "../../styles/sass/components/layout/GameSettingsMenu.module.scss";
import { AppMode } from "../../types/AppMode";
import LearnKanaMenu from "../learn/LearnKanaMenu";

export interface GameTypeSettings {
    type: GameType;
    settings: GameSettings;
}

export interface GameSettingsMenuProps {
    mode: AppMode;
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
                <Container fluid className={styles.innerWrapper}>
                    <Row className={styles.row}>
                        <Col sm={12} md={6} lg={5}>
                            <GameTypeMenu
                                onSelect={(selected) => this.setState({ selectedGameType: selected })}
                                className={styles.menu}
                                appMode={this.props.mode}
                            />
                        </Col>
                        <Col sm={12} md={6} lg={7} className={styles.gameMenuWrapper}>
                            {this.getGameMenu()}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    private getGameMenu = () => {
        const { mode } = this.props;
        const { selectedGameType } = this.state;
        switch (selectedGameType) {
            case GameType.KANA: {
                switch(mode) {
                    case AppMode.LEARN: {
                        return (
                            <LearnKanaMenu onStart={(settings) => {}} />
                        );
                    }
                    case AppMode.PLAY: {
                        return (
                            <KanaGameModeMenu
                                onSelectedMode={(mode, settings) => this.handleOnStart(settings)}
                                className={styles.menu}
                            />
                        );
                    }
                }
                break;
            }
            case GameType.NUMBERS: {
                return <p className={styles.menu} style={{color: '#FFF'}}>Numbers menu here</p>
            }
            case GameType.KANJI: {
                return <p className={styles.menu} style={{color: '#FFF'}}>Kanji menu here</p>
            }
            case GameType.COLOURS: {
                return <p className={styles.menu} style={{color: '#FFF'}}>Colours menu here</p>
            }
            case GameType.WEATHER: {
                return <p className={styles.menu} style={{color: '#FFF'}}>Weather menu here</p>
            }
            case GameType.CALENDAR: {
                return <p className={styles.menu} style={{color: '#FFF'}}>Calendar menu here</p>
            }
        }
    }

    private handleOnStart = (settings: GameSettings) => {
        const { selectedGameType } = this.state;
        this.props.onStart({ settings: settings, type: selectedGameType });
    }
}

export default GameSettingsMenu;