import { Component } from "react";

export interface CountDownProps {
    value: number;
    className?: string;
    onFinish: () => void;
}

interface CountDownState {
    remaining: number;
    interval: any;
}

class CountDown extends Component<CountDownProps, CountDownState> {
    constructor(props: CountDownProps | Readonly<CountDownProps>) {
        super(props);
        this.state = {
            remaining: this.props.value,
            interval: undefined
        }
    }

    componentDidMount() {
        this.start();
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <span className={this.props.className} title="Time Remaining">
                {this.state.remaining}
            </span>
        );
    }

    reset = () => {
        clearInterval(this.state.interval);
        this.setState({ remaining: this.props.value, interval: undefined }, () => this.start());
    }

    stop = () => {
        clearInterval(this.state.interval);
        this.setState({ interval: undefined });
    }

    private decrement = () => {
        const { remaining } = this.state;
        if (remaining === 0) {
            this.props.onFinish();
            this.reset();
        } else {
            this.setState({ remaining: remaining - 1 });
        }
    }

    private start = () => this.setState({ interval: setInterval(() => this.decrement(), 1000 )});

}

export default CountDown;