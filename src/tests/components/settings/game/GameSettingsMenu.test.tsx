import { fireEvent, render } from "@testing-library/react"
import GameSettingsMenu from "../../../../components/settings/game/GameSettingsMenu"

const onQuitHandler = vi.fn()
const onResetHandler = vi.fn()
const onSelectHandler = vi.fn()

const setup = () => {
  const component = render(
    <GameSettingsMenu onQuit={onQuitHandler} onReset={onResetHandler} onSelect={onSelectHandler} />
  )

  return {
    back: component.getByText("Back"),
    reset: component.getByText("Reset"),
    confirm: component.getByText("Confirm"),
    ...component
  }
}

test("Clicking the back button should call the onBack event handler", () => {
  const { back } = setup()
  fireEvent.click(back)
  expect(onQuitHandler).toHaveBeenCalled()
})

test("Clicking the reset button should call the reset event handler", () => {
  const { reset } = setup()
  fireEvent.click(reset)
  expect(onResetHandler).toHaveBeenCalled()
})
