import { render, screen } from "@testing-library/react"
import AnswerMistake  from "./AnswerMistake"
import { Kana } from "types/kana/Kana"
import KanaType from "types/kana/KanaType"
import { KanaColumn } from "types/kana/KanaColumn"
import Definition from "types/sentence/Definition"

test("Should render the passed kana's character", () => {
  const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
  render(<AnswerMistake value={kana} times={3} />)
  expect(screen.getByText("あ")).toBeInTheDocument()
})

test("Should render the passed kana's first rōmaji", () => {
  const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
  render(<AnswerMistake value={kana} times={3} />)
  expect(screen.getByText("a")).toBeInTheDocument()
})

test("Should render the kanji variation if the mistake has one", () => {
  const learnable = new Definition(["meaning"], "人", "ひと", "definition")
  render(<AnswerMistake value={learnable} times={3} />)
  expect(screen.getByText("人")).toBeInTheDocument()
})

test("Should render the passed kana's number of mistakes", () => {
  const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
  render(<AnswerMistake value={kana} times={3} />)
  expect(screen.getByText("x3")).toBeInTheDocument()
})
