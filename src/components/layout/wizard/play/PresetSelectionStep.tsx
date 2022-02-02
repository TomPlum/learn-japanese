import { Col, Container, Row } from "react-bootstrap";
import TopicSelector from "./TopicSelector";
import React, { useEffect, useImperativeHandle, useState } from "react";
import Topic from "../../../../domain/Topic";
import styles from "../../../../styles/sass/components/layout/wizard/play/PresetSelectionStep.module.scss";
import PlayMode from "../../../../domain/session/PlayMode";
import GridItem from "../GridItem";
import GridDisplay from "../GridDisplay";
import { Environment } from "../../../../utility/Environment";

const PresetSelectionStep = React.forwardRef((props, ref) => {

    const [topic, setTopic] = useState(Topic.KANA);
    const [selectedPreset, setSelectedPreset] = useState(topic.playModes.getModes()[0]);

    useEffect(() => {
        setSelectedPreset(topic.playModes.getModes()[0]);
    }, [topic]);

    const onSelectPreset = (mode: PlayMode) => {
        setSelectedPreset(mode);
    }

    useImperativeHandle(ref, () => ({
        getValue: () => {
            return selectedPreset;
        }
    }));

    return (
        <Container fluid>
            <Row>
                <Col xs={3} className={styles.topicWrapper}>
                    <TopicSelector onSelect={topic => setTopic(topic)} />
                </Col>
                <Col>
                    <GridDisplay controls>
                        {topic.playModes.getModes().map(preset => {
                            return (
                                <GridItem
                                    type={preset}
                                    icon={preset.icon}
                                    onClick={onSelectPreset}
                                    selected={selectedPreset}
                                    className={styles.preset}
                                    iconColour={preset.colour}
                                    key={preset.displayName + "-button"}
                                />
                            )
                        })}
                    </GridDisplay>
                    <p className={styles.desc}>
                        {Environment.variable(`PLAY_${topic.playModes.getTopic()}_${selectedPreset.displayName}_DESC`)}
                    </p>
                </Col>
            </Row>
        </Container>
    )
});

export default PresetSelectionStep;
