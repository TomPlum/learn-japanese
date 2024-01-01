import { act, fireEvent, screen } from "@testing-library/react"
import KanaChoiceQuestion, { ChoiceQuestionProps } from "../../../../components/game/questions/ChoiceQuestion"
import { Kana } from "../../../../domain/kana/Kana"
import KanaType from "../../../../domain/kana/KanaType"
import { KanaColumn } from "../../../../domain/kana/KanaColumn"
import Arrays from "../../../../utility/Arrays"
import { getByTextWithElements } from "../../../Queries"
import React from "react"
import LearnableField from "../../../../domain/learn/LearnableField"
import renderTranslatedReduxConsumer from "../../../renderTranslatedReduxConsumer"

const isValidHandler = vi.fn()

const a = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
const i = new Kana("い", ["i"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
const e = new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
const o = new Kana("お", ["o"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)

let props: ChoiceQuestionProps
const ref = React.createRef<KanaChoiceQuestion>()

const setup = () => {
  const component = renderTranslatedReduxConsumer(<KanaChoiceQuestion {...props} ref={ref} />)
  return {
    ...component
  }
}

beforeEach(() => {
  const mockShuffle = vi.fn()
  Arrays.shuffle = mockShuffle
  mockShuffle.mockImplementationOnce((array: any[]) => {
    return array
  })

  props = {
    questionField: LearnableField.ROMAJI,
    answerField: LearnableField.KANA,
    question: a,
    wrong: [i.code, e.code, o.code],
    hidden: false,
    isValid: isValidHandler
  }
})

test("Should render the expected and all wrong answers", () => {
  setup()
  expect(screen.getByText("あ")).toBeInTheDocument()
  expect(screen.getByText("い")).toBeInTheDocument()
  expect(screen.getByText("え")).toBeInTheDocument()
  expect(screen.getByText("お")).toBeInTheDocument()
})

test("Should render the question banner", () => {
  setup()
  expect(getByTextWithElements('What is the kana for "a" ?')).toBeInTheDocument()
})

test("Calling the isCorrect function with a correct answer selected should invoke with true", () => {
  setup()
  fireEvent.click(screen.getByText("あ"))
  const isCorrect = ref.current?.isCorrect()
  expect(isCorrect).toBe(true)
})

test("Calling the isCorrect function with the wrong answer selected should invoke with false", () => {
  setup()
  fireEvent.click(screen.getByText("え"))

  let isCorrect
  act(() => {
    isCorrect = ref.current?.isCorrect()
  })

  expect(isCorrect).toBe(false)
})

test("Selecting an option for the first time should call the isValid event handler with true", () => {
  setup()
  fireEvent.click(screen.getByText("え"))
  expect(isValidHandler).toHaveBeenCalledWith(true)
})

test("Changing the selected option should not call the isValid event handler", () => {
  setup()
  fireEvent.click(screen.getByText("え"))
  fireEvent.click(screen.getByText("あ"))
  expect(isValidHandler).toHaveBeenCalledTimes(1)
})

test("On mount all options should be un-selected and have the default 'tile' class", () => {
  const { container } = setup()
  container?.firstChild?.firstChild?.firstChild?.childNodes.forEach((child) => {
    expect(child).toHaveClass("tile")
  })
})

test("Selecting an option should change its displays container class to 'selected'", () => {
  setup()
  const option = screen.getByText("え")
  fireEvent.click(option)
  expect(getAnswerChoiceDisplayWrapperFor("え")).toHaveClass("selected")
})

test("Selecting an option should change its displays' character class colour", () => {
  setup()
  const option = screen.getByText("え")
  fireEvent.click(option)
  expect(option).toHaveProperty("style._values.color", "rgb(38, 140, 229)")
})

test("Pressing the number key for a given option index should select it", () => {
  const { container } = setup()

  fireEvent.keyDown(container, { key: "1", keyCode: 49 })
  expect(getAnswerChoiceDisplayWrapperFor("い")).toHaveClass("selected")

  fireEvent.keyDown(container, { key: "2", keyCode: 50 })
  expect(getAnswerChoiceDisplayWrapperFor("え")).toHaveClass("selected")

  fireEvent.keyDown(container, { key: "3", keyCode: 51 })
  expect(getAnswerChoiceDisplayWrapperFor("お")).toHaveClass("selected")

  fireEvent.keyDown(container, { key: "4", keyCode: 52 })
  expect(getAnswerChoiceDisplayWrapperFor("あ")).toHaveClass("selected")
})

test("Pressing a key that is NOT the index of a displayed kana should not select anything", () => {
  const { container } = setup()

  fireEvent.keyDown(container, { key: "a", keyCode: 49 })

  expect(getAnswerChoiceDisplayWrapperFor("あ")).not.toHaveClass("selected")
  expect(getAnswerChoiceDisplayWrapperFor("い")).not.toHaveClass("selected")
  expect(getAnswerChoiceDisplayWrapperFor("え")).not.toHaveClass("selected")
  expect(getAnswerChoiceDisplayWrapperFor("お")).not.toHaveClass("selected")
})

test("Passing 6 kana should place them in columns with a width of 4 on large viewports", () => {
  props.wrong = [i, e, o, i, e].map((it) => it.code)
  const { container } = setup()
  expect(container?.firstChild?.childNodes[1].firstChild).toHaveClass("col-lg-4")
})

test("Passing less than 6 kana should place them in columns with a width of 6 on large viewports", () => {
  const { container } = setup()
  expect(container?.firstChild?.childNodes[1].firstChild).toHaveClass("col-lg-6")
})

test("It should throw an exception if the passed Learnable has a falsy value for the given answer field", () => {
  props.question = new Kana(undefined!, [], KanaType.HIRAGANA, KanaColumn.H, false)
  expect(() => setup()).toThrow("Expected Answer is null")
})

function getAnswerChoiceDisplayWrapperFor(value: string) {
  //The wrapper element for the AnswerChoiceDisplay is the 4th parent above the <span> that wraps the value.
  return screen.getByText(value).parentElement?.parentElement?.parentElement?.parentElement
}
