import HomeButton  from "./HomeButton"
import { render } from "__test-utils__"

test("It should render the text from the translation", () => {
  const { component } = render(<HomeButton />)
  expect(component.getByText("Home")).toBeInTheDocument()
})
