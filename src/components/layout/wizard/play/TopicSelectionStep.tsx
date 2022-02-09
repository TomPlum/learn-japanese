import React, { useState } from "react";
import Topic from "../../../../domain/Topic";
import GridDisplay from "../GridDisplay";
import GridItem from "../GridItem";
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
        <div>
            <GridDisplay controls defaultDisplayType={GridDisplayType.LIST}>
                {
                    Topic.ALL.map(topic => {
                        return (
                            <GridItem
                                value={topic}
                                key={topic.name}
                                icon={topic.icon}
                                name={topic.name}
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
