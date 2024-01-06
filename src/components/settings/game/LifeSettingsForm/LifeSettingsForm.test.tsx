import { fireEvent } from "@testing-library/react"
import LifeSettingsForm  from "./LifeSettingsForm"
import { LifeSettingsBuilder } from "../../../../domain/session/settings/game/LifeSettings"
import { render } from "__test-utils__"

const onChangeHandler = vi.fn()

const setup = () => {
  const component = render(<LifeSettingsForm onChange={onChangeHandler} />)
  return {
    enable: component.getByTestId("enable-lives"),
    lives: component.getByTestId("life-quantity-slider"),
    ...component
  }
}

test("Lives should default to off", () => {
  setup()
  expect(onChangeHandler).toHaveBeenLastCalledWith(new LifeSettingsBuilder().isEnabled(false).build())
})

test("Selecting 'enable' should set lives to enabled in the settings", () => {
  const { enable } = setup()
  fireEvent.click(enable)
  expect(onChangeHandler).toHaveBeenLastCalledWith(new LifeSettingsBuilder().isEnabled().withQuantity(0).build())
})

test("Changing the lives selector should call the onChange event handler", () => {
  const { enable, lives } = setup()
  fireEvent.click(enable)
  fireEvent.change(lives, { target: { value: 3 } })
  expect(onChangeHandler).toHaveBeenLastCalledWith(new LifeSettingsBuilder().isEnabled().withQuantity(3).build())
})
