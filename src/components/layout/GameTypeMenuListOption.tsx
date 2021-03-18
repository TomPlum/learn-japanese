import React, { Component, ReactElement } from "react";
import { GameType } from "../../types/GameType";
import { ListGroupItem } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/GameTypeMenuListOption.module.scss";

interface GameTypeMenuOptionProps {
    type: GameType;
    selected: GameType;
    onClick?: (type: GameType) => void;
}

class GameTypeMenuListOption extends Component<GameTypeMenuOptionProps> {
    render() {
        const { type, selected } = this.props;
        return(
            <ListGroupItem
                action
                onClick={() => this.props?.onClick?.(type)}
                eventKey={type}
                active={selected === type}
                className={styles.item}
            >
                {React.cloneElement(this.props.children as ReactElement, { className: styles.icon })}
                <span className={styles.text}>{type}</span>
            </ListGroupItem>
        );
    }
}

export default GameTypeMenuListOption;