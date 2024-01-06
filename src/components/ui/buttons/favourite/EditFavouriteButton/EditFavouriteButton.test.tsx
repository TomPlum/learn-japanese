import { fireEvent, screen } from "@testing-library/react"
import { faApple } from "@fortawesome/free-brands-svg-icons"
import EditFavouriteButton, {
  EditFavouriteButtonProps
} from "../../../../../components/ui/buttons/favourite/EditFavouriteButton"
import renderWithTranslation from "__test-utils__/renderWithTranslation"

const onAddHandler = vi.fn()
const onCancelHandler = vi.fn()

let props: EditFavouriteButtonProps

const setup = () => {
  const component = renderWithTranslation(<EditFavouriteButton {...props} />)
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
    onAdd: onAddHandler,
    onCancel: onCancelHandler
  }
})

test("Should render the name of the preset when not selected", () => {
  props.selected = false
  setup()
  expect(screen.getByText("Test Preset")).toBeInTheDocument()
})

test("Clicking the button should call the onAdd event handler with the preset ID when not selected", () => {
  props.selected = false
  const { container } = setup()

  // Mouse enter the listening surface div
  const surface = container.firstChild?.firstChild!
  fireEvent.mouseEnter(surface)

  // Clicking the button should call the onAdd event handler
  fireEvent.click(surface)
  expect(onAddHandler).toHaveBeenCalledWith(1)
})

test("Clicking the button should call the onCancel event handler with the preset ID when selected", () => {
  props.selected = true
  const { container } = setup()

  // Mouse enter the listening surface div
  const surface = container.firstChild?.firstChild!
  fireEvent.mouseEnter(surface)

  // Clicking the button should call the onCancel event handler
  fireEvent.click(surface)
  expect(onCancelHandler).toHaveBeenCalledWith(1)
})

test("Should render the favourite text hovering over the button if not selected", () => {
  props.selected = false
  const { container } = setup()

  // Mouse enter the listening surface div
  fireEvent.mouseEnter(container.firstChild?.firstChild!)

  // Should stop rendering the preset name and show the favourite text
  expect(screen.queryByText("Test Preset")).not.toBeInTheDocument()
  expect(screen.getByText("Favourite")).toBeInTheDocument()

  // Mouse out of the listening surface div
  fireEvent.mouseOut(container.firstChild?.firstChild!)

  // Should stop rendering the favourite text and re-render the preset name
  expect(screen.getByText("Test Preset")).toBeInTheDocument()
  expect(screen.queryByText("Favourite")).not.toBeInTheDocument()
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

test("Should add the given class name to the container", () => {
  props.className = "testClassName"
  const { container } = setup()
  expect(container.firstChild).toHaveClass("testClassName")
})
