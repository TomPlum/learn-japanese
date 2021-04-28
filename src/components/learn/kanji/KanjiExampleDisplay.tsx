import { Component } from "react";
import { Example } from "../../../types/kanji/Example";
import { Kanji } from "../../../types/kanji/Kanji";
import SpinnerController from "../../ui/SpinnerController";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/sass/components/learn/kanji/KanjiExampleDisplay.module.scss";

export interface KanjiExampleDisplayProps {
    kanji: Kanji;
}

interface KanjiExampleDisplayState {
    selected: Example;
}

class KanjiExampleDisplay extends Component<KanjiExampleDisplayProps, KanjiExampleDisplayState> {

    constructor(props: Readonly<KanjiExampleDisplayProps> | KanjiExampleDisplayProps) {
        super(props);
        this.state = {
            selected: props.kanji.examples[0]
        }
    }

    render() {
        const { kanji } = this.props;
        const { selected } = this.state;

        return (
            <Container className={styles.wrapper} fluid>
                <Row>
                    <Col>
                        <p className={styles.title}>Examples:</p>
                    </Col>
                </Row>

                <Row className={styles.row}>
                    <Col xs={2} className={styles.controllerWrapper}>
                        <SpinnerController
                            values={kanji.examples}
                            disabledTitle="This kanji has no example associated with it."
                            onChange={(value: Example) => this.setState({ selected: value })}
                        />
                    </Col>

                    <Col className={styles.textWrapper}>
                        <p className={styles.example}>
                            {[...selected.kanji].map((char: string, i: number) => {
                                const className = char === kanji.getValue() ? styles.highlight : styles.kanji;
                                return <span className={className} key={i}>{char}</span>
                            })}
                        </p>

                        <p className={styles.kana}>
                            ( {selected.kana.join(" or ")} )
                        </p>

                        <p className={styles.meaning}>
                            { selected.english.join(", ") }
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default KanjiExampleDisplay;