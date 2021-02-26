import { Component } from "react";
import { Kanji } from "../../types/kanji/Kanji";
import { Button, Container, Row } from "react-bootstrap";
import { RandomNumberGenerator } from "../../utility/RandomNumberGenerator";
import FlashCard from "./FlashCard";
import styles from "../../styles/sass/components/learn/LearnKanji.module.scss";

interface LearnKanjiProps {
    kanji: Kanji[];
}

interface LearnKanjiState {
    current: Kanji;
    remaining: Kanji[];
}

class LearnKanji extends Component<LearnKanjiProps, LearnKanjiState> {

    constructor(props: Readonly<LearnKanjiProps> | LearnKanjiProps) {
        super(props);

        const [firstKanji, remainingKanji ] = RandomNumberGenerator.getRandomObject(this.props.kanji);

        this.state = {
            current: firstKanji,
            remaining: remainingKanji
        }
    }

    render() {
        const { current, remaining } = this.state;
        const { kanji } = this.props;

        return (
            <Container className={styles.wrapper}>
                <Row className={styles.header}>
                    <p className={styles.remaining}>
                        {(kanji.length - remaining.length)}/{kanji.length}
                    </p>
                </Row>

                <Row className={styles.cardWrapper}>
                    <FlashCard kanji={current} key={current.getValue()} />
                </Row>

                <Row className={styles.buttonWrapper}>
                    <Button variant="success" className={styles.next} onClick={this.next}>
                        Next
                    </Button>
                </Row>
            </Container>
        );
    }

    private next = () => {
        const { remaining } = this.state;
        const [ next, nextRemaining ] = RandomNumberGenerator.getRandomObject(remaining);
        this.setState({ current: next, remaining: nextRemaining });
    }
}

export default LearnKanji;