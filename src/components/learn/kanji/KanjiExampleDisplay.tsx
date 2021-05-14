import { Component } from "react";
import { Example } from "../../../types/kanji/Example";
import { Kanji } from "../../../types/kanji/Kanji";
import SpinnerController from "../../ui/SpinnerController";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/sass/components/learn/kanji/KanjiExampleDisplay.module.scss";
import Copyable from "../../ui/Copyable";

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
                        <span className={styles.example}>
                            {[...selected.kanji].map((char: string, i: number) => {
                                const className = char === kanji.getValue() ? styles.highlight : styles.kanji;
                                return (
                                    <Copyable className={className} key={"copyable-" + i} inline>
                                        <span key={i}>{char}</span>
                                    </Copyable>
                                );
                            })}
                        </span>

                        <span className={styles.kana}>
                            <span>( </span>

                            <Copyable inline>
                                <span>{selected.kana.join(" or ")}</span>
                            </Copyable>

                            <span> )</span>
                        </span>

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