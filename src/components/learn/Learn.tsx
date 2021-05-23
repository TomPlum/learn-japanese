import React, { Component } from "react";
import LearningSessionResult from "../../types/learn/LearningSessionResult";
import { Learnable } from "../../types/learn/Learnable";
import { RandomNumberGenerator } from "../../utility/RandomNumberGenerator";
import { Button, Col, Container, Row } from "react-bootstrap";
import ConfirmModal from "../ui/ConfirmModal";
import QuitButton from "../ui/buttons/QuitButton";
import SessionProgressBar from "../ui/SessionProgressBar";
import LearningFeedbackButton, { LearningFeedback } from "../ui/buttons/LearningFeedbackButton";
import FlashCard, { CardProps } from "./FlashCard";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/sass/components/learn/Learn.module.scss";

export interface LearnProps {
    data: Learnable[];
    onFinish: (result: LearningSessionResult) => void;
    card: CardProps;
}

interface LearnState {
    current: Learnable;
    remaining: Learnable[];
    remembered: Learnable[];
    forgotten: Learnable[];
    hasPeeked: boolean;
    paused: boolean;
    hasRemembered: boolean;
    hasForgotten: boolean;
    showRomaji: boolean;
}

class Learn extends Component<LearnProps, LearnState> {

    constructor(props: Readonly<LearnProps> | LearnProps) {
        super(props);

        const [first, remaining] = RandomNumberGenerator.getRandomObject(this.props.data);

        this.state = {
            current: first,
            remaining: remaining,
            hasPeeked: false,
            hasRemembered: false,
            hasForgotten: false,
            remembered: [],
            forgotten: [],
            paused: false,
            showRomaji: false
        }
    }

    render() {
        const { current, remaining, hasPeeked, hasRemembered, hasForgotten, paused, showRomaji, remembered, forgotten } = this.state;
        const { data, card } = this.props;
        const hasCardsRemaining = remaining.length > 0;

        return (
            <div className={styles.wrapper}>
                <Container className={styles.innerWrapper}>
                    {paused && <ConfirmModal
                        title={"Are you sure you want to quit?"}
                        body={"You'll lose your progress, but you'll see the results of your session thus far."}
                        onConfirm={this.onFinish}
                        onDismiss={() => this.setState({ paused: false })}
                    />}

                    <Row className={styles.header}>
                        <Col>
                            <QuitButton onClick={this.onQuit} className={styles.quit} />
                        </Col>

                        <Col md={2} xs={3}>
                            <FontAwesomeIcon className={styles.forgottenIcon} icon={faThumbsDown} fixedWidth />
                            <span className={styles.forgotten} title="Forgotten">{forgotten.length}</span>
                        </Col>

                        <Col md={2} xs={3}>
                            <FontAwesomeIcon className={styles.rememberedIcon} icon={faThumbsUp} fixedWidth />
                            <span className={styles.remembered} title="Remembered">{remembered.length}</span>
                        </Col>

                        <Col>
                            <Button
                                className={styles.showRomaji}
                                variant="warning"
                                onClick={() => this.setState({ showRomaji: !showRomaji })}
                            >
                                {showRomaji ? "Hide" : "Show"} Rōmaji
                            </Button>
                        </Col>
                    </Row>

                    <Row className={styles.header}>
                        <Col>
                            <SessionProgressBar
                                inProgress={hasCardsRemaining && !paused}
                                quantity={data.length}
                                remaining={remaining.length}
                                className={styles.progress}
                            />
                        </Col>
                    </Row>

                    <Row className={styles.cardWrapper}>
                        <Col>
                            <FlashCard
                                data={current}
                                key={current.getMeanings()[0]}
                                onFlip={this.onFlip}
                                front={card.front}
                                back={card.back}
                                showRomaji={showRomaji}
                            />
                        </Col>
                    </Row>

                    <Row className={styles.buttonWrapper}>
                        <Col xs={6} className={styles.buttonColumnLeft}>
                            <LearningFeedbackButton
                                type={LearningFeedback.FORGOT}
                                onClick={this.onForgot}
                                disabled={!hasPeeked}
                                active={hasForgotten}
                            />
                        </Col>
                        <Col xs={6} className={styles.buttonColumnRight}>
                            <LearningFeedbackButton
                                type={LearningFeedback.REMEMBERED}
                                onClick={this.onMemorised}
                                disabled={!hasPeeked}
                                active={hasRemembered}
                            />
                        </Col>
                        <Col xs={12}>
                            <Button
                                variant={!hasCardsRemaining && hasPeeked ? "info" : "primary"}
                                className={styles.next}
                                onClick={hasCardsRemaining ? this.onNext : this.onFinish}
                                disabled={!hasPeeked || (!hasForgotten && !hasRemembered)}
                            >
                                {!hasCardsRemaining && hasPeeked ? "Finish" : "Next"}
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

export default Learn;