import { Component } from "react";
import { Kana } from "../../../types/Kana";
import ReactCardFlip from "react-card-flip";
import KanaFlashCardFront from "./KanaFlashCardFront";
import KanaFlashCardBack from "./KanaFlashCardBack";

export interface KanaFlashCardProps {
    kana: Kana;
    onFlip: (count: number) => void;
}

interface KanaFlashCardState {
    flipped: boolean;
    flips: number;
}

class KanaFlashCard extends Component<KanaFlashCardProps, KanaFlashCardState> {

    constructor(props: Readonly<KanaFlashCardProps> | KanaFlashCardProps) {
        super(props);
        this.state = {
            flipped: false,
            flips: 0
        }
    }

    render() {
        const { flipped } = this.state;
        const { kana } = this.props;

        return (
            <ReactCardFlip isFlipped={flipped} infinite={true}>
                <KanaFlashCardFront kana={kana} onClick={this.flip} />
                <KanaFlashCardBack kana={kana} onClick={this.flip} />
            </ReactCardFlip>
        );
    }

    private flip = () => {
        const { flipped, flips } = this.state;
        this.setState({ flipped: !flipped, flips: flips + 1 });
        this.props.onFlip(flips + 1);
    }
}

export default KanaFlashCard;