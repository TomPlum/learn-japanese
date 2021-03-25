import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/pages/HelpPage.module.scss";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HelpPage extends Component {
    render() {
        return (
            <Container fluid className={styles.wrapper}>
                <Container className={styles.content}>
                    <Row>
                        <Col>
                            <h1 className={styles.heading}>
                                <FontAwesomeIcon icon={faQuestionCircle} /> Frequently Asked Questions
                            </h1>

                            <h3 className={styles.question}>What is <strong>'romaji'</strong> ?</h3>
                            <p className={styles.answer}>
                                Rōmaji or ローマ字 (rōmaji) is the romanisation of the Japanese written language.
                            </p>
                            <a href="https://www.japanesepod101.com/japanese-romaji/" target="_blank" className={styles.source}>
                                Source
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default HelpPage;