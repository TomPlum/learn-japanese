import HomeButton  from "./HomeButton"
import renderWithTranslation from "__test-utils__/renderWithTranslation"

test("It should render the text from the translation", () => {
  const component = renderWithTranslation(<HomeButton />)
  expect(component.getByText("Home")).toBeInTheDocument()
})
