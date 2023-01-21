import { render } from "@testing-library/react"
import GenkiExampleTable from "../../../../components/ui/genki/GenkiExampleTable"

test("Should render the given example Japanese", () => {
    const component = render(
        <GenkiExampleTable
            book={1}
            values={[
                {
                    japanese: { value: "にほんごとえいごをはなします。" },
                    english: { value: "I speak Japanese and English." }
                }
            ]}
        />
    )
    const japanese = component.getByText("にほんごとえいごをはなします。")
    expect(japanese).toBeInTheDocument()
})

test("Should render the given example English", () => {
    const component = render(
        <GenkiExampleTable
            book={1}
            values={[
                {
                    japanese: { value: "にほんごとえいごをはなします。" },
                    english: { value: "I speak Japanese and English." }
                }
            ]}
        />
    )
    const english = component.getByText("I speak Japanese and English.")
    expect(english).toBeInTheDocument()
})

test("Should render the romaji for the example Japanese", () => {
    const component = render(
        <GenkiExampleTable
            book={1}
            values={[
                {
                    japanese: { value: "にほんごとえいごをはなします。" },
                    english: { value: "I speak Japanese and English." }
                }
            ]}
        />
    )
    const romaji = component.getByText("nihongotoeigowohanashimasu")
    expect(romaji).toBeInTheDocument()
})

test("Should NOT render the romaji for the example Japanese if it expilctly hidden", () => {
    const component = render(
        <GenkiExampleTable
            book={1}
            values={[
                {
                    japanese: { value: "にほんごとえいごをはなします。", hideRomaji: true },
                    english: { value: "I speak Japanese and English." }
                }
            ]}
        />
    )
    const romaji = component.queryByText("nihongotoeigowohanashimasu")
    expect(romaji).not.toBeInTheDocument()
})

test("Should render the underlined Japanese text with genkiOne class if the book is 1", () => {
    const component = render(
        <GenkiExampleTable
            book={1}
            values={[
                {
                    japanese: { value: "にほんごとえいごをはなします。", underline: "にほんご" },
                    english: { value: "I speak Japanese and English." }
                }
            ]}
        />
    )
    const underlined = component.getByText("にほんご")
    expect(underlined).toHaveClass("genkiOneUnderline")
})

test("Should render the underlined English text with genkiOne class if the book is 1", () => {
    const component = render(
        <GenkiExampleTable
            book={1}
            values={[
                {
                    japanese: { value: "にほんごとえいごをはなします。" },
                    english: { value: "I speak Japanese and English.", underline: "Japanese" }
                }
            ]}
        />
    )
    const underlined = component.getByText("Japanese")
    expect(underlined).toHaveClass("genkiOneUnderline")
})

test("Should render the underlined Japanese text with genkiTwo class if the book is 2", () => {
    const component = render(
        <GenkiExampleTable
            book={2}
            values={[
                {
                    japanese: { value: "にほんごとえいごをはなします。", underline: "にほんご" },
                    english: { value: "I speak Japanese and English." }
                }
            ]}
        />
    )
    const underlined = component.getByText("にほんご")
    expect(underlined).toHaveClass("genkiTwoUnderline")
})

test("Should render the underlined English text with genkiTwo class if the book is 2", () => {
    const component = render(
        <GenkiExampleTable
            book={2}
            values={[
                {
                    japanese: { value: "にほんごとえいごをはなします。" },
                    english: { value: "I speak Japanese and English.", underline: "Japanese" }
                }
            ]}
        />
    )
    const underlined = component.getByText("Japanese")
    expect(underlined).toHaveClass("genkiTwoUnderline")
})
