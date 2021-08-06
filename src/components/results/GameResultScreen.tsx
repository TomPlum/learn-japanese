import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import GameResult from "../../types/game/GameResult";
import Feedback from "./Feedback";
import { faAward, faEraser, faGlassCheers, faHeartbeat, faHeartBroken, faHourglassEnd, faTimes, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLightbulb } from "@fortawesome/free-regular-svg-icons";
import styles from "../../styles/sass/components/results/GameResultScreen.module.scss";
import { GameFinishReason } from "../../types/game/GameFinishReason";

export interface GameResultScreenProps {
    onClose: () => void;
    result: GameResult;
}

interface GameResultScreenState {
    showMistakesModal: boolean;
}

class GameResultScreen extends Component<GameResultScreenProps, GameResultScreenState> {

    constructor(props: GameResultScreenProps) {
        super(props);
        this.state = {
            showMistakesModal: false
        }
    }

    render() {
        const { result, onClose } = this.props;
        const { showMistakesModal } = this.state;

        return (
            <Container className={styles.wrapper} data-testid="game-results-screen">

                <Feedback
                    onClose={this.hide}
                    show={showMistakesModal}
                    data={result.wrongAnswers}
                />

                <Row className={styles.header}>
                    <Col xs={12}>
                        <div>
                            <FontAwesomeIcon
                                fixedWidth
                                className={styles.titleIcon}
                                icon={this.getTitleIcon().icon}
                                style={{ color: this.getTitleIcon().colour }}
                            />
                            <span className={styles.title}>{result.reason}</span>
                        </div>
                        {!result.success && <p className={styles.score}>{this.getScore(result)}</p>}
                    </Col>
                </Row>

                <div className={styles.body}>
                    <Row className={styles.summary}>
                        {result.settings.question.score && (
                            <Col xs={12}>
                                <div className={styles.attribute}>
                                    <FontAwesomeIcon
                                        fixedWidth
                                        icon={faAward}
                                        className={[styles.icon, styles.award].join(" ")}
                                    />
                                    <span className={styles.name}>{result.score} Points Scored</span>
                                </div>
                            </Col>
                        )}

                        {result.settings.lives.enabled && (
                            <Col xs={12}>
                                <div className={styles.attribute}>
                                    <FontAwesomeIcon
                                        fixedWidth
                                        icon={faHeartbeat}
                                        className={[styles.icon, styles.heart].join(" ")}
                                    />
                                    <span className={styles.name}>{result.livesRemaining} Lives Remaining</span>
                                </div>
                            </Col>
                        )}

                        {result.settings.hints.enabled && (
                            <Col xs={12}>
                                <div className={styles.attribute}>
                                    <FontAwesomeIcon
                                        fixedWidth
                                        icon={faLightbulb}
                                        className={[styles.icon, styles.hint].join(" ")}
                                    />
                                    <span className={styles.name}>{result.hintsRemaining} Hints Remaining</span>
                                </div>
                            </Col>
                        )}

                        {result.settings.time.timed && (
                            <Col xs={12}>
                                <div className={styles.attribute}>
                                    <FontAwesomeIcon
                                        fixedWidth
                                        icon={faClock}
                                        className={[styles.icon, styles.duration].join(" ")}
                                    />
                                    <span className={styles.name}>{result.duration} Completion Time</span>
                                </div>
                            </Col>
                        )}

                        {/*{result.settings.time.countdown && (
                            <Col xs={12}>
                                <div className={styles.attribute}>
                                    <FontAwesomeIcon
                                        fixedWidth
                                        icon={faStopwatch}
                                        className={[styles.icon, styles.duration].join(" ")}
                                    />
                                    <span className={styles.name}>N/A Average Answer Time</span>
                                </div>
                            </Col>
                        )}*/}
                    </Row>
                </div>

                <Row className={styles.footer}>
                    {result.wrongAnswers.length > 0 && <Col>
                        <Button onClick={() => this.setState({ showMistakesModal: true})} className={styles.mistakes}>
                            <FontAwesomeIcon icon={faEraser} fixedWidth /> View Mistakes
                        </Button>
                    </Col>}

                    <Col>
                        <Button variant="success" onClick={onClose} className={styles.finish}>
                            Finish
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }

    private getScore = (result: GameResult): string => {
        const correct = result.correctAnswers.size;
        const wrong = new Set(result.wrongAnswers).size
        return "You answered " + correct + "/" + (correct + wrong) + " correctly.";
    }

    private getTitleIcon = (): { icon: IconDefinition, colour: string} => {
        const { result } = this.props;
        switch (result.reason) {
            case GameFinishReason.EXHAUSTED_QUESTIONS: {
                return { icon: faGlassCheers, colour: "#2e6cde" };
            }
            case GameFinishReason.QUIT: {
                return { icon: faTimes, colour: "#d43232" };
            }
            case GameFinishReason.NO_LIVES_REMAINING: {
                return { icon: faHeartBroken, colour: "#d43232" };
            }
            case GameFinishReason.NO_TIME_REMAINING: {
                return { icon: faHourglassEnd, colour: "#db8632" };
            }
        }
    }

    private hide = () => {
        this.setState({ showMistakesModal: false });
    }
}

export default GameResultScreen;
