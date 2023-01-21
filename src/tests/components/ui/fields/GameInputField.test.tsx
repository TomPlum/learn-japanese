import { fireEvent, render, screen } from "@testing-library/react"
import GameInputField, { GameInputFieldProps } from "../../../../components/ui/fields/GameInputField"
import PopOver from "../../../../components/ui/PopOver"

const popover = <PopOver title="Popover Title" text="Popover Text" />

let props: GameInputFieldProps

const onChangeHandler = jest.fn()

const setup = () => {
  const component = render(<GameInputField {...props} />)
  return {
    input: component.getByPlaceholderText("Test Input Field"),
    help: component.getByTestId("game-input-help"),
    ...component
  }
}

beforeEach(() => {
  props = {
    placeholder: "Test Input Field",
    helpPopover: popover,
    onChange: onChangeHandler
  }
})

test("Should render the help popover when hovering over the help icon", async () => {
  const { help } = setup()
  fireEvent.mouseOver(help)
  expect(await screen.findByText("Popover Title")).toBeInTheDocument()
  expect(await screen.findByText("Popover Text")).toBeInTheDocument()
})

test("Should render the help popover when clicking the help icon", async () => {
  const { help } = setup()
  fireEvent.click(help)
  expect(await screen.findByText("Popover Title")).toBeInTheDocument()
  expect(await screen.findByText("Popover Text")).toBeInTheDocument()
})

test("Should disable the input field when the disabled property is passed as true", () => {
  props.disabled = true
  const { input } = setup()
  expect(input).toBeDisabled()
})

test("Should set the input field value to that of the passed value property", () => {
  props.value = "test value"
  const { input } = setup()
  expect(input).toHaveValue("test value")
})

test("Should call the onChange event handler when the underlying input field triggers one", () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: "new text" } })
  expect(onChangeHandler).toHaveBeenCalledTimes(1)
})

test("Should auto-focus the input field on mount", () => {
  const { input } = setup()
  expect(input).toHaveFocus()
})
