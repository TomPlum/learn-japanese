import HomeButton  from "./HomeButton"
import renderWithTranslation from "tests/renderWithTranslation"

test("It should render the text from the translation", () => {
  const component = renderWithTranslation(<HomeButton />)
  expect(component.getByText("Home")).toBeInTheDocument()
})
