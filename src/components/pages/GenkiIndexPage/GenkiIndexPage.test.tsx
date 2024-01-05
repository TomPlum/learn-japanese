import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import GenkiIndexPage  from "./GenkiIndexPage"
import GenkiDefinition from "../../../domain/learn/GenkiDefinition"
import { findByTextWithElements } from "tests/Queries"
import userEvent from "@testing-library/user-event"

const mockGetAllVocab = vi.fn()
vi.mock("../../../service/GenkiService", () => ({
  default: function () {
    return { getAllVocab: mockGetAllVocab }
  }
}))

const mockClipboard = vi.fn()
Object.assign(navigator, { clipboard: { writeText: mockClipboard } })

beforeEach(() => {
  mockClipboard.mockResolvedValueOnce({})
})

afterEach(() => {
  vi.clearAllMocks()
})

const setup = () => {
  const component = render(<GenkiIndexPage />)
  return {
    search: component.getByPlaceholderText("Search for a meaning, kana, kanji or lesson"),
    table: component.getByRole("table"),
    last: component.getByTitle("Last Page"),
    first: component.getByTitle("First Page"),
    next: component.getByTitle("Next Page"),
    previous: component.getByTitle("Previous Page"),
    rows: component.getByTitle("Rows per Page"),
    ...component
  }
}

const data = [
  new GenkiDefinition(1, "English (language)", "えいご", "英語"),
  new GenkiDefinition(2, "student", "がくせい", "学生"),
  new GenkiDefinition(3, "P.M.", "ごご", "午後")
]

const elevenDefinitions = [
  new GenkiDefinition(1, "English (language)", "えいご", "英語"),
  new GenkiDefinition(1, "student", "がくせい", "学生"),
  new GenkiDefinition(1, "P.M.", "ごご", "午後"),
  new GenkiDefinition(1, "o'clock", "〜じ", "〜時"),
  new GenkiDefinition(1, "people", "〜じん", "〜人"),
  new GenkiDefinition(15, "teacher, Professor...", "せんせい", "先生"),
  new GenkiDefinition(15, "That's right.", "そうです"),
  new GenkiDefinition(15, "college, university", "だいがく", "大学"),
  new GenkiDefinition(15, "telephone", "でんわ", "大学"),
  new GenkiDefinition(15, "friend", "ともだち", "友達"),
  new GenkiDefinition(15, "name", "なまえ", "名前")
]

test("It should display a success message when the service call is successful", async () => {
  mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
  setup()
  expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()
})

test("It should display a an error if the service call resolves but there are no definitions", async () => {
  mockGetAllVocab.mockResolvedValueOnce({ definitions: undefined, error: "Something went wrong." })
  setup()
  expect(await screen.findByText("Something went wrong.")).toBeInTheDocument()
})

test("It should display the error message if the service call is rejected", async () => {
  mockGetAllVocab.mockRejectedValueOnce({ error: "Something went wrong." })
  setup()
  expect(await screen.findByText("Something went wrong.")).toBeInTheDocument()
})

test("It should display a hyphen in the kanji column if a definitions does not have a kanji variation", async () => {
  mockGetAllVocab.mockResolvedValueOnce({ definitions: [new GenkiDefinition(2, "um...", "あの")] })
  setup()
  expect(await screen.findByText("-")).toBeInTheDocument()
})

test("It should display the kana in the kana column for a given definition", async () => {
  mockGetAllVocab.mockResolvedValueOnce({ definitions: [new GenkiDefinition(3, "P.M.", "ごご", "午後")] })
  setup()
  expect(await screen.findByText("ごご")).toBeInTheDocument()
})

test("It should display the english meaning in the meaning column for a given definition", async () => {
  mockGetAllVocab.mockResolvedValueOnce({ definitions: [new GenkiDefinition(3, "P.M.", "ごご", "午後")] })
  setup()
  expect(await screen.findByText("P.M.")).toBeInTheDocument()
})

test("It should display the romaji in the romaji column for a given definition", async () => {
  mockGetAllVocab.mockResolvedValueOnce({ definitions: [new GenkiDefinition(3, "P.M.", "ごご", "午後")] })
  setup()
  expect(await screen.findByText("gogo")).toBeInTheDocument()
})

test("It should filter by kana when searching by it", async () => {
  mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
  const { search } = setup()

  // "student" should render by default before searching
  const student = await screen.findByText("student")
  expect(student).toBeInTheDocument()

  // Search for "ご" and it should return the two rows whose kana contains it.
  fireEvent.change(search, { target: { value: "ご" } })
  expect(await screen.findByText("English (language)")).toBeInTheDocument()
  expect(await screen.findByText("P.M.")).toBeInTheDocument()

  // It should not render the rows whose kana doesn't contain "ご"
  await waitForElementToBeRemoved(student)
})

test("It should filter by romaji when searching by it", async () => {
  mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
  const { search } = setup()

  // "student" should render by default before searching
  const student = await screen.findByText("student")
  expect(student).toBeInTheDocument()

  // Search for "go" and it should return the two rows whose kana contains it.
  fireEvent.change(search, { target: { value: "go" } })
  expect(await screen.findByText("English (language)")).toBeInTheDocument()
  expect(await screen.findByText("P.M.")).toBeInTheDocument()

  // It should not render the rows whose romaji doesn't contain "go"
  await waitForElementToBeRemoved(student)
})

test("It should filter by kanji when searching by it", async () => {
  mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
  const { search } = setup()

  const timeDefinition = await screen.findByText("P.M.")

  // Search for "英" and it should return the row whose kana contains it.
  fireEvent.change(search, { target: { value: "英" } })
  expect(await screen.findByText("English (language)")).toBeInTheDocument()

  // It should not render the rows whose kanji doesn't contain "英"
  await waitForElementToBeRemoved(await screen.findByText("student"))
  expect(timeDefinition).not.toBeInTheDocument()
})

test.skip("It should show the next page of results when clicking the next button", async () => {
  mockGetAllVocab.mockResolvedValueOnce({ definitions: elevenDefinitions })
  const { next } = setup()

  // Should default to 10 rows per page
  expect(await screen.findByText("English (language)")).toBeInTheDocument()
  expect(await screen.findByText("student")).toBeInTheDocument()
  expect(await screen.findByText("P.M.")).toBeInTheDocument()
  expect(await screen.findByText("o'clock")).toBeInTheDocument()
  expect(await screen.findByText("people")).toBeInTheDocument()
  expect(await screen.findByText("teacher, Professor...")).toBeInTheDocument()
  expect(await screen.findByText("That's right.")).toBeInTheDocument()
  expect(await screen.findByText("college, university")).toBeInTheDocument()
  expect(await screen.findByText("telephone")).toBeInTheDocument()
  expect(await screen.findByText("friend")).toBeInTheDocument()
  expect(await findByTextWithElements("Page 1 of 2")).toBeInTheDocument()

  // Go to the next page
  fireEvent.click(next)

  // Show the 11th and final row on the second page
  expect(await screen.findByTestId("table-pagination-next")).toBeInTheDocument()
  expect(await findByTextWithElements("Page 2 of 2")).toBeInTheDocument()
})

test("Should disable the first page button if the user is on the first page already", async () => {
  mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
  const { first } = setup()
  expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()
  expect(first.parentElement).toHaveClass("disabled")
})

test("Should disable the previous page button if the user is on the first page already", async () => {
  mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
  const { previous } = setup()
  expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()
  expect(previous.parentElement).toHaveClass("disabled")
})

test("Should disable the next page button if the user is on the last page already", async () => {
  mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
  const { next } = setup()
  expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()
  expect(next.parentElement).toHaveClass("disabled")
})

test("Should disable the last page button if the user is on the last page already", async () => {
  mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
  const { last } = setup()
  expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()
  expect(last.parentElement).toHaveClass("disabled")
})

test("Should disable the search field when there are no results", async () => {
  mockGetAllVocab.mockRejectedValueOnce({ error: "Broken" })
  const { search } = setup()
  expect(await screen.findByText("Broken")).toBeInTheDocument()
  expect(search).toBeDisabled()
})

test("Should render the last page when clicking the last button", async () => {
  mockGetAllVocab.mockResolvedValueOnce({
    definitions: elevenDefinitions.concat(elevenDefinitions).concat(elevenDefinitions)
  })
  setup()
  expect(await screen.findByText("Showing 33 definitions from Genki I and II.")).toBeInTheDocument()
  expect(await findByTextWithElements("Page 1 of 4")).toBeInTheDocument()

  fireEvent.click(screen.getByTitle("Last Page"))

  expect(await findByTextWithElements("Page 4 of 4")).toBeInTheDocument()
})

test("Should render the first page when clicking the first button", async () => {
  mockGetAllVocab.mockResolvedValueOnce({
    definitions: elevenDefinitions.concat(elevenDefinitions).concat(elevenDefinitions)
  })
  setup()
  expect(await screen.findByText("Showing 33 definitions from Genki I and II.")).toBeInTheDocument()
  expect(await findByTextWithElements("Page 1 of 4")).toBeInTheDocument()

  fireEvent.click(screen.getByTitle("Next Page"))
  expect(await findByTextWithElements("Page 2 of 4")).toBeInTheDocument()

  fireEvent.click(screen.getByTitle("First Page"))
  expect(await findByTextWithElements("Page 1 of 4")).toBeInTheDocument()
})

test("Clicking the clear button in the search field should reset the search term", async () => {
  mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
  const { search } = setup()
  expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

  fireEvent.change(search, { target: { value: "language" } })
  expect(await screen.findByText("1 Results")).toBeInTheDocument()

  fireEvent.click(screen.getByTitle("Clear Search"))
  expect(await screen.findByText("3 Results")).toBeInTheDocument()
})

test("It should display an empty table state with message if there are no search results", async () => {
  mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
  const { search } = setup()

  fireEvent.change(search, { target: { value: "zzzzzz" } })
  expect(await screen.findByText("No results for 'zzzzzz'..."))
})

test("It should render the selected number of rows when changing the option in the pagination", async () => {
  mockGetAllVocab.mockResolvedValueOnce({ definitions: elevenDefinitions.concat(elevenDefinitions) })
  const { rows } = setup()
  expect(await screen.findByText("Showing 22 definitions from Genki I and II.")).toBeInTheDocument()
  expect(screen.getAllByRole("row")).toHaveLength(11) // Includes header row

  await userEvent.selectOptions(rows, "Show 20")
  expect(screen.getAllByRole("row")).toHaveLength(21) // Includes header row
})

test("It should render an error message in the table if no rows are returned from the server", async () => {
  mockGetAllVocab.mockRejectedValueOnce({ error: "Oh no" })
  setup()
  expect(await screen.findByText("Error Loading Data")).toBeInTheDocument()
})

test("Clicking the retry button that's rendered in the table when no data is returned so retry loading", async () => {
  // First API call should fail
  mockGetAllVocab.mockRejectedValueOnce({ error: "Oh no" })
  setup()

  // Second should succeed, click the retry button
  mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
  fireEvent.click(await screen.findByText("Retry"))

  // Should re-call the service and load the data
  expect(mockGetAllVocab).toHaveBeenCalled()
  expect(await screen.findByText("student"))
})

describe("Copying Values", () => {
  test("Clicking a kana value should copy it to the clipboard", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()

    fireEvent.click(await screen.findByText("がくせい"))
    await waitFor(() => expect(mockClipboard).toHaveBeenLastCalledWith("がくせい"))
  })

  test("Clicking a romaji value should copy it to the clipboard", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()

    fireEvent.click(await screen.findByText("gogo"))
    await waitFor(() => expect(mockClipboard).toHaveBeenLastCalledWith("gogo"))
  })

  test("Clicking a kanji value should copy it to the clipboard", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()

    fireEvent.click(await screen.findByText("英語"))
    await waitFor(() => expect(mockClipboard).toHaveBeenLastCalledWith("英語"))
  })

  test("Clicking a meaning value should copy it to the clipboard", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()

    fireEvent.click(await screen.findByText("P.M."))
    await waitFor(() => expect(mockClipboard).toHaveBeenLastCalledWith("P.M."))
  })

  test("Clicking a lesson value should copy it to the clipboard", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()

    fireEvent.click(await screen.findByText("2"))
    await waitFor(() => expect(mockClipboard).toHaveBeenLastCalledWith(2))
  })
})

describe("Sorting", () => {
  test("Should not sort the kana column on initial render", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("えいご")
    expect(rows[2]).toHaveTextContent("がくせい")
    expect(rows[3]).toHaveTextContent("ごご")
  })

  test("Should not sort the romaji column on initial render", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("eigo")
    expect(rows[2]).toHaveTextContent("gakusei")
    expect(rows[3]).toHaveTextContent("gogo")
  })

  test("Should not sort the kanji column on initial render", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("英語")
    expect(rows[2]).toHaveTextContent("学生")
    expect(rows[3]).toHaveTextContent("午後")
  })

  test("Should not sort the meaning column on initial render", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("English (language)")
    expect(rows[2]).toHaveTextContent("student")
    expect(rows[3]).toHaveTextContent("P.M.")
  })

  test("Should not sort the lesson column on initial render", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("1")
    expect(rows[2]).toHaveTextContent("2")
    expect(rows[3]).toHaveTextContent("3")
  })

  test("Should sort the kana column in ascending when clicking it once", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Sort Ascending
    fireEvent.click(screen.getAllByTitle("Sort Asc")[0])

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("えいご")
    expect(rows[2]).toHaveTextContent("がくせい")
    expect(rows[3]).toHaveTextContent("ごご")
  })

  test("Should sort the romaji column in ascending when clicking it once", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Sort Ascending
    fireEvent.click(screen.getAllByTitle("Sort Asc")[1])

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("eigo")
    expect(rows[2]).toHaveTextContent("gakusei")
    expect(rows[3]).toHaveTextContent("gogo")
  })

  test("Should sort the kanji column in ascending when clicking it once", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Sort Ascending
    fireEvent.click(screen.getAllByTitle("Sort Asc")[2])

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("午後")
    expect(rows[2]).toHaveTextContent("学生")
    expect(rows[3]).toHaveTextContent("英語")
  })

  test("Should sort the meaning column in ascending when clicking it once", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Sort Ascending
    fireEvent.click(screen.getAllByTitle("Sort Asc")[3])

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("English (language)")
    expect(rows[2]).toHaveTextContent("P.M.")
    expect(rows[3]).toHaveTextContent("student")
  })

  test("Should sort the lesson column in ascending when clicking it once", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Sort Ascending
    fireEvent.click(screen.getAllByTitle("Sort Asc")[4])

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("1")
    expect(rows[2]).toHaveTextContent("2")
    expect(rows[3]).toHaveTextContent("3")
  })

  test("Should sort the kana column in descending when clicking it twice", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Sort Descending
    fireEvent.click(screen.getAllByTitle("Sort Asc")[0])
    fireEvent.click(screen.getByTitle("Sort Desc"))

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("ごご")
    expect(rows[2]).toHaveTextContent("がくせい")
    expect(rows[3]).toHaveTextContent("えいご")
  })

  test("Should sort the romaji column in descending when clicking it twice", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Sort Descending
    fireEvent.click(screen.getAllByTitle("Sort Asc")[1])
    fireEvent.click(screen.getByTitle("Sort Desc"))

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("gogo")
    expect(rows[2]).toHaveTextContent("gakusei")
    expect(rows[3]).toHaveTextContent("eigo")
  })

  test("Should sort the kanji column in descending when clicking it twice", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Sort Descending
    fireEvent.click(screen.getAllByTitle("Sort Asc")[2])
    fireEvent.click(screen.getByTitle("Sort Desc"))

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("英語")
    expect(rows[2]).toHaveTextContent("学生")
    expect(rows[3]).toHaveTextContent("午後")
  })

  test("Should sort the meaning column in descending when clicking it twice", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Sort Descending
    fireEvent.click(screen.getAllByTitle("Sort Asc")[3])
    fireEvent.click(screen.getByTitle("Sort Desc"))

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("student")
    expect(rows[2]).toHaveTextContent("P.M.")
    expect(rows[3]).toHaveTextContent("English (language)")
  })

  test("Should sort the lesson column in descending when clicking it twice", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Sort Descending
    fireEvent.click(screen.getAllByTitle("Sort Asc")[4])
    fireEvent.click(screen.getByTitle("Sort Desc"))

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("3")
    expect(rows[2]).toHaveTextContent("2")
    expect(rows[3]).toHaveTextContent("1")
  })

  test("Should sort the kana column in default order when clicking it three times", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Sort Default Order
    fireEvent.click(screen.getAllByTitle("Sort Asc")[0])
    fireEvent.click(screen.getByTitle("Sort Desc"))
    fireEvent.click(screen.getByTitle("Default Order"))

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("えいご")
    expect(rows[2]).toHaveTextContent("がくせい")
    expect(rows[3]).toHaveTextContent("ごご")
  })

  test("Should sort the romaji column in default order when clicking it three times", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Sort Default Order
    fireEvent.click(screen.getAllByTitle("Sort Asc")[1])
    fireEvent.click(screen.getByTitle("Sort Desc"))
    fireEvent.click(screen.getByTitle("Default Order"))

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("eigo")
    expect(rows[2]).toHaveTextContent("gakusei")
    expect(rows[3]).toHaveTextContent("gogo")
  })

  test("Should sort the kanji column in default order when clicking it three times", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Sort Default Order
    fireEvent.click(screen.getAllByTitle("Sort Asc")[2])
    fireEvent.click(screen.getByTitle("Sort Desc"))
    fireEvent.click(screen.getByTitle("Default Order"))

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("英語")
    expect(rows[2]).toHaveTextContent("学生")
    expect(rows[3]).toHaveTextContent("午後")
  })

  test("Should sort the meaning column in default order when clicking it three times", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Sort Default Order
    fireEvent.click(screen.getAllByTitle("Sort Asc")[3])
    fireEvent.click(screen.getByTitle("Sort Desc"))
    fireEvent.click(screen.getByTitle("Default Order"))

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("English (language)")
    expect(rows[2]).toHaveTextContent("student")
    expect(rows[3]).toHaveTextContent("P.M.")
  })

  test("Should sort the lesson column in default order when clicking it three times", async () => {
    mockGetAllVocab.mockResolvedValueOnce({ definitions: data })
    setup()
    expect(await screen.findByText("Showing 3 definitions from Genki I and II.")).toBeInTheDocument()

    // Sort Default Order
    fireEvent.click(screen.getAllByTitle("Sort Asc")[4])
    fireEvent.click(screen.getByTitle("Sort Desc"))
    fireEvent.click(screen.getByTitle("Default Order"))

    // Get all table rows, the first one is the header row.
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("1")
    expect(rows[2]).toHaveTextContent("2")
    expect(rows[3]).toHaveTextContent("3")
  })
})
