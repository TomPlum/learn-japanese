import { fireEvent, render } from "@testing-library/react"
import TopicSelectionStep from "../../../../../components/layout/wizard/steps/TopicSelectionStep"
import Topic from "../../../../../domain/Topic"

const onSelectHandler = vi.fn()

test("Should render all the topics", () => {
  const component = render(<TopicSelectionStep topic={Topic.KANA} onSelect={onSelectHandler} />)
  Topic.ALL.forEach((topic) => {
    expect(component.getByText(topic.name)).toBeInTheDocument()
  })
})

test("Should call the onSelect event handler when clicking a topic", () => {
  const component = render(<TopicSelectionStep topic={Topic.KANA} onSelect={onSelectHandler} />)
  fireEvent.click(component.getByText("Days & Months"))
  expect(onSelectHandler).toHaveBeenLastCalledWith(Topic.CALENDAR)
})
