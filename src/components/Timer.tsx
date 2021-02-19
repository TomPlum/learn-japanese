import {Component} from "react";

interface TimerProps {
   end?: number;
   className?: string;
}

interface TimerState {
    start: number;
    current: number;
    interval: any;
}

class Timer extends Component<TimerProps, TimerState> {
    constructor(props: TimerProps | Readonly<TimerProps>) {
        super(props);
        this.state = {
            start: Date.now(),
            current: Date.now(),
            interval: undefined
        }
    }

    componentDidMount() {
       this.start();
    }

    componentWillUnmount() {
        this.stop();
    }

    render() {
        const { className } = this.props;

        return (
            <span className={className}>
                {this.formatTimeElapsed()}
            </span>
        );
    }

    start = () => {
        this.tick();
        this.setState({interval: setInterval(() => this.tick(), 1000)});
    }

    stop = () => clearInterval(this.state.interval);

    restart = () => {
        this.reset();
        this.start();
    }

    private tick = () => this.setState({current: this.state.current + 1000});

    private reset = () => {
        this.stop();
        this.setState({start: Date.now(), current: Date.now(), interval: undefined});
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