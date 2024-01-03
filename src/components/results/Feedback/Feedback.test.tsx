import { fireEvent, render, screen } from "@testing-library/react"
import Feedback, { FeedbackProps }  from "./Feedback"
import { Kana } from "../../../domain/kana/Kana"
import KanaType from "../../../domain/kana/KanaType"
import { KanaColumn } from "../../../domain/kana/KanaColumn"

const onCloseHandler = vi.fn()

let props: FeedbackProps

beforeEach(() => {
  props = {
    data: [],
    show: true,
    onClose: onCloseHandler
  }
})

test("A single kana with one failure instance should render 1 tile", () => {
  props.data = [new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)]
  render(<Feedback {...props} />)

  expect(screen.getByText("x1")).toBeInTheDocument()
  expect(screen.getByText("a")).toBeInTheDocument()
  expect(screen.getByText("あ")).toBeInTheDocument()
})

test("Multiple kana should render multiple tiles with their respective mistakes", () => {
  const bya = new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true)
  const a = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
  props.data = [a, bya, bya]

  render(<Feedback {...props} />)

  expect(screen.getByText("x2")).toBeInTheDocument()
  expect(screen.getByText("bya")).toBeInTheDocument()
  expect(screen.getByText("びゃ")).toBeInTheDocument()

  expect(screen.getByText("x1")).toBeInTheDocument()
  expect(screen.getByText("a")).toBeInTheDocument()
  expect(screen.getByText("あ")).toBeInTheDocument()
})

test("Should not render the modal if the show property is passed as false", () => {
  props.show = false
  render(<Feedback {...props} />)
  expect(screen.queryByText("Mistakes")).not.toBeInTheDocument()
})

test("Clicking the close button should call the onClose event handler", () => {
  render(<Feedback {...props} />)
  fireEvent.click(screen.getByText("Close"))
  expect(onCloseHandler).toHaveBeenCalled()
})
