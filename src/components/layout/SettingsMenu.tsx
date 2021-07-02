import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Topic from "../../types/Topic";
import TopicSelectionMenu from "./TopicSelectionMenu";
import { GameSettings, SessionSettings } from "../../types/game/GameSettings";
import { AppMode } from "../../types/AppMode";
import ModeSelectionMenu from "../learn/ModeSelectionMenu";
import styles from "../../styles/sass/components/layout/GameSettingsMenu.module.scss";
import { LearningSessionSettings } from "../../types/learn/LearningSessionSettings";

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
}

class SettingsMenu extends Component<GameSettingsMenuProps, GameSettingsMenuState> {

    constructor(props: Readonly<GameSettingsMenuProps> | GameSettingsMenuProps) {
        super(props);
        this.state = {
            topic: Topic.KANA,
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

        return (
            <ModeSelectionMenu
                key={topic.name}
                topic={topic}
                appMode={mode}
                onStart={this.onStart}
            />
        );
    }

    private onStart = (settings: SessionSettings) => {
        const { topic } = this.state;
        const { mode, onStartGame, onStartLearn } = this.props;
        if (mode === AppMode.LEARN) {
            onStartLearn({ settings: settings as LearningSessionSettings, topic: topic });
        } else {
            onStartGame({ settings: settings as GameSettings, topic: topic});
        }

    }
}

export default SettingsMenu;