import React, { Component } from "react";
import styles from "../../styles/sass/components/game/TipButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { Button, OverlayTrigger } from "react-bootstrap";
import PopOver from "../ui/PopOver";
import { Kana } from "../../types/Kana";
import { KanaColumn } from "../../types/KanaColumn";

interface TipButtonProps {
    kana: Kana;
    quantity: number;
    title?: string;
    disabled?: boolean;
    onUse?: () => void;
}

interface TipButtonState {
    remaining: number;
}

class TipButton extends Component<TipButtonProps, TipButtonState> {
    constructor(props: TipButtonProps | Readonly<TipButtonProps>) {
        super(props);
        this.state = {
            remaining: this.props.quantity ?? 0
        }
    }

    render() {
        const { title, disabled } = this.props;

        const overlay = <PopOver title={this.getTitle()} text={this.getContent()}/>;
        return (
            <OverlayTrigger trigger="focus" placement="left" overlay={overlay}>
                <Button
                    onClick={this.onClick}
                    variant="warning"
                    className={!this.hasExhaustedTips() ? styles.tip : styles.disabled}
                    title={title}
                    disabled={disabled}
                >
                    <FontAwesomeIcon icon={faLightbulb}/>
                </Button>
            </OverlayTrigger>
        );
    }

    onClick = () => this.setState({ remaining: this.state.remaining - 1 })

    private getTitle = () => {
        const { remaining } = this.state;
        //const titles = ["Need some guidance?", "Stuck?", "Need a hint?"];
        //const index = RandomNumberGenerator.getRandomArrayIndex(titles);
        //return titles[index];
        if (remaining > 0) {
            return "Need a hint? (" + remaining + " remaining)";
        }
        return "Sorry!";
    };

    private getContent = () => {
        const { kana, quantity } = this.props;
        if (this.hasExhaustedTips()) {
            return "You've used all " + quantity + " of your tips.";
        }
        if (kana.column === KanaColumn.OTHER) {
            return "This kana is exceptional. It is not a consonant nor a vowel."
        }
        if (kana.isDiagraph()) {
            return "Diagraphs usually drop the 1st kana's 2nd letter when transcribed."
        }
        return "This kana is from the '" + kana.column + "' column in the " + kana.type + " syllabary.";
    }

    private hasExhaustedTips = (): boolean => {
        return this.state.remaining <= 0;
    }
}

export default TipButton;