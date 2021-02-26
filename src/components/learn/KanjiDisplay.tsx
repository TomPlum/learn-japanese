import { Component } from "react";
import { Container } from "react-bootstrap";
import { Kanji } from "../../types/kanji/Kanji";
import styles from "../../styles/sass/components/learn/KanjiDisplay.module.scss";

interface KanjiDisplayProps {
    value: Kanji;
}

class KanjiDisplay extends Component<KanjiDisplayProps> {
    render() {
        return (
            <Container className={styles.wrapper}>
                <p className={styles.value}>
                    {this.props.value.getValue()}
                </p>
            </Container>
        );
    }
}

export default KanjiDisplay;