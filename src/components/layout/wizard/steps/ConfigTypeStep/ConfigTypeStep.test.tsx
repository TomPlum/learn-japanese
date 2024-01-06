import { fireEvent, screen } from "@testing-library/react"
import ConfigTypeStep, { ConfigTypeStepProps }  from "./ConfigTypeStep"
import renderWithTranslation from "__test-utils__/renderWithTranslation"

const onSelectHandler = vi.fn()

let props: ConfigTypeStepProps

beforeEach(() => {
  props = {
    isCustom: false,
    onSelect: onSelectHandler
  }
})

const setup = () => {
  const component = renderWithTranslation(<ConfigTypeStep {...props} />)
  return {
    preset: component.getByText("Preset"),
    custom: component.getByText("Custom"),
    ...component
  }
}

test("Passing the custom prop as false should set the preset button as selected", () => {
  props.isCustom = false
  const { preset } = setup()
  const button = preset.parentElement
  expect(button).toHaveClass("selected")
})

test("Passing the custom prop as true should set the custom button as selected", () => {
  props.isCustom = true
  const { custom } = setup()
  const button = custom.parentElement
  expect(button).toHaveClass("selected")
})

test("Clicking the custom button should call the onSelect handler with true", () => {
  const { custom } = setup()
  fireEvent.click(custom)
  expect(onSelectHandler).toHaveBeenLastCalledWith(true)
})

test("Clicking the preset button should call the onSelect handler with false", () => {
  const { preset } = setup()
  fireEvent.click(preset)
  expect(onSelectHandler).toHaveBeenLastCalledWith(false)
})

test("Should render the preset description when preset is selected", () => {
  const { preset } = setup()
  fireEvent.click(preset)
  expect(
    screen.getByText("Choose from one of the preset game configurations for your chosen topic.")
  ).toBeInTheDocument()
})

test("Should render the custom description when custom is selected", () => {
  props.isCustom = true
  const { custom } = setup()
  fireEvent.click(custom)
  expect(
    screen.getByText("Configure any of the available settings to create a customised game mode.")
  ).toBeInTheDocument()
})
