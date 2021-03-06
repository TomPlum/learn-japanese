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
                        <Copyable className={styles.kanji}>
                            <span className={styles.example}>
                                {selected.kanji}
                            </span>
                        </Copyable>


                        <span>
                            <span className={styles.kana}>( </span>
                            {
                                selected.kana.map((value: string, i: number) => {
                                    if (i < selected.kana.length - 1) {
                                        return [
                                            <Copyable className={styles.kana} key={`copyable-${i}`} inline>
                                                <span key={value}>{value}</span>
                                            </Copyable>,
                                            <span key={`or-${i}`}> or </span>
                                        ];
                                    } else {
                                        return (
                                            <Copyable className={styles.kana} key={`copyable-${i}`} inline>
                                                <span key={value}>{value}</span>
                                            </Copyable>
                                        );
                                    }
                                })
                            }
                            <span className={styles.kana}> )</span>
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