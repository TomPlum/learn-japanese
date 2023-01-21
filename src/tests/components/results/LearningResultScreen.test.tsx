import { fireEvent, render, screen } from "@testing-library/react"
import LearningResultScreen, { LearningResultScreenProps } from "../../../components/results/LearningResultScreen"
import { Kana } from "../../../domain/kana/Kana"
import KanaType from "../../../domain/kana/KanaType"
import { KanaColumn } from "../../../domain/kana/KanaColumn"

const onPracticeHandler = jest.fn()
const onDismissHandler = jest.fn()

let props: LearningResultScreenProps

beforeEach(() => {
  props = {
    onDismiss: onDismissHandler,
    onPractice: onPracticeHandler,
    result: {
      remembered: [
        new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
        new Kana("い", ["i"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
      ],
      forgotten: [new Kana("お", ["o"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)]
    }
  }
})

const setup = () => {
  const component = render(<LearningResultScreen {...props} />)
  return {
    quit: component.getByTitle("Quit"),
    ...component
  }
}

test("Should render the title with the number of cards the user remembered", () => {
  setup()
  expect(screen.getByText("You remembered 2/3!")).toBeInTheDocument()
})

test("Should render a static title when the user remembers all the cards", () => {
  props.result.forgotten = []
  setup()
  expect(screen.getByText("You remembered them all, good job!")).toBeInTheDocument()
})

test("Should render the 'Practice Mistakes' Button when the user has at least 1 mistake", () => {
  setup()
  expect(screen.getByText("Practice Mistakes")).toBeInTheDocument()
})

test("Should not render the 'Practice Mistakes' Button when the user has no mistakes", () => {
  props.result.forgotten = []
  setup()
  expect(screen.queryByText("Practice Mistakes")).not.toBeInTheDocument()
})

test("Clicking the quit button should call the onDismiss event handler", () => {
  const { quit } = setup()
  fireEvent.click(quit)
  expect(onDismissHandler).toHaveBeenCalled()
})

test("Clicking the 'Practice Mistakes' button should call the onPractice event handler with the forgotten", () => {
  setup()
  fireEvent.click(screen.getByText("Practice Mistakes"))
  expect(onPracticeHandler).toHaveBeenCalledWith(props.result.forgotten)
})
