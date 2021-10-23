import React, { useState } from "react";
import LearningSessionResult from "../../domain/learn/LearningSessionResult";
import { Learnable } from "../../domain/learn/Learnable";
import { Button, Col, Container, Row } from "react-bootstrap";
import ConfirmModal from "../ui/ConfirmModal";
import QuitButton from "../ui/buttons/QuitButton";
import SessionProgressBar from "../ui/SessionProgressBar";
import FlashCard, { CardProps } from "./FlashCard";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Arrays from "../../utility/Arrays";
import styles from "../../styles/sass/components/learn/Learn.module.scss";
import ConfidenceSelector from "./ConfidenceSelector";
import { Confidence } from "../../domain/learn/spacedrepetition/Confidence";

export interface LearnProps {
    data: Learnable[];
    card: CardProps;
    onFinish: (result: LearningSessionResult) => void;
}

const Learn = (props: LearnProps) => {

    const [first, initialRemaining] = Arrays.getRandomObject(props.data);

    const [current, setCurrent] = useState<Learnable>(first);
    const [remaining, setRemaining] = useState<Learnable[]>(initialRemaining);
    const [paused, setPaused] = useState(false);
    const [showRomaji, setShowRomaji] = useState(false);
    const [hasPeeked, setHasPeeked] = useState(false);
    const [hasRemembered, setHasRemembered] = useState(false);
    const [hasForgotten, setHasForgotten] = useState(false);
    const [remembered, setRemembered] = useState<Learnable[]>([]);
    const [forgotten, setForgotten] = useState<Learnable[]>([]);

    const onNext = () => {
        const [next, nextRemaining] = Arrays.getRandomObject(remaining);

        setCurrent(next);
        setRemaining(nextRemaining);
        setHasPeeked(false);
        setHasRemembered(false);
        setHasForgotten(false);

        if (hasRemembered) {
            setRemembered(remembered.concat(current));
        }

        if (hasForgotten) {
            setForgotten(forgotten.concat(current));
        }
    }

    const onFinish = () => {
        const newRemembered = hasRemembered ? remembered.concat(current) : remembered;
        const newForgotten = hasForgotten ? forgotten.concat(current) : forgotten;
        props.onFinish({ remembered: newRemembered, forgotten: newForgotten });
    }

    const onQuit = () => setPaused(true);

    const onFlip = (flips: number) => setHasPeeked(flips > 0);

    const onSelectConfidenceRating = (confidence: Confidence) => {
        if (confidence < 3) {
            setHasForgotten(true);
            setHasRemembered(false);
        } else {
            setHasRemembered(true);
            setHasForgotten(false);
        }
    }

    const hasCardsRemaining = remaining.length > 0;

    return (
        <div className={styles.wrapper} data-testid="learn">
            <Container className={styles.innerWrapper}>
                {paused && <ConfirmModal
                    title={"Are you sure you want to quit?"}
                    body={"You'll lose your progress, but you'll see the results of your session thus far."}
                    onConfirm={onFinish}
                    onDismiss={() => setPaused(false)}
                />}

                <Row className={styles.header}>
                    <Col md={4} xs={2} className={styles.col}>
                        <QuitButton onClick={onQuit} className={styles.quit}/>
                    </Col>

                    <Col md={2} xs={3} className={styles.col}>
                        <FontAwesomeIcon className={styles.forgottenIcon} icon={faThumbsDown} fixedWidth/>
                        <span className={styles.forgotten} title="Forgotten">{forgotten.length}</span>
                    </Col>

                    <Col md={2} xs={3} className={styles.col}>
                        <FontAwesomeIcon className={styles.rememberedIcon} icon={faThumbsUp} fixedWidth/>
                        <span className={styles.remembered} title="Remembered">{remembered.length}</span>
                    </Col>

                    <Col xs={4} className={styles.col}>
                        <Button
                            className={styles.showRomaji}
                            variant="warning"
                            onClick={() => setShowRomaji(!showRomaji)}
                        >
                            {showRomaji ? "Hide" : "Show"} Rōmaji
                        </Button>
                    </Col>
                </Row>

                <Row className={styles.header}>
                    <Col className={styles.col}>
                        <SessionProgressBar
                            quantity={props.data.length}
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
                            onFlip={onFlip}
                            front={props.card.front}
                            back={props.card.back}
                            showRomaji={showRomaji}
                        />
                    </Col>
                </Row>

                <Row className={styles.buttonWrapper}>
                    <ConfidenceSelector
                        disabled={!hasPeeked}
                        key={current.getUniqueID()}
                        onSelect={onSelectConfidenceRating}
                    />

                    <Col xs={12} className={styles.col}>
                        <Button
                            className={styles.next}
                            onClick={hasCardsRemaining ? onNext : onFinish}
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

export default Learn;
