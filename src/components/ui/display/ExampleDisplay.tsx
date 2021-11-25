import { Example } from "../../../domain/kanji/Example";
import { Modal, Table } from "react-bootstrap";
import styles from "../../../styles/sass/components/ui/display/ExampleDisplay.module.scss";

export interface ExampleDisplayProps {
    examples: Example[];
    onDismiss: () => void;
}

const ExampleDisplay = (props: ExampleDisplayProps) => {
    return (
        <Modal show onHide={props.onDismiss} containerClassName={styles.container} contentClassName={styles.content}>
            <Modal.Header closeButton className={styles.header}>
                <span className={styles.title}>Examples</span>
            </Modal.Header>

            <Modal.Body className={styles.body}>
                <Table variant="dark" className={styles.table}>
                    <thead>
                        <th>Kanji</th>
                        <th>Kana</th>
                        <th>Meaning</th>
                    </thead>

                    <tbody>{
                        props.examples.map((example: Example) => {
                            return (
                                <tr>
                                    <td>{example.kanji}</td>
                                    <td>{example.kana.join(", ")}</td>
                                    <td>{example.english.join(", ")}</td>
                                </tr>
                            )
                        })
                    }</tbody>
                </Table>
            </Modal.Body>
        </Modal>
    );
}

export default ExampleDisplay;
