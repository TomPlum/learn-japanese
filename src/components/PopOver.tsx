import { Component } from "react";
import { Popover } from "react-bootstrap";
import styles from "../styles/sass/components/PopOver.module.scss";

interface PopOverProps {
    title: string;
    text: string;
}

class PopOver extends Component<PopOverProps> {
    render() {
        const { title, text } = this.props;

        return (
            <Popover id="popover" className={styles.popover} {...this.props}>
                <Popover.Title as="h3">{title}</Popover.Title>
                <Popover.Content>{text}</Popover.Content>
            </Popover>
        );
    }
}

export default PopOver;