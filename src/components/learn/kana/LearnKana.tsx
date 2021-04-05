import { Component } from "react";
import { Kana } from "../../../types/kana/Kana";
import { RandomNumberGenerator } from "../../../utility/RandomNumberGenerator";
import { Button, Col, Container, Row } from "react-bootstrap";
import SessionProgressBar from "../../ui/SessionProgressBar";
import KanaFlashCard from "./KanaFlashCard";
import LearningFeedbackButton, { LearningFeedback } from "../../ui/LearningFeedbackButton";
import styles from "../../../styles/sass/components/learn/kana/LearnKana.module.scss";
import QuitButton from "../../ui/QuitButton";
import LearningSessionResult from "../../../types/learn/LearningSessionResult";
import ConfirmModal from "../../ui/ConfirmModal";

export interface LearnKanaProps {
    kana: Kana[];
    onFinish: (result: LearningSessionResult) => void;
}

interface LearnKanaState {
    current: Kana;
    remaining: Kana[];
    hasPeeked: boolean;
    hasRemembered: boolean;
    hasForgotten: boolean;
    remembered: Kana[];
    forgotten: Kana[];
    paused: boolean;
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
            forgotten: [],
            paused: false
        }
    }

    render() {
        const { current, remaining, hasPeeked, hasRemembered, hasForgotten, paused } = this.state;
        const { kana } = this.props;
        const hasKanaRemaining = remaining.length > 0;

        return (
            <div className={styles.wrapper}>
                <Container className={styles.innerWrapper}>
                    {paused && <ConfirmModal
                        title={"Are you sure you want to quit?"}
                        body={"You'll lose your progress, but you'll see the results of your session thus far."}
                        onConfirm={this.onFinish}
                        onDismiss={() => this.setState({ paused: false })}
                    />}

                    <Row>
                        <Col>
                            <QuitButton onClick={this.onQuit} className={styles.quit} />
                        </Col>
                    </Row>

                    <Row className={styles.header}>
                        <Col>
                            <SessionProgressBar
                                inProgress={hasKanaRemaining}
                                quantity={kana.length}
                                remaining={remaining.length}
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
                                variant={!hasKanaRemaining && hasPeeked ? "info" : "primary"}
                                className={styles.next}
                                onClick={hasKanaRemaining ? this.onNext : this.onFinish}
                                disabled={!hasPeeked || (!hasForgotten && !hasRemembered)}
                            >
                                {!hasKanaRemaining && hasPeeked ? "Finish" : "Next"}
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    private onNext = () => {
        const { remaining, hasRemembered, hasForgotten, remembered, forgotten, current } = this.state;

        const [next, nextRemaining] = RandomNumberGenerator.getRandomObject(remaining);
        this.setState({
            current: next,
            remaining: nextRemaining,
            hasPeeked: false,
            hasRemembered: false,
            hasForgotten: false,
        });

        if (hasRemembered) this.setState({ remembered: remembered.concat(current) });
        if (hasForgotten) this.setState({ forgotten: forgotten.concat(current) });
    }

    private onFinish = () => {
        const { remembered, forgotten, hasRemembered, hasForgotten, current } = this.state;
        const newRemembered = hasRemembered ? remembered.concat(current) : remembered;
        const newForgotten = hasForgotten ? forgotten.concat(current) : forgotten;
        this.props.onFinish({ remembered: newRemembered, forgotten: newForgotten });
    }

    private onQuit = () => this.setState({ paused: true });

    private onFlip = (flips: number) => this.setState({ hasPeeked: flips > 0 });

    private onMemorised = () => this.setState({ hasRemembered: true, hasForgotten: false });

    private onForgot = () => this.setState({ hasForgotten: true, hasRemembered: false });
}

export default LearnKana;