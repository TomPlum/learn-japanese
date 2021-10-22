import React, { Component } from "react";
import LearningSessionResult from "../../domain/learn/LearningSessionResult";
import { Learnable } from "../../domain/learn/Learnable";
import { Button, Col, Container, Row } from "react-bootstrap";
import ConfirmModal from "../ui/ConfirmModal";
import QuitButton from "../ui/buttons/QuitButton";
import SessionProgressBar from "../ui/SessionProgressBar";
import LearningFeedbackButton, { LearningFeedback } from "../ui/buttons/LearningFeedbackButton";
import FlashCard, { CardProps } from "./FlashCard";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Arrays from "../../utility/Arrays";
import styles from "../../styles/sass/components/learn/Learn.module.scss";
import ConfidenceSelector from "./ConfidenceSelector";

export interface LearnProps {
    data: Learnable[];
    card: CardProps;
    onFinish: (result: LearningSessionResult) => void;
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

        const [first, remaining] = Arrays.getRandomObject(props.data);

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
            <div className={styles.wrapper} data-testid="learn">
                <Container className={styles.innerWrapper}>
                    {paused && <ConfirmModal
                        title={"Are you sure you want to quit?"}
                        body={"You'll lose your progress, but you'll see the results of your session thus far."}
                        onConfirm={this.onFinish}
                        onDismiss={() => this.setState({ paused: false })}
                    />}

                    <Row className={styles.header}>
                        <Col md={4} xs={2} className={styles.col}>
                            <QuitButton onClick={this.onQuit} className={styles.quit} />
                        </Col>

                        <Col md={2} xs={3} className={styles.col}>
                            <FontAwesomeIcon className={styles.forgottenIcon} icon={faThumbsDown} fixedWidth />
                            <span className={styles.forgotten} title="Forgotten">{forgotten.length}</span>
                        </Col>

                        <Col md={2} xs={3} className={styles.col}>
                            <FontAwesomeIcon className={styles.rememberedIcon} icon={faThumbsUp} fixedWidth />
                            <span className={styles.remembered} title="Remembered">{remembered.length}</span>
                        </Col>

                        <Col xs={4} className={styles.col}>
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
                        <Col className={styles.col}>
                            <SessionProgressBar
                                quantity={data.length}
                                className={styles.progress}
                                remaining={remaining.length}
                                inProgress={hasCardsRemaining && !paused}
                            />
                        </Col>
                    </Row>

                    <Row className={styles.cardWrapper}>
                        <Col className={styles.col}>
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
                       {/* <Col xs={6} className={[styles.buttonColumnLeft, styles.col].join(" ")}>
                            <LearningFeedbackButton
                                disabled={!hasPeeked}
                                active={hasForgotten}
                                onClick={this.onForgot}
                                type={LearningFeedback.FORGOT}
                                className={styles.forgottenButton}
                            />
                        </Col>
                        <Col xs={6} className={[styles.buttonColumnRight, styles.col].join(" ")}>
                            <LearningFeedbackButton
                                disabled={!hasPeeked}
                                active={hasRemembered}
                                onClick={this.onMemorised}
                                type={LearningFeedback.REMEMBERED}
                                className={styles.rememberedButton}
                            />
                        </Col>*/}
                        <ConfidenceSelector onSelect={() => {}} />
                        <Col xs={12} className={styles.col}>
                            <Button
                                className={styles.next}
                                onClick={hasCardsRemaining ? this.onNext : this.onFinish}
                                disabled={!hasPeeked || (!hasForgotten && !hasRemembered)}
                                variant={!hasCardsRemaining && hasPeeked ? "info" : "primary"}
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

        const [next, nextRemaining] = Arrays.getRandomObject(remaining);
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
