import { Component } from "react";
import { Accordion, Button, Card, Container } from "react-bootstrap";
import AnswerMistake from "./AnswerMistake";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/results/Feedback.module.scss";
import { Learnable } from "../../types/learn/Learnable";

export interface FeedbackProps {
    data: Learnable[];
}

class Feedback extends Component<FeedbackProps> {
    render() {
        return (
            <Container>
                <Accordion className={styles.accordion}>
                    <Card className="bg-dark text-white">
                        <Card.Header>
                            <Accordion.Toggle as={Button} eventKey="0" variant="link" className={styles.toggle}>
                                <span className={styles.title}>View your mistakes </span>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </Accordion.Toggle>
                        </Card.Header>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body className={styles.wrapper}>
                                {[...this.getMistakeCounts()]
                                    .map(([data, times]) => { return { data: data, times: times }})
                                    .sort((a, b) => b.times - a.times)
                                    .map(mistake => {
                                        return(
                                            <AnswerMistake
                                                key={mistake.data.getUniqueID()}
                                                value={mistake.data}
                                                times={mistake.times}
                                            />
                                        )
                                    })
                                }
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        );
    }

    private getMistakeCounts = (): Map<Learnable, number> => {
        return this.props.data.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map<Learnable, number>());
    }
}

export default Feedback;