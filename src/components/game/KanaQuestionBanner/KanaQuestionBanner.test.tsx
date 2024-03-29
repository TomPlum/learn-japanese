import { render } from "@testing-library/react"
import KanaQuestionBanner  from "./KanaQuestionBanner"
import { Kana } from "../../../domain/kana/Kana"
import KanaType from "../../../domain/kana/KanaType"
import { KanaColumn } from "../../../domain/kana/KanaColumn"
import { getByTextWithElements } from "__test-utils__/Queries"

test("Regular kana should use the word 'kana' in the banner message", () => {
  const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
  render(<KanaQuestionBanner value={kana} />)
  expect(getByTextWithElements("Which kana is 'a' ?")).toBeInTheDocument()
})

test("Diagraph kana should use the word 'diagraph' in the banner message", () => {
  const kana = new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true)
  render(<KanaQuestionBanner value={kana} />)
  expect(getByTextWithElements("Which diagraph is 'bya' ?")).toBeInTheDocument()
})

test("Kana with multiple pronunciations should display both separated by 'or'", () => {
  const kana = new Kana("ふ", ["fu", "hu"], KanaType.HIRAGANA, KanaColumn.H, false)
  render(<KanaQuestionBanner value={kana} />)
  expect(getByTextWithElements("Which kana is 'fu' or 'hu' ?")).toBeInTheDocument()
})
