import HomeButton from "../../../../components/ui/buttons/HomeButton"
import renderWithTranslation from "../../../renderWithTranslation"

test("It should render the text from the translation", () => {
  const component = renderWithTranslation(<HomeButton />)
  expect(component.getByText("Home")).toBeInTheDocument()
})
