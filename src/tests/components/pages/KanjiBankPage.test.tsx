import { fireEvent, screen } from "@testing-library/react"
import KanjiBankPage from "../../../components/pages/KanjiBankPage"
import { Kanji } from "../../../domain/kanji/Kanji"
import { KanjiReading } from "../../../domain/kanji/KanjiReading"
import { ReadingType } from "../../../domain/kanji/ReadingType"
import { KyoikuGrade } from "../../../domain/kanji/KyoikuGrade"
import JLTPLevel from "../../../domain/learn/JLTPLevel"
import renderReduxConsumer from "../../renderReduxConsumer"
import { Example } from "../../../domain/kanji/Example"

const mockGetKanji = vi.fn()
vi.mock("../../../service/KanjiService", () => ({
  default: function() {
    return { filter: mockGetKanji }
  }
}))

const one = new Kanji(
  "一",
  [new KanjiReading("ichi", "いち", ReadingType.ON)],
  ["one"],
  KyoikuGrade.ONE,
  JLTPLevel.N5,
  "",
  [],
  1,
  ["number"]
)
const fish = new Kanji(
  "魚",
  [new KanjiReading("sakana", "さかな", ReadingType.KUN), new KanjiReading("gyo", "ぎょ", ReadingType.ON)],
  ["fish", "fish2", "fish3"],
  KyoikuGrade.TWO,
  JLTPLevel.N5,
  "",
  [new Example("金魚", ["きんぎょ"], ["goldfish"]), new Example("稚魚", ["ちぎょ"], ["fry (young fish)"])],
  9,
  ["animal"]
)
const bird = new Kanji(
  "鳥",
  [new KanjiReading("tori", "とり", ReadingType.ON)],
  ["bird"],
  KyoikuGrade.TWO,
  JLTPLevel.N5,
  "",
  [],
  8,
  []
)
const person = new Kanji(
  "人",
  [new KanjiReading("jin", "じん", ReadingType.ON)],
  ["person"],
  KyoikuGrade.ONE,
  JLTPLevel.N5,
  "",
  [],
  1,
  ["people"]
)

const setup = () => {
  const component = renderReduxConsumer(<KanjiBankPage />)
  return {
    search: component.getByPlaceholderText("search"),
    pageSizeSelector: component.getByTestId("page-size-selector"),
    firstPage: component.getByTitle("First"),
    prevPage: component.getByTitle("Prev"),
    nextPage: component.getByTitle("Next"),
    lastPage: component.getByTitle("Last"),
    ...component
  }
}

test("It should load all the kanji from the first page on first render", async () => {
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: one, field: "meaning" }], pages: 5, quantity: 124 })
  setup()
  expect(await screen.findByText("one")).toBeInTheDocument()
})

test("It should render the number of results returned", async () => {
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: one, field: "meaning" }], pages: 5, quantity: 124 })
  setup()
  expect(await screen.findByText("124 Results")).toBeInTheDocument()
})

test("It should render the number of pages", async () => {
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: one, field: "meaning" }], pages: 5, quantity: 124 })
  setup()
  expect(await screen.findByText("1 of 5")).toBeInTheDocument()
})

test("It should render the the error if the service call succeeds but returns an error message", async () => {
  mockGetKanji.mockResolvedValueOnce({ kanji: [], pages: 5, quantity: 124, error: "Something went wrong." })
  setup()
  expect(await screen.findByText("Something went wrong.")).toBeInTheDocument()
})

test("It should render the the error message if the service call fails", async () => {
  mockGetKanji.mockRejectedValueOnce({ error: "Something went really wrong." })
  setup()
  expect(await screen.findByText("Something went really wrong.")).toBeInTheDocument()
})

test("Clicking a kanji should select it and display its meanings", async () => {
  mockGetKanji.mockResolvedValueOnce({
    kanji: [
      { value: one, field: "meaning" },
      { value: fish, field: "meaning" }
    ],
    pages: 5,
    quantity: 124
  })
  setup()
  expect(await screen.findByText("fish")).toBeInTheDocument()

  fireEvent.click(screen.getByText("魚"))

  expect(screen.getByText("fish, fish2, fish3")).toBeInTheDocument()
})

test("Clicking a kanji should select it and display its grade", async () => {
  mockGetKanji.mockResolvedValueOnce({
    kanji: [
      { value: one, field: "meaning" },
      { value: fish, field: "meaning" }
    ],
    pages: 5,
    quantity: 124
  })
  setup()
  expect(await screen.findByText("fish")).toBeInTheDocument()

  fireEvent.click(screen.getByText("魚"))

  expect(screen.getByText("2")).toBeInTheDocument()
})

test("Clicking a kanji should select it and display its JLPT Level", async () => {
  mockGetKanji.mockResolvedValueOnce({
    kanji: [
      { value: bird, field: "meaning" },
      { value: fish, field: "meaning" }
    ],
    pages: 5,
    quantity: 124
  })
  setup()
  expect(await screen.findByText("fish")).toBeInTheDocument()

  fireEvent.click(screen.getByText("魚"))

  expect(screen.getByText("N5")).toBeInTheDocument()
})

test("Clicking a kanji should select it and display its On'yomi readings", async () => {
  mockGetKanji.mockResolvedValueOnce({
    kanji: [
      { value: one, field: "meaning" },
      { value: fish, field: "meaning" }
    ],
    pages: 5,
    quantity: 124
  })
  setup()
  expect(await screen.findByText("fish")).toBeInTheDocument()

  fireEvent.click(screen.getByText("魚"))

  expect(screen.getByText("ぎょ")).toBeInTheDocument()
})

test("Clicking a kanji should select it and display its Kun'yomi readings", async () => {
  mockGetKanji.mockResolvedValueOnce({
    kanji: [
      { value: one, field: "meaning" },
      { value: fish, field: "meaning" }
    ],
    pages: 5,
    quantity: 124
  })
  setup()
  expect(await screen.findByText("fish")).toBeInTheDocument()

  fireEvent.click(screen.getByText("魚"))

  expect(screen.getByText("さかな")).toBeInTheDocument()
})

test("Clicking a kanji should select it and display the first example", async () => {
  mockGetKanji.mockResolvedValueOnce({
    kanji: [
      { value: person, field: "meaning" },
      { value: fish, field: "meaning" }
    ],
    pages: 5,
    quantity: 124
  })
  setup()
  expect(await screen.findByText("fish")).toBeInTheDocument()

  fireEvent.click(screen.getByText("魚"))

  expect(screen.getByText("Examples (x2)")).toBeInTheDocument()
  expect(screen.getByText("金魚")).toBeInTheDocument()
})

test("Clicking the kanji example should render the examples modal", async () => {
  mockGetKanji.mockResolvedValueOnce({
    kanji: [
      { value: person, field: "meaning" },
      { value: fish, field: "meaning" }
    ],
    pages: 5,
    quantity: 124
  })
  setup()
  expect(await screen.findByText("fish")).toBeInTheDocument()

  // Select fish and click the example
  fireEvent.click(screen.getByText("魚"))
  fireEvent.click(screen.getByText("金魚"))

  expect(await screen.findByText("稚魚")).toBeInTheDocument()
})

test("Clicking the x button in the examples modal should dismiss it and stop rendering it", async () => {
  mockGetKanji.mockResolvedValueOnce({
    kanji: [
      { value: bird, field: "meaning" },
      { value: fish, field: "meaning" }
    ],
    pages: 5,
    quantity: 124
  })
  setup()
  expect(await screen.findByText("fish")).toBeInTheDocument()

  // Select fish and click the example
  fireEvent.click(screen.getByText("魚"))
  fireEvent.click(screen.getByText("金魚"))

  // Should render the modal
  expect(await screen.findByText("稚魚")).toBeInTheDocument()

  // Dismiss
  fireEvent.click(screen.getByText("Close"))
  expect(await screen.queryByText("稚魚")).not.toBeInTheDocument()
})

test("Clicking a kanji should select it and display its tags", async () => {
  mockGetKanji.mockResolvedValueOnce({
    kanji: [
      { value: one, field: "meaning" },
      { value: fish, field: "meaning" }
    ],
    pages: 5,
    quantity: 124
  })
  setup()
  expect(await screen.findByText("fish")).toBeInTheDocument()

  fireEvent.click(screen.getByText("魚"))

  expect(screen.getByTestId("tag-value")).toHaveTextContent("animal")
})

test("Should render a hyphen for the tags value if the selected kanji has none", async () => {
  mockGetKanji.mockResolvedValueOnce({
    kanji: [
      { value: person, field: "meaning" },
      { value: bird, field: "meaning" }
    ],
    pages: 5,
    quantity: 124
  })
  setup()
  expect(await screen.findByText("bird")).toBeInTheDocument()

  fireEvent.click(screen.getByText("鳥"))

  expect(screen.getByTestId("tag-value")).toHaveTextContent("-")
})

test("Typing a search term into the search field should call the service with that term", async () => {
  // Start with just the "one" kanji
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: one, field: "meaning" }], pages: 1, quantity: 1 })
  const { search } = setup()
  expect(await screen.findByText("one")).toBeInTheDocument()

  // Search for "fish" and make sure it's returned from the service
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: fish, field: "meaning" }], pages: 1, quantity: 1 })
  fireEvent.change(search, { target: { value: "fish" } })
  expect(await screen.findByText("さかな")).toBeInTheDocument()

  // It should call the service with the search term "fish"
  await expect(mockGetKanji).toHaveBeenLastCalledWith(0, 40, "fish", [], [], undefined)
})

test("Searching for something that returns no results should display a feedback message", async () => {
  // Start with just the "one" kanji
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: one, field: "meaning" }], pages: 1, quantity: 1 })
  const { search } = setup()
  expect(await screen.findByText("one")).toBeInTheDocument()

  // Search for "fish", but make sure no data is returned from the service
  mockGetKanji.mockResolvedValueOnce({ kanji: [], pages: 1, quantity: 0 })
  fireEvent.change(search, { target: { value: "fish" } })

  // Expect a feedback message
  expect(await screen.findByText("No results for 'fish'...")).toBeInTheDocument()
})

test("Adding a grade filter parameter to the search field should call the service with those grades", async () => {
  // Start with just the "one" kanji
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: one, field: "meaning" }], pages: 1, quantity: 1 })
  const { search } = setup()
  expect(await screen.findByText("one")).toBeInTheDocument()

  // Filter by grades 1 and 2 and return some other kanji, so it re-renders
  mockGetKanji.mockResolvedValue({ kanji: [{ value: fish, field: "meaning" }], pages: 1, quantity: 1 })
  fireEvent.change(search, { target: { value: ">grade=1,2" } })
  fireEvent.keyPress(search, { key: "Enter", code: 13, charCode: 13 })
  expect(await screen.findByText("さかな")).toBeInTheDocument()

  // It should call the service with grades 1 and 2
  expect(mockGetKanji).toHaveBeenLastCalledWith(0, 40, "", [KyoikuGrade.ONE, KyoikuGrade.TWO], [], undefined)
})

test("Adding a level filter parameter to the search field should call the service with those levels", async () => {
  // Start with just the "one" kanji
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: one, field: "meaning" }], pages: 1, quantity: 1 })
  const { search } = setup()
  expect(await screen.findByText("one")).toBeInTheDocument()

  // Filter by levels N5 and N4 and return some other kanji, so it re-renders
  mockGetKanji.mockResolvedValue({ kanji: [{ value: fish, field: "meaning" }], pages: 1, quantity: 1 })
  fireEvent.change(search, { target: { value: ">level=N5,N4" } })
  fireEvent.keyPress(search, { key: "Enter", code: 13, charCode: 13 })
  expect(await screen.findByText("さかな")).toBeInTheDocument()

  // It should call the service with the N5 and N4 JLPT levels
  expect(mockGetKanji).toHaveBeenLastCalledWith(0, 40, "", [], [JLTPLevel.N5, JLTPLevel.N4], undefined)
})

test("Adding a strokes filter parameter to the search field should call the service with that number", async () => {
  // Start with just the "one" kanji
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: one, field: "meaning" }], pages: 1, quantity: 1 })
  const { search } = setup()
  expect(await screen.findByText("one")).toBeInTheDocument()

  // Filter by 8 strokes and return some other kanji, so it re-renders
  mockGetKanji.mockResolvedValue({ kanji: [{ value: fish, field: "meaning" }], pages: 1, quantity: 1 })
  fireEvent.change(search, { target: { value: ">strokes=8" } })
  fireEvent.keyPress(search, { key: "Enter", code: 13, charCode: 13 })
  expect(await screen.findByText("さかな")).toBeInTheDocument()

  // It should call the service with 8 strokes
  expect(mockGetKanji).toHaveBeenLastCalledWith(0, 40, "", [], [], 8)
})

test.skip("Adding a filter parameter to the search field with a term should call the service with both", async () => {
  // Start with just the "person" kanji
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: person, field: "meaning" }], pages: 1, quantity: 1 })
  const { search } = setup()
  expect(await screen.findByText("person")).toBeInTheDocument()

  // Filter by 8 strokes and return some other kanji, so it re-renders
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: fish, field: "meaning" }], pages: 1, quantity: 1 })
  fireEvent.change(search, { target: { value: ">strokes=8" } })
  fireEvent.keyPress(search, { key: "Enter", code: 13, charCode: 13 })
  expect(await screen.findByText("さかな")).toBeInTheDocument()

  // Add a grade 1 filter too
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: bird, field: "meaning" }], pages: 1, quantity: 1 })
  fireEvent.change(search, { target: { value: ">grade=1" } })
  fireEvent.keyPress(search, { key: "Enter", code: 13, charCode: 13 })
  expect(await screen.findByText("とり")).toBeInTheDocument()

  // Also search for "tree"
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: one, field: "meaning" }], pages: 1, quantity: 1 })
  fireEvent.change(search, { target: { value: "tree" } })
  expect(await screen.findByText("いち")).toBeInTheDocument()

  // It should call the service with the search term "tree", grades 1 and 8 strokes
  expect(mockGetKanji).toHaveBeenLastCalledWith(0, 40, "tree", [KyoikuGrade.ONE], [], 8)
})

test("Dismissing a grade filter parameter should reset the grades to an empty array", async () => {
  // Start with just the "bird" kanji
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: bird, field: "meaning" }], pages: 1, quantity: 1 })
  const { search } = setup()
  expect(await screen.findByText("bird")).toBeInTheDocument()

  // Filter by grades 1 and 2 and return some other kanji, so it re-renders
  mockGetKanji.mockResolvedValue({ kanji: [{ value: one, field: "meaning" }], pages: 1, quantity: 1 })
  fireEvent.change(search, { target: { value: ">grade=1,2" } })
  fireEvent.keyPress(search, { key: "Enter", code: 13, charCode: 13 })
  expect(await screen.findByText("いち")).toBeInTheDocument()

  // It should call the service with the selected grades
  expect(mockGetKanji).toHaveBeenLastCalledWith(0, 40, "", [KyoikuGrade.ONE, KyoikuGrade.TWO], [], undefined)

  // Dismiss the grade filter
  mockGetKanji.mockResolvedValue({ kanji: [{ value: fish, field: "meaning" }], pages: 1, quantity: 1 })
  fireEvent.click(screen.getByTestId("dismiss-tag-grade"))
  expect(await screen.findByText("さかな")).toBeInTheDocument()

  expect(mockGetKanji).toHaveBeenLastCalledWith(0, 40, "", [], [], undefined)
})

test("Dismissing a level filter parameter should reset the levels to an empty array", async () => {
  // Start with just the "bird" kanji
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: bird, field: "meaning" }], pages: 1, quantity: 1 })
  const { search } = setup()
  expect(await screen.findByText("bird")).toBeInTheDocument()

  // Filter by grades 1 and 2 and return some other kanji, so it re-renders
  mockGetKanji.mockResolvedValue({ kanji: [{ value: person, field: "meaning" }], pages: 1, quantity: 1 })
  fireEvent.change(search, { target: { value: ">level=N3,N4" } })
  fireEvent.keyPress(search, { key: "Enter", code: 13, charCode: 13 })
  expect(await screen.findByText("じん")).toBeInTheDocument()

  // It should call the service with the selected levels
  expect(mockGetKanji).toHaveBeenLastCalledWith(0, 40, "", [], [JLTPLevel.N3, JLTPLevel.N4], undefined)

  // Dismiss the level filter
  mockGetKanji.mockResolvedValue({ kanji: [{ value: bird, field: "meaning" }], pages: 1, quantity: 1 })
  fireEvent.click(screen.getByTestId("dismiss-tag-level"))
  expect(await screen.findByText("とり")).toBeInTheDocument()

  expect(mockGetKanji).toHaveBeenLastCalledWith(0, 40, "", [], [], undefined)
})

test("Dismissing a strokes filter parameter should reset the strokes to undefined", async () => {
  // Start with just the "bird" kanji
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: bird, field: "meaning" }], pages: 1, quantity: 1 })
  const { search } = setup()
  expect(await screen.findByText("bird")).toBeInTheDocument()

  // Filter by 5 strokes and return some other kanji, so it re-renders
  mockGetKanji.mockResolvedValue({ kanji: [{ value: one, field: "meaning" }], pages: 1, quantity: 1 })
  fireEvent.change(search, { target: { value: ">strokes=5" } })
  fireEvent.keyPress(search, { key: "Enter", code: 13, charCode: 13 })
  expect(await screen.findByText("いち")).toBeInTheDocument()

  // It should call the service with the selected stroke quantity
  expect(mockGetKanji).toHaveBeenLastCalledWith(0, 40, "", [], [], 5)

  // Dismiss the strokes filter
  mockGetKanji.mockResolvedValue({ kanji: [{ value: person, field: "meaning" }], pages: 1, quantity: 1 })
  fireEvent.click(screen.getByTestId("dismiss-tag-strokes"))
  expect(await screen.findByText("じん")).toBeInTheDocument()

  expect(mockGetKanji).toHaveBeenLastCalledWith(0, 40, "", [], [], undefined)
})

test("Clicking the next page button should render the next page of kanji", async () => {
  // Start with just the "bird" kanji
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: bird, field: "meaning" }], pages: 2, quantity: 1 })
  const { nextPage } = setup()
  expect(await screen.findByText("bird")).toBeInTheDocument()

  // Click the 'Next' button in the pagination controls
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: one, field: "meaning" }], pages: 2, quantity: 1 })
  fireEvent.click(nextPage)
  expect(await screen.findByText("いち")).toBeInTheDocument()
})

test("Clicking the next page button should call the service with the next page number", async () => {
  // Start with just the "person" kanji
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: person, field: "meaning" }], pages: 2, quantity: 1 })
  const { nextPage } = setup()
  expect(await screen.findByText("person")).toBeInTheDocument()

  // Click the 'Next' button in the pagination controls
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: one, field: "meaning" }], pages: 2, quantity: 1 })
  fireEvent.click(nextPage)
  expect(mockGetKanji).toHaveBeenLastCalledWith(1, 40, "", [], [], undefined)
})

test("Clicking the previous page button should render the previous page of kanji", async () => {
  // Start with just the "bird" kanji
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: bird, field: "meaning" }], pages: 2, quantity: 1 })
  const { nextPage, prevPage } = setup()
  expect(await screen.findByText("bird")).toBeInTheDocument()

  // Click the 'Next' button in the pagination controls (so we can go back after)
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: one, field: "meaning" }], pages: 2, quantity: 1 })
  fireEvent.click(nextPage)
  expect(await screen.findByText("いち")).toBeInTheDocument()

  // Click the 'Prev' button in the pagination controls
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: person, field: "meaning" }], pages: 2, quantity: 1 })
  fireEvent.click(prevPage)
  expect(await screen.findByText("じん")).toBeInTheDocument()
})

test("Clicking the previous page button should call the service with the previous page number", async () => {
  // Start with just the "one" kanji
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: one, field: "meaning" }], pages: 2, quantity: 1 })
  const { nextPage, prevPage } = setup()
  expect(await screen.findByText("one")).toBeInTheDocument()

  // Click the 'Next' button in the pagination controls (so we can go back after)
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: bird, field: "meaning" }], pages: 2, quantity: 1 })
  fireEvent.click(nextPage)
  expect(await screen.findByText("とり")).toBeInTheDocument()
  expect(mockGetKanji).toHaveBeenLastCalledWith(1, 40, "", [], [], undefined)

  // Click the 'Prev' button in the pagination controls
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: person, field: "meaning" }], pages: 2, quantity: 1 })
  fireEvent.click(prevPage)
  expect(await screen.findByText("じん")).toBeInTheDocument()
  expect(mockGetKanji).toHaveBeenLastCalledWith(0, 40, "", [], [], undefined)
})

test("Changing the page size should call the service with the new value", async () => {
  // Start with just the "one" kanji
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: one, field: "meaning" }], pages: 2, quantity: 1 })
  const { pageSizeSelector } = setup()
  expect(await screen.findByText("one")).toBeInTheDocument()

  // Click the page size selector and pick 'Show 60'
  mockGetKanji.mockResolvedValueOnce({ kanji: [{ value: bird, field: "meaning" }], pages: 2, quantity: 1 })
  fireEvent.click(pageSizeSelector)
  expect(await screen.findByText("Show 60")).toBeInTheDocument()
  fireEvent.click(screen.getByText("Show 60"))

  // Should re-render
  expect(await screen.findByText("とり")).toBeInTheDocument()
  expect(mockGetKanji).toHaveBeenLastCalledWith(0, 60, "", [], [], undefined)
})
