import { fireEvent, screen } from "@testing-library/react"
import LearnButton  from "./LearnButton"
import { render } from "__test-utils__"

const setup = () => {
  const { component } = render(<LearnButton />)
  return {
    button: component.getByTestId("learning-resources-button"),
    ...component
  }
}

test("Clicking on the kanji dictionary link should route to the kanji page", async () => {
  const { button } = setup()
  fireEvent.click(button)
  expect(await screen.findByText("Kanji Dictionary")).toHaveAttribute("href", "/example-base-path/kanji")
})

test("Clicking on the kana dictionary link should route to the kanji page", async () => {
  const { button } = setup()
  fireEvent.click(button)
  expect(await screen.findByText("Kana Dictionary")).toHaveAttribute("href", "/example-base-path/kana")
})

test("Clicking on the genki knowledge bank link should route to the genki page", async () => {
  const { button } = setup()
  fireEvent.click(button)
  expect(await screen.findByText("Genki Knowledge Bank")).toHaveAttribute("href", "/example-base-path/genki")
})

test("Clicking on the genki grammar bank link should route to the genki grammar page", async () => {
  const { button } = setup()
  fireEvent.click(button)
  expect(await screen.findByText("Genki Grammar Bank")).toHaveAttribute("href", "/example-base-path/genki/grammar")
})
