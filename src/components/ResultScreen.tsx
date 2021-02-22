import { Component } from "react";
import { Container } from "react-bootstrap";
import { FailureReason } from "../types/FailureReason";
import GameResult from "../types/GameResult";
import QuitButton from "./QuitButton";

interface ResultScreenProps {
    onClose: () => void;
    result: GameResult;
}

class ResultScreen extends Component<ResultScreenProps> {
    render() {
        const { result } = this.props;

        return (
            <Container>
                <QuitButton onClick={this.props.onClose} />
                {result.success ?
                    <>
                        <p>Congratulations, you won!</p>
                    </> :

                    <>
                        <p>Oh no! {this.getFailureMessage(result)}</p>
                        <p>You answered {this.getKanaScore(result)} correctly.</p>
                    </>
                }
            </Container>
        );
    }

    private getKanaScore = (result: GameResult): string => {
        const correct = result.correctAnswers.size;
        const wrong = [...new Set(result.wrongAnswers.map(kana => kana.code))].length;
        return correct + "/" + (correct + wrong);
    }

    private getFailureMessage = (result: GameResult): string => {
        switch (result.reason) {
            case FailureReason.NO_LIVES_REMAINING: {
                return "You ran out of lives!";
            }
            case FailureReason.NO_TIME_REMAINING: {
                return "You ran out of time!";
            }
            default: return "You lost.";
        }
    }
}

export default ResultScreen;