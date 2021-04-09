import React, { Component, ComponentClass, FunctionComponent } from "react";
import ReactCardFlip from "react-card-flip";
import Learnable from "../../types/learn/Learnable";

type CardFace = FunctionComponent<CardFaceProps> | ComponentClass<any>;

export interface CardProps {
    front: CardFace;
    back: CardFace;
}

//TODO: Can the MyComponentFlashCardFront and Back components have explicit sub-types like Kana and CalendarData?
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
        const Front = front as React.FunctionComponent<CardFaceProps>;
        const Back = back as React.FunctionComponent<CardFaceProps>;

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