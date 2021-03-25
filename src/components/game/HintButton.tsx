import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { Button, OverlayTrigger } from "react-bootstrap";
import PopOver from "../ui/PopOver";
import { Kana } from "../../types/Kana";
import { KanaColumn } from "../../types/KanaColumn";
import Viewports, { Viewport } from "../../utility/Viewports";
import styles from "../../styles/sass/components/game/HintButton.module.scss";

export interface HintButtonProps {
    kana: Kana;
    remaining: number
    totalQuantity?: number;
    title?: string;
    disabled?: boolean;
    className?: string;
    onUse?: () => void;
}

interface HintButtonState {
    viewport: Viewport;
}

class HintButton extends Component<HintButtonProps, HintButtonState> {

    constructor(props: HintButtonProps | Readonly<HintButtonProps>) {
        super(props);
        this.state = {
            viewport: Viewport.PHONE
        }
    }

    componentDidMount() {
        this.updateViewport();
        window.addEventListener("resize", this.updateViewport);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateViewport);
    }

    render() {
        const { title, disabled, remaining, className } = this.props;
        const { viewport } = this.state;

        const overlay = <PopOver title={this.getTitle()} text={this.getContent()} />;
        const defaultClassName = remaining > 0 ? styles.button : styles.disabled;
        return (
            <OverlayTrigger
                onToggle={this.props.onUse}
                trigger="click"
                placement="top"
                rootClose={true}
                overlay={overlay}
            >
                <Button
                    variant="warning"
                    className={[defaultClassName, className].join(" ")}
                    title={title}
                    disabled={disabled}
                >
                    <FontAwesomeIcon icon={faLightbulb} fixedWidth className={styles.icon}/>
                    {viewport != Viewport.PHONE &&
                        <>
                            <span className={styles.text}>HINT</span>
                            <span className={styles.remaining}>({remaining})</span>
                        </>
                    }
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

    private updateViewport = () => {
        console.log(window.innerWidth)
        this.setState({ viewport: Viewports.fromWidth(window.innerWidth) });
    }

}

export default HintButton;