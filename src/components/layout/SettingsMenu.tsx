import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Topic from "../../types/Topic";
import TopicSelectionMenu from "./TopicSelectionMenu";
import { AppMode } from "../../types/AppMode";
import ModeSelectionMenu from "../learn/ModeSelectionMenu";
import { SessionSettings } from "../../types/session/settings/SessionSettings";
import styles from "../../styles/sass/components/layout/GameSettingsMenu.module.scss";

export interface GameSettingsMenuProps {
    mode: AppMode;
    onStart: (settings: SessionSettings) => void;
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
        const { mode } = this.props;
        const { topic } = this.state;

        return (
            <div className={styles.wrapper} data-testid="game-settings-menu">
                <Container fluid className={styles.innerWrapper}>
                    <Row className={styles.row}>
                        <Col sm={12} md={6} lg={5}>
                            <TopicSelectionMenu
                                appMode={mode}
                                className={styles.menu}
                                onSelect={(selected) => this.setState({ topic: selected })}
                            />
                        </Col>

                        <Col sm={12} md={6} lg={7} className={styles.gameMenuWrapper}>
                            <ModeSelectionMenu
                                key={topic.name}
                                topic={topic}
                                appMode={mode}
                                onStart={this.onSelectMode}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    private onSelectMode = (settings: SessionSettings) => {
        this.props.onStart(settings);
    }
}

export default SettingsMenu;