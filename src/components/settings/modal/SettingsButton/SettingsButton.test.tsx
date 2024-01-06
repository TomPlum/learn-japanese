import { render } from "__test-utils__"
import SettingsButton, { SettingsButtonProps }  from "./SettingsButton"
import { faApple } from "@fortawesome/free-brands-svg-icons"
import { fireEvent } from "@testing-library/react"

const onClickHandler = vi.fn()

let props: SettingsButtonProps

beforeEach(() => {
  props = {
    name: "Test Button",
    icon: { id: "test-button-icon", icon: faApple },
    className: "testClass",
    onClick: onClickHandler,
    id: "test-button",
    confirm: undefined
  }
})

test("Clicking the button should call the onClick event handler", () => {
  const component = render(<SettingsButton {...props} />)
  fireEvent.click(component.getByText("Test Button"))
  expect(onClickHandler).toHaveBeenCalled()
})
