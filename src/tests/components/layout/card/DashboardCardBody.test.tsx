import { render } from "@testing-library/react"
import DashboardCardBody from "../../../../components/layout/card/DashboardCardBody"

test("Should render the children", () => {
  const component = render(
    <DashboardCardBody>
      <span>Example Content</span>
    </DashboardCardBody>
  )
  expect(component.getByText("Example Content")).toBeInTheDocument()
})

test("Should apply the given className to the content wrapper", () => {
  const { container } = render(<DashboardCardBody className="myClassName" />)
  expect(container.firstChild).toHaveClass("myClassName")
})

test("Should apply the blur class to the content wrapper if the updating prop is passed as true", () => {
  const { container } = render(<DashboardCardBody updating />)
  expect(container.firstChild).toHaveClass("blur")
})
