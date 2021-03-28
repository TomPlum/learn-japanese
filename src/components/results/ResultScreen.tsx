import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import GameResult from "../../types/GameResult";
import QuitButton from "../ui/QuitButton";
import Feedback from "./Feedback";
import styles from "../../styles/sass/components/results/ResultScreen.module.scss";

export interface ResultScreenProps {
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
                        <QuitButton onClick={this.props.onClose} className={styles.close} />
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
        const wrong = new Set(result.wrongAnswers).size
        return "You answered " + correct + "/" + (correct + wrong) + " correctly.";
    }

    private getTitle = (result: GameResult): string => {
        return result.success ? "Congratulations, you won!" : "Oh no! " + result.reason;
    }
}

export default ResultScreen;