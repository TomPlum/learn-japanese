import { Component } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/Landing.module.scss";
import Inspectable from "../ui/Inspectable";

class Landing extends Component {
    render() {
        return (
            <Container fluid>
                <Jumbotron className={styles.jumbotron} fluid>
                    <h1 className={styles.heading}>
                        {'Learn '}
                        <Inspectable title="Nihongo (日本語)" text="The Kanji in this compound mean 'Sun' (日), 'Origin' (本) and 'Language' (語)." className={styles.japanese} placement="bottom">
                            <span>Japanese</span>
                        </Inspectable>
                        {' Kana'}
                    </h1>
                    <h4>A simple memory training app for learning the Japanese Hiragana and Katakana syllabaries.</h4>
                </Jumbotron>
            </Container>
        );
    }
}

export default Landing;