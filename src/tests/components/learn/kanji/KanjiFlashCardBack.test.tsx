import { fireEvent, screen } from "@testing-library/react"
import { Kanji } from "../../../../domain/kanji/Kanji"
import { KanjiReading } from "../../../../domain/kanji/KanjiReading"
import { ReadingType } from "../../../../domain/kanji/ReadingType"
import { KyoikuGrade } from "../../../../domain/kanji/KyoikuGrade"
import { Example } from "../../../../domain/kanji/Example"
import KanjiFlashCardBack from "../../../../components/learn/kanji/KanjiFlashCardBack"
import { Environment } from "../../../../utility/Environment"
import { getByTextWithMarkup } from "../../../Queries"
import renderReduxConsumer from "../../../renderReduxConsumer"
import JLTPLevel from "../../../../domain/learn/JLTPLevel"

const onClickHandler = vi.fn()
const mockEnvironment = vi.fn()

const kanji = new Kanji(
  "人",
  [new KanjiReading("jin", "じん", ReadingType.ON), new KanjiReading("hito", "ひと", ReadingType.KUN)],
  ["person", "fake-example"],
  KyoikuGrade.ONE,
  JLTPLevel.N5,
  "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
  [new Example("外国人", ["がいこくじん"], ["foreigner"])],
  1,
  []
)

beforeEach(() => {
  Environment.variable = mockEnvironment
})

test("Should call the onClick event handler when clicking the reset button", () => {
  const component = renderReduxConsumer(<KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />)
  fireEvent.click(component.getByTitle("Reset"))
  expect(onClickHandler).toHaveBeenCalled()
})

test("Should render the kanji", () => {
  const component = renderReduxConsumer(<KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />)
  expect(component.getAllByText("人").length).toBeGreaterThan(0)
})

test("Should render the on reading", () => {
  const component = renderReduxConsumer(<KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />)
  expect(component.getByText("じん")).toBeInTheDocument()
})

test("Should render the kun reading", () => {
  const component = renderReduxConsumer(<KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />)
  expect(component.getByText("ひと")).toBeInTheDocument()
})

test("Should render the meanings comma delimited", () => {
  const component = renderReduxConsumer(<KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />)
  expect(component.getByText("person, fake-example")).toBeInTheDocument()
})

test("Should render the grade", () => {
  const component = renderReduxConsumer(<KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />)
  expect(component.getByText("Grade 1 Kyōiku")).toBeInTheDocument()
})

test("Should render the kanji as a link to the source", () => {
  const component = renderReduxConsumer(<KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />)
  expect(component.getByTitle("Click for Wiki source")).toHaveAttribute("href", kanji.source)
})

test("Should render the examples display", () => {
  const component = renderReduxConsumer(<KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />)
  expect(component.getByText("外国人")).toBeInTheDocument()
  expect(getByTextWithMarkup("( がいこくじん )")).toBeInTheDocument()
  expect(component.getByText("foreigner")).toBeInTheDocument()
})

test("Should display the meaning reading description when hovering over the 'Meaning' text", async () => {
  mockEnvironment.mockReturnValue("Example meaning desc")
  const component = renderReduxConsumer(<KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />)

  fireEvent.mouseOver(component.getByText("Meaning"))

  expect(await screen.findByText("English Meaning")).toBeInTheDocument()
  expect(await screen.findByText("Example meaning desc")).toBeInTheDocument()
})

test("Should assign a dynamic class to the container based on the grade", () => {
  const { container } = renderReduxConsumer(
    <KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />
  )
  expect(container.firstChild).toHaveClass("wrapper-grade-1")
})
