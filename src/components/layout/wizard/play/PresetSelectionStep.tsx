import { Container, Row } from "react-bootstrap";
import TopicSelector from "./TopicSelector";
import React, { useEffect, useState } from "react";
import Topic from "../../../../domain/Topic";
import styles from "../../../../styles/sass/components/layout/wizard/play/PresetSelectionStep.module.scss";
import PlayMode from "../../../../domain/session/PlayMode";
import GridItem from "../GridItem";
import GridDisplay from "../GridDisplay";
import { Environment } from "../../../../utility/Environment";
import ScrollableContainer from "../../../ui/ScrollableContainer";

export interface PresetSelectionStepProps {
    onSelect: (preset: PlayMode) => void;
}

const PresetSelectionStep = (props: PresetSelectionStepProps) => {

    const { onSelect } = props;

    const [topic, setTopic] = useState(Topic.KANA);
    const [selectedPreset, setSelectedPreset] = useState(topic.playModes.getModes()[0]);

    useEffect(() => {
        setSelectedPreset(topic.playModes.getModes()[0]);
    }, [topic]);

    const onSelectPreset = (mode: PlayMode) => {
        onSelect(mode);
        setSelectedPreset(mode);
    }

    const onSelectTopic = (topic: Topic) => {
        setTopic(topic);
    }

    const TopicSelectionDropdown = () => <TopicSelector topic={topic} onSelect={onSelectTopic} className={styles.topic} />;

    return (
        <Container fluid>
            <Row>
                <ScrollableContainer maxHeight={344}>
                    <GridDisplay controls customOptions={<TopicSelectionDropdown />}>
                        {topic.playModes.getModes().map(preset =>
                            <GridItem
                                value={preset}
                                icon={preset.icon}
                                onClick={onSelectPreset}
                                className={styles.preset}
                                name={preset.displayName}
                                iconColour={preset.colour}
                                key={preset.displayName + "-button"}
                                selected={selectedPreset.displayName}
                            />
                        )}
                    </GridDisplay>
                    <p className={styles.desc}>
                        {Environment.variable(`PLAY_${topic.playModes.getTopic()}_${selectedPreset.displayName}_DESC`)}
                    </p>
                </ScrollableContainer>
            </Row>
        </Container>
    )
}

export default PresetSelectionStep;
