import TopicDropdownOption from "../../TopicDropdownOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Topic from "../../../../domain/Topic";
import styles from "../../../../styles/sass/components/layout/wizard/play/TopicSelector.module.scss";

export interface TopicSelectorProps {
    onSelect: (topic: Topic) => void;
}

const TopicSelector = (props: TopicSelectorProps) => {

    const [selected, setSelected] = useState(Topic.KANA);

    const handleChange = (topic: Topic) => {
        setSelected(topic);
        props.onSelect(topic);
    }

    return (
        <div>
            {Topic.ALL.map((topic: Topic) =>
                <TopicDropdownOption
                    type={topic}
                    key={topic.name}
                    selected={selected}
                    onClick={handleChange}
                    className={styles.option}
                />
            )}
        </div>
    )
}

export default TopicSelector;
