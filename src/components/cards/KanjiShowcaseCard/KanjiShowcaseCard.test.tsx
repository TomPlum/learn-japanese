import KanjiShowcaseCard from "./KanjiShowcaseCard"
import { fireEvent, screen, within } from "@testing-library/react";
import { render } from "__test-utils__"
import { server } from "__test-utils__/msw.ts"
import {
  useGetCustomRandomKanjiHandlers,
  useGetRandomKanjiErrorHandlers
} from "api/hooks/kanji/useGetRandomKanji/useGetRandomKanji.handlers.ts"
import { KanjiResponseModel } from "api/hooks/kanji/types.ts"

const fishKanjiResponse: KanjiResponseModel = {
  character: "魚",
  grade: 2,
  jlpt: 5,
  strokes: 11,
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
      type: "on"
    }
  ]
}

const birdKanjiResponse: KanjiResponseModel = {
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

const childKanjiResponse: KanjiResponseModel = {
  character: "子",
  grade: 2,
  jlpt: 5,
  strokes: 10,
  meanings: ["child", "boy", "young person", "infant"],
  examples: [],
  source: "",
  tags: ['animal'],
  readings: [
    {
      value: "す",
      type: "on"
    },
    {
      value: "し",
      type: "on"
    },
    {
      value: "こ",
      type: "kun"
    },
    {
      value: "ね",
      type: "kun"
    }
  ]
}

test("Should render the kanji character", async () => {
  server.use(...useGetCustomRandomKanjiHandlers(fishKanjiResponse))
  const { component } = render(<KanjiShowcaseCard />)
  expect(await component.findByText("魚")).toBeInTheDocument()
})

test("Should render the kanji character in the globally selected font", async () => {
  server.use(...useGetCustomRandomKanjiHandlers(fishKanjiResponse))
  const { component } = render(<KanjiShowcaseCard />, { font: 'test-font' })
  expect(await component.findByText("魚")).toHaveStyle({ "font-family": "test-font" })
})

test("Should render the grade", async () => {
  server.use(...useGetCustomRandomKanjiHandlers(fishKanjiResponse))
  const { component } = render(<KanjiShowcaseCard />)
  expect(await within(await component.findByTestId('kanji-showcase-grade')).findByText("2")).toBeInTheDocument()
})

test("Should render the JLPT level", async () => {
  server.use(...useGetCustomRandomKanjiHandlers(fishKanjiResponse))
  const { component } = render(<KanjiShowcaseCard />)
  expect(await component.findByText("N5")).toBeInTheDocument()
})

test("Should render the strokes", async () => {
  server.use(...useGetCustomRandomKanjiHandlers(fishKanjiResponse))
  const { component } = render(<KanjiShowcaseCard />)
  expect(await within(await component.findByTestId('kanji-showcase-strokes')).findByText("11")).toBeInTheDocument()
})

test("Should render the examples quantity", async () => {
  server.use(...useGetCustomRandomKanjiHandlers(fishKanjiResponse))
  const { component } = render(<KanjiShowcaseCard />)
  expect(await within(await component.findByTestId('kanji-showcase-example-count')).findByText("2")).toBeInTheDocument()
})

test("Should render the error if the service call fails", async () => {
  server.use(...useGetRandomKanjiErrorHandlers)
  const { component } = render(<KanjiShowcaseCard />)
  expect(await component.findByText("Network Error")).toBeInTheDocument()
})

test("Clicking the shuffle button should render a new kanji", async () => {
  // Should render the first kanji initially
  server.use(...useGetCustomRandomKanjiHandlers(fishKanjiResponse))
  const { component } = render(<KanjiShowcaseCard />)
  expect(await component.findByText("魚")).toBeInTheDocument()

  // Clicking the shuffle button should render the next
  server.use(...useGetCustomRandomKanjiHandlers(birdKanjiResponse))
  fireEvent.click(component.getByTitle("Shuffle"))
  expect(await component.findByText("鳥")).toBeInTheDocument()
})

test("Should render a pop-over with the full meanings if they exceed 23 characters in length", async () => {
  // Render the kanji character with many meaning values
  server.use(...useGetCustomRandomKanjiHandlers(childKanjiResponse))
  const { component } = render(<KanjiShowcaseCard />)
  expect(await component.findByText("子")).toBeInTheDocument()

  // Hover over the trimmed meanings text
  fireEvent.mouseOver(component.getByText("child, boy, young perso..."))
  expect(await screen.findByText("Meanings")).toBeInTheDocument()
  expect(await screen.findByText("child, boy, young person, infant")).toBeInTheDocument()
})

test("Should route to the kanji search page when clicking the link", async () => {
  // Render a kanji character
  server.use(...useGetCustomRandomKanjiHandlers(fishKanjiResponse))
  const { component } = render(<KanjiShowcaseCard />)
  expect(await component.findByText("魚")).toBeInTheDocument()

  // Clicking the link should route to the kanji search page
  expect(component.getByText("search all kanji")).toHaveAttribute("href", "/kanji")
})

test("Should render the examples display modal when clicking the examples button", async () => {
  // Render a kanji that has at least 1 example
  server.use(...useGetCustomRandomKanjiHandlers(fishKanjiResponse))
  const { component } = render(<KanjiShowcaseCard />)
  expect(await component.findByText("魚")).toBeInTheDocument()

  // Click the example icon button
  fireEvent.click(component.getByTitle("Examples"))

  // Should render the examples display modal
  expect(await screen.findByTestId("kanji-example-display")).toBeInTheDocument()

  // Closing it should stop rendering it
  fireEvent.click(screen.getByLabelText("Close"))
  expect(screen.queryByTestId("kanji-example-display")).not.toBeInTheDocument()
})

test("Clicking the examples button should not render the examples display if the kanji has none", async () => {
  // Render a kanji that has no examples
  server.use(...useGetCustomRandomKanjiHandlers(childKanjiResponse))
  const { component } = render(<KanjiShowcaseCard />)
  expect(await component.findByText("子")).toBeInTheDocument()

  // Click the example icon button
  fireEvent.click(component.getByTitle("Examples"))

  // Should NOT render the examples display modal
  expect(screen.queryByTestId("kanji-example-display")).not.toBeInTheDocument()
})

test("If a kanji has multiple on readings, when hovering over it, it should render a pop-over with them all", async () => {
  // Render a kanji that has multiple on'yomi readings
  server.use(...useGetCustomRandomKanjiHandlers(childKanjiResponse))
  const { component } = render(<KanjiShowcaseCard />)
  expect(await component.findByText("子")).toBeInTheDocument()

  // Mouse over the displayed reading
  fireEvent.mouseOver(component.getByText("す"))

  // Should render a pop-over modal with all the on readings
  expect(await screen.findByText("On'Yomi Readings")).toBeInTheDocument()
  expect(await screen.findByText("す, し")).toBeInTheDocument()
})

test("If a kanji has multiple kun readings, when hovering over it, it should render a pop-over with them all", async () => {
  // Render a kanji that has multiple kun'yomi readings
  server.use(...useGetCustomRandomKanjiHandlers(childKanjiResponse))
  const { component } = render(<KanjiShowcaseCard />)
  expect(await component.findByText("子")).toBeInTheDocument()

  // Mouse over the displayed reading
  fireEvent.mouseOver(component.getByText("こ"))

  // Should render a pop-over modal with all the kun readings
  expect(await screen.findByText("Kun'Yomi Readings")).toBeInTheDocument()
  expect(await screen.findByText("こ, ね")).toBeInTheDocument()
})
