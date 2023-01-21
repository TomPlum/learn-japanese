import { render, screen } from "@testing-library/react"
import MenuDescription from "../../../components/ui/MenuDescription"

test("Should render the text property", () => {
  const text = "This is some example text"
  render(<MenuDescription text={text} />)
  expect(screen.getByText(text)).toBeInTheDocument()
})
