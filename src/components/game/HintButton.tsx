import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb as solidBulb } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb as regularBulb } from "@fortawesome/free-regular-svg-icons";
import { Button, OverlayTrigger } from "react-bootstrap";
import PopOver from "../ui/PopOver";
import Viewports, { Viewport } from "../../utility/Viewports";
import { Learnable } from "../../types/learn/Learnable";
import styles from "../../styles/sass/components/game/HintButton.module.scss";
import RevealableText from "../ui/RevealableText";

export interface HintButtonProps {
    data: Learnable;
    quantity: number;
    remaining: number;
    infinite: boolean;
    disabled?: boolean;
    className?: string;
    onUse?: () => void;
}

interface HintButtonState {
    viewport: Viewport;
    isLastHint: boolean;
    revealed: boolean;
}

class HintButton extends Component<HintButtonProps, HintButtonState> {

    constructor(props: HintButtonProps | Readonly<HintButtonProps>) {
        super(props);
        this.state = {
            viewport: Viewport.PHONE,
            isLastHint: false,
            revealed: false
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
        const { disabled, className, remaining } = this.props;
        const { viewport, revealed } = this.state;

        const overlay = (
            <PopOver
                title={this.getTitle()}
                text={
                    <RevealableText
                        value={this.getContent()}
                        disabled={revealed || remaining <= 0}
                        className={styles.hint}
                        onReveal={this.onHintUse}
                    />
                }
            />
        );

        const defaultClassName = remaining > 0 ? styles.button : styles.disabled;
        const buttonClasses = [defaultClassName, className].join(" ");
        const icon = remaining > 0 ? solidBulb : regularBulb

        return (
            <OverlayTrigger trigger="click" placement="top" rootClose={true} overlay={overlay}>
                <Button
                    title={!disabled ? "Get a Hint" : "Hints are disabled."}
                    variant="warning"
                    className={buttonClasses}
                    style={{ width: viewport === Viewport.PHONE ? "50px" : "auto"}}
                >
                    <FontAwesomeIcon icon={icon} className={styles.icon}/>
                    {viewport !== Viewport.PHONE && <span className={styles.text}>HINT</span>}
                </Button>
            </OverlayTrigger>
        );
    }

    private getTitle = () => {
        const { revealed } = this.state;
        const { quantity, remaining, infinite, disabled } = this.props;

        if (disabled) {
            return "Hints are disabled"
        }

        if (remaining === 1 && revealed) {
            return "This is your last hint!"
        }

        if (remaining > 0) {
            if (infinite) {
                return "Need a hint?"
            }

            return "Need a hint? (" + this.getRemaining() + "/" + quantity + " remaining)";
        }
        return "Sorry! You're out of hints.";
    }

    private getContent = () => {
        const { data, quantity, remaining, disabled } = this.props;

        if (disabled) {
            return "You'll have to choose a preset with hints enabled or customise the game settings.";
        }

        if (remaining <= 0) {
            return "You've already used your " + quantity + " hints.";
        }

        return data.getHint();
    }

    private getRemaining = () => {
        const { remaining } = this.props;
        const { revealed } = this.state;

        if (revealed) {
            return remaining - 1;
        }

        return remaining;
    }

    private updateViewport = () => {
        this.setState({ viewport: Viewports.fromWidth(window.innerWidth) });
    }

    private onHintUse = () => {
        const { revealed } = this.state;
        const { onUse } = this.props;

        if (!revealed) {
            this.setState({ revealed: true });
            onUse?.();
        }
    }
}

export default HintButton;
