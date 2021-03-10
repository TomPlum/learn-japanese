import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import styles from "../../styles/sass/components/ui/SessionProgressBar.module.scss";

interface SessionProgressBarProps {
    inProgress: boolean;
    value: number;
    title?: string;
    className?: string;
}

class SessionProgressBar extends Component<SessionProgressBarProps> {
    render() {
        const { inProgress, value, title, className } = this.props
        return (
            <ProgressBar
                animated={inProgress}
                className={className ? className : styles.progress}
                now={value}
                variant={!inProgress ? "success" : undefined}
                title={title}
            />
        );
    }
}

export default SessionProgressBar;