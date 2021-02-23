import { Component } from "react";

interface CountDownProps {
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

    componentDidUpdate(prevProps: Readonly<CountDownProps>, prevState: Readonly<CountDownState>) {
        if (this.state.remaining === 0) {
            this.props.onFinish();
            this.reset();
        }
    }

    render() {
        return (
            <span className={this.props.className}>
                {this.state.remaining}
            </span>
        );
    }

    reset = () => {
        clearInterval(this.state.interval);
        this.setState({ remaining: this.props.value, interval: undefined }, () => this.start());
    }

    private decrement = () => this.setState({ remaining: this.state.remaining - 1 });


    private start = () => this.setState({ interval: setInterval(() => this.decrement(), 1000 )});

}

export default CountDown;