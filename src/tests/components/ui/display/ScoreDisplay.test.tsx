import { fireEvent, render } from "@testing-library/react"
import ScoreDisplay from "../../../../components/ui/display/ScoreDisplay"
import each from "jest-each"

test("Should render the passed value", () => {
  const component = render(<ScoreDisplay value={5500} streak={0} />)
  expect(component.getByText("5500")).toBeInTheDocument()
})

test("Passing in a streak of 0 should not render the streak text", () => {
  const component = render(<ScoreDisplay value={5500} streak={0} />)
  expect(component.queryByText("0 streak!")).not.toBeInTheDocument()
})

each([5, 10, 15, 20]).test("Passing in a multiple of 5 streak should not render the streak text", (streak: number) => {
  const component = render(<ScoreDisplay value={5500} streak={streak} />)
  expect(component.getByText(streak + " streak!")).toBeInTheDocument()
})

test("When a streak animation ends, it should stop rendering the text", () => {
  const component = render(<ScoreDisplay value={5500} streak={5} />)

  const streak = component.getByText("5 streak!")
  expect(streak).toBeInTheDocument()

  fireEvent.animationEnd(streak)
  expect(streak).not.toBeInTheDocument()
})
