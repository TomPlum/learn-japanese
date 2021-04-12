import { Component } from "react";
import { Popover } from "react-bootstrap";
import styles from "../../styles/sass/components/ui/PopOver.module.scss";

interface PopOverProps {
    title: string;
    text: string;
    className?: string;
}

class PopOver extends Component<PopOverProps> {
    render() {
        const { title, text, className } = this.props;

        return (
            <Popover id="popover" className={[styles.popover, className].join(" ")} {...this.props}>
                <Popover.Title as="h3" className={styles.title}>{title}</Popover.Title>
                <Popover.Content className={styles.text}>{text}</Popover.Content>
            </Popover>
        );
    }
}

export default PopOver;