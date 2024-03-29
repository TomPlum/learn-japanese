import { act, screen } from "@testing-library/react"
import DynamicDisplay  from "./DynamicDisplay"
import React from "react"
import { render } from "__test-utils__"

test("It should display the passed value", () => {
  const { component } = render(<DynamicDisplay value="は" />)
  expect(component.getByText("は")).toBeInTheDocument()
})

test("Notify incorrect should append the 'active' class to the value", () => {
  const ref = React.createRef<any>()
  const { component } = render(<DynamicDisplay value="あ" ref={ref} />)

  //Initially should have the value class
  expect(screen.getByText("あ")).toHaveClass("value")

  //Calling notifyIncorrect should append the red class
  act(() => ref.current?.notify())
  expect(screen.getByText("あ")).toHaveClass("active")

  //Upon next render, it should switch back to the value class again
  component.rerender(<DynamicDisplay value="あ" ref={ref} />)
  expect(screen.getByText("あ")).toHaveClass("value")
})
