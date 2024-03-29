import { Example } from "../../../../domain/kanji/Example"
import { Modal, Table } from "react-bootstrap"
import styles  from "./ExampleDisplay.module.scss"

export interface ExampleDisplayProps {
  examples: Example[]
  onDismiss: () => void
}

const ExampleDisplay = (props: ExampleDisplayProps) => {
  return (
    <Modal
      centered
      show
      size="lg"
      onHide={props.onDismiss}
      contentClassName={styles.content}
      data-testid="kanji-example-display"
    >
      <Modal.Header closeButton className={styles.header}>
        <span className={styles.title}>Examples</span>
      </Modal.Header>

      <Modal.Body className={styles.body}>
        <Table variant="dark" className={styles.table}>
          <thead>
            <tr>
              <th>Kanji</th>
              <th>Kana</th>
              <th>Meaning</th>
            </tr>
          </thead>

          <tbody>
            {props.examples.map((example: Example) => {
              return (
                <tr key={example.kanji}>
                  <td>{example.kanji}</td>
                  <td>{example.kana.join(", ")}</td>
                  <td>{example.english.join(", ")}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  )
}

export default ExampleDisplay
