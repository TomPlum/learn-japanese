import TopicSelector from "./TopicSelector";
import React, { useEffect, useState } from "react";
import Topic from "../../../../domain/Topic";
import styles from "../../../../styles/sass/components/layout/wizard/play/PresetSelectionStep.module.scss";
import PlayMode from "../../../../domain/session/PlayMode";
import GridItem from "../grid/GridItem";
import GridDisplay from "../grid/GridDisplay";
import { Environment } from "../../../../utility/Environment";
import ScrollableContainer from "../../../ui/ScrollableContainer";
import { AppMode } from "../../../../domain/AppMode";

export interface PresetSelectionStepProps {
    mode: AppMode;
    selected: Topic;
    onSelect: (preset: PlayMode) => void;
}

const PresetSelectionStep = (props: PresetSelectionStepProps) => {

    const { mode, selected, onSelect } = props;

    const [topic, setTopic] = useState(selected);
    const [selectedPreset, setSelectedPreset] = useState(topic.playModes.getModes()[0]);

    useEffect(() => {
        onSelect(mode === AppMode.PLAY ? selected.playModes.getModes()[0] : selected.modes.getModes()[0]);
    }, []);

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

    const presets = mode === AppMode.PLAY ? topic.playModes.getModes() : topic.modes.getModes();

    return (
        <div className={styles.container}>
            <ScrollableContainer height={344}>
                <GridDisplay controls customOptions={<TopicSelectionDropdown />}>
                    {presets.map(preset =>
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
