import { fireEvent, screen, waitFor } from "@testing-library/react"
import Preferences from "../../../../components/user/profile/Preferences"
import { testUser } from "../../../../setupTests"
import renderTranslatedReduxConsumer from "../../../renderTranslatedReduxConsumer"

//Mock User Service
const mockUserService = jest.fn()
jest.mock("../../../../service/UserService", () => {
  return function () {
    return { updatePreferences: mockUserService }
  }
})

// Mock Font Service
const mockFontService = jest.fn()
jest.mock("../../../../service/FontService", () => {
  return function () {
    return { getFonts: mockFontService }
  }
})

const setup = () => {
  const component = renderTranslatedReduxConsumer(<Preferences user={testUser} />)
  return {
    font: component.getByTestId("font"),
    theme: component.getByText("Dark"),
    language: component.getByText("English"),
    highScores: component.getByText("Auto-Submit"),
    appMode: component.getByText("Play"),
    cardsPerDay: component.getByText("10"),
    confidenceMenuStyle: component.getByText("Numbers 1 - 6"),
    ...component
  }
}

beforeEach(() => {
  mockFontService.mockResolvedValueOnce([
    { slug: "default", name: "" },
    { slug: "handwriting", name: "SanafonMugi Handwriting" },
    { slug: "gothic", name: "K Gothic" },
    { slug: "mincho", name: "Appli Mincho" }
  ])
})

test("Should render the save button if the default font preference changes", async () => {
  //Should not render the button on mount
  const { font } = setup()
  expect(screen.queryByTitle("Save")).not.toBeInTheDocument()

  //Change the default font preference
  fireEvent.click(font)
  expect(await screen.findByText("Mincho")).toBeInTheDocument()
  fireEvent.click(screen.getByText("Mincho"))

  //It should render the save button
  expect(screen.getByTitle("Save")).toBeInTheDocument()
})

test("Should render the save button if the default theme changes", async () => {
  //Should not render the button on mount
  const { theme } = setup()
  expect(screen.queryByTitle("Save")).not.toBeInTheDocument()

  //Change the default theme preference
  fireEvent.click(theme)
  expect(await screen.findByText("Light Mode")).toBeInTheDocument()
  fireEvent.click(screen.getByText("Light Mode"))

  //It should render the save button
  expect(screen.getByTitle("Save")).toBeInTheDocument()
})

test("Should render the save button if the default language changes", async () => {
  //Should not render the button on mount
  const { language } = setup()
  expect(screen.queryByTitle("Save")).not.toBeInTheDocument()

  //Change the default language preference
  fireEvent.click(language)
  expect(await screen.findByText("日本語")).toBeInTheDocument()
  fireEvent.click(screen.getByText("日本語"))

  //It should render the save button
  expect(screen.getByTitle("Save")).toBeInTheDocument()
})

test("Should render the save button if the default app mode changes", async () => {
  //Should not render the button on mount
  const { appMode } = setup()
  expect(screen.queryByTitle("Save")).not.toBeInTheDocument()

  //Change the default app mode preference
  fireEvent.click(appMode)
  expect(await screen.findByText("Learn")).toBeInTheDocument()
  fireEvent.click(screen.getByText("Learn"))

  //It should render the save button
  expect(screen.getByTitle("Save")).toBeInTheDocument()
})

test("Should render the save button if the default high-scores changes", async () => {
  //Should not render the button on mount
  const { highScores } = setup()
  expect(screen.queryByTitle("Save")).not.toBeInTheDocument()

  //Change the default high-scores preference
  fireEvent.click(highScores)
  expect(await screen.findByText("Never Submit")).toBeInTheDocument()
  fireEvent.click(screen.getByText("Never Submit"))

  //It should render the save button
  expect(screen.getByTitle("Save")).toBeInTheDocument()
})

test("Should render the save button if the default cards per-day changes", async () => {
  //Should not render the button on mount
  const { cardsPerDay } = setup()
  expect(screen.queryByTitle("Save")).not.toBeInTheDocument()

  //Change the default cards per day preference
  fireEvent.click(cardsPerDay)
  expect(await screen.findByText("5")).toBeInTheDocument()
  fireEvent.click(screen.getByText("5"))

  //It should render the save button
  expect(screen.getByTitle("Save")).toBeInTheDocument()
})

test("Should render the save button if the default confidence menu style changes", async () => {
  //Should not render the button on mount
  const { confidenceMenuStyle } = setup()
  expect(screen.queryByTitle("Save")).not.toBeInTheDocument()

  //Change the default confidence menu style preference
  fireEvent.click(confidenceMenuStyle)
  expect(await screen.findByText("Emoji Faces")).toBeInTheDocument()
  fireEvent.click(screen.getByText("Emoji Faces"))

  //It should render the save button
  expect(screen.getByTitle("Save")).toBeInTheDocument()
})

test("Clicking the save button should remove it after the save is complete", async () => {
  //Should not render the button on mount
  mockUserService.mockResolvedValueOnce({ success: true })
  const { highScores } = setup()
  expect(screen.queryByTitle("Save")).not.toBeInTheDocument()

  //Change the default high-scores preference
  fireEvent.click(highScores)
  expect(await screen.findByText("Never Submit")).toBeInTheDocument()
  fireEvent.click(screen.getByText("Never Submit"))

  //Click save
  fireEvent.click(screen.getByTitle("Save"))

  //It should stop rendering it
  await waitFor(() => expect(screen.queryByTitle("Save")).not.toBeInTheDocument())
})

test("Clicking the save button should call the user service with the updated preferences", async () => {
  mockUserService.mockResolvedValueOnce({ success: true })
  const { font, theme, language, highScores, appMode, cardsPerDay, confidenceMenuStyle } = setup()

  //Change the font
  fireEvent.click(font)
  expect(await screen.findByText("Mincho")).toBeInTheDocument()
  fireEvent.click(screen.getByText("Mincho"))

  //Change the theme
  fireEvent.click(theme)
  fireEvent.click(screen.getByText("Light Mode"))

  //Change the language
  fireEvent.click(language)
  fireEvent.click(screen.getByText("日本語"))

  //Change the high-scores
  fireEvent.click(highScores)
  fireEvent.click(screen.getByText("Never Submit"))

  //Change the default app mode
  fireEvent.click(appMode)
  fireEvent.click(screen.getByText("Learn"))

  //Change the cards per day
  fireEvent.click(cardsPerDay)
  fireEvent.click(screen.getByText("20"))

  //Change the confidence menu style
  fireEvent.click(confidenceMenuStyle)
  fireEvent.click(screen.getByText("Emoji Faces"))

  //Save the changes
  fireEvent.click(screen.getByTitle("Save"))

  await waitFor(() => {
    expect(mockUserService).toHaveBeenCalledWith([])
  })
})

test("Should render the error message on screen if the user service returns an error", async () => {
  mockUserService.mockRejectedValueOnce({ success: false, error: "An internal server error occurred." })
  const { font } = setup()

  //Change the font
  fireEvent.click(font)
  expect(await screen.findByText("Mincho")).toBeInTheDocument()
  fireEvent.click(screen.getByText("Mincho"))
  fireEvent.click(screen.getByTitle("Save"))

  await waitFor(() => expect(screen.getByText("An internal server error occurred.")).toBeInTheDocument())
})

test("Should render the error message on screen if the user service call resolves but with failure", async () => {
  mockUserService.mockResolvedValueOnce({ success: false, error: "An internal server error occurred." })
  const { font } = setup()

  //Change the font
  fireEvent.click(font)
  expect(await screen.findByText("Mincho")).toBeInTheDocument()
  fireEvent.click(screen.getByText("Mincho"))
  fireEvent.click(screen.getByTitle("Save"))

  await waitFor(() => expect(screen.getByText("An internal server error occurred.")).toBeInTheDocument())
})

test("Should stop rendering the error message if the update is retried and it succeeds", async () => {
  mockUserService.mockResolvedValueOnce({ success: false, error: "An internal server error occurred." })
  mockUserService.mockResolvedValueOnce({ success: true })
  const { font } = setup()

  //Change the font
  fireEvent.click(font)
  expect(await screen.findByText("Mincho")).toBeInTheDocument()
  fireEvent.click(screen.getByText("Mincho"))
  fireEvent.click(screen.getByTitle("Save"))

  //Should render error
  await waitFor(() => expect(screen.getByText("An internal server error occurred.")).toBeInTheDocument())

  //Retry
  fireEvent.click(screen.getByTitle("Retry"))

  await waitFor(() => expect(screen.queryByText("An internal server error occurred.")).not.toBeInTheDocument())
})
