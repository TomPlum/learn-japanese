import { Component } from "react";
import { Kanji } from "../../../types/kanji/Kanji";
import ReactCardFlip from "react-card-flip";
import KanjiFlashCardFront from "./KanjiFlashCardFront";
import KanjiFlashCardBack from "./KanjiFlashCardBack";

export interface KanjiFlashCardProps {
    kanji: Kanji;
    onFlip: (count: number) => void;
}

interface KanjiFlashCardState {
    flipped: boolean;
    flips: number;
}

class KanjiFlashCard extends Component<KanjiFlashCardProps, KanjiFlashCardState> {
    constructor(props: Readonly<KanjiFlashCardProps> | KanjiFlashCardProps) {
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
                <KanjiFlashCardFront kanji={kanji} onClick={this.flip} />
                <KanjiFlashCardBack kanji={kanji} onClick={this.flip} />
            </ReactCardFlip>
        );
    }

    private flip = () => {
        const { flipped, flips } = this.state;
        this.setState({ flipped: !flipped, flips: flips + 1 });
        this.props.onFlip(flips + 1);
    }
}

export default KanjiFlashCard;