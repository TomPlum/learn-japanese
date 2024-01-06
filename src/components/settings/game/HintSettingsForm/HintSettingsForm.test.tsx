import { act, fireEvent } from "@testing-library/react";
import HintSettingsForm  from "./HintSettingsForm"
import HintSettings, { HintSettingsBuilder } from "../../../../domain/session/settings/game/HintSettings"
import { getValueLastCalledWith } from "__test-utils__/Queries"
import React from "react"
import { render } from "__test-utils__"
import { SettingsFormHandle } from "../../../../components/settings/game/GameSettingsMenu"

const onChangeHandler = vi.fn()
const ref = React.createRef<SettingsFormHandle>()

const setup = () => {
  const component = render(<HintSettingsForm onChange={onChangeHandler} ref={ref} />)
  return {
    enable: component.getByTestId("enable-hints"),
    quantity: component.getByTestId("hint-quantity-slider"),
    infinite: component.getByTestId("enable-infinite-hints"),
    ...component
  }
}

test("Enabled should default to on", () => {
  setup()
  expect(getValueLastCalledWith<HintSettings>(onChangeHandler).enabled).toBe(true)
})

test("Clicking Enabled should disable hints", () => {
  const { enable } = setup()
  fireEvent.click(enable)
  expect(getValueLastCalledWith<HintSettings>(onChangeHandler).enabled).toBe(false)
})

test("Disabling hints should disable the quantity slider", () => {
  const { enable, quantity } = setup()
  fireEvent.click(enable)
  expect(quantity).toBeDisabled()
})

test("Disabling hints should disable the infinite switch", () => {
  const { enable, infinite } = setup()
  fireEvent.click(enable)
  expect(infinite).toBeDisabled()
})

test("Enabling infinite hints should disable the quantity slider", () => {
  const { infinite, quantity } = setup()
  fireEvent.click(infinite)
  expect(quantity).toBeDisabled()
})

test("Enabling infinite hints should set unlimited in the settings", () => {
  const { infinite } = setup()
  fireEvent.click(infinite)
  expect(getValueLastCalledWith<HintSettings>(onChangeHandler).unlimited).toBe(true)
})

test("Changing the quantity slider should update the hint quantity", () => {
  const { quantity } = setup()
  fireEvent.change(quantity, { target: { value: 8 } })
  expect(getValueLastCalledWith<HintSettings>(onChangeHandler).quantity).toBe(8)
})

test("Calling reset should reset the HintSettings to their defaults", async () => {
  const { enable } = setup()
  fireEvent.click(enable)
  act(() => ref?.current?.reset())
  expect(onChangeHandler).toHaveBeenLastCalledWith(
    new HintSettingsBuilder().isEnabled().withQuantity(3).build()
  )
})
