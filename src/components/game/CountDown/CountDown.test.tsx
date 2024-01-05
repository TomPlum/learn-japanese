import { act, render, screen, waitFor } from "@testing-library/react";
import CountDown, { CountDownHandle, CountDownProps }  from "./CountDown"
import React from "react"

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true })
})

afterEach(() => {
  vi.runOnlyPendingTimers()
  vi.useRealTimers()
})

const onFinishHandler = vi.fn()

const props: CountDownProps = {
  value: 10,
  className: "testClass",
  onFinish: onFinishHandler
}

test("On mount the timer should start counting down", async () => {
  render(<CountDown {...props} />)
  expect(await screen.findByText("10")).toBeInTheDocument()

  await act(() => vi.advanceTimersByTime(1000))
  expect(await screen.findByText("9")).toBeInTheDocument()
})

test("Calling stop should stop the timer", async () => {
  const ref = React.createRef<CountDownHandle>()
  render(<CountDown {...props} ref={ref} />)

  await act(() => vi.advanceTimersByTime(1000))
  expect(await screen.findByText("9")).toBeInTheDocument()

  act(() => ref.current?.stop())
  await act(() => vi.advanceTimersByTime(1000))
  expect(await screen.findByText("9")).toBeInTheDocument()
})

test("Calling reset should restart the timer from the original value", async () => {
  const ref = React.createRef<CountDownHandle>()
  render(<CountDown {...props} ref={ref} />)

  await act(() => vi.advanceTimersByTime(1000))
  expect(await screen.findByText("9")).toBeInTheDocument()

  act(() => ref.current?.reset())
  expect(await screen.findByText("10")).toBeInTheDocument()
})

test("When the timer reaches 0 it should call the onFinish event handler", async () => {
  render(<CountDown {...props} />)

  await act(() => vi.advanceTimersByTime(10000))
  expect(await screen.findByText("0")).toBeInTheDocument()

  await act(() => vi.advanceTimersByTime(1000))
  await waitFor(() => expect(onFinishHandler).toHaveBeenCalled())
})

test("When the timer reaches 0 it should reset back to its starting value", async () => {
  render(<CountDown {...props} />)

  await act(() => vi.advanceTimersByTime(5000))
  expect(await screen.findByText("5")).toBeInTheDocument()

  await act(() => vi.advanceTimersByTime(5000))
  await act(() => vi.advanceTimersByTime(1000))
  expect(await screen.findByText("10")).toBeInTheDocument()
})
