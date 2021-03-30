import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Topic } from "../../types/Topic";
import KanaGameModeMenu from "./KanaGameModeMenu";
import GameTypeMenu from "./GameTypeMenu";
import { GameSettings, KanaSettings } from "../../types/GameSettings";
import { AppMode } from "../../types/AppMode";
import LearnKanaMenu from "../learn/LearnKanaMenu";
import styles from "../../styles/sass/components/layout/GameSettingsMenu.module.scss";

export interface GameTypeSettings {
    topic: Topic;
    settings: GameSettings; //TODO: This will need to be generified to support all topics.
}

export interface LearnSessionSettings {
    topic: Topic;
    settings: KanaSettings; //TODO: This will need to be generified to support all topics.
}

export interface GameSettingsMenuProps {
    mode: AppMode;
    onStartGame: (settings: GameTypeSettings) => void;
    onStartLearn: (settings: LearnSessionSettings) => void;
}

interface GameSettingsMenuState {
    topic: Topic;
    selectedGameSettings?: GameSettings;
}

class GameSettingsMenu extends Component<GameSettingsMenuProps, GameSettingsMenuState> {

    constructor(props: Readonly<GameSettingsMenuProps> | GameSettingsMenuProps) {
        super(props);
        this.state = {
            topic: Topic.KANA,
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
                                onSelect={(selected) => this.setState({ topic: selected })}
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
        const { topic } = this.state;
        switch (topic) {
            case Topic.KANA: {
                switch (mode) {
                    case AppMode.LEARN: {
                        return (
                            <LearnKanaMenu onStart={this.onStartLearning}/>
                        );
                    }
                    case AppMode.PLAY: {
                        return (
                            <KanaGameModeMenu
                                onSelectedMode={(mode, settings) => this.onStartGame(settings)}
                                className={styles.menu}
                            />
                        );
                    }
                }
                break;
            }
            case Topic.NUMBERS: {
                return <p className={styles.menu} style={{ color: '#FFF' }}>Numbers menu here</p>
            }
            case Topic.KANJI: {
                return <p className={styles.menu} style={{ color: '#FFF' }}>Kanji menu here</p>
            }
            case Topic.COLOURS: {
                return <p className={styles.menu} style={{ color: '#FFF' }}>Colours menu here</p>
            }
            case Topic.WEATHER: {
                return <p className={styles.menu} style={{ color: '#FFF' }}>Weather menu here</p>
            }
            case Topic.CALENDAR: {
                return <p className={styles.menu} style={{ color: '#FFF' }}>Calendar menu here</p>
            }
        }
    }

    private onStartGame = (settings: GameSettings) => {
        const { topic } = this.state;
        this.props.onStartGame({ settings: settings, topic: topic });
    }

    private onStartLearning = (settings: KanaSettings) => {
        const { topic } = this.state;
        this.props.onStartLearn({ topic: topic, settings: settings });
    }
}

export default GameSettingsMenu;