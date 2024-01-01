import { fireEvent, render, screen } from "@testing-library/react"
import KanaCarousel from "../../../../components/ui/kana/KanaCarousel"
import { Kana } from "../../../../domain/kana/Kana"
import KanaType from "../../../../domain/kana/KanaType"
import { KanaColumn } from "../../../../domain/kana/KanaColumn"
import Arrays from "../../../../utility/Arrays"

beforeEach(() => {
  Arrays.getRandomObject = vi.fn().mockImplementation((array: any[]) => {
    const element = array[0]
    return [element, array.splice(1, array.length - 1)]
  })
})

const setup = () => {
  const a = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
  const i = new Kana("い", ["i"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
  const e = new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)

  const component = render(<KanaCarousel kana={[a, i, e]} />)

  return {
    animationWrapper: component.getByTestId("animation"),
    ...component
  }
}

test("Should display a random kana on load", () => {
  setup()
  expect(screen.getByText("あ")).toBeInTheDocument()
  expect(screen.getByText("a")).toBeInTheDocument()
})

test("Should display another random kana after the animation iterates", () => {
  const { animationWrapper } = setup()
  expect(screen.getByText("あ")).toBeInTheDocument()
  fireEvent.animationIteration(animationWrapper)
  expect(screen.getByText("い")).toBeInTheDocument()
})

test("Should reset the kana after exhausting them all", () => {
  const { animationWrapper } = setup()

  //Exhaust
  expect(screen.getByText("あ")).toBeInTheDocument()
  fireEvent.animationIteration(animationWrapper)

  expect(screen.getByText("い")).toBeInTheDocument()
  fireEvent.animationIteration(animationWrapper)

  expect(screen.getByText("え")).toBeInTheDocument()
  fireEvent.animationIteration(animationWrapper)

  expect(screen.getByText("あ")).toBeInTheDocument()
})
