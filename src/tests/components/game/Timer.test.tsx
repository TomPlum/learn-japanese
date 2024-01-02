import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import Timer, { TimerHandle } from "../../../components/game/Timer";
import React from "react"

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true })
})

afterEach(() => {
  vi.runOnlyPendingTimers()
  vi.useRealTimers()
})

test("Passing the pausable property as true should render a pause button", () => {
  render(<Timer pausable />)
  expect(screen.getByTitle("Pause")).toBeInTheDocument()
})

test("Passing the pausable property as false should not render a pause button", () => {
  render(<Timer pausable={false} />)
  expect(screen.queryByTitle("Pause")).not.toBeInTheDocument()
})

test("Clicking the pause button should call the onPause event handler", () => {
  const onPausedHandler = vi.fn()
  render(<Timer pausable onPaused={onPausedHandler} />)
  const pauseButton = screen.getByTitle("Pause")
  fireEvent.click(pauseButton)
  expect(onPausedHandler).toHaveBeenCalled()
})

test("Clicking the pause button once while the timer is running should stop it", async () => {
  render(<Timer pausable />)

  await act(() => vi.advanceTimersByTime(1000))
  expect(await screen.findByText("00:01")).toBeInTheDocument()

  fireEvent.click(screen.getByTitle("Pause"))

  await act(() => vi.advanceTimersByTime(1000))
  expect(await screen.findByText("00:01")).toBeInTheDocument()
})

test("Clicking the pause button should change the title to 'Play'", async () => {
  render(<Timer pausable />)
  expect(await screen.findByTitle("Pause")).toBeInTheDocument()

  fireEvent.click(screen.getByTitle("Pause"))
  expect(screen.getByTitle("Play")).toBeInTheDocument()
})

test("Clicking the pause button twice should stop and start the timer", async () => {
  render(<Timer pausable />)
  expect(await screen.findByText("00:00")).toBeInTheDocument()

  const pauseButton = screen.getByTitle("Pause")

  await act(() => vi.advanceTimersByTime(1000))
  fireEvent.click(pauseButton)
  expect(await screen.findByText("00:01")).toBeInTheDocument()

  fireEvent.click(pauseButton)
  await act(() => vi.advanceTimersByTime(1000))
  expect(await screen.findByText("00:02")).toBeInTheDocument()
})

test("Immediately after mounting, the timer should set an interval for every 1 second", () => {
  render(<Timer />)
  expect(screen.getByText("00:00")).toBeInTheDocument()
})

test("After n seconds where n < 60, the timer text should render the current seconds elapsed", async () => {
  render(<Timer />)
  await act(() => vi.advanceTimersByTime(34000))
  await waitFor(() => expect(screen.getByText("00:34")).toBeInTheDocument())
})


test("After n seconds where n > 60 and < 3600, the timer text should render the current seconds elapsed", async () => {
  render(<Timer />)
  await act(() => vi.advanceTimersByTime(62000))
  expect(await screen.findByText("01:02")).toBeInTheDocument()
})

test("After an hour has passed, the timer text should render the current time in HH:mm:ss format", () => {
  render(<Timer />)
  act(() => vi.advanceTimersByTime(3600000))
  expect(screen.getByText("1:00:00")).toBeInTheDocument()
})

test("Invoking restart should reset the timer to 00:00", async () => {
  const timer = React.createRef<TimerHandle>()
  render(<Timer ref={timer} />)

  await act(() => vi.advanceTimersByTime(5000))
  expect(await screen.findByText("00:05")).toBeInTheDocument()

  act(() => timer.current?.restart())

  expect(await screen.findByText("00:00")).toBeInTheDocument()
})

test("Invoking stop should pause the timer", async () => {
  const timer = React.createRef<TimerHandle>()
  render(<Timer ref={timer} />)

  await act(() => vi.advanceTimersByTime(5000))
  expect(await screen.findByText("00:05")).toBeInTheDocument()

  act(() => timer.current?.stop())
  await act(() => vi.advanceTimersByTime(1000))

  expect(await screen.findByText("00:05")).toBeInTheDocument()
})

test("Invoking getCurrentTime should return the current time string", () => {
  const timer = React.createRef<TimerHandle>()
  render(<Timer ref={timer} />)

  act(() => vi.advanceTimersByTime(5000))

  expect(timer.current?.getCurrentTime()).toEqual("00:05")
})
