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
    remaining: number
    totalQuantity?: number;
    title?: string;
    disabled?: boolean;
    onUse?: () => void;
}

class HintButton extends Component<HintButtonProps> {
    render() {
        const { title, disabled, remaining } = this.props;

        const overlay = <PopOver title={this.getTitle()} text={this.getContent()}/>;
        return (
            <OverlayTrigger onToggle={this.props.onUse} trigger={["focus", "click"]} placement="left" rootClose={true} overlay={overlay}>
                <Button
                    variant="warning"
                    className={remaining > 0 ? styles.tip : styles.disabled}
                    title={title}
                    disabled={disabled}
                >
                    <FontAwesomeIcon icon={faLightbulb}/>
                </Button>
            </OverlayTrigger>
        );
    }


    private getTitle = () => {
        const { remaining, totalQuantity } = this.props;
        if (remaining > 0) {
            if (remaining <= 10) {
                return "Need a hint? (" + (remaining - 1) + "/" + totalQuantity + " remaining)";
            }
            return "Need a hint?"
        }
        return "Sorry!";
    }

    private getContent = () => {
        const { kana, remaining } = this.props;
        if (remaining <= 0) {
            return "You've used all of your hints.";
        }
        if (kana.column === KanaColumn.OTHER) {
            return "This kana is exceptional. It is not a consonant nor a vowel."
        }

        let message: string;
        const diacritical = " Also, notice the diacritical mark.";

        if (kana.isDiagraph()) {
            message = "Diagraphs usually drop the 1st kana's 2nd letter when transcribed."
        } else {
            message = "This kana is from the '" + kana.column + "' column in the " + kana.type + " syllabary.";
        }

        return message + (kana.isDiacritical ? diacritical : "");
    }

}

export default HintButton;