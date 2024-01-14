import { fireEvent, screen } from "@testing-library/react"
import FavouritesCard from "./FavouritesCard"
import { render } from "__test-utils__"
import { server } from "__test-utils__/msw.ts"
import {
  useGetPresetFavouritesHandlers,
  useGetPresetFavouritesHandlersError,
  useGetPresetFavouritesHandlersLearnOnly,
  useGetPresetFavouritesHandlersNoPresets,
  useGetPresetFavouritesHandlersPlayOnly
} from "api/hooks/useGetPresetFavourites"

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

test("It should render preset favourite buttons for each of the presets from the service", async () => {
  server.use(...useGetPresetFavouritesHandlers)
  const { component } = render(<FavouritesCard />)
  expect(await component.findByText("Test Play")).toBeInTheDocument()
  expect(component.getByText("Test Learn")).toBeInTheDocument()
})

test("It should render an error if the service is call is rejected", async () => {
  server.use(...useGetPresetFavouritesHandlersError)
  const { component } = render(<FavouritesCard />)
  expect(await component.findByText("Failed to retrieve.")).toBeInTheDocument()
})

test("Clicking a favourite button should render the confirmation modal", async () => {
  server.use(...useGetPresetFavouritesHandlersPlayOnly)
  const { component } = render(<FavouritesCard />)
  expect(await component.findByText("Test Play")).toBeInTheDocument()

  fireEvent.mouseEnter(component.getByTestId("favourite-button-1").firstChild!)
  expect(await component.findByText("Start Play")).toBeInTheDocument()
  fireEvent.click(component.getByTestId("favourite-button-1").firstChild!)

  expect(await screen.findByTestId("launch-preset-confirmation")).toBeInTheDocument()
})

test("Clicking the close button in the confirm modal should stop rendering it", async () => {
  server.use(...useGetPresetFavouritesHandlersLearnOnly)
  const { component } = render(<FavouritesCard />)
  expect(await component.findByText("Test Learn")).toBeInTheDocument()

  fireEvent.mouseEnter(component.getByTestId("favourite-button-2").firstChild!)
  expect(await component.findByText("Start Learn")).toBeInTheDocument()
  fireEvent.click(component.getByTestId("favourite-button-2").firstChild!)

  const confirmationModal = await screen.findByTestId("launch-preset-confirmation")
  expect(confirmationModal).toBeInTheDocument()

  fireEvent.click(screen.getByTitle("Close"))
  expect(screen.queryByTestId("launch-preset-confirmation")).not.toBeInTheDocument()
})

test("When there are no favourites it should render the add button", async () => {
  server.use(...useGetPresetFavouritesHandlersNoPresets)
  const { component } = render(<FavouritesCard />)
  expect(await component.findByText("You can track your favourite presets here")).toBeInTheDocument()
})

test("Clicking the empty state add button should render the edit favourites modal", async () => {
  server.use(...useGetPresetFavouritesHandlersNoPresets)
  mockGetAllPresets.mockResolvedValueOnce({})
  const { component } = render(<FavouritesCard />)

  fireEvent.click(await component.findByText("You can track your favourite presets here"))
  expect(await screen.findByTestId("edit-favourites")).toBeInTheDocument()
})

test("Clicking the edit button from the settings menu should render the edit favourites modal", async () => {
  server.use(...useGetPresetFavouritesHandlersPlayOnly)
  mockGetAllPresets.mockResolvedValueOnce({})
  const { component } = render(<FavouritesCard />)

  fireEvent.click(await component.findByTestId("dashboard-settings-menu-button"))
  fireEvent.click(await component.findByText("Edit"))

  expect(await screen.findByTestId("edit-favourites")).toBeInTheDocument()
})

test("Saving after updating favourites should reload the data", async () => {
  // Return a singular learn and a play preset
  server.use(...useGetPresetFavouritesHandlers)
  mockGetAllPresets.mockResolvedValueOnce({})
  mockUpdateFavourites.mockResolvedValueOnce({ success: true })
  const { component } = render(<FavouritesCard />)

  // Should render both favourites
  expect(await component.findByTestId("favourite-button-1")).toBeInTheDocument()
  expect(await component.findByTestId("favourite-button-2")).toBeInTheDocument()

  // Clicking edit should render the modal
  fireEvent.click(await component.findByTestId("dashboard-settings-menu-button"))
  fireEvent.click(await component.findByText("Edit"))
  expect(await screen.findByTestId("edit-favourites")).toBeInTheDocument()

  // Change something (Remove the test learn preset from favourites)
  fireEvent.click(await screen.findByTestId("existing-favourite-button-2"))
  server.resetHandlers(...useGetPresetFavouritesHandlersPlayOnly)
  fireEvent.click(screen.getByText("Save"))

  // Should render only the play favourite now
  expect(await component.findByTestId("favourite-button-1")).toBeInTheDocument()
  expect(component.queryByTestId("favourite-button-2")).not.toBeInTheDocument()

  // Should stop rendering the edit modal
  expect(screen.queryByTestId("edit-favourites")).not.toBeInTheDocument()
})
