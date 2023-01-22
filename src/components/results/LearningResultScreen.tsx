import { Component } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEraser } from "@fortawesome/free-solid-svg-icons"
import LearningSessionResult from "../../domain/learn/LearningSessionResult"
import QuitButton from "../ui/buttons/QuitButton"
import styles from "../../styles/sass/components/results/LearningResultScreen.module.scss"
import { Learnable } from "../../domain/learn/Learnable"
import { PieChart, Pie, Cell } from "recharts"

export interface LearningResultScreenProps {
  result: LearningSessionResult
  onDismiss: () => void
  onPractice: (mistakes: Learnable[]) => void
}

class LearningResultScreen extends Component<LearningResultScreenProps> {
  render() {
    const { result } = this.props

    const data = [
      { value: result.remembered.length, colour: "#4ecf46" },
      { value: result.forgotten.length, colour: "#d73a3a" }
    ]

    return (
      <Container data-testid="learning-results-screen" className={styles.wrapper}>
        <Row className={styles.header}>
          <Col>
            <QuitButton onClick={this.props.onDismiss} className={styles.quit} />
          </Col>
        </Row>

        <Row>
          <Col className="text-center" md={result.forgotten.length > 0 ? 6 : 12} xs={12}>
            <h1 className={styles.heading}>{this.getTitle()}</h1>
            {result.forgotten.length > 0 && (
              <Button onClick={this.onPractice} className={styles.mistakes}>
                <FontAwesomeIcon icon={faEraser} fixedWidth /> Practice Mistakes
              </Button>
            )}
          </Col>

          <Col md={6} xs={12}>
            {result.forgotten.length > 0 && (
              <PieChart width={250} height={250}>
                <Pie data={data} dataKey="value" animationBegin={0} innerRadius={35}>
                  {data.map((entry, i) => (
                    <Cell key={`cell-${i}`} fill={entry.colour} />
                  ))}
                </Pie>
              </PieChart>
            )}
          </Col>
        </Row>
      </Container>
    )
  }

  private getTitle = () => {
    const { result } = this.props
    const rememberedQuantity = result.remembered.length
    const forgottenQuantity = result.forgotten.length
    if (forgottenQuantity === 0) {
      return "You remembered them all, good job!"
    }
    return "You remembered " + rememberedQuantity + "/" + (rememberedQuantity + forgottenQuantity) + "!"
  }

  private onPractice = () => {
    const { result, onPractice } = this.props
    onPractice(result.forgotten)
  }
}

export default LearningResultScreen
