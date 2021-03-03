import { fireEvent, render, screen } from "@testing-library/react";
import Timer from "../../../components/game/Timer";
import React from "react";

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
})

test('Passing the pausable property as true should render a pause button', () => {
    render(<Timer pausable={true}/>);
    expect(screen.getByTitle('Pause')).toBeInTheDocument();
});

test('Passing the pausable property as false should not render a pause button', () => {
    render(<Timer pausable={false}/>);
    expect(screen.queryByTitle('Pause')).not.toBeInTheDocument();
});

test('Clicking the pause button should call the onPause event handler', () => {
    const onPausedHandler = jest.fn();
    render(<Timer pausable={true} onPaused={onPausedHandler}/>);
    const pauseButton = screen.getByTitle('Pause');
    fireEvent.click(pauseButton);
    expect(onPausedHandler).toHaveBeenCalled();
});

test('Clicking the pause button once while the timer is running should stop it', () => {
    render(<Timer pausable={true} />);

    jest.advanceTimersByTime(1000);
    expect(screen.getByText("00:01")).toBeInTheDocument();

    fireEvent.click(screen.getByTitle('Pause'));

    jest.advanceTimersByTime(1000);
    expect(screen.getByText("00:01")).toBeInTheDocument();
});

test('Clicking the pause button twice should stop and start the timer', () => {
    render(<Timer pausable={true} />);
    expect(screen.getByText("00:00")).toBeInTheDocument();

    const pauseButton = screen.getByTitle('Pause');

    jest.advanceTimersByTime(1000);
    fireEvent.click(pauseButton);
    expect(screen.getByText("00:01")).toBeInTheDocument();

    fireEvent.click(pauseButton);
    jest.advanceTimersByTime(1000);
    expect(screen.getByText("00:02")).toBeInTheDocument();
});

test('Immediately after mounting, the timer should set an interval for every 1 second', () => {
    render(<Timer />);
    expect(screen.getByText("00:00")).toBeInTheDocument();
});

test('After n seconds where n < 60, the timer text should render the current seconds elapsed', () => {
    render(<Timer />);
    jest.advanceTimersByTime(34000);
    expect(screen.getByText("00:34")).toBeInTheDocument();
});

test('After n seconds where n > 60 and < 3600, the timer text should render the current seconds elapsed', () => {
    render(<Timer />);
    jest.advanceTimersByTime(62000);
    expect(screen.getByText("01:02")).toBeInTheDocument();
});

test('After an hour has passed, the timer text should render the current time in HH:mm:ss format', () => {
    render(<Timer />);
    jest.advanceTimersByTime(3600000);
    expect(screen.getByText("1:00:00")).toBeInTheDocument();
});

test('Invoking restart should reset the timer to 00:00', () => {
    const timer = React.createRef<Timer>();
    render(<Timer ref={timer} />);

    jest.advanceTimersByTime(5000);
    expect(screen.getByText("00:05")).toBeInTheDocument();

    timer.current?.restart();

    expect(screen.getByText("00:00")).toBeInTheDocument();
});

test('Invoking stop should pause the timer', () => {
    const timer = React.createRef<Timer>();
    render(<Timer ref={timer} />);

    jest.advanceTimersByTime(5000);
    expect(screen.getByText("00:05")).toBeInTheDocument();

    timer.current?.stop();
    jest.advanceTimersByTime(1000);

    expect(screen.getByText("00:05")).toBeInTheDocument();
});

test('Invoking getCurrentTime should return the current time string', () => {
    const timer = React.createRef<Timer>();
    render(<Timer ref={timer} />);

    jest.advanceTimersByTime(5000);

    expect(timer.current?.getCurrentTime()).toEqual("00:05");
});