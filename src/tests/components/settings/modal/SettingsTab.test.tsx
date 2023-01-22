import SettingsTab, { SettingsTabProps } from "../../../../components/settings/modal/SettingsTab"
import { faApple } from "@fortawesome/free-brands-svg-icons"
import { SettingsType } from "../../../../components/settings/modal/SettingsModal"
import { fireEvent, render } from "@testing-library/react"

const onClickHandler = jest.fn()

let props: SettingsTabProps

beforeEach(() => {
  props = {
    title: "Test Play",
    selected: false,
    icon: faApple,
    type: SettingsType.PLAY,
    onClick: onClickHandler
  }
})

test("It should render the component with the given title", () => {
  const component = render(<SettingsTab {...props} />)
  expect(component.getByTitle("Test Play")).toBeInTheDocument()
})

test("It should render the component with the selected class if the prop is passed as true", () => {
  props.selected = true
  const { container } = render(<SettingsTab {...props} />)
  expect(container.firstChild).toHaveClass("selected")
})

test("It should render the component without the selected class if the prop is passed as false", () => {
  props.selected = false
  const { container } = render(<SettingsTab {...props} />)
  expect(container.firstChild).not.toHaveClass("selected")
})

test("It should call the onClick event handler with its settings type when clicking the component", () => {
  const { container } = render(<SettingsTab {...props} />)
  fireEvent.click(container.firstChild!)
  expect(onClickHandler).toHaveBeenCalledWith(SettingsType.PLAY)
})
