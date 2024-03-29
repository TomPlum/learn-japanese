import { fireEvent, screen } from "@testing-library/react"
import NavigationBar, { NavigationBarProps }  from "./NavigationBar"
import { testUser } from "../../../setupTests"
import { render } from "__test-utils__"
import { User } from "context/UserContext";

const onLaunchLoginModalHandler = vi.fn()

let props: NavigationBarProps

const setup = (user?: User) => {
  const { component, history } = render(<NavigationBar {...props} />, { user })

  return {
    home: component.getByTestId("home-button-nav-link"),
    theme: component.getByTestId("theme-button"),
    font: component.getByTestId("font-selector"),
    login: component.getByTestId("user-button-nav-link"),
    history,
    ...component
  }
}

beforeEach(() => {
  props = {
    onLaunchLoginModal: onLaunchLoginModalHandler
  }
})

test("Clicking the 'Home' button should route the user to the menu", async () => {
  const { home, history } = setup()
  expect(await screen.findByText("Home")).toBeInTheDocument()
  fireEvent.click(home)
  expect(history.location.pathname).toBe("/")
})

test("Clicking the login button while not logged in should call the onLaunchLogin event handler", async () => {
  const { login } = setup()
  expect(await screen.findByText("Home")).toBeInTheDocument()
  fireEvent.click(login)
  expect(onLaunchLoginModalHandler).toHaveBeenCalled()
})

test("Should render the notifications button if the user is logged in", async () => {
  setup(testUser)
  expect(await screen.findByTestId("notifications-button")).toBeInTheDocument()
})

test("Should not render the notifications button if the user is not logged in", async () => {
  setup()
  expect(await screen.findByText("Home")).toBeInTheDocument()
  expect(screen.queryByTestId("notifications-button")).not.toBeInTheDocument()
})
