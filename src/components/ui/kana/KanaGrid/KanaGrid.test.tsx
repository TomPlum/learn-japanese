import { render, screen, waitFor } from "@testing-library/react"
import KanaGrid  from "./KanaGrid"
import { Kana } from "types/kana/Kana"
import KanaType from "types/kana/KanaType"
import { KanaColumn } from "types/kana/KanaColumn"

const kana = [
  new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
  new Kana("い", ["i"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
  new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
  new Kana("お", ["o"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
]

test("Should render a tile for each of the kana", async () => {
  render(<KanaGrid kana={kana} />)
  await waitFor(() => expect(screen.getByText("あ")).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText("い")).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText("え")).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText("お")).toBeInTheDocument())
})

test("Should not render the grid if there are no kana passed in", () => {
  render(<KanaGrid kana={[]} />)
  expect(screen.getByText("No results.")).toBeInTheDocument()
})
