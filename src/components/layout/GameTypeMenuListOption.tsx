import React, { Component, ReactElement } from "react";
import { Topic } from "../../types/Topic";
import { ListGroupItem } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/GameTypeMenuListOption.module.scss";

interface GameTypeMenuOptionProps {
    type?: Topic;
    text?: string;
    selected?: Topic;
    onClick?: (type?: Topic) => void;
    isHeading?: boolean;
}

class GameTypeMenuListOption extends Component<GameTypeMenuOptionProps> {
    render() {
        const { type, text, isHeading, selected, children } = this.props;
        return(
            <ListGroupItem
                action={!isHeading}
                onClick={() => this.props?.onClick?.(type)}
                eventKey={type}
                active={selected === type && !isHeading}
                className={!isHeading ? styles.item : styles.heading}
            >
                {children && React.cloneElement(children as ReactElement, { className: styles.icon })}
                <span className={styles.text}>{text ? text : type}</span>
            </ListGroupItem>
        );
    }
}

export default GameTypeMenuListOption;