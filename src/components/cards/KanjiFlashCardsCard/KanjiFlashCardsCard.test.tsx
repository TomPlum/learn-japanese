import { fireEvent, screen } from "@testing-library/react"
import KanjiFlashCardsCard  from "./KanjiFlashCardsCard"
import Definition from "../../../domain/sentence/Definition"
import SpaceRepetitionDetails from "../../../domain/learn/spacedrepetition/SpaceRepetitionDetails"
import { FlashCard } from "../../../domain/learn/FlashCard"
import { render } from "__test-utils__"

const mockGetKanjiFlashCards = vi.fn()
vi.mock("service/SpacedRepetitionService", () => ({
  default: function () {
    return { getKanjiFlashCards: mockGetKanjiFlashCards }
  }
}))

const definition = new Definition(["interesting", "funny"], "面白い", "おもしろい", "い Adjective")
const spaceRepetitionDetails = new SpaceRepetitionDetails(2.5, 0, 0, "2021-12-12")
const flashCard = new FlashCard(1, definition, spaceRepetitionDetails)

const setup = () => {
  const { component, history } = render(<KanjiFlashCardsCard />)
  return {
    history,
    ...component
  }
}

test("Should render the number of cards to review if the service call returns successfully", async () => {
  mockGetKanjiFlashCards.mockResolvedValue({ cards: [flashCard, flashCard, flashCard, flashCard, flashCard] })
  setup()
  expect(await screen.findByText("Review")).toBeInTheDocument()
  expect(await screen.findByText(5)).toBeInTheDocument()
})

test("Should render the error message if one is returned from a failed API response", async () => {
  mockGetKanjiFlashCards.mockRejectedValue({ cards: undefined, error: "Something went wrong." })
  setup()
  expect(await screen.findByText("Something went wrong.")).toBeInTheDocument()
})

test("Should render a default error message if there are undefined cards and no error message in the response", async () => {
  mockGetKanjiFlashCards.mockResolvedValue({ cards: undefined, error: undefined })
  setup()
  expect(await screen.findByText("Error loading cards.")).toBeInTheDocument()
})

test("Should render a default error message if the service promise is rejected and there is no message", async () => {
  mockGetKanjiFlashCards.mockRejectedValue({ error: undefined })
  setup()
  expect(await screen.findByText("Error loading cards.")).toBeInTheDocument()
})

test("Clicking the sync button should call the service method", async () => {
  mockGetKanjiFlashCards.mockResolvedValue({ cards: [flashCard] })
  setup()

  // Open the settings menu
  fireEvent.click(await screen.findByTestId("dashboard-settings-menu-button"))

  // Should only have loaded once, click the sync button
  expect(mockGetKanjiFlashCards).toHaveBeenCalledTimes(1)
  fireEvent.click(await screen.findByText("Sync"))

  // Should call the service again to update cards
  expect(await screen.findByText("Start Study Session"))
  expect(mockGetKanjiFlashCards).toHaveBeenCalledTimes(2)
})

test("Should disable the review button if there are no cards to review", async () => {
  mockGetKanjiFlashCards.mockResolvedValue({ cards: [] })
  setup()
  expect((await screen.findByText("Start Study Session")).parentElement).toHaveAttribute("aria-disabled", "true")
})

test("Should enable the start button if there are cards to review", async () => {
  mockGetKanjiFlashCards.mockResolvedValue({ cards: [flashCard, flashCard] })
  setup()
  expect(await screen.findByText("Start Study Session")).not.toBeDisabled()
})

test("Should redirect to the learn kanji page when clicking the review button", async () => {
  mockGetKanjiFlashCards.mockResolvedValue({ cards: [flashCard] })
  const { history } = setup()
  fireEvent.click(await screen.findByText("Start Study Session"))
  expect(history.location.pathname).toBe("/learn/kanji")
})
