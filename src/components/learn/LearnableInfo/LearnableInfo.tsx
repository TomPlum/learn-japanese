import { Component } from "react"
import { Learnable } from "types/learn/Learnable"
import { Col, Container, Row } from "react-bootstrap"
import Copyable from "../../ui/Copyable"
import styles  from "./LearnableInfo.module.scss"

export interface LearnableInfoProps {
  value: Learnable
}

class LearnableInfo extends Component<LearnableInfoProps> {
  render() {
    const { value } = this.props

    return (
      <Container fluid className={styles.wrapper}>
        <Row>
          <Col xs={5}>
            <Copyable>
              <span>{value.getMeanings().join(" or ")}</span>
            </Copyable>
          </Col>

          <Col>
            {value.getKanjiVariation() ? (
              <Copyable>
                <span>{value.getKanjiVariation()}</span>
              </Copyable>
            ) : (
              <span>-</span>
            )}
          </Col>

          <Col>
            <Copyable>
              <span>{value.getKana().join(" or ")}</span>
            </Copyable>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default LearnableInfo
