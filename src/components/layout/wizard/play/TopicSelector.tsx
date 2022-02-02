import TopicDropdownOption from "../../TopicDropdownOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Topic from "../../../../domain/Topic";
import styles from "../../../../styles/sass/components/layout/wizard/play/TopicSelector.module.scss";
import { Dropdown } from "react-bootstrap";

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
            {/*{Topic.ALL.map((topic: Topic) =>
                <TopicDropdownOption
                    type={topic}
                    key={topic.name}
                    selected={selected}
                    onClick={handleChange}
                    className={styles.option}
                />
            )}*/}
            <Dropdown className={styles.dropdown} data-testid="dropdown">
                <Dropdown.Toggle variant="primary" className={styles.dropdownToggle} id="select-game-type">
                    <FontAwesomeIcon fixedWidth icon={selected.icon} /> {selected.name}
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

export default TopicSelector;
