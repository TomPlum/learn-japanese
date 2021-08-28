import { Component } from "react";
import { Card, Modal } from "react-bootstrap";
import AnswerMistake from "./AnswerMistake";
import { Learnable } from "../../domain/learn/Learnable";
import styles from "../../styles/sass/components/results/Feedback.module.scss";

export interface FeedbackProps {
    data: Learnable[];
    show: boolean;
    onClose: () => void;
}

class Feedback extends Component<FeedbackProps> {
    render() {
        const { show, data, onClose } = this.props;

        const size = data.length < 5 ? "sm" : "lg"

        return (
            <Modal centered show={show} onHide={onClose} contentClassName={styles.modal} size={size}>
                <Modal.Header closeButton className={styles.header}>
                    Mistakes
                </Modal.Header>

                <Modal.Body className={styles.body}>
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
                </Modal.Body>
            </Modal>
        );
    }

    private getMistakeCounts = (): Map<Learnable, number> => {
        return this.props.data.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map<Learnable, number>());
    }
}

export default Feedback;
