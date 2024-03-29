import { Kanji } from "../../../../domain/kanji/Kanji"
import { KanjiReading } from "../../../../domain/kanji/KanjiReading"
import { ReadingType } from "../../../../domain/kanji/ReadingType"
import { KyoikuGrade } from "../../../../domain/kanji/KyoikuGrade"
import { Example } from "../../../../domain/kanji/Example"
import { fireEvent, render, screen } from "@testing-library/react"
import KanjiExampleDisplay  from "./KanjiExampleDisplay"
import { getByTextWithMarkup } from "__test-utils__/Queries"
import JLTPLevel from "../../../../domain/learn/JLTPLevel"

const readings = [new KanjiReading("jin", "じん", ReadingType.ON), new KanjiReading("hito", "ひと", ReadingType.KUN)]
const source = "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji"
const meanings = ["person"]
const grade = KyoikuGrade.ONE
const jlpt = JLTPLevel.N5

const kanji = new Kanji(
  "人",
  readings,
  meanings,
  grade,
  jlpt,
  source,
  [new Example("外国人", ["がいこくじん"], ["foreigner"])],
  1,
  []
)

test("Should display the kanji", () => {
  render(<KanjiExampleDisplay kanji={kanji} />)
  expect(screen.getByText("外国人")).toBeInTheDocument()
})

test.skip("Should render the kanji variation with the question kanji character highlighted", () => {
  render(<KanjiExampleDisplay kanji={kanji} />)
  expect(screen.getByText("人")).toHaveClass("highlight")
})

test("Should display the kana surrounded with parentheses", () => {
  render(<KanjiExampleDisplay kanji={kanji} />)
  expect(getByTextWithMarkup("( がいこくじん )")).toBeInTheDocument()
})

test("Should display the kana surrounded with parentheses and separated with 'or' if there are multiple", () => {
  const kanji = new Kanji(
    "人",
    readings,
    meanings,
    grade,
    jlpt,
    source,
    [new Example("外国人", ["がいこくじん", "がいこくじん"], ["foreigner"])],
    1,
    []
  )
  render(<KanjiExampleDisplay kanji={kanji} />)
  expect(getByTextWithMarkup("( がいこくじん or がいこくじん )")).toBeInTheDocument()
})

test("Should display the english meaning", () => {
  render(<KanjiExampleDisplay kanji={kanji} />)
  expect(screen.getByText("foreigner")).toBeInTheDocument()
})

test("Should display the english meanings separated by commas if there are multiple", () => {
  const kanji = new Kanji(
    "人",
    readings,
    meanings,
    grade,
    jlpt,
    source,
    [new Example("外国人", ["がいこくじん"], ["foreigner", "outside person"])],
    1,
    []
  )
  render(<KanjiExampleDisplay kanji={kanji} />)
  expect(screen.getByText("foreigner, outside person")).toBeInTheDocument()
})

test("Should change to the next example when clicking the next button on via the spinner controller", () => {
  const kanji = new Kanji(
    "人",
    readings,
    meanings,
    grade,
    jlpt,
    source,
    [
      new Example("外国人", ["がいこくじん"], ["foreigner"]),
      new Example("三人", ["さんにん", "みたり"], ["three people"])
    ],
    1,
    []
  )
  const component = render(<KanjiExampleDisplay kanji={kanji} />)
  fireEvent.click(component.getByTitle("Next"))
  expect(component.getByText("三人")).toBeInTheDocument()
  expect(getByTextWithMarkup("( さんにん or みたり )")).toBeInTheDocument()
  expect(component.getByText("three people")).toBeInTheDocument()
})
