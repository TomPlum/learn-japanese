import { fireEvent, render, screen } from "@testing-library/react"
import RevealableText, { RevealableTextProps } from "../../../components/ui/RevealableText"

let props: RevealableTextProps

const onRevealHandler = jest.fn()

beforeEach(() => {
  props = {
    value: "Secret Text",
    disabled: false,
    className: "secretClass",
    onReveal: onRevealHandler
  }
})

const setup = () => {
  const component = render(<RevealableText {...props} />)
  return {
    reveal: component.getByText("Click to Reveal"),
    secret: component.getByText("Secret Text"),
    ...component
  }
}

test("Should render the secret text by default with the blur class", () => {
  const { secret } = setup()
  expect(secret).toHaveClass("blur")
})

test("Revealing the secret should add the unblur class to the secret", () => {
  const { reveal, secret } = setup()
  fireEvent.click(reveal)
  expect(secret).toHaveClass("unblur")
})

test("Passing the disabled prop as try should add the plain class to the secret text", () => {
  props.disabled = true
  render(<RevealableText {...props} />)
  expect(screen.getByText("Secret Text")).toHaveClass("plain")
})

test("Clicking the reveal text should call the onReveal event handler", () => {
  const { reveal } = setup()
  fireEvent.click(reveal)
  expect(onRevealHandler).toHaveBeenCalled()
})

test("Clicking the reveal text should stop rendering the reveal text", () => {
  const { reveal } = setup()
  fireEvent.click(reveal)
  expect(screen.queryByText("Click to Reveal")).not.toBeInTheDocument()
})

test("Passing is disabled as true should not render the reveal text", () => {
  props.disabled = true
  render(<RevealableText {...props} />)
  expect(screen.queryByText("Click to Reveal")).not.toBeInTheDocument()
})

test("Clicking the reveal text should remove the blur class from the secret text", () => {
  const { reveal } = setup()
  fireEvent.click(reveal)
  expect(screen.queryByText("Click to Reveal")).not.toBeInTheDocument()
})
