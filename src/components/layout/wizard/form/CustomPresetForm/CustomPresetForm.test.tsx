import { fireEvent, screen } from "@testing-library/react"
import CustomPresetForm, { CustomPresetFormProps }  from "./CustomPresetForm"
import { SessionSettings } from "../../../../../domain/session/settings/SessionSettings"
import { GameSettingsBuilder } from "../../../../../domain/session/settings/game/GameSettings"
import KanjiSettings from "../../../../../domain/session/settings/data/KanjiSettings"
import renderWithTranslation from "tests/renderWithTranslation"

const mockPresetService = vi.fn()
vi.mock("../../../../../service/PresetService", () => ({
  default: function () {
    return { saveCustomPreset: mockPresetService }
  }
}))

const settings = SessionSettings.forGame(new KanjiSettings([], []), new GameSettingsBuilder().build())
const onSuccessHandler = vi.fn()
const onCancelHandler = vi.fn()

let props: CustomPresetFormProps

const setup = () => {
  const component = renderWithTranslation(<CustomPresetForm {...props} />)
  return {
    icon: component.getByTestId("icon-picker-selected"),
    name: component.getByText("My Preset"),
    save: component.getByText("Save").parentElement!,
    cancel: component.getByText("Cancel")
  }
}

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true })

  props = {
    settings: settings,
    onSuccess: onSuccessHandler,
    onCancel: onCancelHandler
  }
})

test("Save button should be disabled when the preset name field is empty", () => {
  const { save } = setup()
  expect(save).toBeDisabled()
})

test("Blurring the input when editing the name should finish editing", () => {
  const { name } = setup()

  // Edit
  fireEvent.click(name)
  const input = screen.getByPlaceholderText("My Preset")
  fireEvent.change(input, { target: { value: "My Custom Preset" } })

  // Blur
  fireEvent.blur(input)
  expect(screen.getByText("My Custom Preset")).toBeInTheDocument()
})

test("Save button should be enabled when the preset name field is not empty", () => {
  const { name, save } = setup()
  fireEvent.click(name)
  fireEvent.change(screen.getByPlaceholderText("My Preset"), { target: { value: "My Custom Preset" } })
  expect(save).not.toBeDisabled()
})

test("Clicking save when the form is valid should save the preset", async () => {
  // Assume the service call will be successful
  mockPresetService.mockResolvedValueOnce({ success: true })
  const { name, icon, save } = setup()

  // Open the icon picker and select an icon
  fireEvent.click(icon)
  fireEvent.change(await screen.findByTestId("icon-picker-search"), { target: { value: "atom" } })
  fireEvent.click(screen.getByTitle("Atom"))

  // Type in the preset name
  fireEvent.click(name)
  fireEvent.change(screen.getByPlaceholderText("My Preset"), { target: { value: "My Preset" } })

  // Click save
  fireEvent.click(save)

  // Should call the service with correct args and then display success message
  expect(mockPresetService).toHaveBeenLastCalledWith({ name: "My Preset", icon: "FaAtom", colour: "#FFFFFF" }, settings)
  expect(await screen.findByText('Saved "My Preset" successfully.')).toBeInTheDocument()

  // 2 seconds after success, the onSuccess event handler should be called
  expect(onSuccessHandler).not.toHaveBeenCalled()
  vi.advanceTimersByTime(2000)
  expect(onSuccessHandler).toHaveBeenCalled()
})

test("Should display the error message if the service call fails and returns one", async () => {
  // Assume the service call will be un-successful
  mockPresetService.mockResolvedValueOnce({ success: false, error: "Something went wrong." })
  const { name, save } = setup()

  // Enter a preset name and click save
  fireEvent.click(name)
  fireEvent.change(screen.getByPlaceholderText("My Preset"), { target: { value: "My Preset" } })
  fireEvent.click(save)

  // Should render error message alert
  expect(await screen.findByText("Something went wrong.")).toBeInTheDocument()
})

test("Should display the a default error message if the service call fails, but doesnt return one", async () => {
  // Assume the service call will be un-successful
  mockPresetService.mockResolvedValueOnce({ success: false, error: undefined })
  const { name, save } = setup()

  // Enter a preset name and click save
  fireEvent.click(name)
  fireEvent.change(screen.getByPlaceholderText("My Preset"), { target: { value: "My Preset" } })
  fireEvent.click(save)

  // Should render error message alert
  expect(await screen.findByText("Failed to save preset.")).toBeInTheDocument()
})

test("Should display the a default error message if the service promise is rejected", async () => {
  // Assume the service call will be un-successful
  mockPresetService.mockRejectedValueOnce({})
  const { name, save } = setup()

  // Enter a preset name and click save
  fireEvent.click(name)
  fireEvent.change(screen.getByPlaceholderText("My Preset"), { target: { value: "My Preset" } })
  fireEvent.click(save)

  // Should render error message alert
  expect(await screen.findByText("An error occurred while saving your preset.")).toBeInTheDocument()
})
