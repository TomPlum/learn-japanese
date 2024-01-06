import { fireEvent, screen } from "@testing-library/react"
import QuestionSettingsForm  from "./QuestionSettingsForm"
import QuestionType from "../../../../domain/game/QuestionType"
import QuestionSettings from "../../../../domain/session/settings/game/QuestionSettings"
import { getValueLastCalledWith } from "__test-utils__/Queries"
import userEvent from "@testing-library/user-event"
import LearnableField from "../../../../domain/learn/LearnableField"
import renderWithTranslation from "__test-utils__/renderWithTranslation"

const onSelectHandler = vi.fn()

const setup = () => {
  const component = renderWithTranslation(<QuestionSettingsForm onChange={onSelectHandler} />)
  return {
    multipleChoiceButton: component.getByText("Multiple Choice"),
    textModeButton: component.getByText("Text"),
    matchModeButton: component.getByText("Match"),
    questionFieldSelector: component.getAllByTestId("learnable-field-selector")[0],
    answerFieldSelector: component.getAllByTestId("learnable-field-selector")[1],
    score: component.getByTestId("score-switch"),
    ...component
  }
}

test("On mount it should call the onSelect event handler with the default settings", () => {
  setup()

  const settings = getValueLastCalledWith<QuestionSettings>(onSelectHandler)

  //Have to use field access here as equality on whole object fails due to function reference of answerFilter.
  expect(settings.type).toBe(QuestionType.TEXT)
  expect(settings.cards).toBe(1)
  expect(settings.score).toBe(true)
})

test("Selecting multiple choice mode should call the onSelect eventHandler", () => {
  const { multipleChoiceButton } = setup()
  fireEvent.click(multipleChoiceButton)
  expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).type).toBe(QuestionType.CHOICE)
})

test("Selecting text mode should call the onSelect eventHandler with the updated type in the settings", () => {
  const { multipleChoiceButton, textModeButton } = setup()
  fireEvent.click(multipleChoiceButton)
  fireEvent.click(textModeButton)
  expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).type).toBe(QuestionType.TEXT)
})

test("Selecting multiple choice mode should change the description accordingly", () => {
  const { multipleChoiceButton } = setup()
  fireEvent.click(multipleChoiceButton)
  expect(
    screen.getByText(
      "You're given something for the given data and are presented with multiple answer options of which one is correct."
    )
  )
})

test("Selecting text mode should change the description accordingly", () => {
  const { textModeButton } = setup()
  fireEvent.click(textModeButton)
  expect(
    screen.getByText(
      "You're given a single piece of info (symbol, reading, meaning etc.) per question and must enter the request other piece of information."
    )
  )
})

test("Selecting multiple choice mode should render the 3 quantity buttons", () => {
  const { multipleChoiceButton } = setup()
  fireEvent.click(multipleChoiceButton)
  expect(screen.getByText("2")).toBeInTheDocument()
  expect(screen.getByText("4")).toBeInTheDocument()
  expect(screen.getByText("6")).toBeInTheDocument()
})

test("Selecting 2 answer quantity should update the description", () => {
  const { multipleChoiceButton } = setup()
  fireEvent.click(multipleChoiceButton)
  fireEvent.click(screen.getByText("2"))
  expect(screen.getByText("You'll be shown 2 answers to choose from."))
})

test("Selecting 4 answer quantity should update the description", () => {
  const { multipleChoiceButton } = setup()
  fireEvent.click(multipleChoiceButton)
  fireEvent.click(screen.getByText("4"))
  expect(screen.getByText("You'll be shown 4 answers to choose from."))
})

test("Selecting 6 answer quantity should update the description", () => {
  const { multipleChoiceButton } = setup()
  fireEvent.click(multipleChoiceButton)
  fireEvent.click(screen.getByText("6"))
  expect(screen.getByText("You'll be shown 6 answers to choose from."))
})

test("Turning off the score tracking system should set the boolean to false", () => {
  const { score } = setup()
  fireEvent.click(score)
  expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).score).toBe(false)
})

test("The question field should default to romaji", () => {
  const { questionFieldSelector } = setup()
  expect(questionFieldSelector).toHaveDisplayValue("Rōmaji")
})

test("The answer field should default to kana", () => {
  const { answerFieldSelector } = setup()
  expect(answerFieldSelector).toHaveDisplayValue("Kana")
})

test("Selecting a question field value should remove it from the answer field selector", async () => {
  const { questionFieldSelector, answerFieldSelector } = setup()
  await userEvent.selectOptions(questionFieldSelector, "Japanese")
  expect(questionFieldSelector).toHaveValue('learnable.field.japanese.name')

  try {
    // The Japanese option should not exist since the question field selector
    // has it set above
    await userEvent.selectOptions(answerFieldSelector, "Japanese")
  } catch {
    // It should not have changed and stay as its default kana value
    expect(answerFieldSelector).toHaveValue('learnable.field.kana.name')
  }
})

test("Selecting an answer field value should remove it from the question field selector", async () => {
  const { questionFieldSelector, answerFieldSelector } = setup()
  await userEvent.selectOptions(answerFieldSelector, "English Meaning")
  expect(answerFieldSelector).toHaveValue('learnable.field.meaning.name')

  try {
    // The English Meaning option should not exist since the answer field selector
    // has it set above
    await userEvent.selectOptions(questionFieldSelector, "English Meaning")
  } catch {
    // It should not have changed and stay as its default romaji value
    expect(questionFieldSelector).toHaveValue('learnable.field.romaji.name')
  }
})

test("Changing the question field should call the onSelect event handler with the updated settings", async () => {
  const { questionFieldSelector } = setup()
  await userEvent.selectOptions(questionFieldSelector, "English Meaning")
  expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).questionField).toBe(LearnableField.MEANING)
})

test("Changing the answer field should call the onSelect event handler with the updated settings", async () => {
  const { answerFieldSelector } = setup()
  await userEvent.selectOptions(answerFieldSelector, "On'Yomi Reading")
  expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).answerField).toBe(LearnableField.ONYOMI_READING)
})

test("Selecting the match question type should change the description accordingly", () => {
  const { matchModeButton } = setup()
  fireEvent.click(matchModeButton)
  expect(
    screen.getByText("You're given several pieces of info with their answers and you must match them up correctly.")
  )
})

test("Selecting match should call the onSelect event handler with the Match question type and 3 quantity", () => {
  const { matchModeButton } = setup()
  fireEvent.click(matchModeButton)
  expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).type).toBe(QuestionType.MATCH)
  expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).quantity).toBe(3)
})
