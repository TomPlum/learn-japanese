import { Component } from "react";
import { Kana } from "../../../types/Kana";
import { RandomNumberGenerator } from "../../../utility/RandomNumberGenerator";
import { Button, Container, Row } from "react-bootstrap";
import SessionProgressBar from "../../ui/SessionProgressBar";
import KanaFlashCard from "./KanaFlashCard";
import styles from "../../../styles/sass/components/learn/kana/LearnKana.module.scss";

export interface LearnKanaProps {
    kana: Kana[];
}

interface LearnKanaState {
    current: Kana;
    remaining: Kana[];
    hasPeeked: boolean;
}

class LearnKana extends Component<LearnKanaProps, LearnKanaState> {

    constructor(props: Readonly<LearnKanaProps> | LearnKanaProps) {
        super(props);

        const [first, remaining] = RandomNumberGenerator.getRandomObject(this.props.kana);

        this.state = {
            current: first,
            remaining: remaining,
            hasPeeked: false
        }
    }

    render() {
        const { current, remaining, hasPeeked } = this.state;
        const { kana } = this.props;
        const hasKanaRemaining = remaining.length > 0;
        return (
            <Container className={styles.wrapper}>
                <Row className={styles.header}>
                    <SessionProgressBar
                        inProgress={hasKanaRemaining}
                        value={((kana.length - remaining.length) / kana.length) * 100}
                        title={(kana.length - remaining.length) + "/" + kana.length}
                        className={styles.progress}
                    />
                </Row>

                <Row className={styles.cardWrapper}>
                    <KanaFlashCard kana={current} key={current.code} onFlip={this.onFlip} />
                </Row>

                <Row className={styles.buttonWrapper}>
                    <Button
                        variant={hasKanaRemaining ? "success" : "info"}
                        className={styles.next}
                        onClick={hasKanaRemaining ? this.next : this.restart}
                        disabled={!hasPeeked}
                    >
                        {hasKanaRemaining ? "Next" : "Restart"}
                    </Button>
                </Row>
            </Container>
        );
    }

    private next = () => {
        const { remaining } = this.state;
        const [next, nextRemaining] = RandomNumberGenerator.getRandomObject(remaining);
        this.setState({ current: next, remaining: nextRemaining, hasPeeked: false });
    }

    private restart = () => {
        const [first, remaining] = RandomNumberGenerator.getRandomObject(this.props.kana);
        this.setState({ current: first, remaining: remaining });
    }

    private onFlip = (flips: number) => this.setState({ hasPeeked: flips > 0 });
}

export default LearnKana;