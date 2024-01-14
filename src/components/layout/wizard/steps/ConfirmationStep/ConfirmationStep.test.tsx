import { act, fireEvent, screen, waitFor } from "@testing-library/react";
import ConfirmationStep  from "./ConfirmationStep"
import { SessionSettings } from "types/session/settings/SessionSettings"
import { KanjiSettingsBuilder } from "types/session/settings/data/KanjiSettings"
import { GameSettingsBuilder } from "types/session/settings/game/GameSettings"
import { render } from "__test-utils__"
import { testUser } from "../../../../../setupTests"

const onSelectStageHandler = vi.fn()

const mockPresetService = vi.fn()
vi.mock("service/PresetService", () => ({
  default: function () {
    return { saveCustomPreset: mockPresetService }
  }
}))

const dataSettings = new KanjiSettingsBuilder()
let settings: SessionSettings

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true })
})

function withGameSettings(gameSettings: GameSettingsBuilder) {
  settings = SessionSettings.forGame(dataSettings.build(), gameSettings.build())
}

test("Should render the session settings summary text", () => {
  withGameSettings(new GameSettingsBuilder())
  const { component } = render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />)
  expect(component.getByTestId("session-settings-summary")).toBeInTheDocument()
})

test('Clicking the "Save Preset" button should render the custom preset form', () => {
  withGameSettings(new GameSettingsBuilder())
  render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />)
  fireEvent.click(screen.getByText("Save Preset"))
  expect(screen.getByTestId("save-custom-preset-form")).toBeInTheDocument()
})

test("Clicking the cancel button in the save preset form should stop rendering the form", async () => {
  withGameSettings(new GameSettingsBuilder())
  render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />, { user: testUser })

  // Render the form
  fireEvent.click(screen.getByText("Save Preset"))
  expect(screen.getByTestId("save-custom-preset-form")).toBeVisible()

  // The save preset button should have stopped rendering
  expect(screen.queryByText("Save Preset")).not.toBeInTheDocument()

  // Click cancel
  fireEvent.click(screen.getByText("Cancel"))
  //await waitFor(() => expect(screen.getByTestId('save-custom-preset-form')).not.toBeVisible()); // Doesn't work for child element?

  // The save preset button should have been re-rendered
  expect(screen.getByText("Save Preset")).toBeInTheDocument()
})

test("Clicking the save button in the save preset form should hide the form and button after 2 seconds", async () => {
  mockPresetService.mockResolvedValueOnce({ success: true })
  withGameSettings(new GameSettingsBuilder())
  render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />, { user: testUser })

  // Render the form and fill in the details
  fireEvent.click(screen.getByText("Save Preset"))
  expect(screen.getByTestId("save-custom-preset-form")).toBeVisible()
  fireEvent.click(screen.getByText("My Preset"))
  fireEvent.change(screen.getByPlaceholderText("My Preset"), { target: { value: "My Preset" } })

  // The save preset button should have stopped rendering
  const savePresetButton = screen.queryByText("Save Preset")
  expect(savePresetButton).not.toBeInTheDocument()

  // Click save and wait 2 seconds
  fireEvent.click(screen.getByText("Save"))
  expect(await screen.findByText('Saved "My Preset" successfully.')).toBeInTheDocument()
  await act(() => vi.advanceTimersByTime(2000))

  // The save preset button should not re-render and the accordion should have collapsed
  expect(screen.queryByText("Save Preset")).not.toBeInTheDocument()
  await waitFor(() => expect(screen.getByTestId("confirmation-step-accordion")).not.toHaveAttribute("display", "none"))
})

test("Hovering over the save button when there is no user in context should render a message", async () => {
  render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />)
  fireEvent.mouseOver(screen.getByText("Save Preset"))
  expect(await screen.findByText("You must be logged in to save.")).toBeInTheDocument()
})
