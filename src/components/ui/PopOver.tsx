import { Component } from "react";
import { Popover } from "react-bootstrap";
import styles from "../../styles/sass/components/ui/PopOver.module.scss";

export interface PopOverProps {
    title: string;
    text: Element | JSX.Element | string;
    className?: string;
}

class PopOver extends Component<PopOverProps> {
    render() {
        const { title, text, className, ...rest } = this.props;

        return (
            <Popover id="popover" className={[styles.popover, className].join(" ")} {...rest}>
                <Popover.Title as="h3" className={styles.title}>{title}</Popover.Title>
                <Popover.Content className={styles.text}>{text}</Popover.Content>
            </Popover>
        );
    }
}

export default PopOver;
