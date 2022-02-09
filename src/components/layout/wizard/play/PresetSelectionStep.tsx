import { Alert, Container, Row } from "react-bootstrap";
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
    selected: Topic;
    onSelect: (preset: PlayMode) => void;
}

const PresetSelectionStep = (props: PresetSelectionStepProps) => {

    const { selected, onSelect } = props;

    const [topic, setTopic] = useState(selected);
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
    const description = Environment.variable(`PLAY_${topic.playModes.getTopic()}_${selectedPreset.displayName}_DESC`);

    return (
        <div className={styles.container}>
            <ScrollableContainer height={344}>
                <GridDisplay controls customOptions={<TopicSelectionDropdown />}>
                    {topic.playModes.getModes().map(preset =>
                         <GridItem
                            value={preset}
                            desc={description}
                            icon={preset.icon}
                            onClick={onSelectPreset}
                            className={styles.preset}
                            iconColour={preset.colour}
                            key={preset.displayName + "-button"}
                            selected={selectedPreset.displayName}
                        />
                    )}
                </GridDisplay>
            </ScrollableContainer>
        </div>
    )
}

export default PresetSelectionStep;
