import React, { Component, ReactElement } from "react";
import { GameType } from "../../types/GameType";
import { Dropdown } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/GameTypeMenuDropdownOption.module.scss";

interface GameTypeMenuDropdownOptionProps {
    type: GameType;
    selected: GameType;
    onClick: (type: GameType) => void;
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