import React, { useState } from "react";
import Topic from "../../../../domain/Topic";
import GridDisplay from "../grid/GridDisplay";
import GridItem from "../grid/GridItem";
import GridDisplayType from "../../../../domain/grid/GridDisplayType";

export interface TopicSelectionStepProps {
    onSelect: (topic: Topic) => void;
}

const TopicSelectionStep = (props: TopicSelectionStepProps) => {

    const { onSelect } = props;

    const [selected, setSelected] = useState(Topic.KANA);

    const handleChange = (topic: Topic) => {
        setSelected(topic);
        onSelect(topic);
    }

    return (
        <div data-testid="wizard-topic-settings-step">
            <GridDisplay controls defaultDisplayType={GridDisplayType.LIST}>
                {
                    Topic.ALL.map(topic => {
                        return (
                            <GridItem
                                value={topic}
                                key={topic.name}
                                icon={topic.icon}
                                onClick={handleChange}
                                selected={selected.name}
                            />
                        )
                    })
                }
            </GridDisplay>
        </div>
    )
}

export default TopicSelectionStep;
