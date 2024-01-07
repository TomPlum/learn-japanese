import AnonymousDashboardLayout  from "./AnonymousDashboardLayout"
import { render } from "__test-utils__"
import { fireEvent } from "@testing-library/react"

const mockGetHideUserProfileHint = vi.fn()
const mockSetHideUserProfileHint = vi.fn()
vi.mock("service/LocalStorageService", () => ({
  default: function () {
    return {
      getHideUserProfileHint: mockGetHideUserProfileHint,
      setHideUserProfileHint: mockSetHideUserProfileHint
    }
  }
}))

test("It should render the profile card if the local storage does not contain a preference", () => {
  mockGetHideUserProfileHint.mockReturnValueOnce(false)
  const { component } = render(<AnonymousDashboardLayout />)
  expect(component.getByTestId("profile-card")).toBeInTheDocument()
})

test("It should not render the profile card if the local storage contains a preference to hide", () => {
  mockGetHideUserProfileHint.mockReturnValueOnce(true)
  const { component } = render(<AnonymousDashboardLayout />)
  expect(component.queryByTestId("profile-card")).not.toBeInTheDocument()
})

test("Clicking the dismiss button on the profile card should stop rendering the profile card", () => {
  mockGetHideUserProfileHint.mockReturnValueOnce(false)

  // Should start by rendering it
  const { component } = render(<AnonymousDashboardLayout />)
  expect(component.getByTestId("profile-card")).toBeInTheDocument()

  // Should stop rendering it after dismissing
  fireEvent.click(component.getByTestId("dismiss-profile-card"))
  expect(component.queryByTestId("profile-card")).not.toBeInTheDocument()
  expect(mockSetHideUserProfileHint).toHaveBeenCalled()
})
