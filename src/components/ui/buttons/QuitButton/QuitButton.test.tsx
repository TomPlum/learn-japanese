import QuitButton  from "./QuitButton"
import { fireEvent, render, screen } from "@testing-library/react"

test("Clicking the Quit Button should call the onClick event handler", () => {
  const handleClick = vi.fn()
  render(<QuitButton onClick={handleClick} />)

  fireEvent.click(screen.getByTitle("Quit"))

  expect(handleClick).toHaveBeenCalled()
})
