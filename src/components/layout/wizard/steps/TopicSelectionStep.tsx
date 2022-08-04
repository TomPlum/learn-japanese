import React from "react";
import Topic from "../../../../domain/Topic";
import GridDisplay from "../grid/GridDisplay";
import GridItem from "../grid/GridItem";
import GridDisplayType from "../../../../domain/grid/GridDisplayType";

export interface TopicSelectionStepProps {
    topic: Topic;
    onSelect: (topic: Topic) => void;
}

const TopicSelectionStep = (props: TopicSelectionStepProps) => {

    const { topic, onSelect } = props;

    const handleChange = (topic: Topic) => {
        onSelect(topic);
    }

    return (
        <div data-testid="wizard-topic-settings-step">
            <GridDisplay controls defaultDisplayType={GridDisplayType.LIST}>
                {
                    Topic.ALL.map(selection => {
                        return (
                            <GridItem
                                value={selection}
                                id={selection.name}
                                key={selection.name}
                                icon={selection.icon}
                                selected={topic.name}
                                onClick={handleChange}
                            />
                        )
                    })
                }
            </GridDisplay>
        </div>
    )
}

export default TopicSelectionStep;
