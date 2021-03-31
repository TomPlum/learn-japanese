import { Component } from "react";
import { Kana } from "../../../types/Kana";
import { RandomNumberGenerator } from "../../../utility/RandomNumberGenerator";
import { Button, Col, Container, Row } from "react-bootstrap";
import SessionProgressBar from "../../ui/SessionProgressBar";
import KanaFlashCard from "./KanaFlashCard";
import styles from "../../../styles/sass/components/learn/kana/LearnKana.module.scss";
import LearningFeedbackButton, { LearningFeedback } from "../../ui/LearningFeedbackButton";

export interface LearnKanaProps {
    kana: Kana[];
}

interface LearnKanaState {
    current: Kana;
    remaining: Kana[];
    hasPeeked: boolean;
    hasRemembered: boolean;
    hasForgotten: boolean;
    remembered: Kana[];
    forgotten: Kana[];
}

class LearnKana extends Component<LearnKanaProps, LearnKanaState> {

    constructor(props: Readonly<LearnKanaProps> | LearnKanaProps) {
        super(props);

        const [first, remaining] = RandomNumberGenerator.getRandomObject(this.props.kana);

        this.state = {
            current: first,
            remaining: remaining,
            hasPeeked: false,
            hasRemembered: false,
            hasForgotten: false,
            remembered: [],
            forgotten: []
        }
    }

    render() {
        const { current, remaining, hasPeeked, hasRemembered, hasForgotten } = this.state;
        const { kana } = this.props;
        const hasKanaRemaining = remaining.length > 0;
        return (
            <div className={styles.wrapper}>
                <Container className={styles.innerWrapper}>
                    <Row className={styles.header}>
                        <Col>
                            <SessionProgressBar
                                inProgress={hasKanaRemaining}
                                value={((kana.length - remaining.length) / kana.length) * 100}
                                title={(kana.length - remaining.length) + "/" + kana.length}
                                className={styles.progress}
                            />
                        </Col>
                    </Row>

                    <Row className={styles.cardWrapper}>
                        <Col>
                            <KanaFlashCard kana={current} key={current.code} onFlip={this.onFlip} />
                        </Col>
                    </Row>

                    <Row className={styles.buttonWrapper}>
                        <Col xs={6}>
                            <LearningFeedbackButton
                                type={LearningFeedback.FORGOT}
                                onClick={this.onForgot}
                                disabled={!hasPeeked}
                                active={hasForgotten}
                            />
                        </Col>
                        <Col xs={6}>
                            <LearningFeedbackButton
                                type={LearningFeedback.REMEMBERED}
                                onClick={this.onMemorised}
                                disabled={!hasPeeked}
                                active={hasRemembered}
                            />
                        </Col>
                        <Col xs={12}>
                            <Button
                                variant={hasKanaRemaining ? "primary" : "info"}
                                className={styles.next}
                                onClick={hasKanaRemaining ? this.next : this.restart}
                                disabled={!hasPeeked || (!hasForgotten && !hasRemembered)}
                            >
                                {hasKanaRemaining ? "Next" : "Restart"}
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    private next = () => {
        const { remaining } = this.state;
        const [next, nextRemaining] = RandomNumberGenerator.getRandomObject(remaining);
        this.setState({
            current: next,
            remaining: nextRemaining,
            hasPeeked: false,
            hasRemembered: false,
            hasForgotten: false
        });
    }

    private restart = () => {
        const [first, remaining] = RandomNumberGenerator.getRandomObject(this.props.kana);
        this.setState({ current: first, remaining: remaining });
    }

    private onFlip = (flips: number) => this.setState({ hasPeeked: flips > 0 });

    private onMemorised = () => {
        const { remembered, current } = this.state;
        this.setState({ hasRemembered: true, hasForgotten: false, remembered: remembered.concat(current) });
    }

    private onForgot = () => {
        const { forgotten, current } = this.state;
        this.setState({ hasForgotten: true, hasRemembered: false, remembered: forgotten.concat(current) });
    }
}

export default LearnKana;