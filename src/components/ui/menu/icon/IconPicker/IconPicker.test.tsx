import { fireEvent, render, screen } from "@testing-library/react"
import IconPicker  from "./IconPicker"
import { Numbers } from "../../../../../utility/Numbers"

const onSelectHandler = vi.fn()

const setup = () => {
  const component = render(<IconPicker onSelect={onSelectHandler} />)
  return {
    button: component.getByTestId("icon-picker-selected"),
    ...component
  }
}

test("It should render the rocket icon by default", () => {
  const { button } = setup()
  expect(button.firstChild).toHaveTextContent("Rocket")
})

test("Selecting an icon from the menu should change the selected icon", async () => {
  // Should start as the default icon
  const { button } = setup()
  expect(button.firstChild).toHaveTextContent("Rocket")

  // Clicking the icon should render the pop-over
  fireEvent.click(button)
  expect(await screen.findByTestId("icon-picker")).toBeInTheDocument()

  // Selecting another icon should change the button
  fireEvent.click(screen.getByTitle("Android"))
  expect(screen.getByTestId("icon-picker-selected")).toHaveTextContent("Android")
})

test("Search for an icon name should render only icons that match that search term", async () => {
  // Should start as the default icon
  const { button } = setup()
  expect(button.firstChild).toHaveTextContent("Rocket")

  // Clicking the icon should render the pop-over
  fireEvent.click(button)
  expect(await screen.findByTestId("icon-picker")).toBeInTheDocument()

  // Searching for "atom" should render the only matching icon
  fireEvent.change(screen.getByPlaceholderText("Search for an icon"), { target: { value: "atom" } })
  expect(screen.getByTestId("icon-picker")).toHaveTextContent("Atom")
})

test("Search for an icon that does not exist should render a message", async () => {
  // Should start as the default icon
  const { button } = setup()
  expect(button.firstChild).toHaveTextContent("Rocket")

  // Clicking the icon should render the pop-over
  fireEvent.click(button)
  expect(await screen.findByTestId("icon-picker")).toBeInTheDocument()

  // Searching for something unknown should render a message
  fireEvent.change(screen.getByPlaceholderText("Search for an icon"), { target: { value: "nvidia123" } })
  expect(screen.getByText('No icons found for "nvidia123".')).toBeInTheDocument()
})

test("Clicking the random button should select a random icon", async () => {
  // Set the random
  Numbers.randomInt = vi.fn().mockReturnValueOnce(5) // Index 5 is FaAdversal

  // Should start as the default icon
  const { button } = setup()
  expect(button.firstChild).toHaveTextContent("Rocket")

  // Clicking random should select a random one
  fireEvent.click(button)
  fireEvent.click(await screen.findByTitle("Randomise"))
  expect(onSelectHandler).toHaveBeenLastCalledWith("FaAdversal", "#FFFFFF")
})

test("Clicking the colour icon should render the colour picker", async () => {
  const { button } = setup()
  fireEvent.click(button)
  fireEvent.click(await screen.findByTitle("Pick Colour"))
  fireEvent.click(await screen.findByTestId("colour-picker"))
})
