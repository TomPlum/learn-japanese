import { fireEvent, screen } from "@testing-library/react"
import AnswerChoiceDisplay, { AnswerChoiceDisplayProps }  from "./AnswerChoiceDisplay"
import renderReduxConsumer from "tests/renderReduxConsumer"

const onClickHandler = vi.fn()
const onMouseDownHandler = vi.fn()
const onMouseUpHandler = vi.fn()
const onMouseOverHandler = vi.fn()
const onMouseOutHandler = vi.fn()
const onTouchStart = vi.fn()
const onTouchEnd = vi.fn()

let props: AnswerChoiceDisplayProps

beforeEach(() => {
  props = {
    value: "あ",
    onClick: onClickHandler,
    onMouseDown: onMouseDownHandler,
    onMouseUp: onMouseUpHandler,
    onMouseOver: onMouseOverHandler,
    onMouseOut: onMouseOutHandler,
    onTouchStart: onTouchStart,
    onTouchEnd: onTouchEnd
  }
})

test("Should display value", () => {
  renderReduxConsumer(<AnswerChoiceDisplay {...props} />)
  expect(screen.getByText("あ")).toBeInTheDocument()
})

test("Clicking the value should call the onClick event handler", () => {
  renderReduxConsumer(<AnswerChoiceDisplay {...props} />)
  fireEvent.click(screen.getByText("あ"))
  expect(onClickHandler).toHaveBeenCalled()
})

test("Mousing down the value should call the onMouseDown event handler", () => {
  renderReduxConsumer(<AnswerChoiceDisplay {...props} />)
  fireEvent.mouseDown(screen.getByText("あ"))
  expect(onMouseDownHandler).toHaveBeenCalledWith("あ")
})

test("Mousing up the value should call the onMouseUp event handler", () => {
  renderReduxConsumer(<AnswerChoiceDisplay {...props} />)
  fireEvent.mouseUp(screen.getByText("あ"))
  expect(onMouseUpHandler).toHaveBeenCalledWith("あ")
})

test("Mousing over the value should call the onMouseOver event handler", () => {
  renderReduxConsumer(<AnswerChoiceDisplay {...props} />)
  fireEvent.mouseOver(screen.getByText("あ"))
  expect(onMouseOverHandler).toHaveBeenCalledWith("あ")
})

test("Mousing out the value should call the onMouseOut event handler", () => {
  renderReduxConsumer(<AnswerChoiceDisplay {...props} />)
  fireEvent.mouseOut(screen.getByText("あ"))
  expect(onMouseOutHandler).toHaveBeenCalledWith("あ")
})

test("Touching down on the value should call the onTouchStart event handler", () => {
  renderReduxConsumer(<AnswerChoiceDisplay {...props} />)
  fireEvent.touchStart(screen.getByText("あ"))
  expect(onTouchStart).toHaveBeenCalledWith("あ")
})

test("Touching up on the value should call the onTouchEnd event handler", () => {
  renderReduxConsumer(<AnswerChoiceDisplay {...props} />)
  fireEvent.touchEnd(screen.getByText("あ"))
  expect(onTouchEnd).toHaveBeenCalledWith("あ")
})

test("Passing the index property when the display is not blurred should render the index", () => {
  props.index = 2
  props.blur = false
  renderReduxConsumer(<AnswerChoiceDisplay {...props} />)
  expect(screen.getByText("2")).toBeInTheDocument()
})

test("Passing the index property when the display is blurred should not show the index", () => {
  props.index = 2
  props.blur = true
  renderReduxConsumer(<AnswerChoiceDisplay {...props} />)
  expect(screen.queryByText("2")).toHaveProperty("style._values.visibility", "hidden")
})

test("Passing a container style prop should cause that class to be applied to the container", () => {
  props.style = { container: ["containerClass"] }
  const { container } = renderReduxConsumer(<AnswerChoiceDisplay {...props} />)
  expect(container.firstChild).toHaveClass("containerClass")
})

test("Not passing a container style prop should default to the containers default class", () => {
  const { container } = renderReduxConsumer(<AnswerChoiceDisplay {...props} />)
  expect(container.firstChild).toHaveClass("wrapper")
})

test("If not notifying incorrect, but is blurred, the character should have the 'blur' class", () => {
  props.blur = true
  renderReduxConsumer(<AnswerChoiceDisplay {...props} />)
  expect(screen.getByText("あ")).toHaveClass("blur")
})

test("If the onClick event handler is bound, the character should have the 'clickable' class", () => {
  renderReduxConsumer(<AnswerChoiceDisplay {...props} />)
  expect(screen.getByText("あ")).toHaveClass("clickable")
})

test("If the onClick event handler is unbound, the character should not have the 'clickable' class", () => {
  props.onClick = undefined
  renderReduxConsumer(<AnswerChoiceDisplay {...props} />)
  expect(screen.getByText("あ")).not.toHaveClass("clickable")
})
