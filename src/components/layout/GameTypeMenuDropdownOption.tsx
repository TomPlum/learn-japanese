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
        const { type, selected, onClick } = this.props;

        return (
            <Dropdown.Item onClick={() => onClick(type)} eventKey={type} active={type === selected}>
                {React.cloneElement(this.props.children as ReactElement, { className: styles.icon })}
                <span className={styles.text}>{type}</span>
            </Dropdown.Item>
        );
    }
}

export default GameTypeMenuDropdownOption;