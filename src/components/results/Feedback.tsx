import { Component } from "react";
import { Accordion, Button, Card, Container } from "react-bootstrap";
import { Kana } from "../../types/Kana";
import AnswerMistake from "./AnswerMistake";
import styles from "../../styles/sass/components/results/Feedback.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export interface FeedbackProps {
    kana: Kana[];
}

class Feedback extends Component<FeedbackProps> {
    render() {
        return (
            <Container>
                <Accordion className={styles.accordion}>
                    <Card className="bg-dark text-white">
                        <Card.Header>
                            <Accordion.Toggle as={Button} eventKey="0" variant="link" className={styles.toggle}>
                                View your mistakes{' '}
                                <FontAwesomeIcon icon={faChevronDown} />
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className={styles.wrapper}>
                                {[...this.getMistakeCounts()]
                                    .map(([kana, times]) => { return { kana: kana, times: times }})
                                    .sort((a, b) => b.times - a.times)
                                    .map(mistake => {
                                        return(
                                            <AnswerMistake
                                                key={mistake.kana.code}
                                                kana={mistake.kana}
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

    private getMistakeCounts = (): Map<Kana, number> => {
        return this.props.kana.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map<Kana, number>());
    }
}

export default Feedback;