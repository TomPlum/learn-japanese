import { fireEvent, render, screen } from "@testing-library/react"
import ToggleSwitch, { ToggleSwitchProps }  from "./ToggleSwitch"

const onChangeHandler = vi.fn()

let props: ToggleSwitchProps

beforeEach(() => {
  props = {
    enabled: true,
    disabled: false,
    className: "mySwitch",
    label: "test-switch",
    onChange: onChangeHandler
  }
})

const setup = () => {
  const component = render(<ToggleSwitch {...props} data-testid="switch" />)
  return {
    toggle: component.getByTestId("switch"),
    ...component
  }
}

test("Passing enabled as false should set the switch to the off position", () => {
  props.enabled = false
  const { toggle } = setup()
  expect(toggle).not.toBeChecked()
})

test("Passing a className should pass it to the underlying form element", () => {
  props.className = "mySwitchClass"
  const { container } = setup()
  expect(container.firstChild).toHaveClass("mySwitchClass")
})

test("Passing a label should render it alongside the toggle", () => {
  props.label = "Test Switch"
  setup()
  expect(screen.getByText("Test Switch")).toBeInTheDocument()
})

test("Toggling the switch should call the onChange event handler", () => {
  const { toggle } = setup()
  fireEvent.click(toggle)
  expect(onChangeHandler).toHaveBeenCalled()
})

test("Passing disabled as true should disable the switch", () => {
  props.disabled = true
  const { toggle } = setup()
  expect(toggle).toBeDisabled()
})
