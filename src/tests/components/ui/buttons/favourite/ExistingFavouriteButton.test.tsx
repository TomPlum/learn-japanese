import { fireEvent, screen } from "@testing-library/react"
import ExistingFavouriteButton, {
  ExistingFavouriteButtonProps
} from "../../../../../components/ui/buttons/favourite/ExistingFavouriteButton"
import { faApple } from "@fortawesome/free-brands-svg-icons"
import renderWithTranslation from "../../../../renderWithTranslation"

const onRemoveHandler = vi.fn()
const onCancelHandler = vi.fn()

let props: ExistingFavouriteButtonProps

const setup = () => {
  const component = renderWithTranslation(<ExistingFavouriteButton {...props} />)
  return {
    ...component
  }
}

beforeEach(() => {
  props = {
    id: 1,
    icon: faApple,
    selected: false,
    name: "Test Preset",
    onRemove: onRemoveHandler,
    onCancel: onCancelHandler,
    className: "testClassName"
  }
})

test("Should render the name of the preset when not selected", () => {
  props.selected = false
  setup()
  expect(screen.getByText("Test Preset")).toBeInTheDocument()
})

test("Clicking the button should call the onStart event handler with the favourite ID when not selected", () => {
  props.selected = false
  const { container } = setup()

  // Mouse enter the listening surface div
  const surface = container.firstChild?.firstChild!
  fireEvent.mouseEnter(surface)

  // Clicking the button should call the onRemove event handler
  fireEvent.click(surface)
  expect(onRemoveHandler).toHaveBeenCalledWith(1)
})

test("Clicking the button should call the onCancel event handler with the favourite ID when selected", () => {
  props.selected = true
  const { container } = setup()

  // Mouse enter the listening surface div
  const surface = container.firstChild?.firstChild!
  fireEvent.mouseEnter(surface)

  // Clicking the button should call the onCancel event handler
  fireEvent.click(surface)
  expect(onCancelHandler).toHaveBeenCalledWith(1)
})

test("Should render the remove text hovering over the button if not selected", () => {
  props.selected = false
  const { container } = setup()

  // Mouse enter the listening surface div
  fireEvent.mouseEnter(container.firstChild?.firstChild!)

  // Should stop rendering the preset name and show the remove text
  expect(screen.queryByText("Test Preset")).not.toBeInTheDocument()
  expect(screen.getByText("Remove")).toBeInTheDocument()

  // Mouse out of the listening surface div
  fireEvent.mouseOut(container.firstChild?.firstChild!)

  // Should stop rendering the remove text and re-render the preset name
  expect(screen.getByText("Test Preset")).toBeInTheDocument()
  expect(screen.queryByText("Remove")).not.toBeInTheDocument()
})

test("Should render the cancel text hovering over the button if selected", () => {
  props.selected = true
  const { container } = setup()

  // Mouse enter the listening surface div
  fireEvent.mouseEnter(container.firstChild?.firstChild!)

  // Should stop rendering the preset name and show the cancel text
  expect(screen.queryByText("Test Preset")).not.toBeInTheDocument()
  expect(screen.getByText("Cancel")).toBeInTheDocument()

  // Mouse out of the listening surface div
  fireEvent.mouseOut(container.firstChild?.firstChild!)

  // Should stop rendering the cancel text and re-render the preset name
  expect(screen.getByText("Test Preset")).toBeInTheDocument()
  expect(screen.queryByText("Cancel")).not.toBeInTheDocument()
})
