import HighScoresPage  from "./HighScoresPage"
import { findByTextWithElements } from "__test-utils__/Queries"
import { render } from "__test-utils__"
import { when } from "jest-when"
import { fireEvent, screen, waitForElementToBeRemoved, within } from "@testing-library/react"

const mockGetHighScoreEntriesPage = vi.fn()
vi.mock("service/HighScoresService", () => ({
  default: function () {
    return { getAllEntriesPage: mockGetHighScoreEntriesPage }
  }
}))

const mockGetPublicUsers = vi.fn()
vi.mock("service/UserService", () => ({
  default: function () {
    return { getPublicUsers: mockGetPublicUsers }
  }
}))

const setup = (url?: string) => {
  return render(<HighScoresPage />, { url })
}

test("Should load the high-scores and data and render the table on-load", async () => {
  mockGetHighScoreEntriesPage.mockResolvedValue({ entries: [], pages: { total: 120, quantity: 10 } })
  const { component } = setup()
  expect(await component.findByTestId("high-scores-table")).toBeInTheDocument()
})

test("Should render the single user high-scores table when the user query pram is present", async () => {
  mockGetHighScoreEntriesPage.mockResolvedValue({ entries: [], pages: { total: 120, quantity: 10 } })
  const { component } = setup('?user=TomPlum')
  expect(await component.findByTestId("single-user-high-scores-table")).toBeInTheDocument()
  expect(await component.queryByTestId("high-scores-table")).not.toBeInTheDocument()
})

test("Should render an error alert when the high-scores data response returns an error", async () => {
  mockGetHighScoreEntriesPage.mockResolvedValue({
    entries: [],
    pages: { total: 0, quantity: 0 },
    error: "It broke."
  })
  const { component } = setup()
  expect(await component.findByText("It broke.")).toBeInTheDocument()
})

test("Should render an error alert when the high-scores data is rejected and returns an error", async () => {
  mockGetHighScoreEntriesPage.mockRejectedValue({ error: "Something went really wrong." })
  const { component } = setup()
  expect(await component.findByText("Something went really wrong.")).toBeInTheDocument()
})

test("Selecting a user should render only their high-scores", async () => {
  // When no user is selected return the default entries
  when(mockGetHighScoreEntriesPage)
    .calledWith(1, 0, 10, undefined)
    .mockResolvedValue({
      entries: [{ presetId: 1, score: 235, time: "03:15", user: { id: 2, name: "Test User" } }],
      pages: { total: 120, quantity: 10 }
    })

  // When the user in context is searched for, return their record
  when(mockGetHighScoreEntriesPage)
    .calledWith(1, 0, 10, "TomPlum")
    .mockResolvedValue({
      entries: [{ presetId: 1, score: 563, time: "02:45", user: { id: 1, name: "TomPlum" } }],
      pages: { total: 120, quantity: 10 }
    })

  // Return just the one user from the public users search
  when(mockGetPublicUsers).calledWith("TomPlum").mockResolvedValue(["TomPlum"])

  // Should initially load all the details
  const { component } = setup()
  await waitForElementToBeRemoved(within(component.getByTestId("empty-table-body")).getByText("Loading..."))
  expect(within(screen.getByTestId("high-scores-table")).getAllByRole("row")[1]).toHaveTextContent(
    "1Test User235"
  )

  // Search for "TomPlum" in the user search field
  const userSearchField = component.getByTestId("user-search-field")
  fireEvent.focus(userSearchField)
  fireEvent.change(userSearchField, { target: { value: "TomPlum" } })

  // Select the user
  const results = await component.findByTestId("user-search-field-results")
  fireEvent.click(await within(results).findByText("TomPlum"))
  expect(within(await screen.findByTestId("user-search-filter")).getByText("TomPlum")).toBeInTheDocument()

  // Should render details
  expect(mockGetHighScoreEntriesPage).toHaveBeenLastCalledWith(1, 0, 10, "TomPlum")
  expect(within(screen.getByTestId("high-scores-table")).getAllByRole("row")[1]).toHaveTextContent("1TomPlum563")
})

test("Should render the page number", async () => {
  mockGetHighScoreEntriesPage.mockResolvedValue({ entries: [], pages: { total: 10, quantity: 100 } })
  setup()
  expect(await findByTextWithElements("Page 1 of 10")).toBeInTheDocument()
})
