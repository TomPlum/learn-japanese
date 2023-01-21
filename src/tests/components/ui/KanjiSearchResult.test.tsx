import { render, screen } from "@testing-library/react"
import KanjiSearchResult, { KanjiSearchResultProps } from "../../../components/ui/KanjiSearchResult"
import { KanjiReading } from "../../../domain/kanji/KanjiReading"
import { ReadingType } from "../../../domain/kanji/ReadingType"
import { Kanji } from "../../../domain/kanji/Kanji"
import { KyoikuGrade } from "../../../domain/kanji/KyoikuGrade"
import JLTPLevel from "../../../domain/learn/JLTPLevel"
import { getByTextWithMarkup } from "../../Queries"

const onClickHandler = jest.fn()

let props: KanjiSearchResultProps

const kanji = new Kanji(
  "魚",
  [new KanjiReading("sakana", "さかな", ReadingType.KUN), new KanjiReading("gyo", "ぎょ", ReadingType.ON)],
  ["fish", "sea creature", "longer kanji meaning", "medium length"],
  KyoikuGrade.TWO,
  JLTPLevel.N5,
  "",
  [],
  9,
  ["animal"]
)

beforeEach(() => {
  props = {
    className: "myClass",
    search: "fish",
    result: { value: kanji, field: "meaning" },
    onClick: onClickHandler
  }
})

test("It should render the kanji variation of the given kanji object", () => {
  render(<KanjiSearchResult {...props} />)
  expect(screen.getByText("魚")).toBeInTheDocument()
})

test("It should highlight the whole meaning if it matches the search exactly", () => {
  props.search = "fish"
  props.result.field = "meaning"
  render(<KanjiSearchResult {...props} />)
  expect(screen.getByText("fish")).toBeInTheDocument()
})

test("It should highlight the whole meaning if it matches the search but in different casing", () => {
  props.search = "FiSh"
  props.result.field = "meaning"
  render(<KanjiSearchResult {...props} />)
  expect(screen.getByText("fish")).toBeInTheDocument()
})

test("It should show a match if the search term is the kanji character", () => {
  props.search = "魚"
  props.result.field = "character"
  render(<KanjiSearchResult {...props} />)
  expect(getByTextWithMarkup("match: 魚")).toBeInTheDocument()
})

test("It should highlight the whole reading if it matches an on'yomi reading exactly", () => {
  props.search = "ぎょ"
  props.result.field = "reading"
  render(<KanjiSearchResult {...props} />)
  expect(screen.getByText("ぎょ")).toBeInTheDocument()
})

test("It should highlight the whole reading if it matches an kun'yomi reading exactly", () => {
  props.search = "さかな"
  props.result.field = "reading"
  render(<KanjiSearchResult {...props} />)
  expect(screen.getByText("さかな")).toBeInTheDocument()
})

test("It should highlight the search term in the reading if it matches a kun'yomi reading partially", () => {
  props.search = "さか"
  props.result.field = "reading"
  render(<KanjiSearchResult {...props} />)
  expect(getByTextWithMarkup("さかな")).toBeInTheDocument()
})

test("It should show the tag if the search term matches a tag exactly", () => {
  props.search = "animal"
  props.result.field = "tag"
  render(<KanjiSearchResult {...props} />)
  expect(getByTextWithMarkup("tag: animal")).toBeInTheDocument()
})

test("It should render the search term if the field is unknown", () => {
  props.search = "goldfish"
  props.result.field = "unknown"
  render(<KanjiSearchResult {...props} />)
  expect(screen.getByText("goldfish")).toBeInTheDocument()
})

test("It should render an ellipsis at the start if match - search >= 10 and the match starts at index > 4", () => {
  props.search = "len"
  props.result.field = "meaning"
  render(<KanjiSearchResult {...props} />)
  expect(getByTextWithMarkup("...ium length")).toBeInTheDocument()
})

test("It should render an ellipsis at the end if match - search >= 10 and the match ends > 4 from the end of search", () => {
  props.search = "med"
  props.result.field = "meaning"
  render(<KanjiSearchResult {...props} />)
  expect(getByTextWithMarkup("medium l...")).toBeInTheDocument()
})

test("It should render an ellipsis at the start and end if the matching value is too long either side of the match", () => {
  props.search = "kanji"
  props.result.field = "meaning"
  render(<KanjiSearchResult {...props} />)
  expect(getByTextWithMarkup("...ger kanji mean...")).toBeInTheDocument()
})

test("It should trim the space from between the ellipsis at the start of the match if there is one", () => {
  props.search = "nin"
  props.result.field = "meaning"
  render(<KanjiSearchResult {...props} />)
  expect(getByTextWithMarkup("...meaning")).toBeInTheDocument()
})

test("It should trim the space from between the ellipsis at the end of the match if there is one", () => {
  props.search = "lo"
  props.result.field = "meaning"
  render(<KanjiSearchResult {...props} />)
  expect(getByTextWithMarkup("longer...")).toBeInTheDocument()
})

test("It should pass the style prop through to the underlying paragraph element", () => {
  props.style = { fontFamily: "test-font" }
  const { container } = render(<KanjiSearchResult {...props} />)
  expect(container.firstChild?.firstChild).toHaveStyle({ fontFamily: "test-font" })
})

test("It should pass the className prop through to the wrapping div", () => {
  props.className = "testContainer"
  const { container } = render(<KanjiSearchResult {...props} />)
  expect(container.firstChild).toHaveClass("testContainer")
})
