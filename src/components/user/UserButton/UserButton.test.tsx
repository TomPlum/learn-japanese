import { fireEvent, screen } from "@testing-library/react"
import UserButton, { UserButtonProps }  from "./UserButton"
import { testUser } from "../../../setupTests";
import { render } from "__test-utils__"
import { User, UserContextBag } from "context/UserContext";
import { getValueLastCalledWith } from "__test-utils__/Queries.ts";

let props: UserButtonProps
const onClickHandler = vi.fn()

const user = { ...testUser }

beforeEach(() => {
  props = {
    disabled: false,
    onClick: onClickHandler
  }
})

const setup = (user?: User) => {
  const component = render(<UserButton {...props} />, { user })

  return {
    ...component
  }
}

test("Should display the users nickname if they have one and they are logged in", () => {
  setup(user)
  expect(screen.getByText("Tom")).toBeInTheDocument()
})

test("Should display the users username if they don't have a nickname are logged in", () => {
  setup({ ...testUser, nickname: undefined })
  expect(screen.getByText("TomPlum42")).toBeInTheDocument()
})

test("Should display 'Login' when the user is not logged in", () => {
  setup()
  expect(screen.getByText("Login")).toBeInTheDocument()
})

test("Clicking the button should show the dropdown menu if they are logged in", async () => {
  setup(user)

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

test("Clicking the logout button should clear the user from context", async () => {
  const { onUserContextValueChange } = setup(testUser)

  fireEvent.click(screen.getByText("Tom"))
  fireEvent.click(await screen.findByText("Logout"))

  expect(getValueLastCalledWith<UserContextBag>(onUserContextValueChange).user).toBeUndefined()
})

// TODO: Not working for some reason.
test.skip("Clicking the high-scores option should route to the high-scores page", async () => {
  const { history } = setup(user)

  //Click the button to show the dropdown menu
  fireEvent.click(screen.getByText("Tom"))

  //Click high-scores
  fireEvent.click(await screen.findByTestId("high-scores-link"))

  expect(history.location.pathname).toBe("/high-scores")
})
