import { KanaSettingsBuilder } from "../../../domain/session/settings/data/KanaSettings"
import { GameSettingsBuilder } from "../../../domain/session/settings/game/GameSettings"
import LearnSettings from "../../../domain/session/settings/LearnSettings"
import EditFavouritesModal  from "./EditFavouritesModal"
import { fireEvent, screen, waitFor } from "@testing-library/react"
import PresetBuilder from "../../../domain/session/PresetBuilder"
import { render } from "__test-utils__"

const scrollIntoViewMock = vi.fn()
window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock

const onSuccessHandler = vi.fn()
const onDismissHandler = vi.fn()

const eventHandlers = {
  onSuccess: onSuccessHandler,
  onDismiss: onDismissHandler
}

const mockGetAllPresets = vi.fn()
const mockUpdateFavourites = vi.fn()
vi.mock("service/PresetService", () => ({
  default: function () {
    return {
      getAllPresets: mockGetAllPresets,
      updateFavourites: mockUpdateFavourites
    }
  }
}))

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

test("Should render existing favourites if the service responds successfully", async () => {
  mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] })
  const component = render(<EditFavouritesModal favourites={[learnPreset]} {...eventHandlers} />)

  // Should render this as an existing favourite as it's passed in as one
  expect(await component.findByTestId("existing-favourite-button-4")).toBeInTheDocument()

  // This one is not passed in and should not.
  expect(await component.queryByTestId("existing-favourite-button-3")).not.toBeInTheDocument()
})

test("Should render an error alert if the service returns an error", async () => {
  mockGetAllPresets.mockResolvedValueOnce({ error: "Failed to retrieve presets" })
  const component = render(<EditFavouritesModal favourites={[learnPreset]} {...eventHandlers} />)
  expect(await component.findByText("Failed to retrieve presets"))
})

test("Should render an error alert if the service promise is rejected", async () => {
  mockGetAllPresets.mockRejectedValueOnce({ error: "A network error occurred." })
  const component = render(<EditFavouritesModal favourites={[learnPreset]} {...eventHandlers} />)
  expect(await component.findByText("A network error occurred."))
})

test("Should call the onDismiss event handler when clicking close after making no changes", async () => {
  mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [] })
  const component = render(<EditFavouritesModal favourites={[learnPreset]} {...eventHandlers} />)
  expect(await component.findByTestId("existing-favourite-button-4")).toBeInTheDocument()

  fireEvent.click(component.getByTitle("Close"))

  expect(onDismissHandler).toHaveBeenCalled()
})

test("Should render a confirmation modal if the user has marked an existing favourite for deletion", async () => {
  mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [] })
  const component = render(<EditFavouritesModal favourites={[learnPreset]} {...eventHandlers} />)

  // Mark the existing learn favourite for deletion
  const learnFavouriteButton = await component.findByTestId("existing-favourite-button-4")
  fireEvent.click(learnFavouriteButton.children[0])

  // Clicking close should now render a confirmation modal
  fireEvent.click(component.getByTitle("Close"))
  expect(await screen.findByText("Are you sure you want to quit?")).toBeInTheDocument()
  expect(await screen.findByText("You have unsaved changes to your favourites.")).toBeInTheDocument()

  // Clicking 'Yes' should call the onDismiss event handler but not update the presets
  fireEvent.click(screen.getByText("Yes"))
  expect(onDismissHandler).toHaveBeenCalled()
  expect(mockUpdateFavourites).not.toHaveBeenCalled()
})

test("Should stop rendering the confirmation modal and not update favourites when clicking 'No'", async () => {
  mockGetAllPresets.mockResolvedValueOnce({ learn: [], play: [playPreset] })
  const component = render(<EditFavouritesModal favourites={[playPreset]} {...eventHandlers} />)

  // Mark the existing play favourite for deletion
  const playFavouriteButton = await component.findByTestId("existing-favourite-button-3")
  fireEvent.click(playFavouriteButton.children[0])

  // Clicking close should now render a confirmation modal
  fireEvent.click(component.getByTitle("Close"))
  expect(await screen.findByTestId("confirm-modal")).toBeInTheDocument()

  // Clicking 'No' should not call the onDismiss handler, nor update the presets
  fireEvent.click(screen.getByText("No"))
  expect(onDismissHandler).not.toHaveBeenCalled()
  expect(mockUpdateFavourites).not.toHaveBeenCalled()
})

test("Should call the update favourites service function and onSuccess callback when saving changes", async () => {
  // Return both the play and learn preset. The play is already a favourite.
  mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] })
  const component = render(<EditFavouritesModal favourites={[playPreset]} {...eventHandlers} />)

  // Mark the existing play favourite for deletion
  const playFavouriteButton = await component.findByTestId("existing-favourite-button-3")
  fireEvent.click(playFavouriteButton.children[0])

  // Mark the learn preset for addition
  const learnFavouriteButton = await component.findByTestId("edit-favourite-button-2")
  fireEvent.click(learnFavouriteButton.children[0])

  // Click the save button and ensure the service call succeeds
  mockUpdateFavourites.mockResolvedValueOnce({ success: true })
  expect(onSuccessHandler).not.toHaveBeenCalled()
  fireEvent.click(component.getByText("Save"))

  // Should update the favourites and call the onSuccess event handler
  await waitFor(() => {
    expect(mockUpdateFavourites).toHaveBeenCalledWith([2], [3])
    expect(onSuccessHandler).toHaveBeenCalled()
  })
})

test("Should deselect existing and new favourites when clicking them once selected", async () => {
  // Return both the play and learn preset. The play is already a favourite.
  mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] })
  const component = render(<EditFavouritesModal favourites={[playPreset]} {...eventHandlers} />)

  // Mark the existing play favourite for deletion
  const playFavouriteButton = await component.findByTestId("existing-favourite-button-3")
  fireEvent.click(playFavouriteButton.children[0])

  // Deselect the existing play favourite so it's not deleted
  const selectedPlayFavouriteButton = await component.findByTestId("existing-favourite-button-3")
  fireEvent.click(selectedPlayFavouriteButton.children[0])

  // Mark the learn preset for addition
  const learnFavouriteButton = await component.findByTestId("edit-favourite-button-2")
  fireEvent.click(learnFavouriteButton.children[0])

  // Deselect the learn preset so it's not added
  const selectedLearnFavouriteButton = await component.findByTestId("edit-favourite-button-2")
  fireEvent.click(selectedLearnFavouriteButton.children[0])

  // Click the save button and ensure the service call succeeds
  mockUpdateFavourites.mockResolvedValueOnce({ success: true })
  expect(onSuccessHandler).not.toHaveBeenCalled()
  fireEvent.click(component.getByText("Save"))

  // Should update the favourites and call the onSuccess event handler
  await waitFor(() => {
    expect(mockUpdateFavourites).toHaveBeenCalledWith([], [])
    expect(onSuccessHandler).toHaveBeenCalled()
  })
})

test("Should toggle available play presets when clicking the filter play presets button", async () => {
  // Return both the play and learn preset. The learn is already a favourite.
  mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] })
  const component = render(<EditFavouritesModal favourites={[learnPreset]} {...eventHandlers} />)

  // It should start by rendering the available play preset and the existing learn
  expect(await component.findByTestId("edit-favourite-button-1")).toBeInTheDocument()
  expect(await component.findByTestId("existing-favourite-button-4")).toBeInTheDocument()

  // Click the hide play presets button
  fireEvent.click(component.getByTitle("Hide Play"))

  // Should hide only the available play preset
  expect(await component.queryByTestId("edit-favourite-button-1")).not.toBeInTheDocument()
  expect(await component.findByTestId("existing-favourite-button-4")).toBeInTheDocument()

  // Click the show play presets button
  fireEvent.click(component.getByTitle("Show Play"))

  // Should show the available play preset again
  expect(await component.queryByTestId("edit-favourite-button-1")).toBeInTheDocument()
  expect(await component.findByTestId("existing-favourite-button-4")).toBeInTheDocument()
})

test("Should toggle available learn presets when clicking the filter learn presets button", async () => {
  // Return both the play and learn preset. The play is already a favourite.
  mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] })
  const component = render(<EditFavouritesModal favourites={[playPreset]} {...eventHandlers} />)

  // It should start by rendering the available learn preset and the existing play
  expect(await component.findByTestId("edit-favourite-button-2")).toBeInTheDocument()
  expect(await component.findByTestId("existing-favourite-button-3")).toBeInTheDocument()

  // Click the hide learn presets button
  fireEvent.click(component.getByTitle("Hide Learn"))

  // Should hide only the available learn preset
  expect(await component.queryByTestId("edit-favourite-button-2")).not.toBeInTheDocument()
  expect(await component.findByTestId("existing-favourite-button-3")).toBeInTheDocument()

  // Click the show learn presets button
  fireEvent.click(component.getByTitle("Show Learn"))

  // Should show the available learn preset again
  expect(await component.queryByTestId("edit-favourite-button-2")).toBeInTheDocument()
  expect(await component.findByTestId("existing-favourite-button-3")).toBeInTheDocument()
})

test("Should render the error if the update favourites service function fails when saving changes", async () => {
  // Return both the play and learn preset. The play is already a favourite.
  mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] })
  const component = render(<EditFavouritesModal favourites={[playPreset]} {...eventHandlers} />)
  await waitFor(() => expect(component.getByText("Save")).not.toBeDisabled())

  // Mark the existing play favourite for deletion
  const playFavouriteButton = await component.findByTestId("existing-favourite-button-3")
  fireEvent.click(playFavouriteButton.children[0])

  // Click the save button and ensure the service call fails. Should stop rendering save text
  mockUpdateFavourites.mockResolvedValueOnce({ success: false, error: "Failed to update favourites." })
  fireEvent.click(component.getByText("Save"))
  expect(component.queryByText("Save")).not.toBeInTheDocument()

  // Should render the error alert, try to update the favourites, but NOT call the onSuccess event handler
  expect(await component.findByText("Failed to update favourites.")).toBeInTheDocument()
  expect(await mockUpdateFavourites).toHaveBeenCalledWith([], [3])
  expect(await component.findByText("Save")).toBeInTheDocument()
  expect(onSuccessHandler).not.toHaveBeenCalled()
})

test("Should render a help button in the existing favourites section when there are none", async () => {
  mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] })
  const component = render(<EditFavouritesModal favourites={[]} {...eventHandlers} />)

  const button = await component.findByText("You can select favourites below")
  expect(button).toBeInTheDocument()

  fireEvent.click(button)
  expect(scrollIntoViewMock).toHaveBeenCalled()
})
