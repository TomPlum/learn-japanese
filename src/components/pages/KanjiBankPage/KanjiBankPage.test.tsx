import { fireEvent, screen } from "@testing-library/react"
import KanjiBankPage  from "./KanjiBankPage"
import { Kanji } from "types/kanji/Kanji"
import { KanjiReading } from "types/kanji/KanjiReading"
import { ReadingType } from "types/kanji/ReadingType"
import { KyoikuGrade } from "types/kanji/KyoikuGrade"
import JLTPLevel from "types/learn/JLTPLevel"
import { render } from "__test-utils__"
import { Example } from "types/kanji/Example"
import { server } from "__test-utils__/msw.ts";
import {
  GetKanjiByFilterMswArgs,
  useGetCustomKanjiByFilterHandlers,
  useGetKanjiByFilterErrorHandlers
} from "api/hooks/kanji/useGetKanjiByFilter/useGetKanjiByFilter.handlers.ts";
import { KanjiResponseModel } from "api/hooks/kanji/types.ts";

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
const oneResponse: KanjiResponseModel = {
  character: "一",
  grade: 1,
  jlpt: 5,
  strokes: 1,
  meanings: ["one"],
  examples: [],
  source: "",
  tags: ["number"],
  readings: [
    {
      value: "いち",
      type: "on"
    }
  ]
}

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

const fishResponse: KanjiResponseModel = {
  character: "魚",
  grade: 2,
  jlpt: 5,
  strokes: 9,
  meanings: ["fish", "fish2", "fish3"],
  examples: [
    {
      value: "金魚",
      kana: ["きんぎょ"],
      english: ["goldfish"]
    },
    {
      value: "稚魚",
      kana: ["ちぎょ"],
      english: ["fry (young fish)"]
    }
  ],
  source: "",
  tags: ["animal"],
  readings: [
    {
      value: "さかな",
      type: "kun"
    },
    {
      value: "ぎょ",
      type: 'on'
    }
  ]
}
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
const birdResponse: KanjiResponseModel = {
  character: "鳥",
  grade: 2,
  jlpt: 5,
  strokes: 9,
  meanings: ["bird"],
  examples: [],
  source: "",
  tags: [],
  readings: [
    {
      value: "とり",
      type: "on"
    }
  ]
}
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

const personResponse: KanjiResponseModel = {
  character: "人",
  grade: 1,
  jlpt: 5,
  strokes: 1,
  meanings: ["person"],
  examples: [],
  source: "",
  tags: [],
  readings: [
    {
      value: "じん",
      type: "on"
    }
  ]
}

const setup = () => {
  const { component } = render(<KanjiBankPage />)
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

const stubGetKanjiByFilter = (config: GetKanjiByFilterMswArgs) => {
  server.use(...useGetCustomKanjiByFilterHandlers(config))
}

test("It should load all the kanji from the first page on first render", async () => {
  stubGetKanjiByFilter({ response: { results: [{ value: oneResponse, field: 'meaning' }], pages: 5, total: 124 } })
  setup()
  expect(await screen.findByText("one")).toBeInTheDocument()
})

test("It should render the number of results returned", async () => {
  stubGetKanjiByFilter({ response: { results: [], pages: 5, total: 124 } })
  setup()
  expect(await screen.findByText("124 Results")).toBeInTheDocument()
})

test("It should render the number of pages", async () => {
  stubGetKanjiByFilter({ response: { results: [], pages: 5, total: 124 } })
  setup()
  expect(await screen.findByText("1 of 5")).toBeInTheDocument()
})

test("It should render the the error if the service call succeeds but returns an error message", async () => {
  server.use(...useGetKanjiByFilterErrorHandlers)
  setup()
  expect(await screen.findByTestId("kanji-bank-page-error")).toBeInTheDocument()
  expect(await screen.findByText("Network Error")).toBeInTheDocument()
})

test("Clicking a kanji should select it and display its meanings", async () => {
  stubGetKanjiByFilter({
    response: {
      results: [
        {
          field: 'meaning',
          value: oneResponse
        },
        {
          field: 'meaning',
          value: fishResponse // <-- Fish must go second, so it doesn't get auto selected
        }
      ],
      pages: 5,
      total: 124
    }
  })
  setup()

  expect(await screen.findByText("fish")).toBeInTheDocument()
  fireEvent.click(screen.getByText("魚"))
  expect(screen.getByText("fish, fish2, fish3")).toBeInTheDocument()
})

test("Clicking a kanji should select it and display its grade", async () => {
  stubGetKanjiByFilter({
    response: {
      results: [
        {
          field: 'meaning',
          value: oneResponse
        },
        {
          field: 'meaning',
          value: fishResponse
        }
      ],
      pages: 5,
      total: 124
    }
  })
  setup()
  expect(await screen.findByText("fish")).toBeInTheDocument()

  fireEvent.click(screen.getByText("魚"))

  expect(screen.getByText("2")).toBeInTheDocument()
})

test("Clicking a kanji should select it and display its JLPT Level", async () => {
  stubGetKanjiByFilter({
    response: {
      results: [
        {
          field: 'meaning',
          value: oneResponse
        },
        {
          field: 'meaning',
          value: fishResponse
        }
      ],
      pages: 5,
      total: 124
    }
  })
  setup()
  expect(await screen.findByText("fish")).toBeInTheDocument()

  fireEvent.click(screen.getByText("魚"))

  expect(screen.getByText("N5")).toBeInTheDocument()
})

test("Clicking a kanji should select it and display its On'yomi readings", async () => {
  stubGetKanjiByFilter({
    response: {
      results: [
        {
          field: 'meaning',
          value: oneResponse
        },
        {
          field: 'meaning',
          value: fishResponse
        }
      ],
      pages: 5,
      total: 124
    }
  })
  setup()
  expect(await screen.findByText("fish")).toBeInTheDocument()

  fireEvent.click(screen.getByText("魚"))

  expect(screen.getByText("ぎょ")).toBeInTheDocument()
})

test("Clicking a kanji should select it and display its Kun'yomi readings", async () => {
  stubGetKanjiByFilter({
    response: {
      results: [
        {
          field: 'meaning',
          value: oneResponse
        },
        {
          field: 'meaning',
          value: fishResponse
        }
      ],
      pages: 5,
      total: 124
    }
  })
  setup()
  expect(await screen.findByText("fish")).toBeInTheDocument()

  fireEvent.click(screen.getByText("魚"))

  expect(screen.getByText("さかな")).toBeInTheDocument()
})

test("Clicking a kanji should select it and display the first example", async () => {
  stubGetKanjiByFilter({
    response: {
      results: [
        {
          field: 'meaning',
          value: oneResponse
        },
        {
          field: 'meaning',
          value: fishResponse
        }
      ],
      pages: 5,
      total: 124
    }
  })
  setup()
  expect(await screen.findByText("fish")).toBeInTheDocument()

  fireEvent.click(screen.getByText("魚"))

  expect(screen.getByText("Examples (x2)")).toBeInTheDocument()
  expect(screen.getByText("金魚")).toBeInTheDocument()
})

test("Clicking the kanji example should render the examples modal", async () => {
  stubGetKanjiByFilter({
    response: {
      results: [
        {
          field: 'meaning',
          value: oneResponse
        },
        {
          field: 'meaning',
          value: fishResponse
        }
      ],
      pages: 5,
      total: 124
    }
  })
  setup()
  expect(await screen.findByText("fish")).toBeInTheDocument()

  // Select fish and click the example
  fireEvent.click(screen.getByText("魚"))
  fireEvent.click(screen.getByText("金魚"))

  expect(await screen.findByText("稚魚")).toBeInTheDocument()
})

test("Clicking the x button in the examples modal should dismiss it and stop rendering it", async () => {
  stubGetKanjiByFilter({
    response: {
      results: [
        {
          field: 'meaning',
          value: oneResponse
        },
        {
          field: 'meaning',
          value: fishResponse
        }
      ],
      pages: 5,
      total: 124
    }
  })
  setup()
  expect(await screen.findByText("fish")).toBeInTheDocument()

  // Select fish and click the example
  fireEvent.click(screen.getByText("魚"))
  fireEvent.click(screen.getByText("金魚"))

  // Should render the modal
  expect(await screen.findByText("稚魚")).toBeInTheDocument()

  // Dismiss
  fireEvent.click(screen.getByLabelText("Close"))
  expect(await screen.queryByText("稚魚")).not.toBeInTheDocument()
})

test("Clicking a kanji should select it and display its tags", async () => {
  stubGetKanjiByFilter({
    response: {
      results: [
        {
          field: 'meaning',
          value: oneResponse
        },
        {
          field: 'meaning',
          value: fishResponse
        }
      ],
      pages: 5,
      total: 124
    }
  })
  setup()
  expect(await screen.findByText("fish")).toBeInTheDocument()

  fireEvent.click(screen.getByText("魚"))

  expect(screen.getByTestId("tag-value")).toHaveTextContent("animal")
})

test("Should render a hyphen for the tags value if the selected kanji has none", async () => {
  stubGetKanjiByFilter({
    response: {
      results: [
        {
          field: 'meaning',
          value: personResponse
        },
        {
          field: 'meaning',
          value: birdResponse
        }
      ],
      pages: 5,
      total: 124
    }
  })
  setup()
  expect(await screen.findByText("bird")).toBeInTheDocument()

  fireEvent.click(screen.getByText("鳥"))

  expect(screen.getByTestId("tag-value")).toHaveTextContent("-")
})

test("Typing a search term into the search field should call the service with that term", async () => {
  // Start with just the "one" kanji
  stubGetKanjiByFilter({ response: { results: [{ field: 'meaning', value: oneResponse }], pages: 1, total: 1 }})
  const { search } = setup()
  expect(await screen.findByText("one")).toBeInTheDocument()

  // Search for "fish" with the API stub
  stubGetKanjiByFilter({ response: { results: [{ field: 'meaning', value: fishResponse }], pages: 1, total: 1 }, search: 'fish' })
  fireEvent.change(search, { target: { value: "fish" } })

  // If the API request was made with the correct search field value, it should return the fish kanji
  expect(await screen.findByText("さかな")).toBeInTheDocument()
})

test("Searching for something that returns no results should display a feedback message", async () => {
  // Start with just the "one" kanji
  stubGetKanjiByFilter({ response: { results: [{ field: 'meaning', value: oneResponse }], pages: 1, total: 1 }})
  const { search } = setup()
  expect(await screen.findByText("one")).toBeInTheDocument()

  // Search for "fish", but make sure no data is returned from the service
  stubGetKanjiByFilter({ response: { results: [], pages: 1, total: 1 }, search: 'fish' })
  fireEvent.change(search, { target: { value: "fish" } })

  // Expect a feedback message
  expect(await screen.findByText("No results for 'fish'...")).toBeInTheDocument()
})

test("Adding a grade filter parameter to the search field should call the service with those grades", async () => {
  // Start with just the "one" kanji
  stubGetKanjiByFilter({ response: { results: [{ field: 'meaning', value: oneResponse }], pages: 1, total: 1 }})
  const { search } = setup()
  expect(await screen.findByText("one")).toBeInTheDocument()

  // Filter by grades 1 and 2 and return some other kanji, so it re-renders
  stubGetKanjiByFilter({ response: { results: [{ field: 'meaning', value: fishResponse }], pages: 1, total: 1 }, grades: [1, 2] })
  fireEvent.change(search, { target: { value: ">grade=1,2" } })
  fireEvent.keyPress(search, { key: "Enter", code: 13, charCode: 13 })

  // If the API request was made with the correct grades field value, it should return the fish kanji
  expect(await screen.findByText("さかな")).toBeInTheDocument()
})

test("Adding a level filter parameter to the search field should call the service with those levels", async () => {
  // Start with just the "one" kanji
  stubGetKanjiByFilter({ response: { results: [{ field: 'meaning', value: oneResponse }], pages: 1, total: 1 }})
  const { search } = setup()
  expect(await screen.findByText("one")).toBeInTheDocument()

  // Filter by levels N5 and N4 and return some other kanji, so it re-renders
  stubGetKanjiByFilter({ response: { results: [{ field: 'meaning', value: fishResponse }], pages: 1, total: 1 }, levels: [4, 5] })
  fireEvent.change(search, { target: { value: ">level=N5,N4" } })
  fireEvent.keyPress(search, { key: "Enter", code: 13, charCode: 13 })
  expect(await screen.findByText("さかな")).toBeInTheDocument()

  // If the API request was made with the correct levels field value, it should return the fish kanji
  expect(await screen.findByText("さかな")).toBeInTheDocument()
})

test("Adding a strokes filter parameter to the search field should call the service with that number", async () => {
  // Start with just the "one" kanji
  stubGetKanjiByFilter({ response: { results: [{ field: 'meaning', value: oneResponse }], pages: 1, total: 1 }})
  const { search } = setup()
  expect(await screen.findByText("one")).toBeInTheDocument()

  // Filter by 8 strokes and return some other kanji, so it re-renders
  stubGetKanjiByFilter({ response: { results: [{ field: 'meaning', value: fishResponse }], pages: 1, total: 1 }, strokes: 8 })
  fireEvent.change(search, { target: { value: ">strokes=8" } })
  fireEvent.keyPress(search, { key: "Enter", code: 13, charCode: 13 })

  // If the API request was made with the correct strokes field value, it should return the fish kanji
  expect(await screen.findByText("さかな")).toBeInTheDocument()
})

test.skip("Adding a filter parameter to the search field with a term should call the service with both", async () => {
  // Start with just the "person" kanji
  stubGetKanjiByFilter({ response: { results: [{ field: 'meaning', value: personResponse }], pages: 1, total: 1 }})
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
  stubGetKanjiByFilter({ response: { results: [{ field: 'meaning', value: birdResponse }], pages: 1, total: 1 }})
  const { search } = setup()
  expect(await screen.findByText("bird")).toBeInTheDocument()

  // Filter by grades 1 and 2 and return some other kanji, so it re-renders
  stubGetKanjiByFilter({ response: { results: [{ field: 'meaning', value: oneResponse }], pages: 1, total: 1 }, grades: [1, 2] })
  fireEvent.change(search, { target: { value: ">grade=1,2" } })
  fireEvent.keyPress(search, { key: "Enter", code: 13, charCode: 13 })

  // If the API request was made with the correct grades field value, it should return the one kanji
  expect(await screen.findByText("いち")).toBeInTheDocument()

  // Dismiss the grade filter
  stubGetKanjiByFilter({ response: { results: [{ field: 'meaning', value: fishResponse }], pages: 1, total: 1 }, grades: [] })
  fireEvent.click(screen.getByTestId("dismiss-tag-grade"))

  // If the API request was made with the correct grades field value (empty), it should return the fish kanji
  expect(await screen.findByText("さかな")).toBeInTheDocument()
})

test("Dismissing a level filter parameter should reset the levels to an empty array", async () => {
  // Start with just the "bird" kanji
  stubGetKanjiByFilter({ response: { results: [{ field: 'meaning', value: birdResponse }], pages: 1, total: 1 }})
  const { search } = setup()
  expect(await screen.findByText("bird")).toBeInTheDocument()

  // Filter by levels N3 and N4 and return some other kanji, so it re-renders
  stubGetKanjiByFilter({ response: { results: [{ field: 'meaning', value: personResponse }], pages: 1, total: 1 }, levels: [3, 4] })
  fireEvent.change(search, { target: { value: ">level=N3,N4" } })
  fireEvent.keyPress(search, { key: "Enter", code: 13, charCode: 13 })
  expect(await screen.findByText("じん")).toBeInTheDocument()

  // Dismiss the level filter
  stubGetKanjiByFilter({ response: { results: [{ field: 'meaning', value: birdResponse }], pages: 1, total: 1 }, levels: [] })
  fireEvent.click(screen.getByTestId("dismiss-tag-level"))
  expect(await screen.findByText("とり")).toBeInTheDocument()
})

test("Dismissing a strokes filter parameter should reset the strokes to undefined", async () => {
  // Start with just the "bird" kanji
  stubGetKanjiByFilter({ response: { results: [{ field: 'meaning', value: birdResponse }], pages: 1, total: 1 }})
  const { search } = setup()
  expect(await screen.findByText("bird")).toBeInTheDocument()

  // Filter by 5 strokes and return some other kanji, so it re-renders
  stubGetKanjiByFilter({ response: { results: [{ field: 'meaning', value: oneResponse }], pages: 1, total: 1 }, strokes: 5 })
  fireEvent.change(search, { target: { value: ">strokes=5" } })
  fireEvent.keyPress(search, { key: "Enter", code: 13, charCode: 13 })
  expect(await screen.findByText("いち")).toBeInTheDocument()

  // Dismiss the strokes filter
  stubGetKanjiByFilter({ response: { results: [{ field: 'meaning', value: personResponse }], pages: 1, total: 1 }, strokes: 0 })
  fireEvent.click(screen.getByTestId("dismiss-tag-strokes"))
  expect(await screen.findByText("じん")).toBeInTheDocument()
})

test("Clicking the next page button should render the next page of kanji", async () => {
  // Start with just the "bird" kanji
  stubGetKanjiByFilter({
    response: { results: [{ field: 'meaning', value: birdResponse }], pages: 2, total: 1 },
    pagination: { size: 40, page: 0 }
  })
  const { nextPage } = setup()
  expect(await screen.findByText("bird")).toBeInTheDocument()

  // Click the 'Next' button in the pagination controls
  stubGetKanjiByFilter({
    response: { results: [{ field: 'meaning', value: oneResponse }], pages: 2, total: 1 },
    pagination: { size: 40, page: 1 }
  })
  fireEvent.click(nextPage)
  expect(await screen.findByText("いち")).toBeInTheDocument()
})

test("Clicking the previous page button should render the previous page of kanji", async () => {
  // Start with just the "bird" kanji
  stubGetKanjiByFilter({
    response: { results: [{ field: 'meaning', value: birdResponse }], pages: 2, total: 1 },
    pagination: { size: 40, page: 0 }
  })
  const { nextPage, prevPage } = setup()
  expect(await screen.findByText("bird")).toBeInTheDocument()

  // Click the 'Next' button in the pagination controls (so we can go back after)
  stubGetKanjiByFilter({
    response: { results: [{ field: 'meaning', value: oneResponse }], pages: 2, total: 1 },
    pagination: { size: 40, page: 1 }
  })
  fireEvent.click(nextPage)
  expect(await screen.findByText("いち")).toBeInTheDocument()

  // Click the 'Prev' button in the pagination controls
  stubGetKanjiByFilter({
    response: { results: [{ field: 'meaning', value: personResponse }], pages: 2, total: 1 },
    pagination: { size: 40, page: 0 }
  })
  fireEvent.click(prevPage)
  expect(await screen.findByText("じん")).toBeInTheDocument()
})

test("Changing the page size should call the service with the new value", async () => {
  // Start with just the "one" kanji
  stubGetKanjiByFilter({
    response: { results: [{ field: 'meaning', value: oneResponse }], pages: 2, total: 1 },
    pagination: { size: 40, page: 0 }
  })
  const { pageSizeSelector } = setup()
  expect(await screen.findByText("one")).toBeInTheDocument()

  // Click the page size selector and pick 'Show 60'
  stubGetKanjiByFilter({
    response: { results: [{ field: 'meaning', value: birdResponse }], pages: 2, total: 1 },
    pagination: { size: 60, page: 0 }
  })
  fireEvent.click(pageSizeSelector)
  expect(await screen.findByText("Show 60")).toBeInTheDocument()
  fireEvent.click(screen.getByText("Show 60"))

  // Should re-render
  expect(await screen.findByText("とり")).toBeInTheDocument()
})
