import { fireEvent, render } from "@testing-library/react"
import HintSettingsStep from "../../../../../components/layout/wizard/steps/HintSettingsStep"
import { HintSettingsBuilder } from "../../../../../domain/session/settings/game/HintSettings"

const onSelectHandler = jest.fn()

test("Should render the hint settings form", () => {
    const component = render(<HintSettingsStep onSelect={onSelectHandler} />)
    expect(component.getByTestId("hint-settings-form")).toBeInTheDocument()
})

test("Changing a value in the form should call the onSelect event handler with the settings", () => {
    const component = render(<HintSettingsStep onSelect={onSelectHandler} />)
    fireEvent.click(component.getByTestId("enable-hints"))
    expect(onSelectHandler).toHaveBeenLastCalledWith(new HintSettingsBuilder().isEnabled(false).withQuantity(3).build())
})
