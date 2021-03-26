import React, { Component } from "react";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/game/Timer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface TimerProps {
    end?: number;
    className?: string;
    pausable?: boolean;
    onPaused?: () => void;
}

interface TimerState {
    start: number;
    current: number;
    interval: any;
    paused: boolean;
    isStopped: boolean;
}

class Timer extends Component<TimerProps, TimerState> {
    constructor(props: TimerProps | Readonly<TimerProps>) {
        super(props);
        this.state = {
            start: Date.now(),
            current: Date.now(),
            interval: undefined,
            paused: false,
            isStopped: false
        }
    }

    componentDidMount() {
        this.start();
    }

    componentWillUnmount() {
        this.stop();
    }

    render() {
        const { paused, isStopped } = this.state;
        const { className, pausable } = this.props;

        return (
            <span className={[className, styles.wrapper].join(" ")}>
                {pausable && !isStopped && <FontAwesomeIcon
                    icon={paused ? faPlay : faPause}
                    className={styles.icon}
                    onClick={paused ? this.play : this.pause}
                    title={paused ? "Play" : "Pause"}
                    size="sm"
                    fixedWidth
                />}
                <span className={styles.time}>{this.formatTimeElapsed()}</span>
            </span>
        );
    }

    stop = () => {
        this.setState({ paused: true, isStopped: true });
        clearInterval(this.state.interval);
    }

    restart = () => {
        this.setState({
            start: Date.now(),
            current: Date.now(),
            interval: undefined,
            paused: false,
            isStopped: false
        }, () => this.start());
    }

    getCurrentTime = () => this.formatTimeElapsed();

    start = () => {
        this.setState({ interval: setInterval(() => this.tick(), 1000), paused: false, isStopped: false });
    }

    pause = () => {
        this.onChangePausedState();
        this.setState({ paused: true });
        clearInterval(this.state.interval);
    }

    private play = () => {
        this.onChangePausedState();
        this.setState({ interval: setInterval(() => this.tick(), 1000), paused: false });
    }

    private tick = () => this.setState({ current: this.state.current + 1000 });

    private onChangePausedState = () => {
        if (this.props.onPaused) this.props.onPaused();
    }

    private formatTimeElapsed(): string {
        const { start, current } = this.state;
        const delta = current - start;
        const date = new Date(1000 * Math.round(delta / 1000));
        const hours = date.getUTCHours();
        return (hours ? hours + ":" : "") + this.pad(date.getUTCMinutes()) + ":" + this.pad(date.getUTCSeconds());
    }

    private pad = (value: number) => ("0" + value).slice(-2);
}

export default Timer;