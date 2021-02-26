import { Component } from "react";
import { Kanji } from "../../types/kanji/Kanji";
import ReactCardFlip from "react-card-flip";
import FlashCardFront from "./FlashCardFront";
import FlashCardBack from "./FlashCardBack";
import styles from "../../styles/sass/components/learn/FlashCard.module.scss";

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
            <ReactCardFlip isFlipped={flipped} infinite={true}>
                <FlashCardFront kanji={kanji} onClick={this.flip} />
                <FlashCardBack kanji={kanji} onClick={this.flip} />
            </ReactCardFlip>
        );
    }

    private flip = () => this.setState({ flipped: !this.state.flipped });
}

export default FlashCard;