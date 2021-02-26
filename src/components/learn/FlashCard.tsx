import { Component } from "react";
import { Kanji } from "../../types/kanji/Kanji";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ReadingType } from "../../types/kanji/ReadingType";
import styles from "../../styles/sass/components/learn/FlashCard.module.scss";
import KanjiDisplay from "./KanjiDisplay";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactCardFlip from "react-card-flip";
import FlashCardFront from "./FlashCardFront";
import FlashCardBack from "./FlashCardBack";

interface FlashCardProps {
    kanji: Kanji;
}

interface FlashCardState {
    flipped: boolean;
}

class FlashCard extends Component<FlashCardProps, FlashCardState> {
    constructor(props: Readonly<FlashCardProps> | FlashCardProps) {
        super(props);
        this.state = {
            flipped: false
        }
    }

    render() {
        const { flipped } = this.state;
        const { kanji } = this.props;

        return (
            <Container className={styles.wrapper}>
                <ReactCardFlip isFlipped={flipped}>
                    <FlashCardFront kanji={kanji} onClick={this.flip} />
                    <FlashCardBack kanji={kanji} onClick={this.flip} />
                </ReactCardFlip>
            </Container>
        );
    }

    private flip = () => this.setState({ flipped: !this.state.flipped });
}

export default FlashCard;