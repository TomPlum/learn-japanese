import React, { Component, ReactElement } from "react"
import Topic from "../../../domain/Topic"
import { ListGroupItem } from "react-bootstrap"
import styles from "../../../styles/sass/components/ui/select/TopicListOption.module.scss"

interface TopicListOptionProps {
    type?: Topic
    text?: string
    selected?: Topic
    onClick?: (type?: Topic) => void
    isHeading?: boolean
}

class TopicListOption extends Component<TopicListOptionProps> {
    render() {
        const { type, text, isHeading, selected, children } = this.props
        return (
            <ListGroupItem
                action={!isHeading}
                onClick={() => this.props?.onClick?.(type)}
                eventKey={type?.name}
                active={selected === type && !isHeading}
                className={!isHeading ? styles.item : styles.heading}
            >
                {children &&
                    React.cloneElement(children as ReactElement, {
                        className: [styles.icon, (children as ReactElement).props.className].join(" ")
                    })}
                <span className={styles.text}>{text ? text : type?.name}</span>
            </ListGroupItem>
        )
    }
}

export default TopicListOption
