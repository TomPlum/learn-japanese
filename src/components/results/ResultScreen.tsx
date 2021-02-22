import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FailureReason } from "../../types/FailureReason";
import GameResult from "../../types/GameResult";
import QuitButton from "../ui/QuitButton";
import Feedback from "./Feedback";
import styles from "../../styles/sass/components/results/ResultScreen.module.scss";

interface ResultScreenProps {
    onClose: () => void;
    result: GameResult;
}

class ResultScreen extends Component<ResultScreenProps> {
    render() {
        const { result } = this.props;

        return (
            <Container className={styles.wrapper}>
                <Row>
                    <Col>
                        <QuitButton onClick={this.props.onClose} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p className={styles.title}>{this.getTitle(result)}</p>
                        <p className={styles.score}>{this.getKanaScore(result)}</p>
                    </Col>
                </Row>

                <Row>
                    <Feedback kana={result.wrongAnswers} />
                </Row>
            </Container>
        );
    }

    private getKanaScore = (result: GameResult): string => {
        const correct = result.correctAnswers.size;
        const wrong = [...new Set(result.wrongAnswers.map(kana => kana.code))].length;
        return "You answered " + correct + "/" + (correct + wrong) + " correctly.";
    }

    private getTitle = (result: GameResult): string => {
        if (result.success) {
            return "Congratulations, you won!";
        }

        let failureMessage = "Oh no! ";
        let reason: string;

        switch (result.reason) {
            case FailureReason.NO_LIVES_REMAINING: {
                reason = "You ran out of lives!";
                break;
            }
            case FailureReason.NO_TIME_REMAINING: {
                reason = "You ran out of time!";
                break;
            }
            default: reason = "You lost.";
        }
        return failureMessage + reason;
    }
}

export default ResultScreen;