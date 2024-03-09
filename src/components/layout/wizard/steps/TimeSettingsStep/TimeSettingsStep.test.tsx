import { fireEvent, render } from "@testing-library/react"
import TimeSettingsStep  from "./TimeSettingsStep"
import { TimeSettingsBuilder } from "types/session/settings/game/TimeSettings"

const onSelectHandler = vi.fn()

test("Should render the time settings form", () => {
  const component = render(<TimeSettingsStep onSelect={onSelectHandler} />)
  expect(component.getByTestId("time-settings-form")).toBeInTheDocument()
})

test("Changing a value in the form should call the onSelect event handler with the settings", () => {
  const component = render(<TimeSettingsStep onSelect={onSelectHandler} />)
  fireEvent.click(component.getByTestId("Timed"))
  expect(onSelectHandler).toHaveBeenLastCalledWith(
    new TimeSettingsBuilder().isTimed(false).isCountDown(false).withSecondsPerQuestion(10).build()
  )
})
