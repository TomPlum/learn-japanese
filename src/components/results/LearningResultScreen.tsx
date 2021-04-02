import { Component } from "react";
import { Kana } from "../../types/Kana";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
import LearningSessionResult from "../../types/LearningSessionResult";
import QuitButton from "../ui/QuitButton";

export interface LearningResultScreenProps {
    result: LearningSessionResult;
    onDismiss: () => void;
    onPractice: (mistakes: Kana[]) => void;
}

class LearningResultScreen extends Component<LearningResultScreenProps> {
    render() {
        const { result } = this.props;

        return (
            <Container data-testid="learning-results-screen">
                <Row>
                    <Col>
                        <QuitButton onClick={this.props.onDismiss} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>{this.getTitle()}</h2>
                        {result.forgotten.length > 0 &&
                            <Button variant="info" onClick={this.onPractice}>
                                <FontAwesomeIcon icon={faEraser} fixedWidth />
                                Practice Mistakes
                            </Button>
                        }
                    </Col>
                </Row>
            </Container>
        );
    }

    private getTitle = () => {
        const { result } = this.props;
        const rememberedQuantity = result.remembered.length;
        const forgottenQuantity = result.forgotten.length;
        if (forgottenQuantity === 0) {
            return "You remembered them all, good job!";
        }
        return "You remembered " + rememberedQuantity + "/" + (rememberedQuantity + forgottenQuantity) + "!";
    }

    private onPractice = () => this.props.onPractice(this.props.result.forgotten);

}

export default LearningResultScreen;