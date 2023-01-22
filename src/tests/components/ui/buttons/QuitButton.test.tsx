import QuitButton from "../../../../components/ui/buttons/QuitButton"
import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"

test("Clicking the Quit Button should call the onClick event handler", () => {
  const handleClick = jest.fn()
  render(<QuitButton onClick={handleClick} />)

  fireEvent.click(screen.getByTitle("Quit"))

  expect(handleClick).toHaveBeenCalled()
})
