import { fireEvent, render, screen } from "@testing-library/react"
import TopicSelector from "../../../../../components/layout/wizard/form/TopicSelector"
import Topic from "../../../../../domain/Topic"

const onSelectHandler = jest.fn()

test("Should default selected topic to the one passed in", () => {
  const component = render(<TopicSelector topic={Topic.BASICS} onSelect={onSelectHandler} />)
  expect(component.getByText("Basics")).toBeInTheDocument()
})

test("Changing the selected topic should call the onSelect event handler with the topic", () => {
  const component = render(<TopicSelector topic={Topic.BASICS} onSelect={onSelectHandler} />)
  fireEvent.click(component.getByText("Basics"))
  fireEvent.click(screen.getByText("Numbers & Counting"))
  expect(onSelectHandler).toHaveBeenLastCalledWith(Topic.NUMBERS)
})

test("Should disabled the toggle when passing the prop as true", () => {
  const component = render(<TopicSelector topic={Topic.BASICS} onSelect={onSelectHandler} disabled={true} />)
  expect(component.getByTestId("topic-selector-toggle")).toBeDisabled()
})
