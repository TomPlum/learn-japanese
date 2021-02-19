import React, {Component} from "react";
import styles from "../styles/sass/components/KanaMemoryTest.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLightbulb} from "@fortawesome/free-solid-svg-icons";
import {Button, OverlayTrigger} from "react-bootstrap";
import PopOver from "./PopOver";
import {Kana} from "../types/Kana";

interface TipButtonProps {
    kana: Kana;
}

class TipButton extends Component<TipButtonProps> {
    render() {
        const overlay = <PopOver title={this.getTitle()} text={this.getContent()} />;
        return (
            <OverlayTrigger trigger="focus" placement="left" overlay={overlay}>
                <Button variant="warning" className={styles.tip}>
                    <FontAwesomeIcon icon={faLightbulb}/>
                </Button>
            </OverlayTrigger>
        );
    }

    private getTitle = () => "Need some guidance?";

    private getContent = () => {
        const { kana } = this.props;
        return "This kana is from the " + kana.type + " syllabary.";
    }
}

export default TipButton;