import TopicSelector from "../form/TopicSelector";
import React, { useEffect } from "react";
import Topic from "../../../../domain/Topic";
import styles from "../../../../styles/sass/components/layout/wizard/steps/PresetSelectionStep.module.scss";
import GridItem from "../grid/GridItem";
import GridDisplay from "../grid/GridDisplay";
import { Environment } from "../../../../utility/Environment";
import ScrollableContainer from "../../../ui/ScrollableContainer";
import { AppMode } from "../../../../domain/AppMode";
import SessionMode from "../../../../domain/session/SessionMode";

export interface PresetSelectionStepProps {
    mode: AppMode;
    topic: Topic;
    preset: SessionMode;
    onSelect: (preset: SessionMode) => void;
    onChangeTopic: (topic: Topic) => void;
}

const PresetSelectionStep = (props: PresetSelectionStepProps) => {

    const { preset, mode, topic, onSelect, onChangeTopic } = props;

    const onSelectPreset = (mode: SessionMode) => {
        onSelect(mode);
    }

    const onSelectTopic = (topic: Topic) => {
        const defaultPreset = mode === AppMode.PLAY ? topic.playModes.getModes()[0] : topic.modes.getModes()[0];
        onSelect(defaultPreset);
        onChangeTopic(topic);
    }

    const TopicSelectionDropdown = () => <TopicSelector topic={topic} onSelect={onSelectTopic} className={styles.topic} />;
    const description = Environment.variable(`${mode.toUpperCase()}_${topic.playModes.getTopic()}_${preset.displayName}_DESC`);

    const presets = mode === AppMode.PLAY ? topic.playModes.getModes() : topic.modes.getModes();

    return (
        <div className={styles.container}>
            <ScrollableContainer height={344}>
                <GridDisplay controls customOptions={<TopicSelectionDropdown />}>
                    {presets.map(option =>
                         <GridItem
                            value={option}
                            desc={description}
                            icon={option.icon}
                            onClick={onSelectPreset}
                            className={styles.preset}
                            iconColour={option.colour}
                            selected={preset.displayName}
                            key={option.displayName + "-button"}
                        />
                    )}
                </GridDisplay>
            </ScrollableContainer>
        </div>
    )
}

export default PresetSelectionStep;
