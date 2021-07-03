import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { Button, OverlayTrigger } from "react-bootstrap";
import PopOver from "../ui/PopOver";
import Viewports, { Viewport } from "../../utility/Viewports";
import styles from "../../styles/sass/components/game/HintButton.module.scss";
import { Learnable } from "../../types/learn/Learnable";

export interface HintButtonProps {
    data: Learnable;
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
                    {viewport !== Viewport.PHONE &&
                        <>
                            <span className={styles.text}>HINT</span>
                            <span className={styles.remaining}>{this.getRemaining()}</span>
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
        const { data, remaining } = this.props;

        if (remaining <= 0) {
            return "You've used all of your hints.";
        }

        return data.getHint();
    }

    private getRemaining = () => {
        const { remaining } = this.props;
        if (remaining === 999) {
            return <FontAwesomeIcon icon={faInfinity} size="sm" />;
        }
        return "(" + remaining + ")";
    }

    private updateViewport = () => {
        this.setState({ viewport: Viewports.fromWidth(window.innerWidth) });
    }

}

export default HintButton;