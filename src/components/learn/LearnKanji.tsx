import { Component } from "react";
import { Kanji } from "../../types/kanji/Kanji";
import { Button, Container, ProgressBar, Row } from "react-bootstrap";
import { RandomNumberGenerator } from "../../utility/RandomNumberGenerator";
import FlashCard from "./FlashCard";
import styles from "../../styles/sass/components/learn/LearnKanji.module.scss";

interface LearnKanjiProps {
    kanji: Kanji[];
}

interface LearnKanjiState {
    current: Kanji;
    remaining: Kanji[];
    hasPeeked: boolean;
}

class LearnKanji extends Component<LearnKanjiProps, LearnKanjiState> {

    constructor(props: Readonly<LearnKanjiProps> | LearnKanjiProps) {
        super(props);

        const [first, remaining] = RandomNumberGenerator.getRandomObject(this.props.kanji);

        this.state = {
            current: first,
            remaining: remaining,
            hasPeeked: false
        }
    }

    render() {
        const { current, remaining, hasPeeked } = this.state;
        const { kanji } = this.props;
        const hasKanjiRemaining = remaining.length > 0;
        return (
            <Container className={styles.wrapper}>
                <Row className={styles.header}>
                    <ProgressBar
                        now={((kanji.length - remaining.length) / kanji.length) * 100}
                        className={styles.progress}
                        animated={hasKanjiRemaining}
                        variant={!hasKanjiRemaining ? "success" : undefined}
                    />
                </Row>

                <Row className={styles.cardWrapper}>
                    <FlashCard kanji={current} key={current.getValue()} onFlip={this.onFlip} />
                </Row>

                <Row className={styles.buttonWrapper}>
                    <Button
                        variant={hasKanjiRemaining ? "success" : "info"}
                        className={styles.next}
                        onClick={hasKanjiRemaining ? this.next : this.restart}
                        disabled={!hasPeeked}
                    >
                        {hasKanjiRemaining ? "Next" : "Restart"}
                    </Button>
                </Row>
            </Container>
        );
    }

    private next = () => {
        const { remaining } = this.state;
        const [ next, nextRemaining ] = RandomNumberGenerator.getRandomObject(remaining);
        this.setState({ current: next, remaining: nextRemaining, hasPeeked: false });
    }

    private restart = () => {
        const [first, remaining] = RandomNumberGenerator.getRandomObject(this.props.kanji);
        this.setState({
            current: first,
            remaining: remaining
        });
    }

    private onFlip = (flips: number) => this.setState({ hasPeeked: flips > 0 });
}

export default LearnKanji;