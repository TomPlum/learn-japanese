import { fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react"
import VolumeController from "../../../components/ui/VolumeController"

const onVolumeChangeHandler = jest.fn()

const setup = () => {
  const component = render(<VolumeController onVolumeChange={onVolumeChangeHandler} />)
  return {
    button: component.getByTitle("Volume"),
    ...component
  }
}

test("Clicking the button while the controller is un-muted should mute it", () => {
  const { button } = setup()
  fireEvent.click(button)
  expect(onVolumeChangeHandler).toHaveBeenCalledWith(0)
})

test("Clicking the button while the controller is muted should un-mute it", () => {
  const { button } = setup()
  fireEvent.click(button)
  fireEvent.click(button)
  expect(onVolumeChangeHandler).toHaveBeenLastCalledWith(0.7)
})

test("Hovering over the button should render the volume slider", async () => {
  const { button } = setup()
  fireEvent.mouseEnter(button)
  expect(await screen.findByTestId("volume-slider")).toBeInTheDocument()
})

test("Hovering over the volume slider should not un-render the overlay", async () => {
  const { button } = setup()
  fireEvent.mouseEnter(button)
  const slider = await screen.findByTestId("volume-slider")
  fireEvent.mouseEnter(slider)
  expect(slider).toBeInTheDocument()
})

test("Removing the mouse cursor from the button or the overlay should un-render the overlay", async () => {
  const { button } = setup()

  fireEvent.mouseEnter(button)
  const slider = await screen.findByTestId("volume-slider")
  expect(slider).toBeInTheDocument()

  fireEvent.mouseLeave(button)
  await waitForElementToBeRemoved(slider)
})

test("Change the value of the volume slider should call the onVolumeChange event handler", async () => {
  const { button } = setup()

  //Bring up the slider overlay
  fireEvent.mouseEnter(button)
  const slider = await screen.findByTestId("volume-slider")
  expect(slider).toBeInTheDocument()

  //Change the value
  fireEvent.change(slider, { target: { value: 20 } })
  expect(onVolumeChangeHandler).toHaveBeenLastCalledWith(0.2)
})
