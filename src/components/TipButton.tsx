import React, {Component} from "react";
import styles from "../styles/sass/components/KanaMemoryTest.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLightbulb} from "@fortawesome/free-solid-svg-icons";
import {Button, OverlayTrigger} from "react-bootstrap";
import PopOver from "./PopOver";
import {Kana} from "../types/Kana";
import {KanaColumn} from "../types/KanaColumn";
import {RandomNumberGenerator} from "../utility/RandomNumberGenerator";

interface TipButtonProps {
    kana: Kana;
    title?: string;
}

class TipButton extends Component<TipButtonProps> {
    render() {
        const overlay = <PopOver title={this.getTitle()} text={this.getContent()} />;
        return (
            <OverlayTrigger trigger="focus" placement="left" overlay={overlay}>
                <Button variant="warning" className={styles.tip} title={this.props.title}>
                    <FontAwesomeIcon icon={faLightbulb}/>
                </Button>
            </OverlayTrigger>
        );
    }

    private getTitle = () => {
        const titles = ["Need some guidance?", "Stuck?", "Need a hint?"];
        const index = RandomNumberGenerator.getRandomArrayIndex(titles);
        return titles[index];
    };

    private getContent = () => {
        const { kana } = this.props;
        if (kana.column === KanaColumn.OTHER) {
            return "This kana is exceptional. It is not a consonant nor a vowel."
        }
        return "This kana is from the '" + kana.column + "' column in the "+ kana.type + " syllabary.";
    }
}

export default TipButton;