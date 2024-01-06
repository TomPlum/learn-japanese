import QuestionBanner, { QuestionBannerProps }  from "./QuestionBanner"
import { fireEvent, screen } from "@testing-library/react"
import Definition from "../../../domain/sentence/Definition"
import LearnableField from "../../../domain/learn/LearnableField"
import { findByTextWithElements } from "__test-utils__/Queries"
import { render } from "__test-utils__"

let props: QuestionBannerProps

const zeroFields = new Definition([], undefined, "", "")
const singleField = new Definition(["meaning1"], undefined, "", "")
const twoFields = new Definition(["meaning1", "meaning2"], undefined, "", "")
const severalFields = new Definition(["meaning1", "meaning2", "meaning3", "meaning4"], undefined, "", "")

const setup = () => {
  const component = render(<QuestionBanner {...props} />)
  return { ...component }
}

beforeEach(() => {
  props = {
    question: singleField,
    questionField: LearnableField.MEANING,
    answerField: LearnableField.KANJI
  }
})

test("It should display the question in the correct format when there is a single question field value", async () => {
  props.question = singleField
  setup()
  expect(await findByTextWithElements('What is the kanji for "meaning1" ?')).toBeInTheDocument()
})

test("It should display the question in the correct format when there are two question field values", async () => {
  props.question = twoFields
  setup()
  expect(await findByTextWithElements('What is the kanji for "meaning1" or "meaning2" ?')).toBeInTheDocument()
})

test("It should display the question in the correct format when there are more than two question field values", async () => {
  props.question = severalFields
  setup()

  expect(await findByTextWithElements('What is the kanji for "meaning1" or "meaning2" ?')).toBeInTheDocument()

  const helpButton = screen.getByTestId("help")
  expect(helpButton).toBeInTheDocument()

  fireEvent.mouseOver(helpButton)
  expect(await screen.findByText("Also Known As"))
  expect(await screen.findByText("meaning3, meaning4"))
})

test("It should display the question with N/A if there are no question field values", async () => {
  props.question = zeroFields
  setup()
  expect(await findByTextWithElements('What is the kanji for "N/A" ?')).toBeInTheDocument()
})

test("It should display the question with N/A if there are only undefined field values", async () => {
  props.questionField = LearnableField.KANJI
  props.question = new Definition([], undefined, "", "")
  setup()
  expect(await findByTextWithElements('What is the kanji for "N/A" ?')).toBeInTheDocument()
})
