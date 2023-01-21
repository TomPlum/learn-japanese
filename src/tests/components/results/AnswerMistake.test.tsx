import { render, screen } from "@testing-library/react"
import AnswerMistake from "../../../components/results/AnswerMistake"
import { Kana } from "../../../domain/kana/Kana"
import KanaType from "../../../domain/kana/KanaType"
import { KanaColumn } from "../../../domain/kana/KanaColumn"
import Definition from "../../../domain/sentence/Definition"

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
