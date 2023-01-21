import { render } from "@testing-library/react"
import FuriganaDisplay from "../../../../components/ui/display/FuriganaDisplay"
import { getByTextWithMarkup } from "../../../Queries"

test("Should render each of the given characters with furigana at the bottom", () => {
    render(
        <FuriganaDisplay
            chars={[
                { kanji: "窓", kana: "まど" },
                { pre: "が", kanji: "開", kana: "あ", okurigana: "い", post: "ています。" }
            ]}
            position="bottom"
        />
    )
    expect(getByTextWithMarkup("窓まどが開あいています。")).toBeInTheDocument()
})

test("Should render each of the given characters with furigana at the top", () => {
    render(
        <FuriganaDisplay
            chars={[
                { kanji: "窓", kana: "まど" },
                { pre: "が", kanji: "開", kana: "あ", okurigana: "い", post: "ています。" }
            ]}
            position="top"
        />
    )
    expect(getByTextWithMarkup("窓まどが開あいています。")).toBeInTheDocument()
})
