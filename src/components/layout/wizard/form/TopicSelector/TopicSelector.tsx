import TopicDropdownOption from "../../../../ui/select/TopicDropdownOption"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Topic from "types/Topic"
import styles  from "./TopicSelector.module.scss"
import { Dropdown } from "react-bootstrap"

export interface TopicSelectorProps {
  topic: Topic
  className?: string
  disabled?: boolean
  onSelect: (topic: Topic) => void
}

const TopicSelector = (props: TopicSelectorProps) => {
  const { topic, disabled, onSelect, className } = props
  const [selected, setSelected] = useState(topic)

  const handleChange = (topic: Topic) => {
    setSelected(topic)
    onSelect(topic)
  }

  return (
    <div className={className}>
      <Dropdown className={styles.dropdown} data-testid="wizard-topic-selector">
        <Dropdown.Toggle
          id="topic-selector"
          disabled={disabled}
          className={styles.toggle}
          data-testid="topic-selector-toggle"
        >
          <FontAwesomeIcon fixedWidth icon={selected.icon} /> {selected.name}
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles.menu} data-testid='topic-selector-menu'>
          {Topic.ALL.map((topic: Topic) => (
            <TopicDropdownOption
              type={topic}
              key={topic.name}
              selected={selected}
              onClick={handleChange}
              className={styles.option}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default TopicSelector
