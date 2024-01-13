import QuestionDisplay  from "./QuestionDisplay"
import { render } from "__test-utils__"

test("It should display the given string value", () => {
  const { component } = render(<QuestionDisplay question="hello" />)
  expect(component.getByText("hello")).toBeInTheDocument()
})
