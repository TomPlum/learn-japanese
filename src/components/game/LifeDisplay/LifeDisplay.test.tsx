import LifeDisplay, { LifeDisplayProps }  from "./LifeDisplay"
import { render, screen } from "@testing-library/react"

const props: LifeDisplayProps = {
  enabled: true,
  hearts: 5
}

const setup = () => {
  const component = render(<LifeDisplay {...props} />)
  return {
    icon: component.getByTitle("Lives"),
    ...component
  }
}

test("Should render the heart icon if the lives quantity is greater than 1", () => {
  const { icon } = setup()
  expect(icon).toBeInTheDocument()
})

test("Should render the quantity", () => {
  setup()
  expect(screen.getByText("5")).toBeInTheDocument()
})

test("Should render an infinity icon when lives are disabled.", () => {
  props.enabled = false
  setup()
  expect(screen.getByTitle("Infinite")).toBeInTheDocument()
})
