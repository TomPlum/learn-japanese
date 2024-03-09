import { fireEvent, render, screen } from "@testing-library/react"
import DataSettingsMenu, { DataSettingsMenuProps }  from "./DataSettingsMenu"
import KanaSettings from "types/session/settings/data/KanaSettings"
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"

let props: DataSettingsMenuProps<KanaSettings>

const onResetHandler = vi.fn()
const onQuitHandler = vi.fn()
const onConfirmHandler = vi.fn()
const isValidHandler = vi.fn()

beforeEach(() => {
  props = {
    title: "Kana",
    icon: faAddressCard,
    isValid: isValidHandler,
    onQuit: onQuitHandler,
    onReset: onResetHandler,
    onConfirm: onConfirmHandler
  }
})

const setup = () => {
  const component = render(
    <DataSettingsMenu {...props}>
      <p>The Children</p>
    </DataSettingsMenu>
  )
  return {
    back: component.getByText("Back"),
    reset: component.getByText("Reset"),
    confirm: component.getByText("Confirm")
  }
}

test("Should render title", () => {
  setup()
  expect(screen.getByText("Kana Settings")).toBeInTheDocument()
})

test("Should render children", () => {
  setup()
  expect(screen.getByText("The Children")).toBeInTheDocument()
})

test("Should call the onQuit event handler when clicking the back button", () => {
  const { back } = setup()
  fireEvent.click(back)
  expect(onQuitHandler).toHaveBeenCalled()
})

test("Should call the onReset event handler when clicking the reset button", () => {
  const { reset } = setup()
  fireEvent.click(reset)
  expect(onResetHandler).toHaveBeenCalled()
})

test("Should call the onConfirm event handler when clicking the confirm button", () => {
  isValidHandler.mockReturnValueOnce(true)
  const { confirm } = setup()
  fireEvent.click(confirm)
  expect(onConfirmHandler).toHaveBeenCalled()
})

test("Should disable the confirm button when the isValid function returns false", () => {
  isValidHandler.mockReturnValueOnce(false)
  const { confirm } = setup()
  expect(confirm.parentElement).toBeDisabled()
})

test("Should enable the confirm button when the isValid function is not bound", () => {
  props.isValid = undefined
  const { confirm } = setup()
  expect(confirm.parentElement).not.toBeDisabled()
})
