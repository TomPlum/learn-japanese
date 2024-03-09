import { render, screen } from "@testing-library/react"
import ParallaxBackground  from "./ParallaxBackground"
import { Kana } from "types/kana/Kana"
import KanaType from "types/kana/KanaType"
import { KanaColumn } from "types/kana/KanaColumn"

const setup = () => {
  const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
  const allKana = []
  for (let i = 0; i < 214; i++) {
    allKana.push(kana)
  }
  const component = render(<ParallaxBackground kana={allKana} />)
  return {
    ...component
  }
}

//TODO: Below tests don't seem to be updating state and re-rendering new kana when resizing.
test.skip("Viewing in a small viewport should render less than 214 background kana", async () => {
  //window.resizeTo(375, 812); //iPhone X
  setup()
  expect(await screen.findByText("あ")).toBeInTheDocument()
  expect(screen.queryAllByText("あ")).toHaveLength(50)
})

test.skip("Viewing in a larger viewport should render more than 214 background kana", () => {
  window.resizeTo(1920, 1080)
  setup()
  expect(screen.queryAllByTestId("background-kana")).toHaveLength(50)
})

test.skip("Resizing the viewport should recalculate the number of background kana", () => {
  window.resizeTo(1920, 1080)
  setup()
  window.resizeTo(375, 812) //iPhone X
  expect(screen.queryAllByTestId("background-kana")).toHaveLength(50)
})
