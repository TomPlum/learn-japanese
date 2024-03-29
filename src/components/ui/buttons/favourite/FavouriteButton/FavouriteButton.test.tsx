import { fireEvent, screen } from "@testing-library/react"
import FavouriteButton, { FavouriteButtonProps }  from "./FavouriteButton"
import { faApple } from "@fortawesome/free-brands-svg-icons"
import PlayMode from "../../../../../domain/session/PlayMode"
import { KanaSettingsBuilder } from "../../../../../domain/session/settings/data/KanaSettings"
import { GameSettingsBuilder } from "../../../../../domain/session/settings/game/GameSettings"
import { render } from "__test-utils__"

const onStartHandler = vi.fn()

let props: FavouriteButtonProps

const setup = () => {
  const component = render(<FavouriteButton {...props} />)
  return {
    ...component
  }
}
const preset = new PlayMode(
  1,
  "Test Button",
  "desc",
  "ffffff",
  faApple,
  new KanaSettingsBuilder().build(),
  new GameSettingsBuilder().build(),
  "Topic"
)

beforeEach(() => {
  props = {
    preset: preset,
    selected: false,
    className: "myClass",
    onStart: onStartHandler
  }
})

test("Should render the name of the button", () => {
  setup()
  expect(screen.getByText("Test Button")).toBeInTheDocument()
})

test("Clicking the button should call the onStart event handler", () => {
  const { component } = setup()

  // Mouse enter the listening surface div
  const surface = component.container.firstChild?.firstChild!
  fireEvent.mouseEnter(surface)

  // Clicking the button should call the event handler
  fireEvent.click(surface)
  expect(onStartHandler).toHaveBeenCalledWith(preset)
})

test("Should render the start text when hovering over the button if not selected", () => {
  props.selected = false
  const { component } = setup()

  // Mouse enter the listening surface div
  fireEvent.mouseEnter(component.container.firstChild?.firstChild!)

  // Should stop rendering the preset name and show the start text
  expect(screen.queryByText("Test Button")).not.toBeInTheDocument()
  expect(screen.getByText("Start Play")).toBeInTheDocument()

  // Mouse out of the listening surface div
  fireEvent.mouseOut(component.container.firstChild?.firstChild!)

  // Should stop rendering the start text and re-render the preset name
  expect(screen.getByText("Test Button")).toBeInTheDocument()
  expect(screen.queryByText("Start Play")).not.toBeInTheDocument()
})

test("Should render the loading dots animation when selected is true", () => {
  props.selected = true
  const { component } = setup()

  // Mouse enter the listening surface div
  const surface = component.container.firstChild?.firstChild!
  fireEvent.mouseEnter(surface)

  // Should render the loading dots
  expect(screen.getByTestId("loading-dots")).toBeInTheDocument()
})
