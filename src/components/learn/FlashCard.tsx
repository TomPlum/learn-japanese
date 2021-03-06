import { Component } from "react";
import { Kanji } from "../../types/kanji/Kanji";
import ReactCardFlip from "react-card-flip";
import FlashCardFront from "./FlashCardFront";
import FlashCardBack from "./FlashCardBack";

export interface FlashCardProps {
    kanji: Kanji;
    onFlip: (count: number) => void;
}

interface FlashCardState {
    flipped: boolean;
    flips: number;
}

class FlashCard extends Component<FlashCardProps, FlashCardState> {
    constructor(props: Readonly<FlashCardProps> | FlashCardProps) {
        super(props);
        this.state = {
            flipped: false,
            flips: 0
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

    private flip = () => {
        const { flipped, flips } = this.state;
        this.setState({ flipped: !flipped, flips: flips + 1 });
        this.props.onFlip(flips + 1);
    }
}

export default FlashCard;