import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
import LearningSessionResult from "../../types/learn/LearningSessionResult";
import QuitButton from "../ui/buttons/QuitButton";
import styles from "../../styles/sass/components/results/LearningResultScreen.module.scss";
import { Learnable } from "../../types/learn/Learnable";

export interface LearningResultScreenProps {
    result: LearningSessionResult;
    onDismiss: () => void;
    onPractice: (mistakes: Learnable[]) => void;
}

class LearningResultScreen extends Component<LearningResultScreenProps> {
    render() {
        const { result } = this.props;

        return (
            <Container data-testid="learning-results-screen" className={styles.wrapper}>
                <Row className={styles.header}>
                    <Col>
                        <QuitButton onClick={this.props.onDismiss} className={styles.quit} />
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <h1 className={styles.heading}>{this.getTitle()}</h1>
                        {result.forgotten.length > 0 &&
                            <Button onClick={this.onPractice} className={styles.mistakes}>
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