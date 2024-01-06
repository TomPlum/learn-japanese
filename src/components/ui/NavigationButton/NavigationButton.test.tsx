import NavigationButton, { ItemProps, NavigationButtonProps }  from "./NavigationButton"
import { fireEvent, screen, waitForElementToBeRemoved, within } from "@testing-library/react"
import { faSmile } from "@fortawesome/free-solid-svg-icons"
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons"
import renderWithTranslation from "__test-utils__/renderWithTranslation"

const onShowHandler = vi.fn()
const onHideHandler = vi.fn()
const onClickButtonHandler = vi.fn()
const onClickItemHandler = vi.fn()

let buttonProps: NavigationButtonProps
let itemProps: ItemProps

beforeEach(() => {
  buttonProps = {
    id: "test-button",
    text: "Test Button",
    textPlacement: "bottom",
    loading: false,
    icon: faSmile,
    width: 150,
    textLoading: false,
    containerClass: "myContainerClass",
    className: "myClassName",
    menuClass: "myMenuClassName",
    iconClass: "myIconClassName",
    textClass: "myTextClassName",
    disabled: false,
    disableDropdown: false,
    searchable: true,
    showItemQuantity: 5,
    onClick: onClickButtonHandler,
    onShow: onShowHandler,
    onHide: onHideHandler
  }

  itemProps = {
    icon: faCheckCircle,
    iconClass: "myItemIconClass",
    className: "myItemClass",
    href: "https://japanese.tomplumpton.me/my-link",
    style: {},
    onClick: onClickItemHandler
  }
})

const setup = () => {
  const component = renderWithTranslation(
    <NavigationButton {...buttonProps}>
      <NavigationButton.Item {...itemProps}>My Link</NavigationButton.Item>

      <NavigationButton.Item {...itemProps}>My Second Link</NavigationButton.Item>
    </NavigationButton>
  )

  return {
    button: component.getByTestId(`${buttonProps.id}-nav-link`),
    ...component
  }
}

test("Clicking the button should call the onClick event handler if the dropdown is disabled", () => {
  buttonProps.disableDropdown = true
  const { button } = setup()
  fireEvent.click(button)
  expect(onClickButtonHandler).toHaveBeenCalled()
})

test("Clicking the button should not call the onClick event handler if the dropdown is enabled", async () => {
  buttonProps.disableDropdown = false
  const { button } = setup()

  fireEvent.click(button)
  expect(await screen.findByText("My Link")).toBeInTheDocument()

  expect(onClickButtonHandler).not.toHaveBeenCalled()
})

test("Passing the disabled prop as true should disable the button link", () => {
  buttonProps.disabled = true
  setup()
  expect(screen.getByTestId("test-button-nav-link")).toHaveAttribute("aria-disabled", "true")
})

test("Passing the disabled prop as false should enable the button link", () => {
  buttonProps.disabled = false
  const { button } = setup()
  expect(button).not.toHaveAttribute("aria-disabled", "true")
})

test("Passing the searchable prop as true should render a search input field", async () => {
  buttonProps.searchable = true
  const { button } = setup()

  fireEvent.click(button)
  expect(await screen.findByText("My Link")).toBeInTheDocument()

  const field = screen.getByPlaceholderText("Search")
  expect(field).toBeInTheDocument()
})

test("Focusing the search field should expand its height", async () => {
  const { button } = setup()

  fireEvent.click(button)
  expect(await screen.findByText("My Link")).toBeInTheDocument()

  const search = screen.getByPlaceholderText("Search")
  expect(search).toHaveStyle({ height: "30px" })
  fireEvent.focus(search)
  expect(search).toHaveStyle({ height: "45px" })
})

test("Deleting the search term should collapse the input height again", async () => {
  const { button } = setup()

  // Click on the button to render the menu
  fireEvent.click(button)
  expect(await screen.findByText("My Link")).toBeInTheDocument()

  // Grab the search field and check it's collapsed
  const search = screen.getByPlaceholderText("Search")
  expect(search).toHaveStyle({ height: "30px" })

  // Search for something. Focusing will expand it
  fireEvent.focus(search)
  fireEvent.change(search, { target: { value: "Second" } })
  expect(search).toHaveStyle({ height: "45px" })

  // Deleting the search term should collapse it again
  fireEvent.change(search, { target: { value: "" } })
  expect(search).toHaveStyle({ height: "30px" })
})

test("Searching an item should filter the results", async () => {
  const { button } = setup()

  fireEvent.click(button)
  expect(await screen.findByText("My Link")).toBeInTheDocument()

  const search = screen.getByPlaceholderText("Search")
  fireEvent.change(search, { target: { value: "Second" } })

  expect(screen.getByText("My Second Link")).toBeInTheDocument()
  expect(screen.queryByText("My Link")).not.toBeInTheDocument()
})

test("Passing the searchable prop as false should not render a search input field", () => {
  buttonProps.searchable = false
  expect(screen.queryByPlaceholderText("Search")).not.toBeInTheDocument()
})

test("Clicking outside the drop-down menu should stop rendering it", async () => {
  const { button } = setup()

  // Open the menu
  fireEvent.click(button)
  const menuLink = await screen.findByText("My Link")
  expect(menuLink).toBeInTheDocument()

  // Click outside the menu
  fireEvent.click(document.body)
  await waitForElementToBeRemoved(menuLink)
})

test("Clicking on a link should call the onClick event handler", async () => {
  const { button } = setup()

  fireEvent.click(button)
  const menuLink = await screen.findByText("My Link")
  expect(menuLink).toBeInTheDocument()

  fireEvent.click(menuLink)
  expect(onClickItemHandler).toHaveBeenCalled()
})

test("Clicking the button to render the menu should call the onShow event handler", async () => {
  const { button } = setup()

  // Open the menu
  fireEvent.click(button)
  const menuLink = await screen.findByText("My Link")
  expect(menuLink).toBeInTheDocument()

  expect(onShowHandler).toHaveBeenCalled()
})

test("Clicking the button twice to stop rendering the menu should not call the onShow event handler", async () => {
  const { button } = setup()

  // Open the menu
  fireEvent.click(button)
  expect(await screen.findByText("My Link")).toBeInTheDocument()
  expect(onShowHandler).toHaveBeenCalled()

  // Close the menu
  onShowHandler.mockReset()
  fireEvent.click(button)
  expect(onShowHandler).not.toHaveBeenCalled()
})

test("Dismissing the menu to stop rendering it should call the onHide event handler", async () => {
  const { button } = setup()

  // Open the menu
  fireEvent.click(button)
  const menuLink = await screen.findByText("My Link")
  expect(menuLink).toBeInTheDocument()

  // Click outside the menu
  fireEvent.click(document.body)
  await waitForElementToBeRemoved(menuLink)

  expect(onHideHandler).toHaveBeenCalled()
})

test("It should disable the search field if enabled and loading is true", async () => {
  buttonProps.loading = true
  buttonProps.searchable = true
  const { button } = setup()

  // Open the menu
  fireEvent.click(button)
  expect(await screen.findByTestId("test-button")).toBeInTheDocument()

  expect(screen.getByPlaceholderText("Search")).toBeDisabled()
})

test("Omitting the ID property should set the popover ID to a default value", async () => {
  buttonProps.id = undefined
  const { button } = setup()

  // Open the menu
  fireEvent.click(button)
  expect(await screen.findByText("My Link")).toBeInTheDocument()

  expect(screen.getByTestId("undefined-menu")).toHaveAttribute("id", "nav-btn")
})

test("Should render the text loading component in place of the right button text if textLoading is passed as true", () => {
  buttonProps.textLoading = true
  buttonProps.textPlacement = "right"
  buttonProps.text = "Test Button"

  const { button } = setup()

  expect(within(button).getByTestId("text-loading")).toBeInTheDocument()
  expect(within(button).queryByText("Test Button")).not.toBeInTheDocument()
})

test("Should render the text loading component in place of the bottom button text if textLoading is passed as true", () => {
  buttonProps.textLoading = true
  buttonProps.textPlacement = "bottom"
  buttonProps.text = "Test Button"

  const { button } = setup()

  expect(within(button).getByTestId("text-loading")).toBeInTheDocument()
  expect(within(button).queryByText("Test Button")).not.toBeInTheDocument()
})

test("Should render the right button text if textLoading is not passed", () => {
  buttonProps.textLoading = undefined
  buttonProps.textPlacement = "right"
  buttonProps.text = "Test Button"

  const { button } = setup()

  expect(within(button).getByText("Test Button")).toBeInTheDocument()
  expect(within(button).queryByTestId("text-loading")).not.toBeInTheDocument()
})

test("Should render the bottom button text if textLoading is not passed", () => {
  buttonProps.textLoading = undefined
  buttonProps.textPlacement = "bottom"
  buttonProps.text = "Test Button"

  const { button } = setup()

  expect(within(button).getByText("Test Button")).toBeInTheDocument()
  expect(within(button).queryByTestId("text-loading")).not.toBeInTheDocument()
})
