import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import KanjiDisplay from "./KanjiDisplay";
import { Kanji } from "../../../types/kanji/Kanji";
import { ReadingType } from "../../../types/kanji/ReadingType";
import Inspectable from "../../ui/Inspectable";
import { Environment } from "../../../utility/Environment";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Arrays from "../../../utility/Arrays";
import { Example } from "../../../types/kanji/Example";
import styles from "../../../styles/sass/components/learn/kanji/KanjiFlashCardBack.module.scss";
import Viewports, { Viewport } from "../../../utility/Viewports";
import { SizeMeProps, withSize } from "react-sizeme";

interface KanjiFlashCardBackProps extends SizeMeProps {
    kanji: Kanji;
    onClick: () => void;
}

class KanjiFlashCardBack extends Component<KanjiFlashCardBackProps> {
    render() {
        const { kanji } = this.props;
        return (
            <Container className={styles["wrapper-grade-" + kanji.grade.value] + " " + styles.wrapper} data-testid="back">
                <Row className={styles.header}>
                    <p className={styles.grade}>Grade {kanji.grade.value}</p>
                    <Button className={styles.back} variant="outline-danger" onClick={this.props.onClick} title="Reset">
                        <FontAwesomeIcon icon={faReply} />
                    </Button>
                </Row>

                <Row className={styles.body}>
                    <Col sm={6} xs={4}>
                        <a href={kanji.source} target="_blank" className={styles.source} title="Click for Wiki source">
                            <KanjiDisplay kanji={kanji} className={styles.display} showSource />
                        </a>
                    </Col>
                    <Col sm={6} xs={8}>
                        <p className={styles.text}>
                            <Inspectable title="On-yomi Reading" text={Environment.variable("ONYOMI_DESC")}>
                                <span className={styles.label}>On</span>
                            </Inspectable>
                            {": " + this.getReading(ReadingType.ON)}
                        </p>
                        <p className={styles.text}>
                            <Inspectable title="Kun-yomi Reading" text={Environment.variable("KUNYOMI_DESC")}>
                                <span className={styles.label}>Kun</span>
                            </Inspectable>
                            {": " + this.getReading(ReadingType.KUN)}
                        </p>
                        <p className={styles.text}>
                            <Inspectable title="English Meaning" text={Environment.variable("ENGLISH_MEANING_DESC")}>
                                <span className={styles.label}>Meaning</span>
                            </Inspectable>
                            {": " + kanji.meanings.join(", ")}
                        </p>
                    </Col>
                </Row>

                <Row className={styles.footer}>
                    <Col xs={12}>
                        {this.getExamples().map(example => {
                            return <p className={styles.example} key={example.kanji}>
                                {example.kanji} - {example.kana[0]} - {example.english.join(", ")}
                            </p>
                        })}
                    </Col>
                </Row>
            </Container>
        );
    }

    private getReading = (type: ReadingType): string => {
        return this.props.kanji.readings
            .filter(it => it.type === type)
            .map(it => it.romanji + " (" + it.kana.trim() + ")")[0];
    }

    private getExamples = (): Example[] => {
        const { kanji } = this.props;
        const viewport = Viewports.fromFlashCardWidth(this.props.size.width);
        let examplesQuantity: number;
        switch (viewport) {
            case Viewport.PHONE: {
                examplesQuantity = 3;
                break;
            }
            case Viewport.TABLET: {
                examplesQuantity = 4;
                break;
            }
            case Viewport.DESKTOP: {
                examplesQuantity = 5;
                break;
            }
            default: examplesQuantity = 3;
        }
        const examples = Arrays.getRandomElements(kanji.examples, examplesQuantity);
        console.log(examples);
        return examples;
    }
}

export default withSize()(KanjiFlashCardBack);