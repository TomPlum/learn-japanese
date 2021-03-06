import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/learn/FlashCardBack.module.scss";
import KanjiDisplay from "./KanjiDisplay";
import { Kanji } from "../../types/kanji/Kanji";
import { ReadingType } from "../../types/kanji/ReadingType";
import Inspectable from "../ui/Inspectable";
import { Environment } from "../../utility/Environment";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Arrays from "../../utility/Arrays";

interface FlashCardBackProps {
    kanji: Kanji;
    onClick: () => void;
}

class FlashCardBack extends Component<FlashCardBackProps> {
    render() {
        const { kanji } = this.props;
        return (
            <Container className={styles.wrapper}>
                <Row className={styles.header}>
                    <p className={styles.grade}>Grade {kanji.grade}</p>
                    <Button className={styles.back} variant="outline-danger" onClick={this.props.onClick}>
                        <FontAwesomeIcon icon={faReply} />
                    </Button>
                </Row>

                <Row className={styles.body}>
                    <Col sm={6} xs={12}>
                        <a href={kanji.source} target="_blank" className={styles.source}>
                            <KanjiDisplay value={kanji} size={"8em"}/>
                        </a>
                    </Col>
                    <Col sm={6} xs={12}>
                        <p className={styles.text}>
                            <Inspectable title="On-yomi Reading" text={Environment.variable("ONYOMI_DESC")}>
                                <strong>On</strong>
                            </Inspectable>
                            {": " + this.getReading(ReadingType.ON)}
                        </p>
                        <p className={styles.text}>
                            <Inspectable title="Kun-yomi Reading" text={Environment.variable("KUNYOMI_DESC")}>
                                <strong>Kun</strong>
                            </Inspectable>
                            {": " + this.getReading(ReadingType.KUN)}
                        </p>
                        <p className={styles.text}>
                            <strong>Meaning:</strong> {kanji.meanings.join(", ")}
                        </p>
                    </Col>
                </Row>

                <Row className={styles.footer}>
                    <Col xs={12}>
                        {Arrays.getRandomElements(kanji.examples, 3).map(example => {
                            return <p className={styles.example}>
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
            .map(it => it.romanji + " (" + it.kana + ")")[0];
    }
}

export default FlashCardBack;