import React, { Component, FunctionComponent } from "react";
import ReactCardFlip from "react-card-flip";
import Learnable from "../../types/learn/Learnable";

export interface CardProps {
    front: FunctionComponent<CardFaceProps>;
    back: FunctionComponent<CardFaceProps>;
}

export interface CardFaceProps {
    data: Learnable;
    onClick: () => void;
}

export interface FlashCardProps extends CardProps {
    data: Learnable;
    onFlip: (count: number) => void;
}

interface FlashCardState {
    flipped: boolean;
    flips: number;
}

class FlashCard extends Component<FlashCardProps, FlashCardState> {

    constructor(props: FlashCardProps | Readonly<FlashCardProps>) {
        super(props);
        this.state = {
            flipped: false,
            flips: 0
        }
    }

    render() {
        const { flipped } = this.state;
        const { data, front, back } = this.props;
        const Front: React.FunctionComponent<CardFaceProps> = front;
        const Back: React.FunctionComponent<CardFaceProps> = back;

        return (
            <ReactCardFlip isFlipped={flipped} infinite={true}>
                <Front data={data} onClick={this.flip} />
                <Back data={data} onClick={this.flip} />
            </ReactCardFlip>
        );
    }

    private flip = () => {
        const { flipped, flips } = this.state;
        const newFlipCount = flips + 1;
        this.setState({ flipped: !flipped, flips: newFlipCount });
        this.props.onFlip(newFlipCount);
    }
}

export default FlashCard;