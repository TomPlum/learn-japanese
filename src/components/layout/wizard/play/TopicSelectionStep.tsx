import React, { useState } from "react";
import Topic from "../../../../domain/Topic";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopicDropdownOption from "../../TopicDropdownOption";
import styles from "../../../../styles/sass/components/layout/wizard/play/TopicSelectionStep.module.scss";

export interface TopicSelectionStepProps {
    onSelect: (topic: Topic) => void;
}

const TopicSelectionStep = (props: TopicSelectionStepProps) => {

    const { onSelect } = props;

    const [topic, setTopic] = useState(Topic.KANA);

    const handleChange = (topic: Topic) => {
        setTopic(topic);
        onSelect(topic);
    }

    return (
        <div>
            <Dropdown className={styles.dropdown} data-testid="dropdown">
                <Dropdown.Toggle variant="primary" className={styles.dropdownToggle} id="select-game-type">
                    <FontAwesomeIcon fixedWidth icon={topic.icon} /> {topic.name}
                </Dropdown.Toggle>

                <Dropdown.Menu className={styles.dropdownMenu}>
                    {Topic.ALL.map((topic: Topic) =>
                        <TopicDropdownOption
                            type={topic}
                            key={topic.name}
                            selected={topic}
                            onClick={handleChange}
                        />
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default TopicSelectionStep;
