import { fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react"
import KanjiMeaningDisplay from "../../../../components/learn/kanji/KanjiMeaningDisplay"

test("5 meanings should just be rendered comma separated with no button", () => {
  const component = render(<KanjiMeaningDisplay meanings={["one", "two", "three", "four", "five"]} />)
  expect(component.getByText("one, two, three, four, five")).toBeInTheDocument()
  expect(component.queryByTitle("Show more meanings")).not.toBeInTheDocument()
})

test("More than 5 meanings should render the extra button", () => {
  const component = render(<KanjiMeaningDisplay meanings={["one", "two", "three", "four", "five", "six"]} />)
  expect(component.getByText("one, two, three, four, five")).toBeInTheDocument()
  expect(component.getByTitle("Show more meanings")).toBeInTheDocument()
})

test("Hovering over the extra meanings button should render a popover with the extra meanings", async () => {
  const component = render(<KanjiMeaningDisplay meanings={["one", "two", "three", "four", "five", "six"]} />)

  //Hover over button
  const button = component.getByTitle("Show more meanings")
  fireEvent.mouseOver(button)

  //Should show popover
  const additionalMeanings = await screen.findByText("Additional Meanings")
  expect(additionalMeanings)
  expect(await screen.findByText("six"))

  //Mouse away from button
  fireEvent.mouseLeave(button)
  await waitForElementToBeRemoved(additionalMeanings)
})

test("Clicking the extra meanings button should render a popover with the extra meanings", async () => {
  const component = render(<KanjiMeaningDisplay meanings={["one", "two", "three", "four", "five", "six"]} />)

  const button = component.getByTitle("Show more meanings")
  fireEvent.click(button)

  expect(await screen.findByText("Additional Meanings"))
  expect(await screen.findByText("six"))
})
