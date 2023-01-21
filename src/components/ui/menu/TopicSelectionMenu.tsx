import React, { useState } from "react"
import { Dropdown, ListGroup } from "react-bootstrap"
import Topic from "../../../domain/Topic"
import TopicListOption from "../select/TopicListOption"
import { faGamepad, faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TopicDropdownOption from "../select/TopicDropdownOption"
import { AppMode } from "../../../domain/AppMode"
import styles from "../../../styles/sass/components/ui/menu/TopicSelectionMenu.module.scss"
import { useModeSelector } from "../../../hooks"

interface TopicSelectionMenuProps {
  onSelect: (type: Topic) => void
  className?: string
}

const TopicSelectionMenu = (props: TopicSelectionMenuProps) => {
  const [selected, setSelected] = useState(Topic.KANA)
  const appMode = useModeSelector((state) => state.mode.mode)

  const getMenuHeading = () => {
    switch (appMode) {
      case AppMode.PLAY:
        return "Select Game Mode"
      case AppMode.LEARN:
        return "Select Topic"
    }
  }

  const handleChange = (type?: Topic) => {
    if (type) {
      setSelected(type)
      props.onSelect(type)
    }
  }

  return (
    <div className={props.className}>
      <Dropdown className={"d-lg-none " + styles.dropdown} data-testid="dropdown">
        <Dropdown.Toggle variant="primary" className={styles.dropdownToggle} id="select-game-type">
          <FontAwesomeIcon fixedWidth icon={selected.icon} /> {selected.name}
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles.dropdownMenu}>
          {Topic.ALL.map((topic: Topic) => (
            <TopicDropdownOption type={topic} onClick={handleChange} selected={selected} key={topic.name} />
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <ListGroup className={"d-lg-block d-none " + styles.menu} data-testid="list-group-header">
        <TopicListOption text={getMenuHeading()} onClick={handleChange} isHeading>
          <FontAwesomeIcon
            fixedWidth
            icon={appMode === AppMode.PLAY ? faGamepad : faGraduationCap}
            className={appMode === AppMode.LEARN ? styles.learn : styles.play}
          />
        </TopicListOption>
      </ListGroup>

      <ListGroup className={"d-lg-block d-none " + styles.menu} data-testid="list-group">
        {Topic.ALL.map((topic: Topic) => (
          <TopicListOption type={topic} onClick={handleChange} selected={selected} key={topic.name}>
            <FontAwesomeIcon fixedWidth icon={topic.icon} className={styles.icon} />
          </TopicListOption>
        ))}
      </ListGroup>
    </div>
  )
}

export default TopicSelectionMenu
