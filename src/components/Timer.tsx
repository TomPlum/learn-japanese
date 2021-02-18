import {Component} from "react";
import {Container} from "react-bootstrap";

interface TimerProps {
   end?: number;
   className?: string;
   on: boolean;
}

interface TimerState {
    start: number;
    current: number;
    timer: any;
}

class Timer extends Component<TimerProps, TimerState> {
    constructor(props: TimerProps | Readonly<TimerProps>) {
        super(props);
        this.state = {
            start: Date.now(),
            current: Date.now(),
            timer: undefined
        }
    }

    componentDidMount() {
        if (this.props.on) {
            this.tick();
            this.setState({timer: setInterval(() => this.tick(), 1000)});
        }
    }

    componentWillUnmount() {
        this.stop();
    }

    render() {
        const { className, on } = this.props;

        if (!on) this.stop();

        return (
            <Container>
                <span className={className}>
                    {this.formatTimeElapsed()}
                </span>
            </Container>
        );
    }

    private tick = () => this.setState({current: this.state.current + 1000});

    private stop = () => clearInterval(this.state.timer);

    private formatTimeElapsed(): string {
        const { start, current } = this.state;
        const delta = current - start;
        const seconds = delta / 1000;
        const mins = Math.floor(seconds / 60);
        const s = seconds % 60;
        return (mins < 10 ? "0" + mins : mins) + ":" + (s < 10 ? "0" + s : s)
    }
}

export default Timer;