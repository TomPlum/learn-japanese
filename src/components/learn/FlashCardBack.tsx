import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import FlashCardResetButton from "../ui/FlashCardResetButton";
import styles from "../../styles/sass/components/learn/FlashCardBack.module.scss"

export interface FlashCardBackProps {
    title: string;
    className?: string;
    onReset: () => void;
}

class FlashCardBack extends Component<FlashCardBackProps> {
    render() {
        const { title, className, onReset, children } = this.props;

        return (
            <Container className={[styles.wrapper, className].join(" ")}>
                <Row className={styles.header}>
                    <p className={styles.title}>{title}</p>
                    <FlashCardResetButton onClick={onReset} />
                </Row>

                <Row className={styles.body}>
                    {children}
                </Row>
            </Container>
        );
    }
}

export default FlashCardBack;