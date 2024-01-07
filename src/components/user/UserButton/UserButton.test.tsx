import { fireEvent, screen } from "@testing-library/react"
import UserButton, { UserButtonProps }  from "./UserButton"
import { store } from "../../../store"
import { clearUser, setUser } from "../../../slices/UserSlice"
import { testUser } from "../../../setupTests"
import { render } from "__test-utils__"

let props: UserButtonProps
const onClickHandler = vi.fn()

const user = { ...testUser }

beforeEach(() => {
  props = {
    disabled: false,
    onClick: onClickHandler
  }
})

afterEach(() => {
  store.dispatch(clearUser())
})

const setup = () => {
  const component = render(<UserButton {...props} />)

  return {
    ...component
  }
}

test("Should display the users nickname if they have one and they are logged in", () => {
  store.dispatch(setUser(user))
  setup()
  expect(screen.getByText("Tom")).toBeInTheDocument()
})

test("Should display the users username if they don't have a nickname are logged in", () => {
  store.dispatch(setUser({ ...testUser, nickname: undefined }))
  setup()
  expect(screen.getByText("TomPlum42")).toBeInTheDocument()
})

test("Should display 'Login' when the user is not logged in", () => {
  setup()
  expect(screen.getByText("Login")).toBeInTheDocument()
})

test("Clicking the button should show the dropdown menu if they are logged in", async () => {
  store.dispatch(setUser(user))
  setup()

  fireEvent.click(screen.getByText("Tom"))

  expect(await screen.findByText("Profile")).toBeInTheDocument()
  expect(await screen.findByText("Stats")).toBeInTheDocument()
  expect(await screen.findByText("Logout")).toBeInTheDocument()

  expect(onClickHandler).not.toHaveBeenCalled()
})

test("Clicking the button should call the onClick event handler", () => {
  setup()

  fireEvent.click(screen.getByText("Login"))

  expect(screen.queryByText("Profile")).not.toBeInTheDocument()
  expect(screen.queryByText("Stats")).not.toBeInTheDocument()
  expect(screen.queryByText("Logout")).not.toBeInTheDocument()
  expect(onClickHandler).toHaveBeenCalled()
})

test("Clicking the logout button should clear the user from the redux store", async () => {
  store.dispatch(setUser(user))
  setup()

  //Click the button to show the dropdown menu
  fireEvent.click(screen.getByText("Tom"))

  //Click logout
  fireEvent.click(await screen.findByText("Logout"))

  expect(store.getState().user).toStrictEqual({ user: undefined })
})

//TODO: Not working for some reason.
test.skip("Clicking the high-scores option should route to the high-scores page", async () => {
  store.dispatch(setUser(user))
  const { history } = setup()

  //Click the button to show the dropdown menu
  fireEvent.click(screen.getByText("Tom"))

  //Click high-scores
  fireEvent.click(await screen.findByText("Highscores"))

  expect(history.location.pathname).toBe("/high-scores")
})
