import { KanaSettingsBuilder } from "../../../domain/session/settings/data/KanaSettings"
import { fireEvent, screen } from "@testing-library/react"
import { getByTextWithMarkup, getValueLastCalledWith } from "__test-utils__/Queries";
import LearnPage  from "./LearnPage"
import { Kana } from "../../../domain/kana/Kana"
import KanaType from "../../../domain/kana/KanaType"
import { KanaColumn } from "../../../domain/kana/KanaColumn"
import Arrays from "../../../utility/Arrays"
import { render } from "__test-utils__"
import { SessionSettingsBag } from "context/SessionSettingsContext";

const mockLearningDataService = vi.fn()
vi.mock("service/LearningDataService", () => ({
  default: function () {
    return { read: mockLearningDataService }
  }
}))

const dataSettings = new KanaSettingsBuilder()
  .withHiragana(true)
  .withKatakana(false)
  .withDiagraphs(false)
  .withDiacriticals(true)
  .withOnlyDiagraphs(false)
  .withQuantity(50)
  .build()

beforeEach(() => {
  // Mock getRandomObject so it always returns the first element
  Arrays.getRandomObject = vi.fn().mockImplementation((array: any[]) => {
    const objects = [...array]
    const firstKana = objects[0]
    objects.splice(0, 1)
    return [firstKana, objects]
  })
})


test("Should render the learning session if the data settings are present", async () => {
  mockLearningDataService.mockResolvedValueOnce([new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)])

  render(
    <LearnPage />,
    { sessionSettings: { dataSettings }}
  )

  expect(await screen.findByTestId("learn-page")).toBeInTheDocument()
})

test("Should render an error message if the data settings are undefined", () => {
  render(<LearnPage />)

  expect(mockLearningDataService).not.toHaveBeenCalled()
  expect(screen.queryByTestId("memory-game")).not.toBeInTheDocument()
  expect(screen.getByText("Your session settings have gone walk-abouts!")).toBeInTheDocument()
  expect(getByTextWithMarkup("Click here to go back home.")).toBeInTheDocument()
})

test("Should skip the results screen and redirect home if the user flips no cards over", async () => {
  // Set data settings
  mockLearningDataService.mockResolvedValueOnce([new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)])

  // Render the page and wait for the game to load
  const { history } = render(<LearnPage />, { sessionSettings: { dataSettings }})
  expect(await screen.findByTestId("learn-page")).toBeInTheDocument()
  expect(await screen.findByTestId("learn")).toBeInTheDocument()

  // Close the session without having flipped any cards
  fireEvent.click(screen.getByTitle("Quit"))
  fireEvent.click(screen.getByText("Yes"))

  // Should redirect home
  expect(history.location.pathname).toBe("/home")
})

test("Should render the results screen if the user flips at least one card", async () => {
  // Set data settings
  mockLearningDataService.mockResolvedValueOnce([
    new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
    new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false)
  ])

  // Render the page and wait for the game to load
  const { onSessionSettingsContextValueChange, history } = render(<LearnPage />, { sessionSettings: { dataSettings }})
  expect(await screen.findByTestId("learn-page")).toBeInTheDocument()

  // Flip at least one card
  fireEvent.click(screen.getByText("え"))
  fireEvent.click(screen.getByText("Forgot It"))

  // Close the session early
  fireEvent.click(screen.getByTitle("Quit"))
  fireEvent.click(screen.getByText("Yes"))

  // Should render the results screen
  expect(screen.getByTestId("learning-results-screen")).toBeInTheDocument()

  // Click the finish button
  fireEvent.click(screen.getByTitle("Quit"))

  // Should clear the settings from context
  expect(getValueLastCalledWith<SessionSettingsBag>(onSessionSettingsContextValueChange).dataSettings).toBeUndefined()

  // Should re-direct to the home page
  expect(history.location.pathname).toBe("/home")
})

test("Clicking 'Practice Mistakes' on the learning results screen should start a new session with the mistakes", async () => {
  // Set data settings
  mockLearningDataService.mockResolvedValueOnce([
    new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
    new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false)
  ])

  // Render the page and wait for the game to load
  render(<LearnPage />, { sessionSettings: { dataSettings }})
  expect(await screen.findByTestId("learn-page")).toBeInTheDocument()

  // Complete the session
  fireEvent.click(screen.getByText("え")) // Flip the first card
  fireEvent.click(screen.getByText("Forgot It")) // Mark the card as forgot
  fireEvent.click(screen.getByText("Next")) // Go to next card

  fireEvent.click(screen.getByText("ア")) //Flip the second card
  fireEvent.click(screen.getByTitle("I remembered it")) // Mark the card as remembered
  fireEvent.click(screen.getByText("Finish")) //Click finish to end the session

  expect(screen.getByTestId("learning-results-screen")).toBeInTheDocument() //Should render results screen
  fireEvent.click(screen.getByText("Practice Mistakes")) //Click practice mistakes

  expect(screen.getByText("え")).toBeInTheDocument() //Should show our only mistake first
  fireEvent.click(screen.getByText("え")) //Flip the card
  expect(screen.getByText("Finish")).toBeInTheDocument() //If it omitted our mistake, flipping this card should be the last.
})
