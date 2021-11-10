import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Topic from "../../domain/Topic";
import TopicSelectionMenu from "./TopicSelectionMenu";
import ModeSelectionMenu from "../learn/ModeSelectionMenu";
import { SessionSettings } from "../../domain/session/settings/SessionSettings";
import styles from "../../styles/sass/components/layout/SettingsMenu.module.scss";

export interface SettingsMenuProps {
    onStart: (settings: SessionSettings) => void;
}

const SettingsMenu = (props: SettingsMenuProps) => {

    const modeMenu = useRef<HTMLDivElement>(null);
    const [topic, setTopic] = useState<Topic>(Topic.KANA);

    useEffect(() => {
        modeMenu.current?.scrollIntoView();
    }, []);

    useEffect(() => {
        modeMenu.current?.scrollIntoView();
    }, [topic]);

    const onSelectMode = (settings: SessionSettings) => {
        props.onStart(settings);
    }

    const onSelectTopic = (topic: Topic) => {
        setTopic(topic);
    }

    return (
        <div className={styles.wrapper} data-testid="game-settings-menu">
            <Container fluid className={styles.innerWrapper}>
                <Row className={styles.row}>
                    <Col sm={12} lg={5} className={styles.topicSelectionMenuWrapper}>
                        <TopicSelectionMenu
                            className={styles.topicMenu}
                            onSelect={onSelectTopic}
                        />
                    </Col>

                    <Col sm={12} lg={7} className={styles.gameMenuWrapper} ref={modeMenu}>
                        <ModeSelectionMenu
                            topic={topic}
                            key={topic.name}
                            onStart={onSelectMode}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SettingsMenu;
