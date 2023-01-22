import React, { Component, ReactElement } from "react"
import Topic from "../../../domain/Topic"
import { Dropdown } from "react-bootstrap"
import styles from "../../../styles/sass/components/layout/GameTypeMenuDropdownOption.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface TopicDropdownOptionProps {
  type: Topic
  selected: Topic
  className?: string
  onClick: (type: Topic) => void
}

class TopicDropdownOption extends Component<TopicDropdownOptionProps> {
  render() {
    const { type, selected, onClick, className } = this.props

    const handleClick = () => {
      onClick(type)
    }

    return (
      <Dropdown.Item onClick={handleClick} eventKey={type.name} active={type === selected} className={className}>
        <FontAwesomeIcon fixedWidth icon={type.icon} className={styles.icon} />
        <span className={styles.text}>{type.name}</span>
      </Dropdown.Item>
    )
  }
}

export default TopicDropdownOption
