import React, { Component } from "react";
import styles from "../../styles/sass/components/game/HintButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { Button, OverlayTrigger } from "react-bootstrap";
import PopOver from "../ui/PopOver";
import { Kana } from "../../types/Kana";
import { KanaColumn } from "../../types/KanaColumn";

export interface HintButtonProps {
    kana: Kana;
    quantity: number
    totalQuantity?: number;
    title?: string;
    disabled?: boolean;
    onUse?: () => void;
}

class HintButton extends Component<HintButtonProps> {
    render() {
        const { title, disabled, quantity } = this.props;

        const overlay = <PopOver title={this.getTitle()} text={this.getContent()}/>;
        return (
            <OverlayTrigger onToggle={this.props.onUse} trigger="focus" placement="left" overlay={overlay}>
                <Button
                    variant="warning"
                    className={quantity > 0 ? styles.tip : styles.disabled}
                    title={title}
                    disabled={disabled}
                >
                    <FontAwesomeIcon icon={faLightbulb}/>
                </Button>
            </OverlayTrigger>
        );
    }


    private getTitle = () => {
        const { quantity, totalQuantity } = this.props;
        if (quantity > 0) {
            if (quantity <= 10) {
                return "Need a hint? (" + (quantity - 1) + "/" + totalQuantity + " remaining)";
            }
            return "Need a hint?"
        }
        return "Sorry!";
    }

    private getContent = () => {
        const { kana, quantity } = this.props;
        if (quantity <= 0) {
            return "You've used all of your hints.";
        }
        if (kana.column === KanaColumn.OTHER) {
            return "This kana is exceptional. It is not a consonant nor a vowel."
        }
        if (kana.isDiagraph()) {
            return "Diagraphs usually drop the 1st kana's 2nd letter when transcribed."
        }
        return "This kana is from the '" + kana.column + "' column in the " + kana.type + " syllabary.";
    }

}

export default HintButton;