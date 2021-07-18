import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import KanjiDisplay from "./KanjiDisplay";
import { ReadingType } from "../../../types/kanji/ReadingType";
import Inspectable from "../../ui/Inspectable";
import { Environment } from "../../../utility/Environment";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardBackFaceProps } from "../FlashCard";
import { Kanji } from "../../../types/kanji/Kanji";
import KanjiReadingDisplay from "./KanjiReadingDisplay";
import { KanjiReading } from "../../../types/kanji/KanjiReading";
import styles from "../../../styles/sass/components/learn/kanji/KanjiFlashCardBack.module.scss";
import KanjiExampleDisplay from "./KanjiExampleDisplay";

//TODO: Replace redundant bits with FlashCardBack component
class KanjiFlashCardBack extends Component<CardBackFaceProps> {
    render() {
        const { data, showRomaji, onClick } = this.props;
        const kanji = data as Kanji;

        return (
            <Container className={styles["wrapper-grade-" + kanji.grade.value] + " " + styles.wrapper}>
                <Row className={styles.header}>
                    <p className={styles.grade}>Grade {kanji.grade.value} Kyōiku</p>
                    <Button className={styles.back} variant="outline-danger" onClick={onClick} title="Reset">
                        <FontAwesomeIcon icon={faReply} />
                    </Button>
                </Row>

                <Row className={styles.body}>
                    <Col sm={5} xs={4}>
                        <KanjiDisplay kanji={kanji} className={styles.display} showSource />
                    </Col>

                    <Col sm={7} xs={8}>
                        <KanjiReadingDisplay
                            type={ReadingType.ON}
                            showRomaji={showRomaji}
                            readings={this.getReadings(ReadingType.ON)}
                        />

                        <KanjiReadingDisplay
                            type={ReadingType.KUN}
                            showRomaji={showRomaji}
                            readings={this.getReadings(ReadingType.KUN)}
                        />

                        <div className={styles.meaningWrapper}>
                            <p className={styles.text}>
                                <Inspectable popover={{ title: "English Meaning", text: Environment.variable("ENGLISH_MEANING_DESC") }}>
                                    <span className={styles.label}>Meaning</span>
                                </Inspectable>
                                {": " + kanji.getMeanings().join(", ")}
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className={styles.footer}>
                    <Col xs={12}>
                        <KanjiExampleDisplay kanji={kanji} />
                    </Col>
                </Row>
            </Container>
        );
    }

    private getReadings = (type: ReadingType): KanjiReading[] => {
        return (this.props.data as Kanji).readings.filter(it => it.type === type);
    }

}

export default KanjiFlashCardBack;