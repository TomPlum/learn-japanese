import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Topic from "../../types/Topic";
import KanaGameModeMenu from "./KanaGameModeMenu";
import TopicSelectionMenu from "./TopicSelectionMenu";
import { GameSettings } from "../../types/game/GameSettings";
import { AppMode } from "../../types/AppMode";
import styles from "../../styles/sass/components/layout/GameSettingsMenu.module.scss";
import { LearningSessionSettings } from "../../types/learn/LearningSessionSettings";
import LearnMenu from "../learn/LearnMenu";

export interface GameTypeSettings {
    topic: Topic;
    settings: GameSettings;
}

export interface LearnSessionSettings {
    topic: Topic;
    settings: LearningSessionSettings;
}

export interface GameSettingsMenuProps {
    mode: AppMode;
    onStartGame: (settings: GameTypeSettings) => void;
    onStartLearn: (settings: LearnSessionSettings) => void;
}

interface GameSettingsMenuState {
    topic: Topic;
    gameSettings?: GameSettings;
    learnSettings?: LearningSessionSettings;
}

class SettingsMenu extends Component<GameSettingsMenuProps, GameSettingsMenuState> {

    constructor(props: Readonly<GameSettingsMenuProps> | GameSettingsMenuProps) {
        super(props);
        this.state = {
            topic: Topic.KANA,
            gameSettings: undefined,
            learnSettings: undefined
        }
    }

    render() {
        return (
            <div className={styles.wrapper} data-testid="game-settings-menu">
                <Container fluid className={styles.innerWrapper}>
                    <Row className={styles.row}>
                        <Col sm={12} md={6} lg={5}>
                            <TopicSelectionMenu
                                onSelect={(selected) => this.setState({ topic: selected })}
                                className={styles.menu}
                                appMode={this.props.mode}
                            />
                        </Col>

                        <Col sm={12} md={6} lg={7} className={styles.gameMenuWrapper}>
                            {this.getMenu()}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    private getMenu = () => {
        const { mode } = this.props;
        const { topic } = this.state;

        switch (mode) {
            case AppMode.LEARN: {
                return <LearnMenu key={topic.name} modes={topic.modes} onStart={this.onStartLearning} />;
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
    }

    private onStartGame = (settings: GameSettings) => {
        const { topic } = this.state;
        this.props.onStartGame({ settings: settings, topic: topic });
    }

    private onStartLearning = (settings: LearningSessionSettings) => {
        const { topic } = this.state;
        this.props.onStartLearn({ topic: topic, settings: settings });
    }
}

export default SettingsMenu;