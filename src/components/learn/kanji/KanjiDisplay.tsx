import { Component } from "react";
import { Container } from "react-bootstrap";
import { Kanji } from "../../../types/kanji/Kanji";
import styles from "../../../styles/sass/components/learn/kanji/KanjiDisplay.module.scss";

interface KanjiDisplayProps {
    kanji: Kanji;
    size?: string;
    className?: string;
}

//TODO: Can we not replace this with the Kana display and generify it?
class KanjiDisplay extends Component<KanjiDisplayProps> {
    render() {
        const { kanji, size, className } = this.props;
        return (
            <Container className={styles.wrapper}>
                <p className={[styles.value, className].join(" ")} style={{fontSize: size ? size : !className ? "8em": undefined, lineHeight: "1em"}}>
                    {kanji.getValue()}
                </p>
            </Container>
        );
    }
}

export default KanjiDisplay;