import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import UserSearchField  from "./UserSearchField"
import userEvent from "@testing-library/user-event"

const mockGetPublicUsers = vi.fn()
vi.mock("service/UserService", () => ({
  default: function () {
    return { getPublicUsers: mockGetPublicUsers }
  }
}))

const onSelectHandler = vi.fn()

test("Should start with an empty value in the field", () => {
  const component = render(<UserSearchField disabled={false} onSelect={onSelectHandler} />)
  const searchField = component.getByTestId("user-search-field")
  expect(searchField).toHaveValue("")
})

test("Should render the public users when returned", async () => {
  mockGetPublicUsers.mockResolvedValueOnce(["TomPlum", "WillPlum"])
  const component = render(<UserSearchField disabled={false} onSelect={onSelectHandler} />)

  // TODO: Console here fix here because of uncontrolled vs controller component
  userEvent.type(component.getByTestId("user-search-field"), "Plum")

  expect(await component.findByText("TomPlum")).toBeInTheDocument()
  expect(component.getByText("WillPlum")).toBeInTheDocument()
})

test("Selecting a user should call the onSelect handler with the full username", async () => {
  mockGetPublicUsers.mockResolvedValueOnce(["TomPlum", "WillPlum"])
  const component = render(<UserSearchField disabled={false} onSelect={onSelectHandler} />)

  userEvent.type(component.getByTestId("user-search-field"), "Plum")

  fireEvent.click(await component.findByText("TomPlum"))
  expect(onSelectHandler).toHaveBeenCalledWith("TomPlum")
})

test("Selecting a user should set the value of the search field to undefined", async () => {
  mockGetPublicUsers.mockResolvedValueOnce(["TomPlum", "Test"])
  const component = render(<UserSearchField disabled={false} onSelect={onSelectHandler} />)

  userEvent.type(component.getByTestId("user-search-field"), "Plum")

  fireEvent.click(await component.findByText("TomPlum"))
  expect(screen.queryByText("TomPlum")).not.toBeInTheDocument()
  await waitFor(() => expect(component.getByTestId("user-search-field")).toHaveValue(""))
})

test("Should show no results when none are returned", async () => {
  mockGetPublicUsers.mockResolvedValueOnce([])
  const component = render(<UserSearchField disabled={false} onSelect={onSelectHandler} />)

  await userEvent.type(component.getByTestId("user-search-field"), "Tom")

  await waitFor(() => expect(component.getByText("No results.")).toBeInTheDocument())
})

test.todo("Finish coverage for existing behaviour and fix username select")

// TODO: Add coverage for new UserService function and HighScoresPage
