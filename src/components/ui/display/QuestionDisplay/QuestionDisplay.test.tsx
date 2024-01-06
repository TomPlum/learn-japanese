import QuestionDisplay  from "./QuestionDisplay"
import renderReduxConsumer from "__test-utils__/renderReduxConsumer"

test("It should display the given string value", () => {
  const component = renderReduxConsumer(<QuestionDisplay question="hello" />)
  expect(component.getByText("hello")).toBeInTheDocument()
})
