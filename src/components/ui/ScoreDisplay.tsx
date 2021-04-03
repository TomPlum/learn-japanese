import React, { Component } from "react";
import FlipNumbers from 'react-flip-numbers';
import styles from "../../styles/sass/components/ui/ScoreDisplay.module.scss";
import Viewports, { Viewport } from "../../utility/Viewports";

export interface ScoreDisplayProps {
    value: number;
    className?: string;
}

interface ScoreDisplayState {
    width: number;
}

class ScoreDisplay extends Component<ScoreDisplayProps, ScoreDisplayState> {

    constructor(props: Readonly<ScoreDisplayProps> | ScoreDisplayProps) {
        super(props);

        this.state = {
            width: window.innerWidth
        }
    }

    componentDidMount() {
        this.updateWidth();
        window.addEventListener("resize", this.updateWidth);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    componentDidUpdate(prevProps: Readonly<ScoreDisplayProps>, prevState: Readonly<ScoreDisplayState>) {
        if (prevState.width !== this.state.width) {
            this.updateWidth();
        }
    }

    render() {
        const { value, className } = this.props;
        const size = this.getValueSize();
        return (
            <div className={[className, styles.wrapper].join(" ")}>
                <FlipNumbers play numbers={value.toString()} width={size.width} height={size.height} />
            </div>

        );
    }

    private getValueSize = (): { width: number, height: number } => {
        const { width } = this.state;
        switch (Viewports.fromWidth(width)) {
            case Viewport.PHONE: {
                return { width: 10, height: 20 };
            }
            case Viewport.TABLET: {
                return { width: 12, height: 30 };
            }
            case Viewport.DESKTOP: {
                return { width: 20, height: 35 };
            }
        }
    }

    private updateWidth = () => {
        this.setState({ width: window.innerWidth });
    }
}

export default ScoreDisplay;
