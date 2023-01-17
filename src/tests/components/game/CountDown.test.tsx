import { render, screen } from "@testing-library/react";
import CountDown, { CountDownProps } from "../../../components/game/CountDown";
import React from "react";

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
});

const onFinishHandler = jest.fn();

const props: CountDownProps = {
    value: 10,
    className: 'testClass',
    onFinish: onFinishHandler
};

test('On mount the timer should start counting down', () => {
    render(<CountDown {...props} />);
    expect(screen.getByText('10')).toBeInTheDocument();
    jest.advanceTimersByTime(1000);
    expect(screen.getByText('9')).toBeInTheDocument();
});

test('Calling stop should stop the timer', () => {
    const ref = React.createRef<CountDown>();
    render(<CountDown {...props} ref={ref} />);

    jest.advanceTimersByTime(1000);
    expect(screen.getByText('9')).toBeInTheDocument();

    ref.current?.stop();
    jest.advanceTimersByTime(1000);
    expect(screen.getByText('9')).toBeInTheDocument();
});

test('Calling reset should restart the timer from the original value', () => {
    const ref = React.createRef<CountDown>();
    render(<CountDown {...props} ref={ref} />);

    jest.advanceTimersByTime(1000);
    expect(screen.getByText('9')).toBeInTheDocument();

    ref.current?.reset();
    expect(screen.getByText('10')).toBeInTheDocument();
});

test('When the timer reaches 0 it should call the onFinish event handler', () => {
    render(<CountDown {...props} />);
    jest.advanceTimersByTime(11000);
    expect(onFinishHandler).toHaveBeenCalled();
});

test('When the timer reaches 0 it should reset back to its starting value', () => {
    render(<CountDown {...props} />);

    jest.advanceTimersByTime(5000);
    expect(screen.getByText('5')).toBeInTheDocument();


    jest.advanceTimersByTime(6000);
    expect(screen.getByText('10')).toBeInTheDocument();
});