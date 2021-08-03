import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import GameResult from "../../types/game/GameResult";
import Feedback from "./Feedback";
import { faEraser, faGlassCheers, faHeartbeat, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Arrays from "../../utility/Arrays";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLightbulb } from "@fortawesome/free-regular-svg-icons";
import styles from "../../styles/sass/components/results/GameResultScreen.module.scss";

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
                                icon={this.getTitleIcon()}
                                className={styles.titleIcon}
                            />
                            <span className={styles.title}>{this.getTitle(result)}</span>
                        </div>
                        {!result.success && <p className={styles.score}>{this.getScore(result)}</p>}
                    </Col>
                </Row>

                <div className={styles.body}>
                    <Row className={styles.summary}>
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

    private getTitle = (result: GameResult): string => {
        return result.success ? "Congratulations, you won!" : "Oh no! " + result.reason;
    }

    private getTitleIcon = (): IconDefinition => {
        const icons = [faGlassCheers];
        return Arrays.getRandomElements(icons)[0];
    }

    private hide = () => {
        this.setState({ showMistakesModal: false });
    }
}

export default GameResultScreen;
