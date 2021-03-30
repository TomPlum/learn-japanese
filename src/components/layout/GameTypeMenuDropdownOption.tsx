import React, { Component, ReactElement } from "react";
import { Topic } from "../../types/Topic";
import { Dropdown } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/GameTypeMenuDropdownOption.module.scss";

interface GameTypeMenuDropdownOptionProps {
    type: Topic;
    selected: Topic;
    onClick: (type: Topic) => void;
}

class GameTypeMenuDropdownOption extends Component<GameTypeMenuDropdownOptionProps> {
    render() {
        const { type, selected, onClick, children } = this.props;

        return (
            <Dropdown.Item onClick={() => onClick(type)} eventKey={type} active={type === selected}>
                {children && React.cloneElement(children as ReactElement, { className: styles.icon })}
                <span className={styles.text}>{type}</span>
            </Dropdown.Item>
        );
    }
}

export default GameTypeMenuDropdownOption;