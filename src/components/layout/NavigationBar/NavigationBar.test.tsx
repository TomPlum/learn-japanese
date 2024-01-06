import { fireEvent, screen } from "@testing-library/react"
import NavigationBar, { NavigationBarProps }  from "./NavigationBar"
import { createMemoryHistory } from "history"
import { AppMode } from "../../../domain/AppMode"
import { store } from "../../../store"
import { setApplicationMode } from "../../../slices/ModeSlice"
import { clearUser, setUser } from "../../../slices/UserSlice"
import { testUser } from "../../../setupTests"
import renderTranslatedReduxConsumer from "__test-utils__/renderTranslatedReduxConsumer"
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom"
import { History } from "@remix-run/router"

const history = createMemoryHistory() as never as History
const onLaunchLoginModalHandler = vi.fn()

let props: NavigationBarProps

const setup = () => {
  const component = renderTranslatedReduxConsumer(
      <HistoryRouter history={history}>
        <NavigationBar {...props} />
      </HistoryRouter>
  )

  return {
    home: component.getByTestId("home-button-nav-link"),
    theme: component.getByTestId("theme-button"),
    font: component.getByTestId("font-selector"),
    login: component.getByTestId("user-button-nav-link"),
    ...component
  }
}

beforeEach(() => {
  props = {
    onLaunchLoginModal: onLaunchLoginModalHandler
  }
  store.dispatch(setApplicationMode(AppMode.LEARN))
})

test("Clicking the 'Home' button should route the user to the menu", async () => {
  const { home } = setup()
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
  store.dispatch(setUser(testUser))
  setup()
  expect(await screen.findByTestId("notifications-button")).toBeInTheDocument()
})

test("Should not render the notifications button if the user is not logged in", async () => {
  store.dispatch(clearUser())
  setup()
  expect(await screen.findByText("Home")).toBeInTheDocument()
  expect(screen.queryByTestId("notifications-button")).not.toBeInTheDocument()
})
