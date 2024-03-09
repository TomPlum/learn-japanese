import { fireEvent, render } from "@testing-library/react"
import TopicDropdownOption  from "./TopicDropdownOption"
import Topic from "types/Topic"

const onClickHandler = vi.fn()

test("Clicking on the option should call the onClick event handler", () => {
  const component = render(<TopicDropdownOption type={Topic.KANA} selected={Topic.KANA} onClick={onClickHandler} />)
  fireEvent.click(component.getByText("Hiragana & Katakana"))
  expect(onClickHandler).toHaveBeenCalled()
})

test("The option should be active if the selected prop matches the options type", () => {
  const { container } = render(<TopicDropdownOption type={Topic.KANA} selected={Topic.KANA} onClick={onClickHandler} />)
  expect(container.firstChild).toHaveClass("active")
})

test("The option should not be active if the selected prop doesn't match the options type", () => {
  const { container } = render(
    <TopicDropdownOption type={Topic.KANA} selected={Topic.NUMBERS} onClick={onClickHandler} />
  )
  expect(container.firstChild).not.toHaveClass("active")
})
