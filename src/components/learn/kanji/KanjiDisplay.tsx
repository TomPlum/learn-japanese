import { Component } from "react";
import { Container } from "react-bootstrap";
import { Kanji } from "../../../types/kanji/Kanji";
import styles from "../../../styles/sass/components/learn/kanji/KanjiDisplay.module.scss";

interface KanjiDisplayProps {
    kanji: Kanji;
    size?: string;
    className?: string;
    showSource?: boolean;
}

//TODO: Can we not replace this with the Kana display and generify it?
class KanjiDisplay extends Component<KanjiDisplayProps> {
    render() {
        const { kanji, showSource, className, size } = this.props;
        const style = {fontSize: size ? size : !className ? "8em": undefined, lineHeight: "1em"};
        return (
            <Container className={styles.wrapper}>
                {showSource ?
                    <a
                        href={kanji.source}
                        target="_blank"
                        rel="noreferrer"
                        className={[styles.value, className, styles.source].join(" ")}
                        title="Click for Wiki source"
                        style={style}
                    >
                        {kanji.getValue()}
                    </a> :
                    <p
                        className={[styles.value, className].join(" ")}
                        style={style}
                    >
                        {kanji.getValue()}
                    </p>
                }
            </Container>
        );
    }
}

export default KanjiDisplay;