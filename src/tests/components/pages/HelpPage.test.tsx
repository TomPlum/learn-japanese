import { render } from "@testing-library/react"
import HelpPage from "../../../components/pages/HelpPage"

test("Should render the FAQs", () => {
  const component = render(<HelpPage />)
  expect(component.getByText("Frequently Asked Questions")).toBeInTheDocument()
})
