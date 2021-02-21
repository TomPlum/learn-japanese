import React, {Component} from "react";
import {faPause, faPlay} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/sass/components/Timer.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface TimerProps {
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
        const {className, pausable } = this.props;

        return (
            <>

                <span className={className}>
                    {pausable && !isStopped && <FontAwesomeIcon
                        icon={paused ? faPlay : faPause}
                        className={styles.pause}
                        onClick={paused ? this.play : this.pause}
                        title="Pause"
                        size="sm"

                    />}
                    {this.formatTimeElapsed()}
                </span>
            </>

        );
    }

    stop = () => {
        this.setState({paused: true, isStopped: true});
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

    private play = () => {
        this.onChangePausedState();
        this.setState({interval: setInterval(() => this.tick(), 1000), paused: false});
    }

    private pause = () => {
        this.onChangePausedState();
        this.setState({paused: true});
        clearInterval(this.state.interval);
    }

    private tick = () => this.setState({current: this.state.current + 1000});

    private start = () => {
        this.setState({interval: setInterval(() => this.tick(), 1000), paused: false, isStopped: false});
    }

    private onChangePausedState = () => {
        if (this.props.onPaused) this.props.onPaused();
    }

    private formatTimeElapsed(): string {
        const {start, current} = this.state;
        const delta = current - start;
        const date = new Date(1000 * Math.round(delta / 1000));
        const hours = date.getUTCHours();
        return (hours ? hours + ":" : "") + this.pad(date.getUTCMinutes()) + ":" + this.pad(date.getUTCSeconds());
    }

    private pad = (value: number) => ("0" + value).slice(-2);
}

export default Timer;