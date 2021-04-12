import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import styles from "../../styles/sass/components/ui/SessionProgressBar.module.scss";

interface SessionProgressBarProps {
    inProgress: boolean;
    quantity: number;
    remaining: number;
    className?: string;
    streak?: number;
}

class SessionProgressBar extends Component<SessionProgressBarProps> {
    render() {
        const { inProgress, quantity, remaining, className, streak } = this.props
        const barClass = className ? className : styles.bar;
        return (
            <ProgressBar
                animated={inProgress}
                className={[barClass, styles.default].join(" ")}
                now={((quantity - remaining) / quantity) * 100}
                title={(quantity - remaining) + "/" + quantity}
                variant={remaining === 0 ? "success" : (streak ?? 0) >= 5 ? "warning" : undefined}
            />
        );
    }
}

export default SessionProgressBar;