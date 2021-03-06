import { Component } from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/Landing.module.scss";
import Inspectable from "../ui/Inspectable";
import KanaCarousel from "../../styles/sass/components/KanaCarousel";
import { faPlay, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Landing extends Component {
    render() {
        return (
            <Container fluid>
                <Jumbotron className={styles.jumbotron} fluid>
                    <h1 className={styles.heading}>
                        {'Learn '}
                        <Inspectable
                            title="Nihongo (日本語)"
                            text="The Kanji in this compound mean 'Sun' (日), 'Origin' (本) and 'Language' (語)."
                            className={styles.japanese}
                            placement="top"
                        >
                            <span>Japanese</span>
                        </Inspectable>
                        {' Kana'}
                    </h1>
                    <h4>A simple memory training app for learning the Japanese Hiragana and Katakana syllabaries.</h4>
                    <KanaCarousel />
                    <Button className={styles.play} variant="outline-success" href="/play">
                        <FontAwesomeIcon icon={faPlay} /> Play
                    </Button>
                    <Button className={styles.search} variant="outline-info" href="/search">
                        <FontAwesomeIcon icon={faSearch} /> Search
                    </Button>
                </Jumbotron>
            </Container>
        );
    }
}

export default Landing;