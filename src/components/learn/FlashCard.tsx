import { Component } from "react";
import { Kanji } from "../../types/kanji/Kanji";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ReadingType } from "../../types/kanji/ReadingType";
import styles from "../../styles/sass/components/learn/FlashCard.module.scss";
import KanjiDisplay from "./KanjiDisplay";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FlashCardProps {
    kanji: Kanji;
}

interface FlashCardState {
    facingUp: boolean;
}

class FlashCard extends Component<FlashCardProps, FlashCardState> {
    constructor(props: Readonly<FlashCardProps> | FlashCardProps) {
        super(props);
        this.state = {
            facingUp: true
        }
    }

    render() {
        const { facingUp } = this.state;
        const { kanji } = this.props;

        return (
            <Container className={styles.wrapper}>
                {facingUp ?
                    <Container className={styles.frontSideWrapper}>
                        <Row>
                            <Col>
                                <KanjiDisplay value={kanji} />
                            </Col>
                        </Row>
                    </Container>

                    :

                    <Container className={styles.backSideWrapper}>
                        <Row className={styles.header}>
                            <p className={styles.grade}>Grade {kanji.grade}</p>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <KanjiDisplay value={kanji} />
                            </Col>
                            <Col xs={12}>
                                <p className={styles.reading}>
                                    On: {this.getReading(ReadingType.ON)}
                                </p>
                                <p className={styles.reading}>
                                    Kun: {this.getReading(ReadingType.KUN)}
                                </p>
                                <p className={styles.reading}>
                                    Meaning(s): {kanji.meanings.join(",")}
                                </p>
                            </Col>
                        </Row>
                    </Container>
                }
                {facingUp &&
                <Button variant="outline-warning" className={styles.reveal} onClick={() => this.setState({ facingUp: !facingUp })}>
                    <FontAwesomeIcon icon={faReply} />
                </Button>}
            </Container>
        );
    }

    private getReading = (type: ReadingType): string => {
        return this.props.kanji.readings
            .filter(it => it.type === type)
            .map(it => it.romanji + "(" + it.kana + ")")[0];
    }
}

export default FlashCard;