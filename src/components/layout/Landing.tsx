import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LifeDisplay from "../game/LifeDisplay";
import HintButton from "../game/HintButton";
import { Kana } from "../../types/Kana";
import KanaType from "../../types/KanaType";
import { KanaColumn } from "../../types/KanaColumn";

class Landing extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <p>Description</p>
                </Row>

                <hr />

                <Row>
                    <Col xs={2}>
                        <LifeDisplay hearts={10} />
                    </Col>
                    <Col xs={10}>
                        <p>You have a limited number of lives. Each time you answer incorrectly you lose a life.</p>
                    </Col>
                </Row>

                <hr />

                <Row>
                    <Col xs={2}>
                        <p>You have a limited number of lives. Each time you answer incorrectly you lose a life.</p>
                    </Col>
                    <Col xs={10}>
                        <HintButton quantity={3} kana={new Kana("\u3042", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)} />
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Landing;