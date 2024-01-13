import { fireEvent, screen } from "@testing-library/react"
import PlayCard  from "./PlayCard"
import { KanaSettingsBuilder } from "../../../domain/session/settings/data/KanaSettings"
import { GameSettingsBuilder } from "../../../domain/session/settings/game/GameSettings"
import LearnSettings from "../../../domain/session/settings/LearnSettings"
import PresetBuilder from "../../../domain/session/PresetBuilder"
import { render } from "__test-utils__"

const playPreset = new PresetBuilder()
  .withID(1)
  .withDisplayName("Test Play")
  .withColour("#ffffff")
  .withIcon("FaAtom")
  .withDataSettings(new KanaSettingsBuilder().build())
  .withGameSettings(new GameSettingsBuilder().build())
  .withTopicName("Topic")
  .withFavouriteID(3)
  .build()

const learnPreset = new PresetBuilder()
  .withID(2)
  .withDisplayName("Test Learn")
  .withColour("#fdb40e")
  .withIcon("あ")
  .withDataSettings(new KanaSettingsBuilder().build())
  .withLearnSettings(new LearnSettings())
  .withTopicName("Topic")
  .withFavouriteID(4)
  .build()

test("Clicking the start button should launch the wizard", async () => {
  const { component } = render(<PlayCard />)
  fireEvent.click(component.getByTestId("launch-wizard"))
  expect(await screen.findByTestId("start-session-wizard")).toBeInTheDocument()
})

test("Closing the wizard should stop rendering it", async () => {
  // Launch Wizard
  const { component } = render(<PlayCard />)
  fireEvent.click(component.getByTestId("launch-wizard"))
  expect(await component.findByTestId("start-session-wizard")).toBeInTheDocument()

  // Quit & Confirm
  fireEvent.click(screen.getByTitle("Close"))
  fireEvent.click(await screen.findByText("Yes"))

  // Should stop rendering wizard
  expect(component.queryByTestId("start-session-wizard")).not.toBeInTheDocument()
})

test("Should render the start last play session with the correct title if the context is empty", () => {
  const { component } = render(<PlayCard />)
  expect(component.getByTitle("You've not played anything recently.")).toBeInTheDocument()
})

test("Should render the start last learn session with the correct title if there is no learn preset in context", () => {
  const { component } = render(<PlayCard />)
  expect(component.getByTitle("You've not practiced anything recently.")).toBeInTheDocument()
})

test("Should render the launch preset dialog with the last play preset if it is present in local storage", async () => {
  const { component } = render(
   <PlayCard />,
    { sessionSettings: { lastPlayPreset: playPreset }}
  )

  fireEvent.click(component.getByTitle("Test Play"))

  expect(await screen.findByTestId("launch-preset-confirmation")).toBeInTheDocument()
  expect(screen.getByText("Test Play")).toBeInTheDocument()
})

test("Should render the launch preset dialog with the last learn preset if one is present in local storage", async () => {
  // Start with a learn session already in context
  const { component } = render(
    <PlayCard />,
    { sessionSettings: { lastLearnPreset: learnPreset } }
  )

  // Click the last learn session button
  fireEvent.click(component.getByTitle("Test Learn"))

  // Should render modal with the learn preset
  expect(await screen.findByTestId("launch-preset-confirmation")).toBeInTheDocument()
  expect(screen.getByText("Test Learn")).toBeInTheDocument()

  // Clicking close should dismiss
  fireEvent.click(screen.getByTitle("Close"))
  expect(screen.queryByTestId("launch-preset-confirmation")).not.toBeInTheDocument()
})

test("Clicking the start last play session button when there are no setting should not launch the modal", async () => {
  const { component } = render(<PlayCard />)
  fireEvent.click(component.getByTitle("You've not played anything recently."))
  expect(await screen.queryByTestId("launch-preset-confirmation")).not.toBeInTheDocument()
})

test("Clicking the start last learn session button when there are no setting should not launch the modal", async () => {
  const { component } = render(<PlayCard />)
  fireEvent.click(component.getByTitle("You've not practiced anything recently."))
  expect(await screen.queryByTestId("launch-preset-confirmation")).not.toBeInTheDocument()
})
