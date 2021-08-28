import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Topic from "../../domain/Topic";
import TopicSelectionMenu from "./TopicSelectionMenu";
import { AppMode } from "../../domain/AppMode";
import ModeSelectionMenu from "../learn/ModeSelectionMenu";
import { SessionSettings } from "../../domain/session/settings/SessionSettings";
import styles from "../../styles/sass/components/layout/SettingsMenu.module.scss";

export interface GameSettingsMenuProps {
    mode: AppMode;
    onStart: (settings: SessionSettings) => void;
}

interface GameSettingsMenuState {
    topic: Topic;
}

class SettingsMenu extends Component<GameSettingsMenuProps, GameSettingsMenuState> {

    private readonly modeMenu = React.createRef<HTMLDivElement>();

    constructor(props: Readonly<GameSettingsMenuProps> | GameSettingsMenuProps) {
        super(props);
        this.state = {
            topic: Topic.KANA,
        }
    }

    componentDidMount() {
        this.modeMenu.current?.scrollIntoView();
    }

    componentDidUpdate(prevProps: Readonly<GameSettingsMenuProps>, prevState: Readonly<GameSettingsMenuState>) {
        if (prevState.topic !== this.state.topic) {
            this.modeMenu.current?.scrollIntoView();
        }
    }

    render() {
        const { mode } = this.props;
        const { topic } = this.state;

        return (
            <div className={styles.wrapper} data-testid="game-settings-menu">
                <Container fluid className={styles.innerWrapper}>
                    <Row className={styles.row}>
                        <Col sm={12} lg={5} className={styles.topicSelectionMenuWrapper}>
                            <TopicSelectionMenu
                                appMode={mode}
                                className={styles.topicMenu}
                                onSelect={this.onSelectTopic}
                            />
                        </Col>

                        <Col sm={12} lg={7} className={styles.gameMenuWrapper} ref={this.modeMenu}>
                            <ModeSelectionMenu
                                topic={topic}
                                appMode={mode}
                                key={topic.name}
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

    private onSelectTopic = (topic: Topic) => {
        this.setState({ topic: topic });
    }
}

export default SettingsMenu;
